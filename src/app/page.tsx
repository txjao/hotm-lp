"use client";
import Image from "next/image";
import bannerImage from "../assets/banner.jpg";
import banner from "../assets/imagem2.png";
import garantia from "../assets/garantia.webp";
import image5 from "../assets/image5.png";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import prints from "@/utils/handlePrints";
import Header from "./components/Header";
import Card from "./components/Card";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import pagseguro from "../assets/pagseguro.png";
import americanExpress from "../assets/amex-american-express.png";
import bancoBrasil from "../assets/banco-do-brasil.png";
import boleto from "../assets/boleto.png";
import bradesco from "../assets/bradesco.png";
import elo from "../assets/elo.png";
import hipercard from "../assets/hipercard.png";
import itau from "../assets/itau.png";
import mastercard from "../assets/mastercard.png";
import pix from "../assets/pix.png";
import visa from "../assets/visa.png";



export default function Home() {
  return (
    <main className="">
      <section className="first-section">
        <div id="banner" className={`flex justify-center items-center pb-6 md:items-center bg-[url('../assets/bannerHero.png')] bg-no-repeat bg-cover bg-center h-[99.8vh]`}>
          <div className="flex items-center flex-col gap-9 2xl:gap-12 md:px-6 lg:px-0">
            <div className="flex items-center flex-col 2xl:gap-20">
              <h1 className="text-base font-bold text-yellow w-full text-center 
              2xl:w-[80%] 2xl:text-xl  xl:w-[80%] xl:text-lg lg:text-lg lg:w-[80%] md:text-base md:w-full mb-4">JÁ IMAGINOU APRENDER A CONQUISTAR LINDAS MULHERES UTILIZANDO SEU INSTAGRAM?</h1>
              <p className="text-sm w-[80%] text-center 
              xl:text-md xl:w-[80%] lg:text-base lg:w-[80%] md:text-sm md:w-full">Aprenda a usar o Instagram de maneira consistente para conhecer novas mulheres, conversar e marcar encontros. Em uma semana você vai transformar seu instagram em uma máquina, capaz de marcar dois ou mais encontros por mês.</p>
            </div>
            <a href="https://pay.hotmart.com/E92520462X" className="text-white text-lg bg-green h-20 w-80 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-green-hover"> Comece Agora!</a>
          </div>
        </div>
        <div className="h-0.5 bg-red">
        </div>
      </section>
      <section id="second-section">
        <div className="flex flex-col gap-4 bg-gradient-to-b from-black via-black to-red md:justify-between md:h-[50vh] 2xl:h-[35vh] md:bg-gradient-to-r md:flex-row">
          <Image alt="casal" src={bannerImage} className="md:w-[40%] object-cover" />
          <div className="flex py-4 justify-center items-center text-justify flex-col gap-4">
            <p className="text-sm w-[80%] xl:text-baseSm lg:text-sm md:text-xs">Foi essa a pergunta que um amigo me fez na academia em 2023. Percebi que eu tinha facilidade, enquanto a grande maioria dos homens ficavam para trás. <strong className="text-yellow font-semibold">Meu segredo: Nenhum, sou um cara normal, tenho carro, ganho normal</strong>. Só que eu uso o Instagram da melhor forma possível para isso. Tem gente que usa o Instagram para vender todo o tipo de coisa, usar para paquerar é só mais uma funcionalidade.
            </p>
            <p className="text-sm w-[80%] xl:text-baseSm lg:text-sm md:text-xs">
              <strong className="text-yellow font-semibold">O Instagram é o maior aplicativo de paquera usado hoje no Brasil, ouso dizer que é melhor do que qualquer barzinho, balada ou academia</strong>. Eu uso o Instagram consistentemente a um bom tempo para marcar encontros com a mulherada.
            </p>
          </div>
        </div>
      </section>
      <section id="third-section">
        <div className="flex flex-col bg-[#F5F5F5] md:justify-between lg:h-[40vh] 2xl:h-[25vh] md:flex-row-reverse">
          <Image alt="casal" src={banner} className="md:w-[30%] object-cover lg:w-1/3" />
          <div className="flex justify-center w-full">
            <div className="py-4 md:py-1 px-14 md:px-0 flex items-start justify-center flex-col md:w-2/3">
              <strong className="text-red text-base pb-2 md:text-baseSm">Para quem é esse curso:</strong>
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
        <div className="flex flex-col gap-4 bg-black md:justify-between lg:h-[40vh] 2xl:h-[25vh] md:flex-row-reverse">
          <div className="flex justify-center w-full">
            <div className="py-4 md:py-1 px-14 md:px-0 flex items-start justify-center flex-col md:w-2/3">
              <strong className="text-red text-base mb-2 md:text-baseSm">Para quem NÃO é esse curso:</strong>
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
          <Image alt="casal" src={image5} className="md:w-[30%] h-[25vh] md:h-full object-cover w-full lg:w-1/3 object-top" />
        </div>
        <div className="flex flex-col gap-8 px-8 py-4 2xl:py-14 lg:py-20 items-center bg-[#F5F5F5] md:justify-between 2xl:h-[20vh]">
          <p className='text-black lg:text-baseSm text-center md:w-[70%] 2xl:w-[55%] '>
            Não importa se você tem dinheiro ou não, se é baixo, se seu carro é ruim... Cara, isso tudo não importa. O que eu posso garantir é o seguinte: Estruturar seu Instagram direitinho, que em pouco tempo você está conversando com um monte de mulher.
          </p>
          <a href="https://pay.hotmart.com/E92520462X" className="text-white text-base bg-green h-12 w-60 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-green-hover md:h-14"> Comece já!</a>
        </div>
      </section>
      <section id="fourth-section" className="">
        <div className="flex flex-col pb-6 md:pb-0 gap-4 bg-red md:justify-between lg:h-[100vh] md:flex-row-reverse 2xl:h-[45vh]">
          <Image alt="casal" src={banner} className="md:w-[30%] object-cover md:object-left w-full" />
          <div className="flex justify-center py-4">
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
              <a href="https://pay.hotmart.com/E92520462X" className="text-white text-base bg-green h-12 w-60 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-green-hover md:h-14"> Comece já!</a>
            </div>
          </div>
        </div>
      </section>
      <section id="fifth-section">
        <div className="lg:h-[60vh] bg-white flex flex-col text-justify justify-center gap-4 py-4 px-8 lg:py-0 md:px-28 2xl:h-[25vh]">
          <h3 className="text-red text-base font-semibold mb-2 text-center">Por que criei esse curso?</h3>
          <p className="text-black text-sm mb-4 font-medium">Eu cansei de ver caras legais que não conseguiam simplesmente conversar com mulheres. Com autoestima lá em baixo, mas com potencial. Eu literalmente criei isso aqui para ajudar as pessoas, ajudar você. Então, usa para o bem tá!!
            Esse curso é livre de mentirada</p>
          <p className="text-black text-sm font-medium md:text-sm">
            Você já viu esses cursos de paquera onde falam que você vai hipnotizar, apertar botões na mulher, que ela vai ficar vidrada em você, esse monte de baboseiras. E tem piores tá !!! tem aqueles que dizem que você precisa aprender aquelas cantadas infalíveis, que elas irão ficar malucas na sua, pessoal, pelo amor de Deus, que mulher gosta de cantada idiota? Mulher de verdade, curte uma boa conversa, uma abordagem respeitosa e é isso que irei te ensinar.
            A gente sabe que isso tudo é mentira. Aqui eu vou te ensinar o que funciona na real, sem perda de tempo, sem desrespeitar o seu dinheiro. Você vai participar de uma comunidade onde vai poder enviar suas dúvidas e vamos responder. Olha o preço do curso!! Meu objetivo é te ajudar.</p>
        </div>
        <div className={`lg:h-[40vh] flex flex-col py-4 items-center justify-center bg-terno bg-cover bg-center 2xl:h-[25vh]`}>
          <h3 className="text-base font-semibold mb-2 text-center">Quem sou eu?</h3>
          <p className="text-white py-6 px-8 md:px-0 md:w-[60%] text-justify">Prazer, sou Rafael Ribeiro e sou um grande admirador das mulheres e após ajudar vários amigos com meu método, eu resolvi partir para internet e compartilhar com você também essas estratégias incríveis que vão certamente fazer de você um CONQUISTADOR, aquilo que começou com pequenas brincadeiras, ajudou vários amigos meus a se dar bem com elas e agora é sua vez de colocar em pratica esse método e  fazer você mexer com a cabeça das mulheres no seu dia a dia, lembrando que aqui o sigilo é garantido.        </p>
        </div>
      </section>
      <section id="sixth-section" className="bg-white p-5">
        <h3 className="text-red text-base font-bold mb-2 text-center md:mb-12 md:text-left md:text-lg md:px-14 md:mt-14">Conheça o curso</h3>
        <div className="flex justify-center lg:flex lg:items-center lg:justify-center">
          <div className="w-72 md:w-auto">
            <Carousel
              showStatus={false}
              className="sm:hidden"
            >
              <Card type="red" title="Bônus 01">
                Canal no Telegram para dicas diárias além de lives para te ajudar ainda mais.
              </Card>
              <Card type="red" title="Bônus 02">
                O curso escrito para você poder ler de forma sigilosa.
              </Card>
              <Card type="red" title="Bônus 03">
                um e-book que te dará outras dicas incríveis.
              </Card>
            </Carousel>
          </div>

          <div className="hidden gap-20 md:flex md:mb-14 w-full lg:w-auto">
            <Card type="red" title="Bônus 01">
              Canal no Telegram para dicas diárias além de lives para te ajudar ainda mais.
            </Card>
            <Card type="red" title="Bônus 02">
              O curso escrito para você poder ler de forma sigilosa.
            </Card>
            <Card type="red" title="Bônus 03">
              um e-book que te dará outras dicas incríveis.
            </Card>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">


          <div className="flex flex-col items-center justify-between shadow-xl py-4 rounded-b-lg gap-6 md:w-[550px]">
            <div className="bg-green rounded-t-lg p-4 w-full">
              <p className="text-white font-semibold text-center">CARTÃO DE CRÉDITO - ATÉ 12X</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center px-6">
              <Image alt="pagseguro logo" src={pagseguro} className="object-fill w-40 h-10"></Image>
              <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
                <div className="flex flex-1 gap-2 items-center justify-center">
                  <Image alt="mastercard logo" src={mastercard} className="object-fill w-14 h-10"></Image>
                  <Image alt="hipercard logo" src={hipercard} className="object-fill w-16 h-7"></Image>
                  <Image alt="elo logo" src={elo} className="object-fill w-14 h-5"></Image>
                  <Image alt="itau logo" src={itau} className="object-fill w-10 h-10"></Image>
                </div>
                <div className="flex flex-1 gap-2 items-center justify-center">
                  <Image alt="bradesco logo" src={bradesco} className="object-fill w-11 h-10"></Image>
                  <Image alt="banco do Brasil logo" src={bancoBrasil} className="object-fill w-10 h-10"></Image>
                  <Image alt="visa logo" src={visa} className="object-fill w-14 h-5"></Image>
                  <Image alt="americanExpress logo" src={americanExpress} className="rounded-md object-fill w-12 h-12"></Image>
                </div>
              </div>
            </div>
            <div className="px-1 pb-8 pt-6 text-center">
              <a href="" className="py-4 px-6 lg:py-6 lg:px-12 bg-yellow hover:bg-yellow-hover duration-200 rounded-full w-full">COMPRE COM O CARTÃO DE CRÉDITO</a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between shadow-xl py-4 rounded-b-lg gap-6 md:w-[550px]">
            <div className="bg-green rounded-t-lg p-4 w-full">
              <p className="text-white font-semibold text-center">BOLETO OU PIX - APENAS À VISTA</p>
            </div>
            <div className="flex flex-1 py-5 gap-2 items-center justify-center">
              <Image alt="visa boleto" src={boleto} className="object-fill w-14 h-8"></Image>
              <Image alt="visa pix" src={pix} className="object-fill w-20 h-8"></Image>
            </div>
            <div className="px-1 pb-8 pt-6 text-center">
              <a href="" className="py-4 px-6 lg:py-6 lg:px-12 bg-yellow hover:bg-yellow-hover duration-200 rounded-full w-full">COMPRE COM BOLETO OU PIX</a>
            </div>
          </div>



          <h3 className="text-red text-base font-bold mb-2 text-center md:mb-8">APRENDA A CONQUISTAR MULHERES USANDO AS REDES SOCIAIS
          </h3>
          <p className="text-center text-black text-sm mb-4 2xl:text-baseSm">Para transformar seu Instagram em uma máquina de paquera infalível.<br />
            <strong className="text-baseSm">Somente 89,90 à vista</strong><br />
            <span className="text-base">ou</span><br />
            <strong className="text-baseSm">12 vezes no cartão</strong><br />
            Só isso? Sim. Te falei que meu objetivo é ajudar outras pessoas.<br />
            E aí, vamos aumentar a autoestima masculina juntos?
          </p>
          <a href="https://pay.hotmart.com/E92520462X" className="text-white text-base bg-green h-12 w-60 flex justify-center items-center rounded-full transition-colors duration-200 mb-4 hover:bg-green-hover md:h-14"> Comece Agora!</a>
        </div>
        <div className="flex items-center px-6">
          <div className="py-4 md:ml-20 md:mt-4 md:w-[70%] md:flex md:flex-col md:flex-start 2xl:ml-40 2xl:w-full">
            <strong className="text-red text-base">Garantia</strong>
            <p className="text-black text-justify text-sm  2xl:text-baseSm">Você tem garantia incondicional de 07 dias. O risco é todo meu, se você não gostar, só pedir seu dinheiro de volta em até 07 dias após a compra que eu te devolvo sem nem perguntar por quê.
            </p>
          </div>
          <Image src={garantia} alt="garantia" className="h-20 w-20 object-cover ml-4"></Image>
        </div>
      </section>
      <section id="eighth" className="bg-white flex flex-col items-center md:flex md:flex-row md:items-center md:pt-10">
        <div className="flex items-center flex-col px-8 py-4 pt-0 lg:w-3/4 gap-8 lg:gap-12">
          <p className="text-black text-sm text-justify xl:text-baseSm md:w-[80%]">
            Estou compartilhando aqui com vocês algumas abordagens e desenvolvimento de conversas com mulheres que nem conheço ainda pessoalmente, mas certamente vou conhecer e pegar com toda certeza. Quando o assunto se desenvolve nesse sentido, após eu aplicar minha técnica e a mulher receber isso positivamente a ponto de continuar o assunto, a grande tendência é o sucesso com ela.</p>
          <a href="https://pay.hotmart.com/E92520462X" className="text-black font-bold mb-10 md:mb-0 bg-yellow h-16 w-60 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-yellow-hover text-center md:h-16 md:w-48"> Comece Agora <br /> Mesmo!</a>
        </div>
        <div className="w-[70%] md:px-10 2xl:w-[45%]">
          <Carousel
            interval={5000}
            showStatus={false}
            showArrows={false}
            dynamicHeight={true}
            infiniteLoop={true}
            autoPlay={true}
            className=" red sm:hidden max-lg:block">
            <Image alt="print" src={prints.print1} className="shadow-sm px-2" />
            <Image alt="print" src={prints.print2} className="shadow-sm px-2" />
            <Image alt="print" src={prints.print3} className="shadow-sm px-2" />
            <Image alt="print" src={prints.print4} className="shadow-sm px-2" />
            <Image alt="print" src={prints.print5} className="shadow-sm px-2" />
            <Image alt="print" src={prints.print6} className="shadow-sm px-2" />
            <Image alt="print" src={prints.print7} className="shadow-sm px-2" />
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
            className="red hidden lg:block gap-4">
            <Image alt="print" src={prints.print1} className="px-2" />
            <Image alt="print" src={prints.print2} className="px-2" />
            <Image alt="print" src={prints.print3} className="px-2" />
            <Image alt="print" src={prints.print4} className="px-2" />
            <Image alt="print" src={prints.print5} className="px-2" />
            <Image alt="print" src={prints.print6} className="px-2" />
            <Image alt="print" src={prints.print7} className="px-2" />
          </Carousel>
        </div>
      </section>
      <section id="nineth" className="bg-[#181818] pb-10 py-6 p-8 md:p-20">
        <h3 className="text-[#FF0000] text-base font-bold text-left md:mb-12 md:text-left md:text-lg">Perguntas e Respostas:</h3>
        <Accordion className="bg-[#181818] text-white 2xl:pl-56 md:pl-20 lg:pl-36">
          <AccordionSummary
            className="font-semibold md:text-base"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Onde eu vou receber o curso?
          </AccordionSummary>
          <AccordionDetails>
            O curso é online e hospedado na Hotmart.
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-[#181818] text-white 2xl:pl-56 md:pl-20 lg:pl-36">
          <AccordionSummary
            className="font-semibold md:text-base"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Quem é você?
          </AccordionSummary>
          <AccordionDetails>
            Sou um cara normal igual você, mas não quero aparecer devido questões pessoais. Quero te ajudar mantendo meu sigilo e o seu.
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-[#181818] text-white 2xl:pl-56 md:pl-20 lg:pl-36">
          <AccordionSummary
            className="font-semibold md:text-base"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Esse não mais um desses cursos de cantadas?
          </AccordionSummary>
          <AccordionDetails>
            Não, esse método vai te ensinar abordagens diretas, na base do diálogo.
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-[#181818] text-white 2xl:pl-56 md:pl-20 lg:pl-36">
          <AccordionSummary
            className="font-semibold md:text-base"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Eu sou tímido, o curso vai me ajudar?
          </AccordionSummary>
          <AccordionDetails>
            Sim, claro que a timidez é algo da personalidade, é mais difícil, não vou mentir, mas se você aplicar o método da forma correta, o curso vai te ajudar a pegar mulher e também melhorar sua timidez.
          </AccordionDetails>
        </Accordion>
      </section>
      <footer className="w-full p-5 bg-black">
        <p className="text-sm 2xl:text-base">2024 - Todos os direitos Reservados.</p>
      </footer>
    </main>
  );
}
