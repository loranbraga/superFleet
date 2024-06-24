# Super Fleet

Super Fleet é um projeto que tem como objetivo adaptar um projeto firebase cloud function para um projeto desacoplado que possa ser reaproveitado em outras tecnologias.

## Estrutura do Projeto

Este projeto segue os princípios da Clean Architecture, dividindo o código em camadas distintas para manter a separação de preocupações e facilitar a manutenção e escalabilidade. As principais camadas do projeto são:

- **Domínio:** Contém entidades e interfaces essenciais ao núcleo do negócio.
- **Aplicação:** Inclui casos de uso e lógica de aplicação.
- **Infraestrutura:** Abrange a implementação de interfaces e detalhes específicos da tecnologia.
- **Interface do Usuário:** Compreende a camada de apresentação e interação com o usuário.

## Requisitos

Para executar o projeto, você precisará ter os seguintes requisitos instalados:

- Node 18 >=

## Instalação

Siga os passos abaixo para clonar e configurar o projeto:

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/super-fleet.git
    ```

2. Navegue até a pasta do projeto:
    ```sh
    cd super-fleet/functions
    ```

3. Instale as dependências:
    ```sh
    yarn
    ```

## Execução

Para executar o projeto em ambiente de desenvolvimento, utilize os seguintes comandos:

1. Execute o servidor de desenvolvimento:
    ```sh
    yarn serve
    ```

2. Para acessar o projeto utilize seu client http para bater nas rotas fornecidas em seu terminal.

## Testes

Para rodar os testes, utilize o comando abaixo:

  ```sh
    yarn serve
  ```

## Contribuição

Se você deseja contribuir com o projeto, por favor, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.


## Contato

Para mais informações ou dúvidas, entre em contato:

- Loran Braga
- loranpb@gmail.com
- [\[Linkedin\]](https://www.linkedin.com/in/loran-braga/)