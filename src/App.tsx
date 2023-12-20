import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES, messages } from './i18n';
import { CustomNavbar, AboutMe } from './components';

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
      <AboutMe />
    </IntlProvider>
  );
}

export default App;
