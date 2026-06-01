import BoasVindas from "./BoasVindas";
import GridCards from "./GridCards";
import type { Produto } from "./types";

type PageHomeProps = {
    produtos: Produto[];
    adicionarAoCarrinho: (id: number) => void;
}

function PageHome({ produtos, adicionarAoCarrinho }: PageHomeProps) {
    return (
        <div>
            <h1>Olá, React!</h1>
            <hr />
            <BoasVindas nome="Ricardo" />
            <hr />
            <GridCards cols={4} cards={produtos} onAddCartClick={adicionarAoCarrinho} />
        </div>
    );
}

export default PageHome;