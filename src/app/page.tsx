"use client";
import Image from "next/image";
import bannerImage from "../assets/banner.jpg";
import prints1 from "../assets/prints1.png";
import banner from "../assets/imagem2.jpg";
import casalBar from "../assets/casal-bar.jpg";
import { Slider } from "@/components/slider";

export default function Home() {

  return (
    <main className="">
      <header className="fixed z-10 flex h-[5vh] w-full justify-center items-center py-10 bg-opacity-90 bg-black md:justify-end md:p-10">
        <div className="flex gap-10">
          <a href="#third-section" className="text-yellow text-sm underline hover:relative hover:bottom-px 
            2xl:text-base xl:text-base lg:text-baseSm md:text-sm"> Saiba Mais </a>
          <a href="#second-section" className="text-yellow text-sm underline hover:relative hover:bottom-px 
            2xl:text-base xl:text-base lg:text-baseSm md:text-sm"> Quem sou </a>
          <a href="https://pay.hotmart.com/E92520462X" className="text-yellow text-sm underline hover:relative hover:bottom-px 
            2xl:text-base xl:text-base lg:text-baseSm md:text-sm"> Adquira já </a>
        </div>
      </header>
      <section className="first-section">
        <div id="banner" className={`flex justify-center items-end pb-6 md:items-center
        bg-[url('../assets/bannerHero.png')] bg-no-repeat bg-cover bg-center h-[99.8vh]`}>
          <div className="flex items-center flex-col gap-9">
            <div className="flex items-center flex-col">
              <h1 className="text-base font-bold text-yellow w-full text-center 
              2xl:w-[80%] 2xl:text-xl  xl:w-[80%] xl:text-lg lg:text-lg lg:w-[80%] md:text-base md:w-full">JÁ IMAGINOU APRENDER A CONQUISTAR LINDAS MULHERES UTILIZANDO SUA REDE SOCIAL?</h1>
              <p className="text-sm w-[50%] text-center 
              xl:text-md xl:w-[80%] lg:text-base lg:w-[80%] md:text-base md:w-full">Aprender a conquistar mulheres no Instagram de forma cuidadosa, respeitosa e eficaz. Desenvolva métodos de abordagem que garatem sucesso</p>
            </div>
            <a href="https://pay.hotmart.com/E92520462X" className="text-black font-bold bg-green h-12 w-40 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-green-hover md:h-14 md:w-60"> Comece Agora!</a>
          </div>
        </div>
        <div className="bg-red w-full h-[2px]"></div>
      </section>
      <section id="second-section">
        <div className="flex flex-col gap-4 py-6 bg-gradient-to-b from-black via-black to-red md:justify-between md:h-[50vh] md:bg-gradient-to-r md:flex-row">
          <Image alt="casal" src={bannerImage} className="md:w-[40%]" />
          <div className="flex justify-center items-center text-justify">
            <p className="text-sm w-[80%] xl:text-baseSm lg:text-sm md:text-xs">Já imaginou aprender conquistar lindas mulheres utilizando sua rede social? Isso mesmo, com o meu método e estratégia de abordagem, será possível intrigar e chamar a atenção daquela mulher que você somente olha e não tem coragem de chegar, achando que não tem chance e é incapaz, não caia na enganação desses métodos por ai que ensina através de cantadas ou mensagens prontas, isso não funciona, o que de fato funciona é uma boa abordagem, utilizando as palavras certas no momento certo, adquira já nosso conteúdo e comece hoje mesmo, e tem mais, Comigo você terá o <strong className="text-yellow font-semibold">sigilo garantido</strong> e um grupo privado no telegram, para dicas diárias e lives constantes para aprender ainda mais, o que esta esperando?</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-[url('../assets/terno.png')] bg-no-repeat bg-cover md:justify-between md:h-[50vh] md:flex-row-reverse">
          <Image alt="casal" src={banner} className="md:w-[30%]" />
          <div className="flex flex-col justify-center items-center text-justify gap-4 py-6 md:pl-40 md:items-start">
            <p className="text-base">Rafael Ribeiro</p>
            <p className="text-sm w-[80%] xl:text-baseSm lg:text-sm md:text-xs">Sou um entusiasta da diversão e grande admirador das mulheres. Após aplicar com sucesso meu método várias vezes, decidi compartilhar minha estratégia com outros homens. A ideia surgiu após ajudar um amigo e ele me incentivar a oferecer um curso sobre o assunto. No início, não levei a sério, mas depois percebi o impacto positivo que isso poderia ter na vida de muitos homens. Agora, estou pronto para compartilhar meu conhecimento e ajudar você a conquistar o que deseja, e claro com o <strong className="text-yellow font-semibold">sigilo garantido</strong>.</p>
          </div>
        </div>
      </section>
      <section id="third-section" className="flex flex-col bg-white justify-between items-center p-7 gap-10 xl:gap-20 md:flex-row lg:p-8">
        <div className="flex flex-col gap-16 items-start h-full xl:gap-8 lg:gap-4 md:gap-4">
          <p className="text-black text-base font-semibold">Veja exemplos</p>
          <Slider/>
        </div>
        <div className="flex items-center flex-col gap-20 lg:gap-8 md:gap-4 md:w-3/4">
          <p className="text-black text-sm text-justify xl:text-baseSm lg:text-sm">
            Isso é o tipo de abordagem que você irá aprender, você terá um repertório de abordagem e de assuntos que irão te destacar em meio à multidão, você se tornará mais desejado com a minha metodologia.Não perca essa oportunidade? Conseguir falar com as mulheres que sempre viu e desejou, e faze-las te querer? Tudo isso com o <strong className="text-red font-semibold">sigilo garantido</strong>, clique em adquira já e se torne aquilo que sempre sonhou ser!</p>
          <a href="https://pay.hotmart.com/E92520462X" className="text-black font-bold bg-green h-12 w-40 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-green-hover md:h-14 md:w-60"> Adquira Já!</a>
        </div>
      </section>
      <section id="fourth-section" className="flex flex-col gap-4 bg-gradient-to-b from-black via-black to-red md:justify-between md:h-[50vh] md:bg-gradient-to-r md:flex-row">
        <Image alt="casal" src={casalBar} className="md:w-[40%] 2xl:object-cover" />
        <div className="flex justify-center items-center flex-col gap-10 text-center py-10 md:gap-20 md:py-0">
          <p className="text-sm w-[80%] xl:w-[60%] xl:text-baseSm lg:text-sm md:h-12 md:text-sm">Aprenda a conquistar mulheres nas redes sociais de forma cuidadosa, respeitosa e eficaz. Desenvolva métodos de abordagem que garantem sucesso!<br /><strong className="text-red-secondary font-semibold">Comece já!</strong></p>
          <a href="https://pay.hotmart.com/E92520462X" className="text-black font-bold bg-yellow h-12 w-48 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-yellow-hover 2xl:h-14"> Comece Agora!</a>
        </div>
      </section>
      <section id="fifth-section" className="flex flex-col-reverse bg-white justify-between items-center p-10 gap-20 md:flex-row-reverse ">
        <div className="flex items-center flex-col lg:w-3/4 gap-20 lg:gap-12">
          <p className="text-black text-sm text-justify xl:text-baseSm lg:text-sm">
            Estou compartilhando aqui com vocês algumas abordagens e desenvolvimento de conversas com mulheres que nem conheço ainda pessoalmente, mas certamente vou conhecer e pegar com toda certeza. Quando o assunto se desenvolve nesse sentido, após eu aplicar minha técnica e a mulher receber isso positivamente a ponto de continuar o assunto, a grande tendência é o sucesso com ela.</p>
          <a href="https://pay.hotmart.com/E92520462X" className="text-black font-bold bg-yellow h-16 w-60 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-yellow-hover text-center lg:h-12 md:h-12 md:w-48"> Comece Agora <br /> Mesmo!</a>
        </div>
        <div className="flex justify-start-start">
          <Image alt="casal" src={prints1} className="h-[400px]" />
        </div>
      </section>
      <footer className="w-full p-5 bg-black">
        <p className="text-sm 2xl:text-base">2024 - Todos os direitos Reservados.</p>
      </footer>
    </main>
  );
}
