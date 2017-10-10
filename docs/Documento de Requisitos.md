# 1. Objetivo do documento  
O propósito desse documento é reunir todos os requisitos e casos de uso e quaisquer outro(s) diagrama(s) relacionados. Este documento é resultado da atividade de Elicitação de Requisitos  
  
# 2. Requisitos funcionais 
  
<table>
  <tr align="left">
    <th>1. Criar Lista de Compras</th>
  </tr>
  <tr align="left">
    <th>O usuário deve ser capaz de criar e salvar uma lista de compras, definindo um nome para a lista</th>
  </tr>
</table>  

<table>
  <tr align="left">
    <th>2. Definir orçamento</th>
  </tr>
  <tr align="left">
    <th>O usuário deve ser capaz de definir um orçamento para uma lista durante a criação da lista</th>
  </tr>
</table>  

<table>
  <tr align="left">
    <th>3. Manter orçamento</th>
  </tr>
  <tr align="left">
    <th>O usuário deve ser capaz de editar o orçamento da lista de compras, após esta ter sido criada</th>
  </tr>  
</table>  
  
<table>
  <tr align="left">
    <th>4. Adicionar itens</th>
  </tr>
  <tr align="left">
    <th>O usuário deve ser capaz de adicionar itens à lista de compra</th>
  </tr>  
</table>  
  
<table>
  <tr align="left">
    <th>5. Pesquisar itens</th>
  </tr>
  <tr align="left">
    <th>O usuário deve ser capaz de pesquisar itens, a base de dados deve ser preenchida por itens adicionados anteriormente</th>
  </tr>  
</table>  
  
<table>
  <tr align="left">
    <th>6. Manter quantidades de itens de compras</th>
  </tr>
  <tr align="left">
    <th>O usuário deve ser capaz de definir e editar a quantidade de cada item adicionado à lista de compras</th>
  </tr>  
</table>  
  
<table>
  <tr align="left">
    <th>7. Manter prioridades de itens de compras</th>
  </tr>
  <tr align="left">
    <th>O usuário deve ser capaz de definir e editar a prioridade de cada item</th>
  </tr>  
</table>  
  
<table>
  <tr align="left">
    <th>8. Visualizar detalhes</th>
  </tr>
  <tr align="left">
    <th>O usuário deve ser capaz de visualizar o nome de cada lista; o supermercado definido; o orçamento de cada lista de compra; o "Valor Disponível" - correspondente a quanto ainda há disponível do orçamento para a compra; o sub-total da compra; o valor unitário de cada item comprado e o produto do valor unitário com as quantidades de cada item</th>
  </tr>  
</table>  
  
<table>
  <tr align="left">
    <th>9. Atualizar lista de compra</th>
  </tr>
  <tr align="left">
    <th>O usuário deve ser capaz de definir quantas unidades e o valor unitário de cada item comprado, o sistema deve calcular o valor final por item, apresentá-lo ao usuário e subtrair do "Valor Disponível"</th>
  </tr>  
</table>  

<table>
  <tr align="left">
    <th>10. Redefinir itens conforme orçamento</th>
  </tr>
  <tr align="left">
    <th>O sistema deve apresentar qual(is) item(ns) e/ou quantidade dos mesmos é indicado que o usuário retire do carrinho para se adequar ao orçamento pré-definido</th>
  </tr>  
</table>  

<table>
  <tr align="left">
    <th>11. Definir supermercado</th>
  </tr>
  <tr align="left">
    <th>O usuário deve ser capaz de definir o supermercado para cada lista de compras</th>
  </tr>  
</table>  

<table>
  <tr align="left">
    <th>12. Pesquisar supermercado</th>
  </tr>
  <tr align="left">
    <th>O usuário deve ser capaz de pesquisar supermercados, a base de dados deve ser preenchida por supermercados definidos anteriormente</th>
  </tr>  
</table>    

<table>
  <tr align="left">
    <th>13. Fechar lista de compras</th>
  </tr>
  <tr align="left">
    <th>O usuário deve ser capaz de fechar a lista de compras.</th>
  </tr>  
</table>  
  
<table>
  <tr align="left">
    <th>14. Reabrir lista de compras</th>
  </tr>
  <tr align="left">
    <th>O usuário deve ser capaz de reabrir listas de compras fechadas.</th>
  </tr>  
</table>
  
<table>
  <tr align="left">
    <th>15. Manter histórico de listas de compras</th>
  </tr>
  <tr align="left">
    <th>Usuário deve ser capaz de vizualisar listas de compras fechadas e abertas</th>
  </tr>  
</table>  

<table>
  <tr align="left">
    <th>16. Excluir listas de compras</th>
  </tr>
  <tr align="left">
    <th>Usuário deve ser capaz de excluir listas de compras</th>
  </tr>  
</table>  

<table>
  <tr align="left">
    <th>17. Copiar listas de compras</th>
  </tr>
  <tr align="left">
    <th>Usuário deve ser capaz de gerar uma cópia de lista de compras, a cópia deve conter: os itens; as quantidades previstas para compra; e o orçamento iguais aos da lista original</th>
  </tr>  
</table>  

<table>
  <tr align="left">
    <th>18. Definir categorias de itens</th>
  </tr>
  <tr align="left">
    <th>Usuário deve ser capaz de categorizar os itens de compras entre categorias pré-apresentadas e/ou criar novas categorias - que devem permanecer salvas</th>
  </tr>  
</table>  

