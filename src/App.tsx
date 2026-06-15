import { useState } from "react";
import BsFooter from "./BsFooter";
import Container from "./Container";
import Navbar from "./Navbar";
import PageHome from "./PageHome";
import PageCart from "./PageCart";
import type { ItemCarrinho } from "./types";

const links = [
  {
    "href": "/",
    "label": "Início",
    "active": window.location.pathname === "/"
  },
  {
    "href": "/sobre",
    "label": "Sobre",
    "active": window.location.pathname === "/sobre"
  },
  {
    "href": "/carrinho",
    "label": "Carrinho",
    "active": window.location.pathname === "/carrinho"
  }
]

// const produtos: Produto[] = [
//   {
//     "id": 1,
//     "imagem": "https://picsum.photos/seed/python/400/250",
//     "titulo": "Python para Iniciantes",
//     "texto": "Aprenda a programar do zero com a linguagem mais popular para iniciantes, ciência de dados e automação.",
//     "linkUrl": "/cursos/python-iniciantes"
//   },
//   {
//     "id": 2,
//     "imagem": "https://picsum.photos/seed/javascript/400/250",
//     "titulo": "JavaScript Moderno",
//     "texto": "Domine ES6+, async/await, módulos e os recursos mais recentes da linguagem que move a web.",
//     "linkUrl": "/cursos/javascript-moderno"
//   },
//   {
//     "id": 3,
//     "imagem": "https://picsum.photos/seed/react/400/250",
//     "titulo": "React do Zero ao Avançado",
//     "texto": "Construa interfaces modernas com componentes, hooks e gerenciamento de estado em aplicações reais.",
//     "linkUrl": "/cursos/react-completo"
//   },
//   {
//     "id": 4,
//     "imagem": "https://picsum.photos/seed/typescript/400/250",
//     "titulo": "TypeScript Essencial",
//     "texto": "Tipagem estática, generics, utility types e como evitar bugs antes mesmo de executar o código.",
//     "linkUrl": "/cursos/typescript"
//   },
//   {
//     "id": 5,
//     "imagem": "https://picsum.photos/seed/fastapi/400/250",
//     "titulo": "FastAPI na Prática",
//     "texto": "Construa APIs REST performáticas em Python com validação automática, documentação OpenAPI e async.",
//     "linkUrl": "/cursos/fastapi"
//   },
//   {
//     "id": 6,
//     "imagem": "https://picsum.photos/seed/sql/400/250",
//     "titulo": "Banco de Dados SQL",
//     "texto": "Modelagem relacional, consultas complexas, índices e otimização de performance em SQLite e PostgreSQL.",
//     "linkUrl": "/cursos/sql"
//   },
//   {
//     "id": 7,
//     "imagem": "https://picsum.photos/seed/docker/400/250",
//     "titulo": "Docker e Contêineres",
//     "texto": "Empacote, distribua e execute aplicações de forma consistente do desenvolvimento à produção.",
//     "linkUrl": "/cursos/docker"
//   },
//   {
//     "id": 8,
//     "imagem": "https://picsum.photos/seed/git/400/250",
//     "titulo": "Git e GitHub",
//     "texto": "Controle de versão, branches, pull requests e fluxos de trabalho colaborativos em equipe.",
//     "linkUrl": "/cursos/git-github"
//   },
//   {
//     "id": 9,
//     "imagem": "https://picsum.photos/seed/ml/400/250",
//     "titulo": "Machine Learning com Python",
//     "texto": "Fundamentos de aprendizado supervisionado e não supervisionado com scikit-learn e exemplos práticos.",
//     "linkUrl": "/cursos/machine-learning"
//   },
//   {
//     "id": 10,
//     "imagem": "https://picsum.photos/seed/linux/400/250",
//     "titulo": "Linux para Desenvolvedores",
//     "texto": "Domine o terminal, shell scripting, permissões, processos e ferramentas essenciais do dia a dia.",
//     "linkUrl": "/cursos/linux"
//   },
//   {
//     "id": 11,
//     "imagem": "https://picsum.photos/seed/langchain/400/250",
//     "titulo": "LangChain e LLMs",
//     "texto": "Construa agentes inteligentes, RAG e fluxos com LangChain, LangGraph e modelos de linguagem.",
//     "linkUrl": "/cursos/langchain"
//   },
//   {
//     "id": 12,
//     "imagem": "https://picsum.photos/seed/arquitetura/400/250",
//     "titulo": "Arquitetura de Software",
//     "texto": "Padrões de projeto, princípios SOLID, arquitetura limpa e como organizar sistemas escaláveis.",
//     "linkUrl": "/cursos/arquitetura"
//   }
// ];

function App() {
  const [paginaAtual, setPaginaAtual] = useState<string>(() => window.location.pathname || "/");
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

  function adicionarAoCarrinho(id: number) {
    // const produto = produtos.find(card => card.id === id);
    // if (!produto) return;

    // const itemExistente = carrinho.find(item => item.id === id);
    // const novoCarrinho = itemExistente
    //   ? carrinho.map(item =>
    //     item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
    //   )
    //   : [...carrinho, { id, titulo: produto.titulo, quantidade: 1 }];

    // setCarrinho(novoCarrinho);
  }

  function obterQtdeItensCarrinho() {
    return carrinho.reduce((total, item) => total + item.quantidade, 0);
  }

  function navegar(rota: string) {
    setPaginaAtual(rota);
    window.history.pushState(null, "", rota);
  }

  return (
    <>
      <Navbar
        items={links}
        title="Loja Virtual"
        cartLength={obterQtdeItensCarrinho()}
        currentPage={paginaAtual}
        onNavigate={navegar}
      />
      <Container>
        {paginaAtual === "/" && <PageHome adicionarAoCarrinho={adicionarAoCarrinho} /> }
        {paginaAtual === "/carrinho" && <PageCart carrinho={carrinho} /> }
      </Container>
      <BsFooter />
    </>
  )
}

export default App;
