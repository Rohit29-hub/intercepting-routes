import React from "react";
import "../../globals.css";
import images from '../../../data/image.json'
const Photo = ({ params }) => {
    const img = images.find((img) => img.id === params.id);
  return (
    <div className="w-full h-screen p-2">
      <img className="w-full h-full object-contain" src={img.img} alt=""/>
    </div>
  );
};

export default Photo;
