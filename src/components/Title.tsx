import React from 'react';
import { Message } from '../helpers';
import { useIntl } from 'react-intl';

type TitleProps = {
  id: string;
  size?: 'small' | 'medium' | 'large';
};

export const Title: React.FC<TitleProps> = ({ id, size = 'medium' }) => {
  const intl = useIntl();

  let fontSize = '1.5rem';

  if (size === 'small') {
    fontSize = '1rem';
  } else if (size === 'large') {
    fontSize = '2rem';
  }

  return (
    <div style={{ fontSize }} className='title'>
      <div className='title-text'>
        <Message id={id} />
      </div>
      <div
        className='rectangle'
        style={{ backgroundColor: intl.formatMessage({ id: 'color' }) }}
      />
    </div>
  );
};
