import { useState } from "react";

const FeedbackCard = ({ content, name, title, img, truncateContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex justify-between flex-col p-10 rounded-[20px] bg-white max-w-[370px] w-full md:mr-10 sm:mr-5 mr-0 my-5">
      <p
        className={`font-poppins font-normal text-[18px] leading-[32.4px] text-black my-10 ${
          !isExpanded && truncateContent ? "line-clamp-2" : ""
        }`}
        onClick={toggleExpand}
        style={{ cursor: truncateContent ? "pointer" : "default" }}
      >
        {content}
      </p>

      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-black">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-gray-500">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
