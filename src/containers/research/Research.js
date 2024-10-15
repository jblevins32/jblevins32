import React, {useContext} from "react";
import "./Research.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {research} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (!research.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="research">
        <div className="research-main-div">
          <div className="research-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading research-heading"
                  : "heading research-heading"
              }
            >
              {research.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {research.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {research.achievementsCards.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
