interface cardProps {
    children: React.ReactNode;
    type: 'red' | 'gray';
    title: string;
    hover?: boolean;
}

export default function Card(props: cardProps) {

   const handleColor = () => {
        if(props.type === 'red') {
            return 'bg-red text-white';
        } else {
            return 'bg-gray text-black';
        }
   }

   const handleHover = () => {
         if(props.hover) {
              return 'hover:bg-opacity-95 hover:transform hover:scale-[1.01]';
         }
   }

    return(
        <div className={`${handleColor()} ${handleHover()} flex flex-col h-60 w-48 rounded justify-center items-center transition-all duration-75`}>
            <strong>{props.title}</strong>
            <p className="text-sm text-center mx-2">{props.children}</p>
        </div>
    )
}