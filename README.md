# To-Do List Application

## Descrição

Este projeto é uma aplicação simples de lista de tarefas (To-Do List) construída com **React.js** e **TypeScript**, utilizando a biblioteca **Material-UI** para a estilização. A aplicação permite adicionar, remover e gerenciar tarefas, com persistência dos dados no local storage do navegador.

## Funcionalidades

- **Adicionar Tarefas**: Permite adicionar novas tarefas à lista.
- **Remover Tarefas**: Remove tarefas existentes da lista.
- **Gerenciar Status das Tarefas**: Marque tarefas como "Concluídas" ou "Incompletas".
- **Persistência de Dados**: Dados das tarefas são salvos no local storage e carregados ao iniciar a aplicação.
- **Interface Responsiva**: Layout adaptado para diferentes tamanhos de tela com colunas para cada status de tarefa.

## Estrutura do Projeto

- **src/**
  - **components/**
    - **TaskBoard/**
      - `TaskBoard.tsx`: Componente principal da lista de tarefas.
      - `TaskCard.tsx`: Componente para exibir uma tarefa individual.
      - `index.ts`: Arquivo para exportações do componente `TaskBoard`.
  - **App.tsx**: Componente raiz da aplicação.
  - **theme.ts**: Configurações do tema com cores e estilização do Material-UI.
  - **index.tsx**: Ponto de entrada da aplicação.

## Configuração do Ambiente

1. Clone o repositório.

```bash
git clone <URL_DO_REPOSITORIO>
```

2. Instale as dependências.

```bash
npm install
```

3. Inicie a aplicação.

```bash
npm run dev
```

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
