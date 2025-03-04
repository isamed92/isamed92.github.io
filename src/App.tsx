import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES, messages } from './i18n';
import { CustomNavbar, Footer } from './components';

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

      <Footer />
    </IntlProvider>
  );
}

export default App;
