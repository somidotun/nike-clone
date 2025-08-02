import airJordan from "./pictures/airJordan.jpg";
import zoom from "./pictures/zoom.jpg";
import shoe from "./pictures/shoe.jpg";
import jacket from "./pictures/jacket.jpg";
import cap from "./pictures/cap.jpg";
import basketball from "./pictures/basketball.jpg";
import airMax from "./pictures/airMax.jpg";
import air from "./pictures/air.jpg";
import PriceProp from "./priceProp.tsx/priceProp";

const Buy = () => {
  const products = [
    {
      id: 1,
      name: "Air Jordan",
      image: air,
      price: 79.99,
      altText: "Air Jordan shoes",
    },
    {
      id: 2,
      name: "Air Max",
      image: airMax,
      price: 79.99,
      altText: "Air Max shoes",
    },
    {
      id: 3,
      name: "Basketball",
      image: basketball,
      price: 29.99,
      altText: "Professional basketball",
    },
    { id: 4, name: "Cap", image: cap, price: 24.99, altText: "Sports cap" },
    {
      id: 5,
      name: "Jacket",
      image: jacket,
      price: 89.99,
      altText: "Sports jacket",
    },
    {
      id: 6,
      name: "Running Shoe",
      image: shoe,
      price: 69.99,
      altText: "Running shoes",
    },
    {
      id: 7,
      name: "Zoom",
      image: zoom,
      price: 79.99,
      altText: "Zoom sports shoes",
    },
    {
      id: 8,
      name: "Classic Air",
      image: airJordan,
      price: 99.99,
      altText: "Classic Air Jordan shoes",
    },
  ];

  return (
    <div className="py-4 px-3">
      <h1 className="text-3xl font-bold py-4 uppercase">Top offers for you</h1>

      <div className="flex overflow-x-scroll gap-3 pb-4 whitespace-nowrap scroll-smooth">
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0">
            <PriceProp
              image={product.image}
              altText={product.altText}
              id={product.id}
              name={product.name}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;
