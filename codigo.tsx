import Image from "next/image";
import bannerImage from "../assets/banner.jpg";
import prints1 from "../assets/prints1.png";
import banner from "../assets/imagem2.jpg";
import casalBar from "../assets/casal-bar.jpg";

function codigo(){
    return(
        <>
            <section id="second-section">
            <div className="flex h-[50vh] bg-gradient-to-r from-black via-black to-red justify-between">
              <Image alt="casal" src={bannerImage} className="" />
              <div className="flex justify-center items-center">
                <p className="text-base w-[80%]">Já imaginou aprender conquistar lindas mulheres utilizando sua rede social? Isso mesmo, com o meu método e estratégia de abordagem, será possível intrigar e chamar a atenção daquela mulher que você somente olha e não tem coragem de chegar, achando que não tem chance e é incapaz, não caia na enganação desses métodos por ai que ensina através de cantadas ou mensagens prontas, isso não funciona, o que de fato funciona é uma boa abordagem, utilizando as palavras certas no momento certo, adquira já nosso conteúdo e comece hoje mesmo, e tem mais, Comigo você terá o <strong className="text-yellow font-semibold">sigilo garantido</strong> e um grupo privado no telegram, para dicas diárias e lives constantes para aprender ainda mais, o que esta esperando?</p>
              </div>
            </div>
            <div className="flex h-[50vh] bg-[url('../assets/terno.png')] bg-no-repeat bg-cover justify-between flex-row-reverse">
              <Image alt="casal" src={banner} className="" />
              <div className="flex flex-col justify-center items-start gap-8 pl-40">
                <p className="text-base">Rafael Ribeiro</p>
                <p className="text-base w-[80%]">Sou um entusiasta da diversão e grande admirador das mulheres. Após aplicar com sucesso meu método várias vezes, decidi compartilhar minha estratégia com outros homens. A ideia surgiu após ajudar um amigo e ele me incentivar a oferecer um curso sobre o assunto. No início, não levei a sério, mas depois percebi o impacto positivo que isso poderia ter na vida de muitos homens. Agora, estou pronto para compartilhar meu conhecimento e ajudar você a conquistar o que deseja, e claro com o <strong className="text-yellow font-semibold">sigilo garantido</strong>.</p>
              </div>
            </div>
          </section>



<section id="third-section" className="flex bg-white h-[80vh] justify-between items-center p-16 gap-20">
            <div className="flex flex-col gap-16 items-start h-full">
              <p className="text-black text-base font-semibold">Veja exemplos</p>
              <Image alt="casal" src={prints1} className="h-[400px]" />
            </div>
            <div className="flex items-center flex-col w-3/4 gap-20">
              <p className="text-black text-base text-left">
                Isso é o tipo de abordagem que você irá aprender, você terá um repertório de abordagem e de assuntos que irão te destacar em meio à multidão, você se tornará mais desejado com a minha metodologia.<br />Não perca essa oportunidade? Conseguir falar com as mulheres que sempre viu e desejou, e faze-las te querer? Tudo isso com o <strong className="text-red font-semibold">sigilo garantido</strong>, clique em adquira já e se torne aquilo que sempre sonhou ser!</p>
              <a href="https://pay.hotmart.com/E92520462X" className="text-black font-bold bg-green h-16 w-60 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-green-hover"> Adquira Já!</a>
            </div>
          </section>
          
          
          
          <section id="fourth-section" className="flex h-[50vh] bg-gradient-to-r from-black via-black to-red justify-between">
            <Image alt="casal" src={casalBar} className="w-[40%]" />
            <div className="flex justify-center items-center flex-col gap-20 text-center">
              <p className="text-base">Aprenda a conquistar mulheres nas redes sociais de forma cuidadosa, respeitosa e eficaz. Desenvolva métodos de abordagem que garantem sucesso!<br /><strong className="text-red-secondary font-semibold">Comece já!</strong></p>
              <a href="https://pay.hotmart.com/E92520462X" className="text-black font-bold bg-yellow h-16 w-60 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-yellow-hover"> Comece Agora!</a>
            </div>
          </section>
          
          
          <section id="fifth-section" className="flex bg-white h-[80vh] justify-between items-center p-16 gap-20">
            <div className="flex items-center flex-col w-3/4 gap-20">
              <p className="text-black text-base text-left">
                Estou compartilhando aqui com vocês algumas abordagens e desenvolvimento de conversas com mulheres que nem conheço ainda pessoalmente, mas certamente vou conhecer e pegar com toda certeza. Quando o assunto se desenvolve nesse sentido, após eu aplicar minha técnica e a mulher receber isso positivamente a ponto de continuar o assunto, a grande tendência é o sucesso com ela.</p>
              <a href="https://pay.hotmart.com/E92520462X" className="text-black font-bold bg-yellow h-16 w-60 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-yellow-hover text-center"> Comece Agora <br /> Mesmo!</a>
            </div>
            <div className="">
              <Image alt="casal" src={prints1} className="h-[400px]" />
            </div>
          </section>
        </>
    )
}