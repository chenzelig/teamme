import React, { useEffect, useState } from "react";

import "./Company.css";

import CompayModel from "../models/company";
import CompanyHeader from "./CompanyHeader";
import CompanyVideo from "./CompanyVideo";
import ApplyButton from "./ApplyButton";
import CompanyFooter from "./CompanyFooter";
import { observer } from "mobx-react-lite";
import { useCompaniesStore } from "../context/CompaniesContext";

interface Props {
  company: CompayModel;
  isSelected?: boolean;
  index: number;
}

const Company = observer(({ company, isSelected, index }: Props) => {
  const [shoudRender, setShouldRender] = useState(false);

  const { currentIndex } = useCompaniesStore();

  useEffect(() => {
    const shouldDislayItem = Math.abs(currentIndex - index) <= 2;
    setShouldRender(shouldDislayItem);
  }, [currentIndex, index]);

  if (!shoudRender) {
    return <div className="company" />;
  }

  return (
    <div className="company">
      <CompanyHeader company={company} />
      <div className="company-main-container">
        <CompanyVideo
          index={index}
          src={company.video}
          isSelected={isSelected}
        />
        <ApplyButton url={company.url} />
      </div>
      <CompanyFooter company={company} />
    </div>
  );
});

export default Company;
