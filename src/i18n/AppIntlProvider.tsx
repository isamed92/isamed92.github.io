import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './locales';
import { messages } from './messages';
import { CustomNavbar } from '../components';

interface AppIntlProviderProps {
  children: React.ReactNode;
}

export const AppIntlProvider: React.FC<AppIntlProviderProps> = ({
  children,
}) => {
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
      {children}
    </IntlProvider>
  );
};
