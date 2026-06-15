import { useEffect, useState } from "react";
import Card from "./Card";
import Grid from "./Grid";
import type { Product } from "./types"

type GridCardsProps = {
    cols?: number;
    onAddCartClick: (id: string) => void;
    onVerDetalhes: (id: string) => void;
}

function GridCards({ cols = 4, onAddCartClick, onVerDetalhes }: GridCardsProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadProducts() {
            try {
                const response = await fetch(
                    "https://6a3032f0a7f8866418d5bf0b.mockapi.io/products"
                );
                if (!response.ok) {
                    throw new Error("Error loading produts.");
                }
                const jsonData: Product[] = await response.json();
                setProducts(jsonData);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message)
                } else {
                    setError("Generic error...")
                }
            } finally {
                setLoading(false);
            }
        }
        loadProducts();
    }, []);

    if (loading) {
        return <p>Carregando produtos...</p>
    }

    if (error) {
        return <p>Ocorreu um erro: {error}</p>
    }
    
    return (
        <Grid cols={cols}>
            {products.map((p) => (
                <Card id={p.id}
                    imagem={p.photo}
                    titulo={p.name}
                    texto={p.description}
                    preco={p.price}
                    key={p.id}
                    onAddCartClick={onAddCartClick}
                    onVerDetalhes={onVerDetalhes} />
            ))}
        </Grid>
    )
}

export default GridCards;