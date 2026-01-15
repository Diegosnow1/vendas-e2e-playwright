import { test,expect } from '@playwright/test';
/**
 * FICHA 475854
 * CASO DE TESTE 1
 * Problema Detectado:
 * OrcaWeb não está validando telefone dos clientes.
 * Ambiente 10.10.11.65
 * BANCO DE DADOS:Comfergil_Diego
 * Versão: Branch: 475854_Jeremias_ValidarTelefoneCliente_Clube_da_Casa_Silca
 * RESULTADO ESPERADO APÓS CORREÇÃO DO BUG:
Não será mais possível cadastrar telefone ou celular inválidos no cadastro do cliente.
Caso exista algum telefone inválido já salvo no banco de dados, o sistema não permitirá finalizar o orçamento e exibirá uma mensagem solicitando a correção do cadastro do cliente
 */


test('CASO DE TESTE 1', async ({ page }) => {
  await page.goto('http://10.10.11.65:9999/Login');
  await page.locator('#Login_Usuario').click();
  await page.locator('#Login_Usuario').fill('VENDAS01');
  await page.locator('#Login_Senha').click();
  await page.locator('#Login_Senha').fill('m');
  await page.getByRole('button', { name: 'Entrar' }).click();
  await page.locator('#abrirMenuPrincipal').click();
  await page.getByRole('link', { name: 'Venda', exact: true }).click();
  await page.locator('#senha-vendedor-input').click();
  await page.locator('#senha-vendedor-input').fill('1');
  await page.locator('#senha-vendedor-input').press('Enter');
  await page.getByRole('button', { name: 'Entrar' }).click();
  await page.locator('#PesquisaCliente_CpfCnpj').click();
  await page.locator('#PesquisaCliente_CpfCnpj').fill('039.746.201-84_');
  await page.getByRole('button', { name: 'Pesquisar' }).click();
  await page.getByText('Thiago Jose Ferreira').click();
// Aguarda página carregar
  await page.waitForLoadState('networkidle');

// Aguarda botão Salvar
const botaoSalvar = page.locator('#AbasPesquisaClienteContainer_BotaoSalvar');
  await botaoSalvar.waitFor({ state: 'visible' });

  

// Clica
  await botaoSalvar.click();

// Valida erro
  await expect(page.locator('body')).toContainText('O campo "Telefone" é inválido.');
  await expect(page.locator('body')).toContainText('O campo "Celular" é inválido.');

  await page.pause(); // ⬅️ PAUSA NO LUGAR CERTO

  }); 
   

  /**
 * FICHA 475854
 * CASO DE TESTE 1
 * Problema Detectado:
 * O sistema não está calculando corretamente o valor para gerar a base de cálculo e valor da comissão de indicadores
 * Ambiente 10.10.11.65
 * BANCO DE DADOS:Comfergil_Diego
 * Versão: 5.84.5
 * RESULTADO ESPERADO APÓS CORREÇÃO DO BUG:
 * Base de Cálculo: R$ 106,72
 * Valor da Comissão: R$ 1,07
 */

 test('CASO DE TESTE 2', async ({ page }) => {
  await page.goto('http://10.10.11.98:9999/Login');
  await page.locator('#Login_Usuario').click();
  await page.locator('#Login_Usuario').fill('VENDAS01');
  await page.locator('#Login_Senha').click();
  await page.locator('#Login_Senha').fill('m');
  await page.getByRole('button', { name: 'Entrar' }).click();
  await page.locator('#abrirMenuPrincipal').click();
  await page.getByRole('link', { name: 'Venda', exact: true }).click();
  await page.locator('#senha-vendedor-input').click();
  await page.locator('#senha-vendedor-input').fill('1');
  await page.locator('#senha-vendedor-input').press('Enter');
  await page.getByRole('button', { name: 'Entrar' }).click();
  await page.locator('#PesquisaCliente_CpfCnpj').click();
  await page.locator('#PesquisaCliente_CpfCnpj').fill('039.746.201-84_');
  await page.getByRole('button', { name: 'Pesquisar' }).click();
  await page.getByText('Thiago Jose Ferreira').click();

// Aguarda página carregar
  await page.waitForLoadState('networkidle');

// Aguarda botão Salvar
const botaoSalvar = page.locator('#AbasPesquisaClienteContainer_BotaoSalvar');
  await botaoSalvar.waitFor({ state: 'visible' });

// Clica
  await botaoSalvar.click();

// Valida erro, 
  await expect(page.locator('body')).toContainText('O campo "Telefone" é inválido.');
  await expect(page.locator('body')).toContainText('O campo "Celular" é inválido.');


  await page.pause(); // ⬅️ PAUSA NO LUGAR CERTO

  });
  