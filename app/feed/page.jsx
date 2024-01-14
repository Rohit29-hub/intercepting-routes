import React from "react";
import "../globals.css";
import Link from "next/link";
import images from '../../data/image.json'
const FeedPage = () => {
  return (
    <div className="w-full h-screen p-3">
      <div className="w-full h-full bg-black grid grid-cols-4 p-1 gap-1 grid-rows-2 rounded">
        {images.map((img) => (
          <Link
          key={img.id}
            href={`/photo/${img.id}`}
            shallow
            className="w-full h-full bg-red-400 col-span-1 row-span-1 flex items-center justify-center text-2xl font-bold"
          >
            <img className="w-full h-full object-cover" src={img.img} alt="" loading="lazy" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
