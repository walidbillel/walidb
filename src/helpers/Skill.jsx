import React from 'react';

const Skill = ({ skillIcon, skillName, color }) => {
  return (
    <div className="skill">
      <div style={{ color: color }} className="skill__icon">
        {' '}
        {skillIcon}
      </div>
      <div className="skill__name"> {skillName}</div>
    </div>
  );
};

export default Skill;
