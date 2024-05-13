import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import prints from "@/utils/handlePrints";
import Image from "next/image";

export function Slider() {
    return (
        <Carousel showArrows={false} className="h-[40%]">
            <Image alt="print" src={prints.print1} className="h-10 w-10" />
            <Image alt="print" src={prints.print2} className="" />
          </Carousel>
    )
}