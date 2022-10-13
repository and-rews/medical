import React from "react";
import items from "../../items";
import Card from "./Card";

const HeroCard = () => {
  return (
    <div className="hero-card">
      <Card
        icon={items[0].icon}
        title={items[0].title}
        subTitle={items[0].subTitle}
      />
      <Card
        icon={items[1].icon}
        title={items[1].title}
        subTitle={items[1].subTitle}
      />
      <Card
        icon={items[2].icon}
        title={items[2].title}
        subTitle={items[2].subTitle}
      />
      <Card
        icon={items[3].icon}
        title={items[3].title}
        subTitle={items[3].subTitle}
      />
      <Card
        icon={items[4].icon}
        title={items[4].title}
        subTitle={items[4].subTitle}
      />
    </div>
  );
};

export default HeroCard;
