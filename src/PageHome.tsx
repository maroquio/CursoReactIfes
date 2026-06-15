import BoasVindas from "./BoasVindas";
import GridCards from "./GridCards";

type PageHomeProps = {
    adicionarAoCarrinho: (id: string) => void | Promise<void>;
    onVerDetalhes: (id: string) => void;
}

function PageHome({ adicionarAoCarrinho, onVerDetalhes }: PageHomeProps) {
    return (
        <div>
            <h1>Olá, React!</h1>
            <hr />
            <BoasVindas nome="Ricardo" />
            <hr />
            <GridCards cols={4} onAddCartClick={adicionarAoCarrinho} onVerDetalhes={onVerDetalhes} />
        </div>
    );
}

export default PageHome;