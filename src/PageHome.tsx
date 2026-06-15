import BoasVindas from "./BoasVindas";
import GridCards from "./GridCards";

type PageHomeProps = {
    adicionarAoCarrinho: (id: number) => void;
}

function PageHome({ adicionarAoCarrinho }: PageHomeProps) {
    return (
        <div>
            <h1>Olá, React!</h1>
            <hr />
            <BoasVindas nome="Ricardo" />
            <hr />
            <GridCards cols={4} onAddCartClick={adicionarAoCarrinho} />
        </div>
    );
}

export default PageHome;