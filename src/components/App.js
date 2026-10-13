import React, { useState, useEffect } from "react";
import './../styles/App.css';

const images = [
  "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem/image/mq6-0-image-20220419101504/01-mercedes-benz-the-new-eqs-suv-x296-2021-1080x1350.jpeg",
  "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem_546277676/image/mq6-0-image-20220819111550/02-mercedes-benz-the-new-eqs-suv-x296-2021-1680x1680.jpeg",
  "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem_354875624/image/mq6-0-image-20220419101505/03-mercedes-benz-the-new-eqs-suv-x296-2021-1680x1680.jpeg",
];

const App = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return (
    <div>
      {/* Do not remove the main div */}
      <img
        src={images[index]}
        alt={`Mercedes EQS SUV ${index + 1}`}
        style={{ width: "100%", maxWidth: "600px" }}
      />
    </div>
  );
};

export default App;