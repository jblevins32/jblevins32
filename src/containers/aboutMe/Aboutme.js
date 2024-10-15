import React, {useContext} from "react";
import "./Aboutme.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, aboutMe} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie_aboutme";
import StyleContext from "../../contexts/StyleContext";

export default function About() {
  const {isDark} = useContext(StyleContext);
  if (!aboutMe.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="aboutMe">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="aboutMe-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {aboutMe.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle aboutMe-text-subtitle"
                  : "subTitle aboutMe-text-subtitle"
              }
            >
              {aboutMe.subTitle}
            </p>
            {/* <SoftwareSkill /> */} 
            <div>
              {aboutMe.skills.map((aboutme, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle aboutMe-text"
                        : "subTitle aboutMe-text"
                    }
                  >
                    {aboutme}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
