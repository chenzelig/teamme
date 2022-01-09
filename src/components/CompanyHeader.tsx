import "./CompanyHeader.css";
import CompanyModel from "../models/company";

const dummyImage = require("../assets/teamme-logo-black.png");

interface Props {
  company: CompanyModel;
}

const CompanyHeader = (props: Props) => {
  return (
    <div className="container">
      <div className="logo-container">
        <img className="logo" src={dummyImage} alt="Company Logo" />
      </div>

      <div>
        <h1 className="company-name">{props.company.name}</h1>
        <p className="short-description">{props.company.description}</p>
      </div>
    </div>
  );
};

export default CompanyHeader;
