import React, { useEffect, useState } from "react";
import CasePreview from "./CasePreview";
import { Cases } from "../types/Case";
import casesData from "../assets/cases.json";

const CasesList = () => {
  const [casesList, setCasesList] = useState<Cases | null>(null);

  useEffect(() => {
    if (!casesList) {
      setCasesList(casesData.cases as Cases);
    }
  }, []);
  return (
    <div className="px-4 grid grid-cols-1 md:grid-cols-2 w-full">
      {casesList?.map((workCase, index) => {
        return <CasePreview {...workCase} key={`case-${index}`} />;
      })}
    </div>
  );
};

export default CasesList;
