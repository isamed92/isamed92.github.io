import { HashRouter, Routes, Route } from 'react-router-dom';
import { BlogScreen } from '../blog';
import { HomeScreen } from '../screens/HomeScreen';
import { useState } from 'react';
import { LOCALES, messages } from '../i18n';
import { CustomNavbar, Footer } from '../components';
import { IntlProvider } from 'react-intl';

export const AppHashRouter = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  const handleLocale = () => {
    if (locale === LOCALES.ENGLISH) {
      setLocale(LOCALES.SPANISH);
    } else {
      setLocale(LOCALES.ENGLISH);
    }
  };
  return (
    <HashRouter>
      <IntlProvider
        messages={messages[locale]}
        locale={locale}
        defaultLocale={LOCALES.ENGLISH}
      >
        <CustomNavbar setLocale={handleLocale} />
        <Routes>
          <Route path='' element={<HomeScreen />} />
          <Route path='blog' element={<BlogScreen />} />
        </Routes>
        <Footer />
      </IntlProvider>
    </HashRouter>
  );
};
