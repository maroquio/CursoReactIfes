import Card from "./Card";
import Grid from "./Grid";

type CardData = {
    id: number;
    imagem: string;
    titulo: string;
    texto: string;
    linkUrl: string;
}

type GridCardsProps = {
    cols?: number;
    cards: CardData[];
    onAddCartClick: (id: number) => void;
}

function GridCards({ cols = 4, cards, onAddCartClick }: GridCardsProps) {
    return (
        <Grid cols={cols}>
            {cards.map((card) => (
                <Card id={card.id}
                    imagem={card.imagem}
                    titulo={card.titulo}
                    texto={card.texto}
                    linkUrl={card.linkUrl}
                    key={card.id}
                    onAddCartClick={onAddCartClick} />
            ))}
        </Grid>
    )
}

export default GridCards;