import Banner from "@/components/Banner/Banner";
import Client from "@/components/Client";
import Feature from "@/components/Features/Feature";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/navbar/Header";
import Hero from "@/components/Hero/HomeHero";

export default function Home() {
  return (
    <>
      <Banner />
      <Header />
      <Hero />
      <Client />
      <Feature />
      <Footer />
    </>
  );
}
