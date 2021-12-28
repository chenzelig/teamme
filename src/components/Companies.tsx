import './Companies.css';
import Company from './Company';
import CompayModel from "../models/company"
import Carousel from './Carousel';



const companies: CompayModel[] = [
    {
        name: "teamme1",
        video: "teamme1.mp4",
        text: "teamme1",
        employeesNumber: 1,
        url: "http://facebook.com",
    },
    {
        name: "teamme2",
        video: "teamme2.mp4",
        text: "teamme5",
        employeesNumber: 5,
        url: "http://twitter.com",
    },
    {
        name: "teamme3",
        video: "teamme3.mp4",
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
