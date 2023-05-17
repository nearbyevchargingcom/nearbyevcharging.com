import React from "react";
import { type PricingCardModel } from "types";

import PricingCard from "./PricingCard";

const pricingCards: PricingCardModel[] = [
  {
    id: "starter",
    plan: "Starter",
    description: "Best option for personal use & for your next project.",
    pricePerMonth: "29",
    pricePerYearly: "299",
    buttonName: "Buy",
    features: [
      {
        id: "0",
        featureName: "Individual configuration",
      },
      {
        id: "1",
        featureName: "No setup, or hidden fees",
      },
      {
        id: "2",
        featureName: "Team size: 1 developer",
      },
      {
        id: "3",
        featureName: "Premium support: 6 months",
      },
      {
        id: "4",
        featureName: "Free updates: 6 months",
      },
    ],
  },
  {
    id: "Developer",
    plan: "Developer",
    description: "Relevant for multiple users, extended & premium support.",
    pricePerMonth: "99",
    pricePerYearly: "999",
    buttonName: "Start a free trial",
    features: [
      {
        id: "0",
        featureName: "Individual configuration",
      },
      {
        id: "1",
        featureName: "No setup, or hidden fees",
      },
      {
        id: "2",
        featureName: "Team size: 10 developer",
      },
      {
        id: "3",
        featureName: "Premium support: 12 months",
      },
      {
        id: "4",
        featureName: "Life time updates",
      },
    ],
  },
  {
    id: "Enterprise",
    plan: "Enterprise",
    isBusiness: true,
    description:
      "Best for large scale uses and extended redistribution rights.",
    pricePerMonth: "499",
    pricePerYearly: "4999",
    buttonName: "Contact Sales",
    features: [
      {
        id: "0",
        featureName: "Individual configuration",
      },
      {
        id: "1",
        featureName: "No setup, or hidden fees",
      },
      {
        id: "2",
        featureName: "Team size: 100+ developer",
      },
      {
        id: "3",
        featureName: "Premium support: 12 months",
      },
      {
        id: "4",
        featureName: "Life time updates",
      },
    ],
  },
];

const PricingComponent = () => {
  return (
    <>
      <section className="relative isolate bg-white px-6 pt-14 dark:bg-gray-900 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-screen-xl  py-8 px-4 lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-md text-center  lg:my-20">
            <h2 className="mb-4 text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Affordable Rates for Exceptional Service
            </h2>
            <p className="mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
              Transparent pricing options tailored to your needs, ensuring
              cost-effectiveness and value without compromising on quality.
            </p>
          </div>
          <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
            {pricingCards.map((item) => (
              <PricingCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingComponent;
