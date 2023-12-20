import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES, messages } from './i18n';
import { CustomNavbar, AboutMe, Skills } from './components';
import { Message } from './helpers';

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
        <Message id='currentProfile' />
      </h3>
      <AboutMe />

      <Skills />
    </IntlProvider>
  );
}

export default App;
