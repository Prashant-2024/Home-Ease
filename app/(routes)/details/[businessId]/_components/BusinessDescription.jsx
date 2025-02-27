import Image from "next/image";
import React from "react";

const BusinessDescription = ({ business }) => {
  return (
    business?.name && (
      <div>
        <h2 className="font-bold text-[25px]">Description</h2>
        <p className="mt-4 text-gray-600 text-lg">{business?.about}</p>
        <h2 className="font-bold text-[25px]">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
          {business?.images?.map((image, index) => (
            <Image
              src={image?.url}
              key={index}
              alt="image"
              width={700}
              height={200}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
    )
  );
};

export default BusinessDescription;
