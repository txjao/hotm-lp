import boleto from "../../assets/boleto.png";
import pix from "../../assets/pix.png";
import Image from "next/image";

export default function CardCompraDois() {
    return (
        <div className="flex flex-col items-center justify-between shadow-xl py-4 rounded-b-lg gap-6 lg:w-[550px] w-[350px] h-[350px]">
            <div className="bg-green rounded-t-lg p-4 w-full">
                <p className="text-white font-semibold text-center uppercase">Somente 89,90 à vista</p>
            </div>
            <div className="flex flex-1 py-5 gap-4 items-center justify-center">
                <Image alt="visa boleto" src={boleto} className="object-fill w-14 h-8"></Image>
                <Image alt="visa pix" src={pix} className="object-fill w-24 h-8"></Image>
            </div>
            <div className="px-1 pb-8 pt-6 text-center">
                <a href="" className="py-4 px-6 lg:py-6 lg:px-12 bg-yellow hover:bg-yellow-hover duration-200 rounded-full w-full">COMPRE COM BOLETO OU PIX</a>
            </div>
        </div>
    )
}