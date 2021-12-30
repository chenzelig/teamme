import './Company.css';
import CompayModel from "../models/company"
import Button from "../components/CustomButtonComponent"
import ReactPlayer from 'react-player/vimeo'

function Company(props: CompayModel) {
    return (
        <div>
            <h2>{props.name}</h2>
            <video autoPlay muted loop controls width="420" height="420">
                <source src={props.video} type="video/mp4" />
            </video>
            <div>
                <Button
                    border="none"
                    color="purple"
                    height="50px"
                    onClick={() => openNewWindow(props.url)}
                    radius="50%"
                    width="50px"
                    children="Apply"
                    fontColor="white"
                />
            </div>
            <div>{props.text}</div>
            <div>{props.employeesNumber}</div>
        </div>
    );
}

export default Company;

function openNewWindow(url: string) {
    var win = window.open(url, '_blank');
    // win.focus();
}

