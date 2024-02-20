import Subtitulo from "@/components/Subtitulo";
import Titulo from "@/components/Titulo";

export default function Home() {

  const Teste01 = () => {
    console.log("chegou aqui")
  }


  return (
    <div>
      <Titulo></Titulo>
      <Subtitulo texto=" I'm here"></Subtitulo>
      <Subtitulo texto=" I'm here now"></Subtitulo>
      <Subtitulo texto=" I'm actually here now"></Subtitulo>
    </div>
  );
}
