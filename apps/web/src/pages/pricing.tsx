import React from "react";
import Head from "next/head";
import { type LayoutChildren } from "@nearbyevcharging.com/types";
import Banner from "~/components/Banner/Banner";
import Footer from "~/components/Footer/Footer";
import PricingComponent from "~/components/Pricing/PricingComponent";
import Header from "~/components/navbar/Header";

const Pricing = () => {
  return (
    <>
      <Head>
        <title>
          EV Electric Vehicle Charging | Empowering Mobility through Electric
          Vehicles
        </title>
        <meta
          name="description"
          content="EV Electric Vehicle Charging | Empowering Mobility through Electric
            Vehicles"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Header />
      <PricingComponent />
      <Footer />
    </>
  );
};

Pricing.layout = ({ children }: LayoutChildren) => (
  <div className="min-w-screen min-h-screen">{children}</div>
);

export default Pricing;
