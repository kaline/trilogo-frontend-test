# Desafio Front-End #

Nesse desafio, a tarefa é implementar um CRUD de Tickets, sendo listados e gerenciados em um quadro (Kanban).

Arquivos de layout:
https://www.figma.com/file/nfjOAtSRFGj9zXNBa18INs/Desafio-front?node-id=12%3A20

Um Ticket consiste de uma ocorrência de algum problema, com os seguintes campos:
* Descrição: Texto - uma descrição do problema
* Responsável: Select com nomes de usuários
* Tipo do ticket: Select com opções "Bem", "Predial" e "Procedimento"
* Imagem (Opcional)

O kanban deverá conter 4 colunas, que representarão os status do ticket: Aberto, Executado, Vistoriado e Arquivado.
* Cada ticket deverá aparecer como card no quadro.
* Todo novo ticket deve ter o status aberto e ser incluído na coluna "Aberto".
* O card deverá conter um botão de opções, com as opções de editar e excluir o ticket.
* Deve ser possível mover o card para outra coluna, puxando e soltando (drag and drop) ou através de uma opção do menu de opções do card;

O projeto deverá ser implementando em Javascript, utilizando React JS com Redux para gerência de estado.

Para dar início ao desafio, o candidato deve dar um fork neste repositório e, ao fim do desenvolvimento, dar acesso ao usuário **_joel@trilogo.com.br_** ao seu repositório para análise do trabalho.


**Diferenciais**

* Implementação de testes unitários
* CSS Modules
* Utilização do Ant Design (biblioteca React UI)
* Persistencia dos dados em Local Storage


<hr>

### 3. Dimensionamento

- 1. Desenvolver tela
- 2. Desenvolver colunas- Aberto, Executado, Vistoriado e Arquivado

- 3. Desenvolver modal
- 3.1. Campos

 - 3.1.1. Descrição
 - 3.1.2. Tipo
 - 3.1.3. Responsável
 - 3.1.4. Imagem (opcional)
 
 1. Ação:
 Criar cartão
 Adicionar à coluna "Abertos"
 
 2. Ação:
 Drag and drop cartão

 3. Acão
 Excluir cartão
 Editar cartão
 
 
 Tempo: 7 dias - Terça-feira
 
 
