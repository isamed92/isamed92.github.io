import React from 'react';
import { Message } from '../helpers';
import { useIntl } from 'react-intl';
import { LOCALES } from '../i18n';
interface LocaleButtonProps {
  setLocale: () => void;
}
export const LocaleButton: React.FC<LocaleButtonProps> = ({ setLocale }) => {
  const { locale } = useIntl();

  return (
    <div>
      <button
        onClick={setLocale}
        className={`locale-button ${locale === LOCALES.ENGLISH ? 'en' : 'es'}`}
      >
        <div className='locale-button-text'>
          <Message id='locale' />
        </div>
      </button>
    </div>
  );
};
