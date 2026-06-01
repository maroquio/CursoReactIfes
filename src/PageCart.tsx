import type { ItemCarrinho } from "./types";

type PageCartProps = {
    carrinho: ItemCarrinho[];
}

function PageCart({ carrinho }: PageCartProps) {
    return (
        <div>
            <h2>Carrinho de Compras</h2>
            {carrinho.length === 0 ? (
                <p>O carrinho está vazio.</p>
            ) : (
                <ul>
                    {carrinho.map(item => (
                        <li key={item.id}>
                            {item.titulo} - Quantidade: {item.quantidade}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default PageCart;