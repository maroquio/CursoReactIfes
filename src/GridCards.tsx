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
}

function GridCards({ cols = 4, cards }: GridCardsProps) {
    return (
        <Grid cols={cols}>
            {cards.map((card) => (
                <Card imagem={card.imagem}
                    titulo={card.titulo}
                    texto={card.texto}
                    linkUrl={card.linkUrl}
                    key={card.id} />
            ))}
        </Grid>
    )
}

export default GridCards;