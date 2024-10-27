import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Product = () => {
  const { product } = config;
  const [firstItem] = product.items;
  const downloadURL =
    'https://drive.google.com/uc?id=1KhY6kqagczQ4jngia-drpvL4iRpPHoHt';

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        {/* <div className={`flex flex-wrap w-full`}> */}
        <div className={`w-full text-center p-6 mt-2`}>
          <h3 className={`text-3xl text-gray-800 font-bold leading-none mb-3`}>
            {firstItem?.title}
          </h3>

          {/* Download Button */}
          <a
            href={downloadURL}
            download
            className={`mt-4 inline-block bg-primary text-white py-2 px-20 rounded`}
          >
            Download Extension
          </a>
        </div>

        {/* </div> */}
      </div>
    </section>
  );
};

export default Product;
