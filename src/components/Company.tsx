import './Company.css';

interface Props {
    text: string
    video: string
    employeesNumber: number
}

function Company(props: Props) {
    return (
        <div>
            <video autoPlay muted loop controls width="320" height="240">
                <source src={`${process.env.PUBLIC_URL}/${props.video}`} type="video/mp4" />
            </video>
            <div>{props.text}</div>
            <div>{props.employeesNumber}</div>
        </div>
    );
}

export default Company;
