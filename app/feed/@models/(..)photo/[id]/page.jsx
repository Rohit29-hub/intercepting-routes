import Model from "@/components/Model";
import React from "react";
import images from "../../../../../data/image.json";
import '../../../../globals.css'
const Photo = ({ params }) => {
  const img = images.find((img) => img.id === params.id);
  return (
    <Model>
      <div className="w-full h-full">
        <img className="w-full h-full object-contain" src={img.img} alt="" srcset="" />
      </div>
    </Model>
  );
};

export default Photo;
