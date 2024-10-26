import React from "react";

import HeaderSection from "@/components/HeaderSection";
import { data } from "@/data";

const Entertainment = () => {
  return (
    <section className="space-y-4">
      <HeaderSection
        bgColor="bg-red-700"
        hoverColor="hover:text-red-600"
        title="Entertainment"
      />
      {/* 1 Row  2 Card */}
      <div className="mx-4 grid grid-cols-2 gap-4 h-[20vw] overflow-hidden">
        {data.map((card, index) => (
          <div key={card.id}>
            {index < 2 ? (
              <div className="flex gap-2 shadow-2xl rounded-md overflow-hidden">
                <img
                  className="w-[70%] object-cover object-center"
                  src={card.imageUrl}
                />
                <h2 className="p-4">{card.title}</h2>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      {/* 4 Colum */}
      <div className="mx-4 grid grid-cols-4 gap-4">
        {data.map((card, index) => (
          <>
            {index > 2 && index <= 6 ? (
              <div
                key={index}
                className="max-h-[25vw] rounded-md overflow-hidden shadow-2xl"
              >
                <img src={card.imageUrl} />
                <h2 className="p-4 ">{card.title}</h2>
              </div>
            ) : null}
          </>
        ))}
      </div>
    </section>
  );
};

export default Entertainment;
