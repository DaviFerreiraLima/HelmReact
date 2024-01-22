# README: Configuração do Projeto HelmReact 🚀

Este README fornece um guia passo a passo para configurar e executar o projeto HelmReact. Este guia exclui os erros encontrados durante o processo para uma experiência mais suave.

## Pré-requisitos 📋

- Git
- Minikube
- Helm

## Clonando o Repositório 📥

1. Abra o terminal.
2. Clone o repositório HelmReact:
   ```bash
   git clone https://github.com/DaviFerreiraLima/HelmReact
   ```
3. Entre no diretório do projeto:
   ```bash
   cd HelmReact/
   ```

## Iniciando o Minikube 🌐

1. Inicie o Minikube:
   ```bash
   minikube start
   ```
   - Isso iniciará o Minikube com o driver Docker.

## Instalando o Aplicativo com Helm 🚢

1. Instale o aplicativo usando Helm:
   ```bash
   helm install myapp k8s/reactappdavipedro
   ```
   - Isso instalará o aplicativo e fornecerá um nome para a instalação (`myapp`).

## Verificando a Instalação 🕵️‍♂️

1. Verifique os pods em execução:
   ```bash
   kubectl get pods
   ```
   - Isso exibirá todos os pods em execução, incluindo `myapp-reactappdavipedro`.


## Encaminhamento de Porta com kubectl 🌉

1. Para encaminhar uma porta de um serviço para uma porta local:
   ```bash
   kubectl port-forward service/[NOME_DO_SERVICO] [PORTA_LOCAL]:[PORTA_DO_SERVICO]
   ```
   - Substitua `[NOME_DO_SERVICO]`, `[PORTA_LOCAL]` e `[PORTA_DO_SERVICO]` com os valores apropriados.
   - Exemplo: `kubectl port-forward service/myapp-reactappdavipedro 1500:80`

## Acessando o Aplicativo 🌐

1. Após o encaminhamento de porta, acesse o aplicativo no navegador:
   ```
   http://localhost:[PORTA_LOCAL]
   ```
   - Substitua `[PORTA_LOCAL]` pela porta que você encaminhou.

---

Este guia foi criado para facilitar a configuração e execução do projeto HelmReact, evitando erros comuns. Siga cada passo cuidadosamente para uma experiência sem problemas. 🎉

---

Se precisar de mais assistência ou encontrar problemas, não hesite em abrir uma issue no repositório do GitHub.