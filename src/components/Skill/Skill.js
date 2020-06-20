import React, {useState} from 'react';
import './Skill.scss';

const Skill = ({ skill }) => {
    const [skillData, setSkillData] = useState(skill);
    
    return (
        <div className="skill" onClick={() => {
            let newLevel = skillData.level < 5 ? skillData.level + 1 : skillData.level;
            setSkillData({...skillData, level: newLevel})
        }}>
            <img className="skillImages" src={skillData.skillBackground} />
            <img className="skillImages" src={skillData.skillIcon} />
            <h2 className="levelIndicator">{skillData.level}/5</h2>
            <h2 className="skillName">{skillData.name}</h2>
            <h2 className="tooltip">{skillData.description}</h2>
        </div>
    );
};

export default Skill;