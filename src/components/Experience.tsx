import React from 'react';
import { Title } from '.';
import { Message } from '../helpers';

interface Experience {
  company: string;
  position: string;
  description: string;
  duration: string;
}

const genube = {
  company: 'Genube',
  position: 'Mobile Software Developer',
  description: 'genubeDescription',
  duration: 'genubeDuration',
};

const ntt: Experience = {
  company: 'NTT Data',
  position: 'Senior Software Engineer',
  description: 'nttDescription',
  duration: 'nttDuration',
};

const tani = {
  company: 'Freelance',
  position: 'Software Engineer',
  description: 'taniDescription',
  duration: 'taniDuration',
};

const cpa = {
  company: 'Caja Popular de Ahorros de Tucumán',
  position: 'Full Stack Developer',
  description: 'cpaDescription',
  duration: 'cpaDuration',
};

const utnMoodle = {
  company: 'UTN',
  position: 'Moodle Developer',
  description: 'moodleDescription',
  duration: 'moodleDuration',
};

const rolling = {
  company: 'Rolling Code School',
  position: 'Mentor Full Stack',
  description: 'rollingDescription',
  duration: 'rollingDuration',
};

const experiences: Experience[] = [ntt, genube, tani, cpa, rolling, utnMoodle];

export const Experience: React.FC = () => {
  return (
    <div>
      <Title id='experienceTitle' />
      <br />
      {experiences.map((experience, index) => (
        <div key={index}>
          <h5 className='experience_title'>{experience.company}</h5>
          <span className='experience_duration'>
            <Message id={experience.duration} />
          </span>

          <p>{experience.position}</p>
          <p>
            <Message id={experience.description} />
          </p>
        </div>
      ))}
    </div>
  );
};
