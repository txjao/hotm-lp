"use client";
import Image from "next/image";
import bannerImage from "../assets/banner.jpg";
import banner from "../assets/imagem2.png";
import casalBar from "../assets/casal-bar.jpg";
import image5 from "../assets/image5.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import prints from "@/utils/handlePrints";
import Header from "./components/Header";
import Card from "./components/Card";


export default function Home() {

  return (
    <main className="">
      <Header />
      <section className="first-section">
        <div id="banner" className={`flex justify-center items-center pb-6 md:items-center bg-[url('../assets/bannerHero.png')] bg-no-repeat bg-cover bg-center h-[99.8vh]`}>
          <div className="flex items-center flex-col gap-9">
            <div className="flex items-center flex-col">
              <h1 className="text-base font-bold text-yellow w-full text-center 
              2xl:w-[80%] 2xl:text-xl  xl:w-[80%] xl:text-lg lg:text-lg lg:w-[80%] md:text-base md:w-full">JÁ IMAGINOU APRENDER A CONQUISTAR LINDAS MULHERES UTILIZANDO SEU INSTAGRAM?</h1>
              <p className="text-sm w-[80%] text-center 
              xl:text-md xl:w-[80%] lg:text-base lg:w-[80%] md:text-base md:w-full">Aprenda a usar o Instagram de maneira consistente para conhecer novas mulheres, conversar e marcar encontros. Em uma semana você vai transformar seu instagram em uma máquina, capaz de marcar dois ou mais encontros por mês.</p>
            </div>
            <a href="https://pay.hotmart.com/E92520462X" className="text-black font-bold bg-green h-12 w-40 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-green-hover md:h-14 md:w-60"> Comece Agora!</a>
          </div>
        </div>
        <div className="h-0.5 bg-red">
        </div>
      </section>
      <section id="second-section">
        <div className="flex flex-col gap-4 pb-5 bg-gradient-to-b from-black via-black to-red md:justify-between md:h-[50vh] md:bg-gradient-to-r md:flex-row">
          <Image alt="casal" src={bannerImage} className="md:w-[40%]" />
          <div className="flex justify-center items-center text-justify flex-col gap-4">
            <p className="text-sm w-[80%] xl:text-baseSm lg:text-sm md:text-xs">Foi essa a pergunta que um amigo me fez na academia em 2023. Percebi que eu tinha facilidade, enquanto a grande maioria dos homens ficavam para trás. <strong className="text-yellow font-semibold">Meu segredo: Nenhum, sou um cara normal, tenho carro, ganho normal</strong>. Só que eu uso o Instagram da melhor forma possível para isso. Tem gente que usa o Instagram para vender todo o tipo de coisa, usar para paquerar é só mais uma funcionalidade.
            </p>
            <p className="text-sm w-[80%] xl:text-baseSm lg:text-sm md:text-xs">
              <strong className="text-yellow font-semibold">O Instagram é o maior aplicativo de paquera usado hoje no Brasil, ouso dizer que é melhor do que qualquer barzinho, balada ou academia</strong>. Eu uso o Instagram consistentemente a um bom tempo para marcar encontros com a mulherada.
            </p>
          </div>
        </div>
      </section>
      <section id="third-section">
        <div className="flex flex-col gap-4 pb-5 bg-[#F5F5F5] md:justify-between md:h-[50vh] md:flex-row-reverse">
          <Image alt="casal" src={image5} className="md:w-[30%] object-cover w-full" />
          <div className="flex justify-center">
            <div className="flex items-center justify-center flex-col">
              <strong className="text-red">Para quem é esse curso:</strong>
              <ul className="flex flex-col items-center gap-1 list-disc">
                <li className="text-sm text-black w-[80%] xl:text-baseSm lg:text-sm md:text-xs">
                  Quem quer ter autoestima renovada;
                </li>
                <li className="text-sm text-black w-[80%] xl:text-baseSm lg:text-sm md:text-xs">
                  Quem quer aprender a conversar com mulheres de uma forma correta e respeitosa;
                </li>
                <li className="text-sm text-black w-[80%] xl:text-baseSm lg:text-sm md:text-xs">
                  Quem quer se descobrir como um cara sedutor que consegue atrair e ficar com mulheres;
                </li>
                <li className="text-sm text-black w-[80%] xl:text-baseSm lg:text-sm md:text-xs">
                  Quem quer desencalhar, encontrar uma pessoa especial.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-5 bg-black md:justify-between md:h-[50vh] md:flex-row-reverse">
          <Image alt="casal" src={banner} className="md:w-[30%] object-cover w-full hidden md:block" />
          <div className="flex justify-center">
            <div className="flex items-center justify-center flex-col">
              <strong className="text-red">Para quem é esse curso:</strong>
              <ul className="flex flex-col items-center gap-1 list-disc">
                <li className="text-sm w-[80%] xl:text-baseSm lg:text-sm md:text-xs">
                  Quem quer ter autoestima renovada;
                </li>
                <li className="text-sm w-[80%] xl:text-baseSm lg:text-sm md:text-xs">
                  Quem quer aprender a conversar com mulheres de uma forma correta e respeitosa;
                </li>
                <li className="text-sm w-[80%] xl:text-baseSm lg:text-sm md:text-xs">
                  Quem quer se descobrir como um cara sedutor que consegue atrair e ficar com mulheres;
                </li>
                <li className="text-sm w-[80%] xl:text-baseSm lg:text-sm md:text-xs">
                  Quem quer desencalhar, encontrar uma pessoa especial.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 py-8 px-4 items-center bg-[#F5F5F5] md:justify-between md:h-[50vh]">
          <p className='text-black text-sm text-center'>
            Não importa se você tem dinheiro ou não, se é baixo, se seu carro é ruim... Cara, isso tudo não importa. O que eu posso garantir é o seguinte: Estruturar seu Instagram direitinho, que em pouco tempo você está conversando com um monte de mulher.
          </p>
          <a href="https://pay.hotmart.com/E92520462X" className="text-black font-bold bg-green h-12 w-40 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-green-hover md:h-14 md:w-60"> Comece já!</a>
        </div>
      </section>
      <section id="fourth-section" className="">
        <div className="flex flex-col gap-4 pb-5 bg-red md:justify-between md:h-[50vh] md:flex-row-reverse">
          <Image alt="casal" src={banner} className="md:w-[30%] object-cover w-full" />
          <div className="flex justify-center">
            <div className="flex items-center justify-center flex-col gap-4">
              <strong className="">Como funciona meu método:</strong>
              <ul className="flex flex-col items-center gap-3 list-decimal">
                <li className="text-sm text-justify w-[80%] xl:text-baseSm lg:text-sm md:text-xs">
                  <strong className="text-yellow font-semibold mr-2">Preparação: </strong>
                  Aqui você vai melhorar sua aparência e seu Instagram para você conseguir entrar no mercado. Todo mundo sabe que a rede social é onde as pessoas postam a sua melhor versão, que nem sempre é verdade, uma verdadeira vitrine. Isso é errado? Não sei, mas é o que as pessoas fazem e você devia fazer também. Vou abrir a caixa preta com você do que funciona para mim, tipos de postagem, stories, textos... A mulher vai entrar no seu perfil e ter vontade de te conhecer.
                </li>
                <li className="text-sm text-justify w-[80%] xl:text-baseSm lg:text-sm md:text-xs">
                  <strong className="text-yellow font-semibold mr-2">Abordagem: </strong>
                  Vou ensinar o que você precisa fazer para chamar atenção, agir como um caçador, ter paciência, entender quando é a hora de conversar sem ser afoito. 90% dos caras erram justamente nessa parte. Colocam mulher num pedestal e ficam atrás dela. Você vai aprender a ter a fenece para trocar uma ideia e marcar um encontro num barzinho ou até num motel.
                </li>
                <li className="text-sm text-justify w-[80%] xl:text-baseSm lg:text-sm md:text-xs">
                  <strong className="text-yellow font-semibold mr-2">Finalização: </strong>
                  Você já conversou com a mulher ali, chegou a hora. Vou te falar o que fazer, e quando der certo, você vai lembrar de mim e falar para si mesmo, bendito Rafael, onde você estava todo esse tempo?
                </li>
              </ul>
              <a href="https://pay.hotmart.com/E92520462X" className="text-black font-bold bg-green h-12 w-40 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-green-hover md:h-14 md:w-60"> Comece já!</a>
            </div>
          </div>
        </div>
      </section>
      <section id="fifth-section" className="flex flex-col-reverse bg-white p-5 justify-between items-center gap-10 md:flex-row-reverse md:pr-16">
        <div className="flex items-center flex-col lg:w-3/4 gap-20 lg:gap-12">
        <Card type="red" title="alou">
          test
        </Card>
          <p className="text-black text-sm text-justify xl:text-baseSm">
            Estou compartilhando aqui com vocês algumas abordagens e desenvolvimento de conversas com mulheres que nem conheço ainda pessoalmente, mas certamente vou conhecer e pegar com toda certeza. Quando o assunto se desenvolve nesse sentido, após eu aplicar minha técnica e a mulher receber isso positivamente a ponto de continuar o assunto, a grande tendência é o sucesso com ela.</p>
          <a href="https://pay.hotmart.com/E92520462X" className="text-black font-bold bg-yellow h-16 w-60 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-yellow-hover text-center lg:h-12 md:h-12 md:w-48"> Comece Agora <br /> Mesmo!</a>
        </div>
        <Carousel
          interval={5000}
          showStatus={false}
          showArrows={false}
          dynamicHeight={true}
          infiniteLoop={true}
          autoPlay={true}
          className="sm:hidden max-lg:block ">
          <Image alt="print" src={prints.print4} className="" />
          <Image alt="print" src={prints.print5} className="" />
          <Image alt="print" src={prints.print6} className="" />
          <Image alt="print" src={prints.print7} className="" />
        </Carousel>
        <Carousel
          interval={5000}
          showStatus={false}
          showArrows={false}
          dynamicHeight={true}
          infiniteLoop={true}
          autoPlay={true}
          useKeyboardArrows={true}
          centerMode={true}
          centerSlidePercentage={30}
          className="hidden lg:block gap-4">
          <Image alt="print" src={prints.print4} className="px-1" />
          <Image alt="print" src={prints.print5} className="px-1" />
          <Image alt="print" src={prints.print6} className="px-1" />
          <Image alt="print" src={prints.print7} className="px-1" />
        </Carousel>
      </section>
      <footer className="w-full p-5 bg-black">
        <p className="text-sm 2xl:text-base">2024 - Todos os direitos Reservados.</p>
      </footer>
    </main>
  );
}
