import React from "react";
import Head from "next/head";

import Banner from "~/components/Banner/Banner";
import Footer from "~/components/Footer/Footer";
import Header from "~/components/navbar/Header";

const Product = () => {
  return (
    <>
      <Head>
        <title>Product | Empowering Mobility through Electric Vehicles</title>
        <meta
          name="description"
          content="Product | Empowering Mobility through Electric Vehicles"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Header />
      <Footer />
    </>
  );
};

export default Product;
