import React, { useEffect } from "react";
import PriceTargetCard from "./price_target_card";
import NewPriceTarget from "./new_price_target";

import {
  getPriceTargets,
  deletePriceTarget,
} from "../../actions/price_targets.js";

const Index = () => {
  let [priceTargets, setPriceTargets] = React.useState([]);

  useEffect(() => {
    getPriceTargets().then((priceTargets) => {
      setPriceTargets(priceTargets);
    });
  }, []);

  const removePriceTarget = (priceTarget_id) => {
    deletePriceTarget(priceTarget_id)
      .then(() => {
        setPriceTargets(
          priceTargets.filter((priceTarget) => {
            return priceTarget._id !== priceTarget_id;
          })
        );
      })
      .catch((error) => console.log(error));
  };

  const addToList = (newPriceTarget) => {
    setPriceTargets([...priceTargets, newPriceTarget]);
  };

  return (
    <>
      <NewPriceTarget updateListCallback={addToList} />
      <section className="price-target-list">
        {priceTargets.map((priceTarget) => {
          return (
            <PriceTargetCard
              key={priceTarget._id}
              {...priceTarget}
              onRemove={removePriceTarget}
            />
          );
        })}
      </section>
      <a href="https://clearbit.com">Logos provided by Clearbit</a>
    </>
  );
};

export default Index;
