import React from "react";
import { type PricingCardModel } from "types";

import Carditem from "./Carditem";

interface PricingCardProps {
  item: PricingCardModel;
}

const PricingCard: React.FC<PricingCardProps> = ({ item }) => {
  return (
    <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-900 bg-white p-6 text-center text-gray-900 shadow dark:border-gray-100  dark:bg-gray-800 dark:text-white xl:p-8">
      <h3 className="mb-4 text-2xl font-semibold">{item.plan}</h3>
      <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
        {item.description}
      </p>
      <div className="my-8 flex items-baseline justify-center">
        <span className="mr-2 text-5xl font-extrabold">
          ${item.pricePerMonth}
        </span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {item.features?.map((fitem) => (
          <Carditem featureItem={fitem} key={fitem.id} />
        ))}
      </ul>
      <button
        className={`btn ${
          item.isBusiness ? "btn-primary" : "btn-outline"
        } rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium`}
      >
        {item.buttonName}
      </button>
    </div>
  );
};

export default PricingCard;
