import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { LOCALES, messages } from './i18n';

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <Container>
        <h1>
          <FormattedMessage id='title' />
        </h1>
        <p>
          <FormattedMessage id='description' />
        </p>
      </Container>
      <Container>
        <Button onClick={() => setLocale(LOCALES.ENGLISH)} className='mx-2'>
          English
        </Button>

        <Button onClick={() => setLocale(LOCALES.SPANISH)} className='mx-2'>
          Spanish
        </Button>
      </Container>
    </IntlProvider>
  );
}

export default App;
