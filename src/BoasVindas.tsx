type BoasVindasProps = {
  nome?: string;
}

function BoasVindas({ nome = "Visitante" }: BoasVindasProps) {
  return (
    <>
      <p>Bem-vindo, {nome}!</p>
    </>
  )
}

export default BoasVindas;