<table>
  <tr align="left">
    <th>19. Adicionar itens à dispensa</th>
  </tr>
  <tr align="left">
    <th>Usuário deve ser capaz de adicionar os itens de uma lista de compras fechada à sua dispensa.</th>
  </tr>  
</table>  

<table>
  <tr align="left">
    <th>20. Retirar itens da dispensa</th>
  </tr>
  <tr align="left">
    <th>Usuário deve ser capaz de marcar como usados intens que estão na dispensa, podendo selecionar uma ou todas as unidades disponíveis</th>
  </tr>  
</table>  

<table>
  <tr align="left">
    <th>21. Criar lista conforme dispensa</th>
  </tr>
  <tr align="left">
    <th>Na criação de uma lista, o sistema deve disponibilizar uma tela listando os itens faltantes e presentes na dispensa, no último caso, apresentar quantas unidades de cada item está na dispensa. Usuário deve ser capaz de criar uma lista de compras a partir de uma opção selecionar todos os itens, apenas alguns ou pular esa etapa.</th>
  </tr>  
</table>  

# 3. Casos de Uso
## 3.1. Diagrama  

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Casos_De_Uso_Xepa.png)

## 3.2. Detalhamento  
  
### [001]Criar Lista de Compra  
#### Descrição do Caso de Uso  
O usuário utiliza o app para iniciar a criação de uma lista de compras.
#### Atores  
Usuário
#### Pré-condições  
App na tela inicial.  
#### Fluxo de Eventos
##### Fluxo Básico  
1) Usuário abre o aplicativo;
2) Aplicativo executa a tela inicial;
3) Usuário clica no botão 'Criar Nova Lista de Compra';
4) Aplicativo muda a tela para tela de criação de uma nova lista, onde existem outras opções;
##### Fluxo Alternativo 
Não aplicável.
### Requerimentos Especiais  
Não aplicável.  
### Pós-Condições  
Aplicativo iniciou o processo de criação do caso de uso;  
  
### [002]Definir Orçamento  
#### Descrição do Caso de Uso  
O usuário insere um valor em dinheiro para cadastrar a nova lista de compras;
#### Atores  
Usuário
#### Pré-condições  
App na tela de criação de nova lista de compras.
#### Fluxo de Eventos
##### Fluxo Básico  
1) Na tela de criação de lista de compra, usuário insere um valor maior que 0 no campo disponível;
2) Usuário clica no botão 'Próximo';
3) Aplicativo avança para tela de adição de itens;
##### Fluxo Alternativo 
1) Se o usuário clicar no botão 'Voltar' do sistema operacional, o caso de uso se encerra e volta para tela inicial.
### Requerimentos Especiais  
Não aplicável.  
### Pós-Condições  
É definido um orçamento em valor monetário;

### [003]Adicionar Itens 
#### Descrição do Caso de Uso  
O usuário adiciona itens a sua lista de compras que está criando ou editando;
#### Atores  
Usuário
#### Pré-condições  
App na tela de adição de novos itens.
#### Fluxo de Eventos
##### Fluxo Básico  
1) O usuário clica no botão '+' no centro da tela;
2) O aplicativo exibe um campo para digitar o nome do item, um campo para digitar a quantidade e um campo para a prioridade;
3) O usuário informa o nome do item;
4) O usuário digita quantos daquele item pretente comprar;
5) O usuário escolhe a prioridade do item, entre as opções: 'Alta, Média, Baixa';
6) O usuário clica no botão 'Adicionar' para concluir o caso de uso e adicionar o item à lista;
##### Fluxo Alternativo 
1. Se o usuário clicar no botão 'Voltar' do sistema operacional, o caso de uso se encerra e volta para a tela de definir orçamento;
ou
2. Se o usuário não informar quantidade e/ou prioridade para o item, os valores irão para o padrão de '1' e 'Média', respectivamente, automaticamente.
ou
3. O usuário clica no botão 'Próximo' para ir para tela de escolher supermercado;
### Requerimentos Especiais  
Não aplicável.  
### Pós-Condições  
Um item é adicionado a lista de compras;

### [004]Definir Supermercado  
#### Descrição do Caso de Uso  
O usuário escolhe um supermercado dos criados ou cria um novo supermercado que servirá como guia para os preços dos produtos;
#### Atores  
Usuário
#### Pré-condições  
App na tela de definição de um supermercado;
#### Fluxo de Eventos
##### Fluxo Básico  
1) Na tela de escolha de um supermecado, o usuário escolhe um supermercado de uma lista de mercados cadastrados;
2) O usuário clica no botão 'Próximo' para prosseguir para a próxima tela;
##### Fluxo Alternativo 
1) Se o usuário clicar no botão 'Voltar' do sistema operacional, o caso de uso se encerra e volta para a tela de adicionar itens;
ou
2) Se não houverem supermercados cadastrados ou se desejar cadastrar outro, o usuário no botão '+' na tela;
2.1) O usuário adiciona um nome para este supermercado num campo de texto;
2.2) O usuário clica no botão adicionar para adicionar aquele supermercado à lista;
### Requerimentos Especiais  
Não aplicável.  
### Pós-Condições  
É definido o supermercado onde serão feitas as compras;

  


# 4. Visão Geral do Sistema
![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Fluxograma_Xepa.png)

# 5. Protótipos

**Tela inicial**

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Prototipos/Tela%20inicial.png)

**Lista**

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Prototipos/Lista%20de%20hortifruti.png)


