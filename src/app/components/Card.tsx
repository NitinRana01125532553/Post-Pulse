import Link from 'next/link';
import React from 'react';

function Card({title, price, image, desc}) {
  return (
    <div>
      <div>
        <div className="w-60 text-black gap-1 flex flex-col flex-wrap">
          <Link href="#" className="hover:cursor-pointer h-50">
            <img
              className="rounded-xl hover:rounded-none h-80 object-cover transition-all duration-300"
              src={image}
            ></img>
          </Link>
          <Link href="#" className="hover:cursor-pointer mt-2">
            <h1 className="font-bold">{title}</h1>
          </Link>
          <Link href="#" className="hover:cursor-pointer">
            <p className="">{desc}</p>
          </Link>
          <Link href="#" className="hover:cursor-pointer">
            <p className="text-black">{price}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card