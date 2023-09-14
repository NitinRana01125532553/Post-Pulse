import React from 'react'
import Card from './Card';

function Store({shirts, shoes, pants}) {
  return (
    <div className="min-h-screen px-14 py-6">
      <h1 className="text-2xl font-bold mb-6">Shirts</h1>
      <div className="flex flex-row gap-6 overflow-x-scroll mb-14">
        {shirts.map((item, idx) => (
          <Card
            key={idx}
            title={item.title}
            desc={item.desc}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
      <h1 className="text-2xl font-bold mb-6">Shoes</h1>
      <div className="flex flex-row gap-8 overflow-x-scroll mb-14">
        {shoes.map((item, idx) => (
          <Card
            key={idx}
            title={item.title}
            desc={item.desc}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
      <h1 className="text-2xl font-bold mb-6">Pants</h1>
      <div className="flex flex-row gap-8 overflow-x-scroll">
        {pants.map((item, idx) => (
          <Card
            key={idx}
            title={item.title}
            desc={item.desc}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Store