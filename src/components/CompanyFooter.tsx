import { useState } from "react";
import "./CompanyFooter.css";
import CompanyModel from "../models/company";

interface Props {
  company: CompanyModel;
}

const MAX_LINES = 100;

const CompanyFooter = (props: Props) => {
  const [readMore, setReadMore] = useState(false);

  const shortText = props.company.text.substring(0, MAX_LINES);
  const fullText = props.company.text.substring(MAX_LINES);

  const extraContent = <p className="extra-content">{fullText}</p>;

  const linkName = readMore ? "Read Less" : "Read More";

  return (
    <div className="company-footer-container">
      <h1 className="company-footer-company-name">{props.company.name}</h1>
      <div className="company-footer-description-container">
        <p className="company-footer-short-description">{shortText}</p>
        {readMore && extraContent}
        {props.company.text.length > MAX_LINES && (
          <button
            className="read-more-link"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {linkName}
          </button>
        )}
      </div>
    </div>
  );
};

export default CompanyFooter;
