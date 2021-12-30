import './Companies.css';
import Company from './Company';
import CompayModel from "../models/company"
import Carousel from './Carousel';



const companies: CompayModel[] = [
    {
        name: "teamme1",
        video: "https://s3.us-east-2.amazonaws.com/team.me/teamme1.mp4",
        text: "teamme1",
        employeesNumber: 1,
        url: "http://facebook.com",
    },
    {
        name: "teamme2",
        video: "https://s3.us-east-2.amazonaws.com/team.me/teamme2.mp4",
        text: "teamme5",
        employeesNumber: 5,
        url: "http://twitter.com",
    },
    {
        name: "teamme3",
        video: "https://s3.us-east-2.amazonaws.com/team.me/teamme3.mp4",
        text: "teamme15",
        employeesNumber: 15,
        url: "http://google.com",
    },
]

function Companies() {
    return (
        <div className='Companies'>
            <Carousel title="Carousel">
                {companies.map(c => <Company key={c.name} {...c} />)}
            </Carousel>
        </div>

    );
}


export default Companies;
