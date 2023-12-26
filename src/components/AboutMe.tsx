import React from 'react';
import { Card } from 'react-bootstrap';
import { Title } from '.';
import { Message } from '../helpers';
import { useIntl } from 'react-intl';

export const AboutMe: React.FC = () => {
  const intl = useIntl();

  return (
    <Card className='about-card'>
      <Card.Body>
        <Card.Title>
          <Title id='aboutTitle' />
        </Card.Title>
        <Card.Text className='d-flex flex-column'>
          <span>
            &emsp;&ensp;
            <Message id='aboutText1' />
          </span>
          <span>
            &emsp;&ensp;
            <Message id='aboutText2' />
          </span>
          {intl.locale === 'en-US' && (
            <img
              src='assets/sign-alter.png'
              alt='sign'
              width={200}
              className='align-self-end'
            />
          )}
          {intl.locale === 'es-ES' && (
            <img
              src='assets/sign.png'
              alt='sign'
              width={200}
              className='align-self-end'
            />
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
