"use client";
import Image from "next/image";
import bannerImage from "../assets/banner.jpg";
import banner from "../assets/imagem2.png";
import casalBar from "../assets/casal-bar.jpg";
import image5 from "../assets/image5.png";
import terno from "../assets/terno.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import prints from "@/utils/handlePrints";
import Header from "./components/Header";

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
        <div className="flex flex-col gap-4 bg-gradient-to-b from-black via-black to-red md:justify-between md:h-[50vh] md:bg-gradient-to-r md:flex-row">
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
        <div className="flex flex-col bg-[#F5F5F5] md:justify-between md:h-[33vh] md:flex-row-reverse">
          <Image alt="casal" src={banner} className="md:w-[30%] object-cover lg:w-1/3" />
          <div className="flex justify-center w-full">
            <div className="flex items-start justify-center flex-col md:w-2/3">
              <strong className="text-red text-base mb-2">Para quem é esse curso:</strong>
              <ul className="flex flex-col items-start gap-1 list-disc">
                <li className="text-sm text-black xl:text-baseSm lg:text-sm md:text-xs">
                  Quem quer ter autoestima renovada;
                </li>
                <li className=" text-sm text-black xl:text-baseSm lg:text-sm md:text-xs">
                  Quem quer aprender a conversar com mulheres de uma forma correta e respeitosa;
                </li>
                <li className="text-sm text-black xl:text-baseSm lg:text-sm md:text-xs">
                  Quem quer se descobrir como um cara sedutor que consegue atrair e ficar com mulheres;
                </li>
                <li className="text-sm text-black xl:text-baseSm lg:text-sm md:text-xs">
                  Quem quer desencalhar, encontrar uma pessoa especial.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-black md:justify-between md:h-[33vh] md:flex-row-reverse">
          <div className="flex justify-center w-full">
            <div className="flex items-start justify-center flex-col md:w-2/3">
              <strong className="text-red text-base mb-2">Para quem NÃO é esse curso:</strong>
              <ul className="flex flex-col items-start gap-1 list-disc">
                <li className="text-sm text-white xl:text-baseSm lg:text-sm md:text-xs">
                  Para quem quer ser cabaço o resto da vida;
                </li>
                <li className=" text-sm text-white xl:text-baseSm lg:text-sm md:text-xs">
                  Para quem é desrespeitoso com as mulheres e não quer melhorar;
                </li>
                <li className="text-sm text-white xl:text-baseSm lg:text-sm md:text-xs">
                  Para quem fica arrumando desculpa para fala com mulher;
                </li>
                <li className="text-sm text-white xl:text-baseSm lg:text-sm md:text-xs">
                  Para quem quer continuar mandando mensagens ridículas para elas, do tipo: "gostosa", afinal, é só isso que você tem.
                </li>
              </ul>
            </div>
          </div>
          <Image alt="casal" src={image5} className="md:w-[30%] object-cover lg:w-1/3" />
        </div>
        <div className="flex flex-col px-4 py-20 items-center bg-[#F5F5F5] md:justify-between md:h-[40vh]">
          <p className='text-black text-baseSm text-center w-[70%]'>
            Não importa se você tem dinheiro ou não, se é baixo, se seu carro é ruim... Cara, isso tudo não importa. O que eu posso garantir é o seguinte: Estruturar seu Instagram direitinho, que em pouco tempo você está conversando com um monte de mulher.
          </p>
          <a href="https://pay.hotmart.com/E92520462X" className="text-black font-bold bg-green h-12 w-40 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-green-hover md:h-14 md:w-60"> Comece já!</a>
        </div>
      </section>
      <section id="fourth-section" className="">
        <div className="flex flex-col gap-4 bg-red md:justify-between md:h-[100vh] md:flex-row-reverse">
          <Image alt="casal" src={banner} className="md:w-[30%] object-cover w-full h-full" />
          <div className="flex justify-center">
            <div className="flex items-center justify-center flex-col gap-4">
              <strong className="text-base mb-4">Como funciona meu método:</strong>
              <ul className="flex flex-col items-center gap-3 list-decimal">
                <li className="text-sm text-justify w-[80%] xl:text-baseSm lg:text-sm md:text-xs">
                  <strong className="text-yellow font-semibold mr-2">Preparação: </strong>
                  Aqui você vai melhorar sua aparência e seu Instagram para você conseguir entrar no mercado. Todo mundo sabe que a rede social é onde as pessoas postam a sua melhor versão, que nem sempre é verdade, uma verdadeira vitrine. Isso é errado? Não sei, mas é o que as pessoas fazem e você devia fazer também. Vou abrir a caixa preta com você do que funciona para mim, tipos de postagem, stories, textos... A mulher vai entrar no seu perfil e ter vontade de te conhecer.
                </li>
                <li className="text-sm text-justify w-[80%] xl:text-baseSm lg:text-sm md:text-xs">
                  <strong className="text-yellow font-semibold mr-2">Abordagem: </strong>
                  Vou ensinar o que você precisa fazer para chamar atenção, agir como um caçador, ter paciência, entender quando é a hora de conversar sem ser afoito. 90% dos caras erram justamente nessa parte. Colocam mulher num pedestal e ficam atrás dela. Você vai aprender a ter a fenece para trocar uma ideia e marcar um encontro num barzinho ou até num motel.
                </li>
                <li className="text-sm text-justify w-[80%] xl:text-baseSm lg:text-sm md:text-xs mb-6">
                  <strong className="text-yellow font-semibold mr-2">Finalização: </strong>
                  Você já conversou com a mulher ali, chegou a hora. Vou te falar o que fazer, e quando der certo, você vai lembrar de mim e falar para si mesmo, bendito Rafael, onde você estava todo esse tempo?
                </li>
              </ul>
              <a href="https://pay.hotmart.com/E92520462X" className="text-black font-bold bg-green h-12 w-40 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-green-hover md:h-14 md:w-60"> Comece já!</a>
            </div>
          </div>
        </div>
      </section>
      <section id="fifth-section">
        <div className="h-[60vh] bg-white flex flex-col justify-center gap-4 px-28">
          <h3 className="text-red text-lg font-semibold mb-2">Por que criei esse curso?</h3>
          <p className="text-black text-sm mb-4 font-medium">Eu cansei de ver caras legais que não conseguiam simplesmente conversar com mulheres. Com autoestima lá em baixo, mas com potencial. Eu literalmente criei isso aqui para ajudar as pessoas, ajudar você. Então, usa para o bem tá!!
            Esse curso é livre de mentirada</p>
          <p className="text-black text-sm font-medium">
            Você já viu esses cursos de paquera onde falam que você vai hipnotizar, apertar botões na mulher, que ela vai ficar vidrada em você, esse monte de baboseiras. E tem piores tá !!! tem aqueles que dizem que você precisa aprender aquelas cantadas infalíveis, que elas irão ficar malucas na sua, pessoal, pelo amor de Deus, que mulher gosta de cantada idiota? Mulher de verdade, curte uma boa conversa, uma abordagem respeitosa e é isso que irei te ensinar.
            A gente sabe que isso tudo é mentira. Aqui eu vou te ensinar o que funciona na real, sem perda de tempo, sem desrespeitar o seu dinheiro. Você vai participar de uma comunidade onde vai poder enviar suas dúvidas e vamos responder. Olha o preço do curso!! Meu objetivo é te ajudar.</p>
        </div>
        <div className={`h-[40vh] flex items-center justify-center bg-terno bg-cover`}>
          <p className="text-white py-4 w-[60%]"><strong className="text-base">Quem sou eu?</strong><br></br>Prazer, sou Rafael Ribeiro e sou um grande admirador das mulheres e após ajudar vários amigos com meu método, eu resolvi partir para internet e compartilhar com você também essas estratégias incríveis que vão certamente fazer de você um CONQUISTADOR, aquilo que começou com pequenas brincadeiras, ajudou vários amigos meus a se dar bem com elas e agora é sua vez de colocar em pratica esse método e  fazer você mexer com a cabeça das mulheres no seu dia a dia, lembrando que aqui o sigilo é garantido.        </p>
        </div>
      </section>
      <section id="sixth-section" className="flex flex-col-reverse bg-white p-5 justify-between items-center gap-10 md:flex-row-reverse md:pr-16">
        <div className="flex items-center flex-col lg:w-3/4 gap-20 lg:gap-12">
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
