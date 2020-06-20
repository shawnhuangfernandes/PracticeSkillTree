import React from 'react';
import './Tree.scss';
import {availableSkills} from "../../availableSkills";
import Skill from '../Skill/Skill';

const Tree = () => {
    return (
        <div id="tree">
            {availableSkills.map((skill, index) => {
                return <Skill key={skill.id} skill={skill}/>
            })}
        </div>
    );
};

export default Tree;