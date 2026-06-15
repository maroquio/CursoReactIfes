type CardProps = {
    id: number;
    imagem?: string;
    titulo: string;
    texto: string;
    preco: number;
    onAddCartClick: (id: number) => void;
}

function Card({ id, imagem, titulo, texto, preco, onAddCartClick }: CardProps) {
    const linkUrl = "https://6a3032f0a7f8866418d5bf0b.mockapi.io/products/" + id;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={imagem} className="card-img-top" />
                <div className="card-body text-center">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{texto}</p>
                    <p className="text-danger fs-5">
                        R$ {preco}
                    </p>
                </div>
                <div className="card-footer text-center p-3 bg-light">
                    <a href={linkUrl} className="btn btn-danger" onClick={(e) => {
                        e.preventDefault();
                        if (onAddCartClick) {
                            onAddCartClick(id);
                        }
                    }}>
                        Adicionar ao Carrinho
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;