import Head from "next/head";
import { type LayoutChildren } from "@nearbyevcharging.com/types";
import DashboardComponent from "~/components/Dashboard/Dashboard";
import LayoutChild from "~/components/Layout";

const Home = () => {
  return (
    <>
      <Head>
        <title>Welcome Electric Vehicle Console App</title>
        <meta
          name="description"
          content="Welcome Electric Vehicle Console App"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutChild childern={<DashboardComponent />} />
    </>
  );
};
Home.layout = ({ children }: LayoutChildren) => (
  <div className="min-w-screen min-h-screen">{children}</div>
);

export default Home;
