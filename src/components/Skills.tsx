import React from 'react';
import { Space, Title } from '.';
import { Container } from 'react-bootstrap';
import { Message } from '../helpers';
import { useIntl } from 'react-intl';

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 80 },
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 80 },
  { name: 'React', level: 90 },
  { name: 'Angular 12+', level: 50 },
  { name: 'React Native', level: 70 },
  { name: 'Flutter', level: 80 },
  { name: 'Scrum', level: 90 },
  { name: 'Git', level: 80 },
  { name: 'English', level: 40 },
  { name: 'Spanish', level: 90 },
];

export const Skills: React.FC = () => {
  const intl = useIntl();
  const getText = (level: number) => {
    if (level >= 90) {
      return <Message id='skillLevelExpert' />;
    } else if (level >= 80) {
      return <Message id='skillLevelAdvance' />;
    } else if (level >= 70) {
      return <Message id='skillLevelIntermediate' />;
    } else {
      return <Message id='skillLevelBeginner' />;
    }
  };

  return (
    <Container className='skills-container'>
      <Title id='skillsTitle' />
      <br />
      {skills.map((skill) => (
        <div key={skill.name} className='skill-item'>
          <div className='skill-name'>{skill.name}</div>
          <Space width={10} />
          <div className='skill-level'>
            <div
              className='skill-level-bar'
              style={{
                width: `${skill.level}%`,
                backgroundColor: intl.formatMessage({ id: 'color' }),
              }}
            >
              <div className='skill-inner-text'>{skill.level} %</div>
            </div>
          </div>
          <Space width={10} />
          <div className='skill-level-value'>{getText(skill.level)}</div>
        </div>
      ))}
    </Container>
  );
};
