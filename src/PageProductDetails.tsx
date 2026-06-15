import { useEffect, useState } from "react";
import type { Product } from "./types";

type PageProductDetailsProps = {
    id: string;
    adicionarAoCarrinho: (id: string) => void | Promise<void>;
    onVoltar: () => void;
};

function formatarPreco(price: number) {
    const valor = Number(price);

    if (Number.isNaN(valor)) {
        return `R$ ${price}`;
    }

    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}

function PageProductDetails({
    id,
    adicionarAoCarrinho,
    onVoltar,
}: PageProductDetailsProps) {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [erro, setErro] = useState<string | null>(null);
    const [adicionando, setAdicionando] = useState<boolean>(false);

    useEffect(() => {
        async function carregarProduto() {
            try {
                setLoading(true);
                setErro(null);

                const resposta = await fetch(
                    `https://6a3032f0a7f8866418d5bf0b.mockapi.io/products/${id}`
                );

                if (!resposta.ok) {
                    throw new Error("Produto não encontrado");
                }

                const dados: Product = await resposta.json();
                setProduct(dados);
            } catch (error) {
                if (error instanceof Error) {
                    setErro(error.message);
                } else {
                    setErro("Erro desconhecido ao carregar produto");
                }
            } finally {
                setLoading(false);
            }
        }

        carregarProduto();
    }, [id]);

    async function handleAdicionarAoCarrinho() {
        if (!product) return;

        try {
            setAdicionando(true);
            await adicionarAoCarrinho(product.id);
        } finally {
            setAdicionando(false);
        }
    }

    if (loading) {
        return <p>Carregando produto...</p>;
    }

    if (erro) {
        return <p className="text-danger">Erro: {erro}</p>;
    }

    if (!product) {
        return <p>Produto não encontrado.</p>;
    }

    return (
        <div className="row g-4 align-items-start">
            <div className="col-12">
                <button
                    type="button"
                    className="btn btn-link px-0 mb-2"
                    onClick={onVoltar}
                >
                    &larr; Voltar
                </button>
            </div>

            <div className="col-12 col-md-6">
                <img
                    src={product.photo}
                    alt={product.name}
                    className="img-fluid rounded shadow-sm w-100"
                    style={{
                        maxHeight: "520px",
                        objectFit: "cover",
                    }}
                />
            </div>

            <div className="col-12 col-md-6">
                <h1 className="mb-3">{product.name}</h1>

                <p className="lead text-muted">{product.description}</p>

                <p className="fs-3 fw-bold mb-4">{formatarPreco(product.price)}</p>

                <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={handleAdicionarAoCarrinho}
                    disabled={adicionando}
                >
                    {adicionando ? "Adicionando..." : "Adicionar ao Carrinho"}
                </button>
            </div>
        </div>
    );
}

export default PageProductDetails;