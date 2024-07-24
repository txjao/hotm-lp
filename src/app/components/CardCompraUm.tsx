import pagseguro from "../../assets/pagseguro.png";
import americanExpress from "../../assets/amex-american-express.png";
import bancoBrasil from "../../assets/banco-do-brasil.png";
import bradesco from "../../assets/bradesco.png";
import elo from "../../assets/elo.png";
import hipercard from "../../assets/hipercard.png";
import itau from "../../assets/itau.png";
import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import Image from "next/image";


export default function CardCompraUm() {
    return (
        <div className="flex flex-col items-center justify-between shadow-xl py-4 rounded-b-lg gap-6 lg:w-[550px] w-[350px] h-[350px]">
        <div className="bg-green rounded-t-lg p-4 w-full">
          <p className="text-white font-semibold text-center">CARTÃO DE CRÉDITO - ATÉ 12X</p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center px-6">
          <Image alt="pagseguro logo" src={pagseguro} className="object-fill w-40 h-10"></Image>
          <div className="flex flex-col lg:flex-row gap-2 items-center justify-center">
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
    )
}