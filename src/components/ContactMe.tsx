import React from 'react';
import { Title } from '.';
import { Card } from 'react-bootstrap';
import { useIntl } from 'react-intl';

export const ContactMe: React.FC = () => {
  const intl = useIntl();

  const whatsappText = intl.formatMessage({ id: 'whatsappText' });
  const socialMediaLinks = [
    {
      icon: 'assets/location.svg',
      name: 'Tucumán, Argentina',
      link: '',
    },
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
      link: `https://wa.me/5493816152792?text=${whatsappText}`,
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
          <Title id='contactMe' />
        </Card.Title>
        <Card.Text className='d-flex flex-column'>
          {socialMediaLinks.map((socialMedia) => (
            <span key={socialMedia.name}>
              <img src={socialMedia.icon} alt={socialMedia.name} />
              &emsp;
              {socialMedia.link === '' ? (
                <span style={{ fontSize: 14 }}>{socialMedia.name}</span>
              ) : (
                <a
                  href={socialMedia.link}
                  target='_blank'
                  className='link-opacity-50-hover contact-link'
                >
                  {socialMedia.name}
                </a>
              )}
            </span>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
