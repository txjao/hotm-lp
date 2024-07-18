
export default function Header() {
    return (
        <header className="absolute z-10 flex h-[5vh] w-full justify-center items-center py-10 bg-black md:justify-end md:p-10">
            <div className="flex gap-10">
                <a href="#third-section" className="text-yellow text-sm underline hover:relative hover:bottom-px 
            2xl:text-base xl:text-base lg:text-baseSm md:text-sm"> Saiba Mais </a>
                <a href="#second-section" className="text-yellow text-sm underline hover:relative hover:bottom-px 
            2xl:text-base xl:text-base lg:text-baseSm md:text-sm"> Quem sou </a>
                <a href="https://pay.hotmart.com/E92520462X" className="text-yellow text-sm underline hover:relative hover:bottom-px 
            2xl:text-base xl:text-base lg:text-baseSm md:text-sm"> Adquira já </a>
            </div>
        </header>
    )
}