# 1. Introdução 
Este documento fornece uma visão arquitetural abrangente do aplicativo Xepa, usando diversas visões de arquitetura para representar diferentes aspectos do sistema. O objetivo deste documento é capturar e comunicar as decisões arquiteturais significativas que foram tomadas em relação ao sistema, e destinado a captar e transmitir as decisões arquiteturais significativas.

# 2. Escopo
Este Documento de Arquitetura de Software se aplica ao aplicativo Xepa que será desenvolvido no contexto da disciplina Métodos e Ferramentas de Software, com o Professor Otávio no 2o semestre de 2017, no curso Engenharia de Software na Universidade Federal de Goiás.
  
# 3. Representação Arquitetural 
Este documento apresenta a arquitetura como uma série de visões: visão de caso de uso, visão de contexto, visão lógica, visão de processo e visão de implantação.

# 4. Metas e Restrições da Arquitetura
Existem alguns requisitos fundamentais e as limitações do sistema que têm uma influência significativa sobre a arquitetura. São eles:
- Armazenamento de dados para o usuário.
- Não haverá conexão com a internet.
- Não haverá compartilhamento de dados entre usuários.\

# 5. Visões de Casos de Uso
  Uma descrição da visão de casos de uso da arquitetura de software. A Visão de Casos de Uso é uma entrada importante para a seleção do conjunto de cenários e/ou casos de uso que são o foco de uma iteração. Ela descreve o conjunto de cenários e/ou os casos de uso que representam alguma funcionalidade central e significativa. Também descreve o conjunto de cenários e/ou casos de uso que possuem cobertura arquitetural substancial (que experimenta vários elementos de arquitetura) ou que enfatizam ou ilustram um determinado ponto complexo da arquitetura.

<b>Caso de uso Geral</b>  
![alt](https://github.com/Caua539/chepa/blob/master/docs/img/Casos_De_Uso_Xepa.png)

# 6. Visão Lógica
  Descreve as classes mais importantes, sua organização em pacotes e subsistemas de serviço, e a organização desses subsistemas em camadas. Descreve também as realizações de caso de uso mais importantes como, por exemplo, os aspectos dinâmicos da arquitetura.  

<b>Diagrama de Camadas</b>  
![alt](https://www.logicroom.co/react-native-architecture-explained/images/3_image.png)  
*Fonte: https://www.logicroom.co/react-native-architecture-explained/*
  
<b>Diagrama de Sequência</b>  
- Dispensa  
![alt](https://github.com/Caua539/chepa/blob/master/docs/img/Sequence_Diagram_Dispensa.png)    
    
- Listagem  
![alt](https://github.com/Caua539/chepa/blob/master/docs/img/Sequence_Diagram_Lista.png)   
  
- Criação da Lista  

![alt](https://github.com/Caua539/chepa/blob/master/docs/img/Sequence_Diagram_CriaLista.png)  

# 7. Qualidade  
A arquitetura de software suporta os requisitos de qualidade.
- O Xepa deve possuir uma vida útil significativa e, portanto, deve oferecer mecanismos para a sua evolução.  
- O Xepa deve ser "fácil de usar e aprender".  

