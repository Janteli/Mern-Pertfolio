import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const Contact = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const {contact} = portfolioData;
  
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col  py-4 w-2/3">
          <p className="text-tertiary">{"{"}</p>
          <div className="ml-5">
            {Object.keys(contact).map((key) => {
              return key !== "_id" &&
               (
                <p key={key} ml-5>
                  <span className="text-tertiary">{key} :</span>{" "}
                  <span className="text-tertiary">{contact[key]}</span>
                </p>
              );
            })}
          </div>
          <p className="text-tertiary">{"}"}</p>
        </div>
        <div className="h-[300px] sm:h-[250px]">
          <lottie-player
            src="https://lottie.host/b8c82ab0-35cb-47d2-8f75-ffe151e9f058/P1ccuZEKmk.json"
            background="#071A31"
            speed="1"
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default Contact;
