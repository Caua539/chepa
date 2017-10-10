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
    <th>18. Adicionar itens à dispensa</th>
  </tr>
  <tr align="left">
    <th>Usuário deve ser capaz de adicionar os itens de uma lista de compras fechada à sua dispensa.</th>
  </tr>  
</table>  

<table>
  <tr align="left">
    <th>19. Retirar itens da dispensa</th>
  </tr>
  <tr align="left">
    <th>Usuário deve ser capaz de marcar como usados intens que estão na dispensa, podendo selecionar uma ou todas as unidades disponíveis</th>
  </tr>  
</table>  

<table>
  <tr align="left">
    <th>20. Criar lista conforme dispensa</th>
  </tr>
  <tr align="left">
    <th>Na criação de uma lista, o sistema deve disponibilizar uma tela listando os itens faltantes e presentes na dispensa, no último caso, apresentar quantas unidades de cada item está na dispensa. Usuário deve ser capaz de criar uma lista de compras a partir de uma opção selecionar todos os itens, apenas alguns ou pular esa etapa.</th>
  </tr>  
</table>  

# 3. Casos de Uso
## 3.1. Diagrama  

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Casos_De_Uso_Xepa.png)

## 3.2. Detalhamento  
  
### [001]Criar Lista de Compras  
#### Descrição do Caso de Uso  
O usuário utiliza o app para iniciar a criação de uma lista de compras.
#### Atores  
Usuário
#### Pré-condições  
App na tela inicial.  
#### Fluxo de Eventos
##### Fluxo Básico  
1) Usuário clica no botão 'Minhas listas' na tela inicial do app
2) Usuário clica no botão 'Criar Nova Lista de Compras'
3) Usuário fornece um nome para a lista no campo 'Nome da Lista'
4) Usuário fornece um valor, em reais, para ser o orçamento da lista
5) Usuário fornece um nome para o supermercado que marcará essa lista
6) Usuário clica no '+' na parte debaixo da tela para adicionar um item para a lista
7) Usuário fornece um nome para o item
8) Usuário fornece uma quantidade daquele item para a lista
9) Usuário fornece uma prioridade para o item, dentre 'Baixa, Normal e Alta'
10) Usuário clica no símbolo de completo para finalizar a adição do item
11) Usuário clica no botão 'As Compras!' para finalizar a criação da lista de compras e encerrar o caso de uso
##### Fluxo Alternativo 
A) Criar lista a partir de dispensa;
  6A) Caso de Uso: Criar lista de compras a partir de dispensa.

B) Escolher supermercado de uma lista ao invés de criar um novo
  5B) Usuário clica na seta para baixo no campo supermercado e escolhe um supermercado da lista

C) Escolher item de uma lista ao invés de criar novo
  7C) Usuário clica na seta para baixo no campo 'Nome do Item' e escolhe um item da lista.
### Requerimentos Especiais  
Não aplicável.  
### Pós-Condições  
Foi criada uma lista de compras nova.  
  

  


# 4. Visão Geral do Sistema
![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Fluxograma_Xepa.png)

# 5. Protótipos

**Tela inicial**

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Prototipos/Prototipos_Img/Tela_Inicial.PNG)

**Menu inicial**

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Prototipos/Prototipos_Img/Menu_Principal.PNG)

**Dispensa**

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Prototipos/Prototipos_Img/Minha_Dispensa.PNG)

**Adiciona item dispensa**

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Prototipos/Prototipos_Img/Adiciona_Item_Dispensa.PNG)

**Exclui item dispensa**

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Prototipos/Prototipos_Img/Remover_Item_Dispensa.PNG)

**Criação da Lista**

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Prototipos/Prototipos_Img/Criar_Lista.png)

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Prototipos/Prototipos_Img/Criar_Lista_Mercado.png)

**Listagem das listas** 

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Prototipos/Prototipos_Img/Minhas_Listas.PNG)

**Visualizar lista específica** 

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Prototipos/Prototipos_Img/Visualizar_Lista_Especifica.PNG)

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Prototipos/Prototipos_Img/Lista_Visualizacao_Detalhes.png)

**Adicionar item lista** 

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Prototipos/Prototipos_Img/Adiciona_Item_Lista.PNG)

**Excluir item lista** 

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Prototipos/Prototipos_Img/Remover_Item_Lista.PNG)

**Fechar lista** 

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Prototipos/Prototipos_Img/Lista_Fechar.png)

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Prototipos/Prototipos_Img/Lista_Confirma_Fechamento.png)

**Reabrir lista** 

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Prototipos/Prototipos_Img/Lista_Reabrir.png)

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Prototipos/Prototipos_Img/Lista_Confirma_Reabertura.png)

**Excluir lista** 

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Prototipos/Prototipos_Img/Lista_Exclusao.png)

![Alt text](https://github.com/Caua539/chepa/blob/master/docs/img/Prototipos/Prototipos_Img/Lista_Confirma_Exclusao.png)  


# 6. Requisitos Futuros  

<table>
  <tr align="left">
    <th>1. Definir categorias de itens</th>
  </tr>
  <tr align="left">
    <th>Usuário deve ser capaz de categorizar os itens de compras entre categorias criadas por ele. O sistema deve permitir que o usuário crie novas categorias - que devem permanecer salvas, se não houver uma já criada que lhe agrade</th>
  </tr>  
</table>
