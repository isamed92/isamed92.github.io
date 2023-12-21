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
      <h3 className='text-center mt-3'>
        <span className='bold me-2'>
          <Message id='seniority' />
        </span>
        <Message id='currentProfile' />
      </h3>

      <Container>
        <Row>
          <Col>
            <AboutMe />
          </Col>
          <Col>
            <Skills />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Experience />
          </Col>
        </Row>
      </Container>

      <Space height={900} />

      <Footer />
    </IntlProvider>
  );
}

export default App;
