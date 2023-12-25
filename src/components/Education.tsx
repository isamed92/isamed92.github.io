import React from 'react';
import { Message } from '../helpers';
import { Title } from '.';

interface Study {
  school: string;
  carrer: string;
  average: string;
  duration: string;
}

const utn = {
  school: 'Universidad Tecnológica Nacional - Facultad Regional Tucumán',
  carrer: 'utnCarrer',
  average: '8.5',
  duration: 'utnDuration',
};

const cef = {
  school: 'CEF - San Francisco',
  carrer: 'cefCarrer',
  average: '7.5',
  duration: 'cefDuration',
};

const studies: Study[] = [utn, cef];

export const Education: React.FC = () => {
  return (
    <>
      <div className='experience_title'>
        <Title id='educationTitle' />
      </div>
      <br />

      {studies.map((study) => (
        <div key={study.carrer}>
          <h5 className='bold'>
            <Message id={study.carrer} />
          </h5>
          <p>
            <Message id={study.duration} />
          </p>
          {study.school}
          <p>
            <Message id={'averageTitle'} />: {study.average}
          </p>
          <hr />
        </div>
      ))}
    </>
  );
};
