import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Companies.css";

import Company from "./Company";
import CompanyModel from "../models/company";
import { Carousel } from "react-responsive-carousel";
import { useCompaniesStore } from "../context/CompaniesContext";

const companies: CompanyModel[] = [
  {
    name: "teamme1",
    description: "dome text to fll in",
    video: "https://s3.us-east-2.amazonaws.com/team.me/teamme1.mp4",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.",
    employeesNumber: 1,
    url: "http://facebook.com",
  },
  {
    name: "teamme2",
    description: "dome text to fll in",
    video: "https://s3.us-east-2.amazonaws.com/team.me/teamme2.mp4",
    text: "teamme5",
    employeesNumber: 5,
    url: "http://twitter.com",
  },
  {
    name: "teamme3",
    description: "dome text to fll in",
    video: "https://s3.us-east-2.amazonaws.com/team.me/teamme3.mp4",
    text: "teamme15",
    employeesNumber: 15,
    url: "http://google.com",
  },
  {
    name: "teamme4",
    description: "dome text to fll in",
    video: "https://s3.us-east-2.amazonaws.com/team.me/teamme1.mp4",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.",
    employeesNumber: 1,
    url: "http://facebook.com",
  },
  {
    name: "teamme5",
    description: "dome text to fll in",
    video: "https://s3.us-east-2.amazonaws.com/team.me/teamme2.mp4",
    text: "teamme5",
    employeesNumber: 5,
    url: "http://twitter.com",
  },
  {
    name: "teamme6",
    description: "dome text to fll in",
    video: "https://s3.us-east-2.amazonaws.com/team.me/teamme3.mp4",
    text: "teamme6",
    employeesNumber: 15,
    url: "http://google.com",
  },
  {
    name: "teamme7",
    description: "dome text to fll in",
    video: "https://s3.us-east-2.amazonaws.com/team.me/teamme1.mp4",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.",
    employeesNumber: 1,
    url: "http://facebook.com",
  },
  {
    name: "teamme8",
    description: "dome text to fll in",
    video: "https://s3.us-east-2.amazonaws.com/team.me/teamme2.mp4",
    text: "teamme8",
    employeesNumber: 5,
    url: "http://twitter.com",
  },
  {
    name: "teamme9",
    description: "dome text to fll in",
    video: "https://s3.us-east-2.amazonaws.com/team.me/teamme3.mp4",
    text: "teamme9",
    employeesNumber: 15,
    url: "http://google.com",
  },
];
const CustomRenderItem = (item: any, props: { isSelected: boolean }) => (
  <item.type {...item.props} {...props} />
);

const Companies = () => {
  const { setCurrentIndex } = useCompaniesStore();
  return (
    <Carousel
      className="companies"
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      swipeable
      emulateTouch
      axis="vertical"
      dynamicHeight={true}
      onChange={setCurrentIndex}
      //@ts-ignore
      renderItem={CustomRenderItem}
    >
      {companies.map((c, i) => (
        <Company key={c.name} index={i} company={c} />
      ))}
    </Carousel>
  );
};

export default Companies;
