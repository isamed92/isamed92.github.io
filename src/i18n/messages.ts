import { LOCALES } from './locales';

interface IMessages {
  [key: string]: {
    locale: string;
    title: string;
    description: string;
  };
}

export const messages: IMessages = {
  [LOCALES.ENGLISH]: {
    locale: 'EN',
    title: 'Hello, World!',
    description: 'This is a simple example of React Intl.',
  },
  [LOCALES.SPANISH]: {
    locale: 'ES',
    title: '¡Hola, Mundo!',
    description: 'Este es un ejemplo sencillo de React Intl.',
  },
};
