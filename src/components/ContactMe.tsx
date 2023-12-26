import React from 'react';
import { Title } from '.';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useIntl } from 'react-intl';

export const ContactMe: React.FC = () => {
  const intl = useIntl();

  const whatsappText = intl.formatMessage({ id: 'whatsappText' });
  const socialMediaLinks = [
    {
      icon: 'assets/linkedin.svg',
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/isaias-medina/',
    },
    {
      icon: 'assets/github.svg',
      name: 'Github',
      link: 'https://github.com/isamed92',
    },
    {
      icon: 'assets/whatsapp.svg',
      name: 'Whatsapp',
      link: `https://wa.me/5493816152792?${whatsappText}`,
    },
    {
      icon: 'assets/envelope-regular.svg',
      name: 'isamed92@gmail.com',
      link: 'mailto:isamed92@gmail.com',
    },
  ];

  return (
    <Card className='about-card'>
      <Card.Body>
        <Card.Title>
          <span>
            <Title id='contactMe' />
          </span>
        </Card.Title>
        <Card.Text className='d-flex flex-column align-items-center'>
          <Container>
            {socialMediaLinks.map((socialMedia, index) => (
              <Row key={index}>
                <Col xs={1}>
                  <img src={socialMedia.icon} alt={socialMedia.name} />
                </Col>
                <Col xs={11}>
                  <a
                    href={socialMedia.link}
                    target='_blank'
                    className='link-opacity-50-hover contact-link'
                  >
                    {socialMedia.name}
                  </a>
                </Col>
              </Row>
            ))}
          </Container>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
