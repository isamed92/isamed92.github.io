import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES, messages } from './i18n';
import {
  CustomNavbar,
  AboutMe,
  Skills,
  Footer,
  Space,
  Experience,
  Education,
  ContactMe,
} from './components';
import { Message } from './helpers';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  const handleLocale = () => {
    if (locale === LOCALES.ENGLISH) {
      setLocale(LOCALES.SPANISH);
    } else {
      setLocale(LOCALES.ENGLISH);
    }
  };

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <CustomNavbar setLocale={handleLocale} />
      <Space height={100} />
      <h3 className='text-center mt-2'>
        <span className='bold me-2'>
          <Message id='seniority' />
        </span>
        <Message id='currentProfile' />
      </h3>

      <Container className='mt-3'>
        <Row>
          <Col xs={12} lg={4} className='pt-4'>
            <AboutMe />
          </Col>
          <Col xs={12} lg={4} className='pt-4'>
            <ContactMe />
          </Col>
        </Row>
      </Container>
      <Space height={50} />
      <Container className='p-2'>
        <Row>
          <Col xs={12} lg={4} className=''>
            <Experience />
          </Col>
          <Col xs={12} lg={3} className=''>
            <Education />
          </Col>
          <Col xs={12} lg={5} className=''>
            <Skills />
          </Col>
        </Row>
      </Container>

      <Space height={900} />

      <Footer />
    </IntlProvider>
  );
}

export default App;
