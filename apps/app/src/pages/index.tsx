import Head from "next/head";
import {type LayoutChildren} from "@nearbyevcharging.com/types"
import Banner from "~/components/Banner/Banner";
import Client from "~/components/Client";
import Feature from "~/components/Features/Feature";
import Footer from "~/components/Footer/Footer";
import Hero from "~/components/Hero/HomeHero";
import Header from "~/components/navbar/Header";

const Home = () => {
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
      <Hero />
      <Client />
      <Feature />
      <Footer />
    </>
  );
};

Home.layout = ({ children }: LayoutChildren) => (
  <div className="min-w-screen min-h-screen">{children}</div>
);

export default Home;
