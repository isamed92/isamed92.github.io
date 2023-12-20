import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Title } from '.';
import { Message } from '../helpers';

export const AboutMe: React.FC = () => {
  return (
    <div className='mt-3'>
      <Container>
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
              <img
                src='assets/sign.png'
                alt='sign'
                width={200}
                className='align-self-end'
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
