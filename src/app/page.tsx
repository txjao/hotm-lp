import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <header className="flex h-[15vh] justify-end items-center p-10">
        <div className="flex gap-20 text-">
          <a href="" className="text-yellow text-lg underline"> Saiba Mais </a>
          <a href="" className="text-yellow text-lg underline"> Quem sou </a>
          <a href="" className="text-yellow text-lg underline"> Adquira já </a>
        </div>
      </header>
      <div id="banner" className="flex justify-center bg-ima">
        <div className="flex items-center flex-col gap-16">
          <div className="flex items-center flex-col">
            <h1 className="text-xl font-bold text-yellow w-[60%] text-center">JÁ IMAGINOU APRENDER A CONQUISTAR LINDAS MULHERES UTILIZANDO SUA REDE SOCIAL?</h1>
            <p className="text-lg w-[50%] text-center ">Aprender a conquistar mulheres no Instagram de forma cuidadosa, respeitosa e eficaz. Desenvolva métodos de abordagem que garatem sucesso</p>
          </div>
          <a href="" className="text-black bg-green h-20 w-60 flex justify-center items-center rounded-full hover:bg-green-hover"> Comece Agora!</a>
        </div>
      </div>
    </main>
  );
}
