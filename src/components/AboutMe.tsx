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
              <Message id='aboutText' />
              <br />
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
