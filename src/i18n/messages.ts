import { LOCALES } from './locales';

interface IMessages {
  [key: string]: {
    locale: string;
    aboutTitle: string;
    aboutText1: string;
    aboutText2: string;
    currentProfile: string;
    skillsTitle: string;
    skillLevelExpert: string;
    skillLevelAdvance: string;
    skillLevelIntermediate: string;
    skillLevelBeginner: string;
  };
}

export const messages: IMessages = {
  [LOCALES.ENGLISH]: {
    locale: 'EN',
    currentProfile: 'Frontend/Mobile Developer',
    aboutTitle: 'About me',
    aboutText1:
      'A passionate software developer (web and mobile). I really enjoy teamwork in IT projects where I seek to deliver quality products with confidence, a sense of belonging and responsibility.',
    aboutText2:
      'I am looking for a company willing to offer me a position among its developers. In return, I would offer all commitment and ability to be a nice and friendly addition to the team.',
    skillsTitle: 'Skills',
    skillLevelExpert: 'Expert',
    skillLevelAdvance: 'Advance',
    skillLevelIntermediate: 'Intermediate',
    skillLevelBeginner: 'Beginner',
  },
  [LOCALES.SPANISH]: {
    locale: 'ES',
    currentProfile: 'Desarrollador Frontend/Mobile',
    aboutTitle: 'Sobre mí',
    aboutText1:
      'Un apasionado del desarrollo de aplicaciones (web y mobile). Disfruto mucho del trabajo en equipo en proyectos informaticos donde busco entregar productos de calidad con confianza, sentido de pertenencia y responsabilidad.',
    aboutText2:
      'Estoy buscando una empresa dispuesta a ofrecerme una ubicación entre sus desarrolladores. A cambio, ofrecería todo compromiso y capacidad para ser una adición agradable y amigable para el equipo.',
    skillsTitle: 'Habilidades',
    skillLevelExpert: 'Experto',
    skillLevelAdvance: 'Avanzado',
    skillLevelIntermediate: 'Intermedio',
    skillLevelBeginner: 'Principiante',
  },
};
