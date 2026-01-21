/**
 * FICHA 475854
 * CASO DE TESTE 1
 * Problema Detectado:
 * OrcaWeb não está validando telefone dos clientes.
 * Ambiente: 10.10.11.65
 * BANCO DE DADOS: Fermacom_Diego
 * Versão: Branch 475854_Jeremias_ValidarTelefoneCliente_Clube_da_Casa_Silca
 *
 * RESULTADO ESPERADO:
 * Não será mais possível cadastrar telefone ou celular inválidos no cadastro do cliente.
 * Caso exista telefone inválido, o sistema deve impedir a finalização e exibir mensagem.
 * 
 * RESULTADO OBTIDO:
 * A MENSAGEM DE ERRO FOI APRESENTADA CORRETAMENTE:
 * ('O campo "Telefone" é inválido.');
 * ('O campo "Celular" é inválido.');
 */
/* =========================
   FUNÇÕES AUXILIARES
   ========================= */


import { selectors,test,expect } from '@playwright/test';

/* test('CASO DE TESTE 1', async ({ page }) => {
  await selectors.setTestIdAttribute("id");
  await page.goto('http://10.10.11.98:9999/Login');
  await page.getByTestId('Login_Usuario').click();
  await page.getByTestId('Login_Usuario').fill('vendas01');
  await page.getByTestId('Login_Usuario').press('Tab');
  await page.getByTestId('Login_Senha').fill('m');
  await page.getByTestId('Login_BotaoEntrar').click();
  await page.getByTestId('abrirMenuPrincipal').click({force: true});
  await page.getByTestId('MenuPrincipal_OrcamentoVenda').click();
  await page.getByTestId('senha-vendedor-input').fill('1');
  await page.getByTestId('senha-vendedor-input').press('Enter');
  await page.getByTestId('iniciar-orcamento-botao-entrar').click();
  await page.getByTestId('PesquisaCliente_CampoNome').click();
  await page.getByTestId('PesquisaCliente_CampoNome').fill('thiago jose ferreira');
  await page.getByTestId('PesquisaCliente_BarraFerramenta_BotaoPesquisar').click();
  await page.getByTestId('PesquisarCliente_Coluna_Nome_0').click();
  await page.getByRole('textbox', { name: '(99) 99999-' }).first().click();
  await page.getByRole('textbox', { name: '(99) 99999-' }).first().fill('(33) 9987-20022');
  await page.getByRole('textbox', { name: '(99) 99999-' }).first().press('Tab');
  await page.getByRole('textbox', { name: '(99) 99999-' }).nth(1).fill('(33) 9987-20022');
  await page.getByTestId('AbasPesquisaClienteContainer_BotaoSalvar').click();
  await expect(page.getByTestId('toast-container')).toContainText('×Registro atualizado com sucesso!');
//Neste ponto o teste valida que a mensagem de sucesso foi apresentada corretamente, validando que quando -
//usuario manipula os dois campos o sistema valida ambos e salva corretamente quando ambos estão corretos.
//Fim. 

});*/

test('CASO DE TESTE 2', async ({ page }) => {
  await selectors.setTestIdAttribute("id");
  await page.goto('http://10.10.11.98:9999/Login');
  await page.getByTestId('Login_Usuario').click();
  await page.getByTestId('Login_Usuario').fill('vendas01');
  await page.getByTestId('Login_Usuario').press('Tab');
  await page.getByTestId('Login_Senha').fill('m');
  await page.getByTestId('Login_BotaoEntrar').click();
  await page.getByTestId('abrirMenuPrincipal').click({force: true});
  await page.getByTestId('MenuPrincipal_OrcamentoVenda').click();
  await page.getByTestId('senha-vendedor-input').fill('1');
  await page.getByTestId('senha-vendedor-input').press('Enter');
  await page.getByTestId('iniciar-orcamento-botao-entrar').click();
  await page.getByTestId('PesquisaCliente_CampoNome').click();
  await page.getByTestId('PesquisaCliente_CampoNome').fill('thiago jose ferreira');
  await page.getByTestId('PesquisaCliente_BarraFerramenta_BotaoPesquisar').click();
  await page.getByTestId('PesquisarCliente_Coluna_Nome_0').click();
  await page.getByRole('textbox', { name: '(99) 99999-' }).first().click();
  await page.getByRole('textbox', { name: '(99) 99999-' }).first().click();
  await page.getByRole('textbox', { name: '(99) 99999-' }).first().click();
  await page.getByRole('textbox', { name: '(99) 99999-' }).first().press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: '(99) 99999-' }).first().fill('');
  await page.getByRole('textbox', { name: '(99) 99999-' }).first().press('Tab');
  await page.getByRole('textbox', { name: '(99) 99999-' }).nth(1).fill('');
  await page.getByRole('textbox', { name: '(99) 99999-' }).nth(1).press('Tab');
  await page.getByTestId('AbasPesquisaClienteContainer_BotaoSalvar').click();
  await expect(page.getByTestId('toast-container')).toContainText('×Registro atualizado com sucesso!');
//Neste ponto o teste valida que a mensagem de sucesso foi apresentada corretamente, validando que quando -
//usuario limpa os dois campos o sistema valida ambos e salva corretamente, pois ambos são campos opcionais quando não tem parametro configurado.
//Fim.
await page.pause(); // ⬅️ PAUSA NO LUGAR CERTO

});
