## 🚀 Como Executar Localmente

### Pré-requisitos
*   Navegador web moderno (Chrome, Firefox, Edge)
*   Editor de código (VS Code recomendado)

### Instalação e Execução

1.  **Clone o repositório**
    ```bash
    git clone https://github.com/rcajazeira/galeria-fotos.git
    cd galeria-fotos
    ```

2.  **Abra o projeto**
    *   Abra a pasta no VS Code
    *   OU navegue até o arquivo `index.html`

3.  **Execute a aplicação**
    *   **Opção 1:** Clique direito em `index.html` → "Abrir com" → Seu navegador
    *   **Opção 2:** Use a extensão **Live Server** no VS Code
    *   **Opção 3:** Execute um servidor local simples:
        ```bash
        # Com Python
        python -m http.server 8000

        # Com Node.js (se tiver o server.js)
        node server.js
        ```

4.  **Acesse no navegador**
    *   Vá para `http://localhost:8000` (ou porta configurada)
    *   OU abra diretamente `index.html`

## 📁 Estrutura do Projeto

galeria-fotos/
├── index.html # Página principal
├── README.md # Esta documentação
├── LICENSE # Licença MIT
├── .gitignore # Arquivos ignorados pelo Git
│
├── src/
│ ├── css/
│ │ └── styles.css # Estilos principais
│ ├── js/
│ │ └── app.js # Lógica JavaScript
│ └── images/ # Imagens da galeria (10+)
│ ├── bicicleta.jpg
│ ├── cachorro.jpg
│ ├── cafe.jpg
│ ├── cidade-noturna.jpg
│ ├── computador.jpg
│ ├── flores.jpg
│ ├── livros.jpg
│ ├── montanha.jpg
│ ├── musica.jpg
│ └── praia.jpg
└── server.js # Servidor local opcional


## 🔍 Como Usar a Galeria

1.  **Visualizar todas as fotos**: A galeria carrega automaticamente 10+ fotos.
2.  **Pesquisar fotos**:
    *   Digite no campo de busca (ex: "praia", "natureza").
    *   A busca é feita em tempo real.
    *   Pressione Enter ou clique no botão de lupa.
3.  **Limpar busca**: Clique no botão "Limpar busca" para ver todas as fotos novamente.
4.  **Interagir com fotos**: Passe o mouse sobre qualquer foto para ver o efeito de hover.

## 👨‍💻 Autor

**Rafael Cajazeira** - Desenvolvedor Full Stack
*   GitHub: [@rcajazeira](https://github.com/rcajazeira)
*   Projeto: [Galeria de Fotos](https://github.com/rcajazeira/galeria-fotos)

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

---
<div align="center">
  <sub>Desenvolvido com ❤️ para o exercício de programação 2026/1</sub>
</div>