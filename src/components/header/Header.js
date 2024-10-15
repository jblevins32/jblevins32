import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection,
  educationInfo,
  research,
  bigProjects,
  podcastSection,
  aboutMe
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;
  const viewEducation = educationInfo.display;
  const viewResearch = research.display;
  const viewProjects = bigProjects.display;
  const viewPodcasts = podcastSection.display;
  const viewAboutMe = aboutMe.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <img 
          src={require('../../assets/images/pfp.jpg')}
          alt="Profile" 
          className="profile-picture" 
        />
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewAboutMe && (
            <li>
              <a href="#aboutMe">About Me</a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {viewResearch && (
            <li>
              <a href="#research">Research</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experience</a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills">Skill Set</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Awards</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">EXTRA</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">EXTRA</a>
            </li>
          )}
          {viewPodcasts && (
            <li>
              <a href="#podcast">EXTRA</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
