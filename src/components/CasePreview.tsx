import React from "react";

interface Props {
  title: string;
  client: string;
  image: string | null;
}
const CasePreview: React.FC<Props> = ({ title, client, image }) => {
  return (
    <div className={`case p-4 ${!image ? "border-y-2" : ""}`}>
      {image && <img src={image} alt="" />}
      <h5 className="uppercase font-body text-[#939393] text-xs py-4 font-bold">
        {client}
      </h5>
      <h4 className="text-3xl mb-6">{title}</h4>
    </div>
  );
};

export default CasePreview;
