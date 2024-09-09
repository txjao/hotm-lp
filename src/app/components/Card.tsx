
interface cardProps {
    children: React.ReactNode;
    type: 'red' | 'gray';
    title: string;
    hover?: boolean;
    mobile?: boolean;
}

export default function Card(props: cardProps) {

    const handleColor = () => {
        if (props.type === 'red') {
            return 'bg-red text-white';
        }
        return 'bg-[#D9D9D9] text-black';

    }

    const handleMobile = () => {
        if (props.mobile) {
            return null;
        }
        return 'rounded';
    }

    const handleHover = () => {
        if (props.hover) {
            return 'hover:bg-opacity-95 hover:transform hover:scale-[1.01]';
        }
    }

    return (
        <div className={`${handleColor()} ${handleMobile()} ${handleHover()} flex flex-col h-60 w-full  justify-center items-center transition-all duration-75 md:w-60`}>
            <strong>{props.title}</strong>
            <p className="text-sm text-center mx-2">{props.children}</p>
        </div>
    )
}