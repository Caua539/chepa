# Plano Geral do Projeto (PGP)

### 1. Sumário Executivo do Projeto
Este plano propõe conduzir as atividades de desenvolvimento da aplicação referente ao projeto CHEPA, assim como organizar as atividades e etapas necessárias para a realização do avanço e conclusão do projeto.

### 2. Visão Geral do Projeto
O projeto Chepa visa produzir uma aplicação, para dispositivos móveis, que permite o auxílio do gerenciamento de compras de supermercados.
Será esclarecido as seguintes etapas abaixo no decorrer do plano de projeto de software.

* Objetivos do Projeto
* Organizações Afetadas ou Impactadas
* Recursos Não Humanos e de Ambiente
* Restrições do Projeto
* Estimativas do Projeto
* Riscos do Projeto
* Recursos Humanos
* Requisitos
* Processo  
* Cronograma
* Ferramentas
* Ciclo de Vida do Projeto
* Aprovação

### 3. Objetivos do Projeto
O projeto visa auxiliar o usuário em suas compras o ajudando a organizar, monitorar e controlar todo o processo da compra desde o momento em que o usuário percebe a necessidade de algum item até o momento em que se encontra no mercado. Com o CHEPA, as compras serão mais faceis e efetivas.

### 4. Organizações Afetadas ou Impactadas
Não foram identificadas organizações com possíveis impactos.

### 5. Recursos Não Humanos e de Ambiente

<table>
  <tr>
    <th>Recurso</th>
    <th>Tipo</th> 
  </tr>
  <tr>
    <th>Conexão à internet</th>
    <th>Ferramenta</th> 
  </tr>
  <tr>
    <th>Computadores</th>
    <th>Ferramenta</th> 
  </tr>
  <tr>
    <th>Suíte Office</th>
    <th>Ferramenta</th> 
  </tr>
</table>

### 6. Restrições do Projeto

### 7. Estimativas do Projeto

### 8. Riscos do Projeto
* Mudança de Escopo e Objetivos
* Falta de Envolvimento Adequado dos Usuários
* Requisitos mal entendidos ou definidos
* Escopo e objetivos pouco claros ou equivocados
* Prazos e tempo para tarefas mal estimados
* Gerenciamento impróprio de mudanças
* Volatilidade nos Requisitos
* Custos mal estimados
* Falta de poderes para o gerenciamento de projetos
* Falha em Gerenciar as Expectativas Finais dos Usuários
* Planejamento inexistente ou inadequado
* Pessoal envolvido insuficiente ou inapropriado
* Falta de conhecimento ou competência dos envolvidos no projeto
* Falta de cooperação dos usuários
* Falta de metodologia efetiva em gerenciamento de projetos
* Controle pobre ou inexistente
* Adoção de novo método ou tecnologia
* Definição imprópria de papéis e responsabilidades
* Falta de Habilidade para o gerenciamento de projetos
* Assunto novo ou não familiar
* Usar nova metodologia de desenvolvimento em projetos importantes
* Falta de tecnologias maduras ou existentes
* Deficiência de execução em tempo real
* Versão Mobile incompatível com modelos de aparelhos

### 9. Recursos Humanos 
<table>
  <tr>
    <th>Recurso</th>
    <th>Papel</th> 
  </tr>
  <tr>
    <th>Affonso Antônio Giesel</th>
    <th>Analista</th> 
  </tr>
  <tr>
    <th>Ana Luísa Alves Burjack</th>
    <th>Desenvolvedora</th> 
  </tr>
  <tr>
    <th>Cauã Martins Pessoa</th>
    <th>Analista</th> 
  </tr>
  <tr>
    <th>João Vitor Santillo</th>
    <th>Desenvolvedor</th> 
  </tr>
  <tr>
    <th>Natália Marufuji Aoki</th>
    <th>Analista</th> 
  </tr>
</table>

### 10. Requisitos  
**Requisitos Fucionais**  
  
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
    <th>O usuário deve ser capaz de visualizar o nome de cada lista; o supermercado definido; o orçamento de cada lista de compra; o "Valor Diponível" - correspondente a quanto ainda há disponível do orçamento para a compra; o sub-total da compra; o valor unitário de cada item comprado e o produto do valor unitário com as quantidades de cada item</th>
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


### 11. Processo  
![Page](https://github.com/Caua539/chepa/blob/master/docs/img/Processo.PNG)
![Page](https://github.com/Caua539/chepa/blob/master/docs/img/PlanejamentoSprint.PNG)

### 12. Cronograma

### 13. Ferramentas
**Ferramenta de Comunicação**   
[Slack](https://trabalhoses20172.slack.com/)    

**Ferramenta para Gerência da Configuração**    
[Github](https://github.com/Caua539/chepa)  

**Ferramenta para Gerenciamento do Projeto**  
[Trello](https://trello.com/b/b9pFj8Gq)  

**Ferramenta para desenvolvimento**  
Atom  
React  

**Bibliotecas JS**  
wow.js  
jQuery  

**Bibliotecas CSS**  
font-awesome.css  
animate.css  
Bootstrap  

**Ferramentas para definição do processo**  
Bizagi  
  
### 14. Ciclo de Vida do Projeto
O projeto será iniciado com o modelo iterativo e incremental até a fase de aprovação dos requisitos, uma vez aprovado, será adotado a metodologia Scrum até o seu encerramento.

### 15. Aprovação
