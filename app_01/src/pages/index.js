import CustomCheckboxLabel from "@/components/CustomCheckboxLabel";
import CustomImputLabel from "@/components/CustomImputLabel";
import CustomTextAreaLabel from "@/components/CustomTextAreaLabel";

export default function Home() {

  const Teste01 = () => {
    console.log("chegou aqui")
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <CustomImputLabel id="txtNome" texto="Nome" col="8" />
        <CustomImputLabel id="txtPreco" texto="Preço" col="4" />
        <CustomTextAreaLabel id="txtDescricao" texto="Descrição" col="12" />
        <CustomImputLabel id="txtImagem" texto="Imagem" col="12" />
        <CustomCheckboxLabel id="txtNovidade" texto="Novidade" col="6" />
        <CustomCheckboxLabel id="txtDisponivel" texto="Disponível" col="6" />
      </div>
    </div>
  );
}
