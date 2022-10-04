import React from "react";

// import sanity client
import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ products, bannerData }) => (
  <div>
    {/* display heroBanner Component here */}
    {/* show the first object in bannerdata */}
    {/* if bannerData.length exist and  the first object of the array*/}
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>
    <div className="products-container">
      {/* Product component here */}
      {/* displays all the products from the sanity dashboard */}
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
    {/* FooterBanner component */}
    {/* if it exist and the first instance */}
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

// whenever app is trying to fetch data from an api(sanity), use the getServerSideProps
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
export default Home;
