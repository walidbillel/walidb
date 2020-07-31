import React from 'react';
import Skill from '../../helpers/Skill';
import { FaShopify } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import {
  DiMongodb,
  DiPhotoshop,
  DiIllustrator,
  DiHtml5,
  DiCss3Full,
  DiNodejs,
  DiJavascript1,
  DiReact,
  DiMysql,
  DiNpm,
  DiGit,
  DiJqueryLogo,
  DiHeroku,
} from 'react-icons/di';

const skillsData = [
  {
    skillName: 'JavaScript',
    skillIcon: <DiJavascript1 className="tech-icons" />,
    color: ' #FFFF00 ',
  },

  {
    skillName: 'HTML5',
    skillIcon: <DiHtml5 className="tech-icons" />,
    color: '#FF4500 ',
  },
  {
    skillName: 'CSS3',
    skillIcon: <DiCss3Full className="tech-icons" />,
    color: ' #09B3FF ',
  },
  {
    skillName: 'jQuery',
    skillIcon: <DiJqueryLogo className="tech-icons" />,
    color: ' #514E9A ',
  },
  {
    skillName: 'Node JS',
    skillIcon: <DiNodejs className="tech-icons" />,
    color: '#05B459 ',
  },
  {
    skillName: 'NPM',
    skillIcon: <DiNpm className="tech-icons" />,
    color: '#D83D07 ',
  },
  {
    skillName: 'React JS',
    skillIcon: <DiReact className="tech-icons" />,
    color: ' #6AA1F9 ',
  },
  {
    skillName: 'Mongo DB',
    skillIcon: <DiMongodb className="tech-icons" />,
    color: '#0DB806 ',
  },
  {
    skillName: 'MySQL',
    skillIcon: <DiMysql className="tech-icons" />,
    color: '#0170FA ',
  },
  {
    skillName: 'Shopify',
    skillIcon: <FaShopify className="tech-icons" />,
    color: '#01C332 ',
  },
  {
    skillName: 'Git',
    skillIcon: <DiGit className="tech-icons" />,
    color: '#B0E711 ',
  },
  {
    skillName: 'Heroku',
    skillIcon: <DiHeroku className="tech-icons" />,
    color: '#0813A4 ',
  },
  {
    skillName: 'Illustrator',
    skillIcon: <DiIllustrator className="tech-icons" />,
    color: '#FEB500 ',
  },
  {
    skillName: 'Photoshop',
    skillIcon: <DiPhotoshop className="tech-icons" />,
    color: '#022D68 ',
  },
  {
    skillName: 'Figma',
    skillIcon: <FiFigma className="tech-icons" />,
    color: '#473660 ',
  },
];

const Skills = () => (
  <section className="skills">
    <div className="skills__title">
      <h2>Skills</h2>
    </div>
    <div className="skills__techs">
      {skillsData.map((skill, i) => (
        <Skill
          key={i}
          skillIcon={skill.skillIcon}
          skillName={skill.skillName}
          color={skill.color}
        />
      ))}
    </div>
  </section>
);

export default Skills;
