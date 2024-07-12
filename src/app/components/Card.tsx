
interface cardProps {
    children: React.ReactNode;
    type: 'red' | 'gray';
    title: string;
}

export default function Card(props: cardProps) {

    return(
        <div className="">
            <strong>props.title</strong>
            {props.children}
        </div>
    )
}