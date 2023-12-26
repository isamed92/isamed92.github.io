import { LOCALES } from './locales';

interface IMessages {
  [key: string]: {
    locale: string;
    aboutTitle: string;
    aboutText1: string;
    aboutText2: string;
    seniority: string;
    currentProfile: string;
    skillsTitle: string;
    skillLevelExpert: string;
    skillLevelAdvance: string;
    skillLevelIntermediate: string;
    skillLevelBeginner: string;
    experienceTitle: string;
    nttDescription: string;
    nttDuration: string;
    taniDescription: string;
    taniDuration: string;
    cpaDescription: string;
    cpaDuration: string;
    genubeDescription: string;
    genubeDuration: string;
    moodleDescription: string;
    moodleDuration: string;
    rollingDescription: string;
    rollingDuration: string;
    utnCarrer: string;
    utnDuration: string;
    cefCarrer: string;
    cefDuration: string;
    averageTitle: string;
    educationTitle: string;
    contactMe: string;
    color: string;
    whatsappText: string;
  };
}

export const messages: IMessages = {
  [LOCALES.ENGLISH]: {
    locale: 'EN',
    seniority: 'Senior',
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
    experienceTitle: 'Experience',
    nttDescription:
      'At NTT, I passionately collaborated with diverse clients to design cutting-edge mobile applications, using React, React Native and Flutter.',
    nttDuration: 'June 22 - Current',
    taniDescription:
      'PWA application for Health Professionals that allows you to keep track of your income and billing. Developed with React, Redux, Firebase, Material UI, among other technologies.',
    taniDuration: 'October 21 - July 22',
    cpaDescription:
      'I contributed to the development of web and desktop applications, focusing on business-oriented solutions in the banking and corporate sectors. My responsibility included the maintenance of VB5, VB6, VBA and React-based programs.',
    cpaDuration: 'December 20 - June 22',
    genubeDescription:
      "I designed and developed a mobile application in React Native that allows parents to efficiently manage all their children's resources in the school environment. I successfully managed the build and deployment process, ensuring the smooth availability of the application in the Android store.",
    genubeDuration: 'September 23 - December 23',
    moodleDescription:
      'I designed a virtual campus platform for the regional headquarters of the National Technological University. Highlighting substantial improvements, I mainly focused on visual modifications using PHP, CSS and HTML.',
    moodleDuration: 'August 17 - December 19',
    rollingDescription:
      'I taught online full-stack web programming classes, covering a curriculum from basic to intermediate levels, to a commission of approximately 25 students.',
    rollingDuration: 'June 20 - September 20',
    utnCarrer: 'Information Systems Engineering',
    utnDuration: '2011 - Present',
    cefCarrer: 'Economic Sciences',
    cefDuration: '1998 - 2010',
    averageTitle: 'Average',
    educationTitle: 'Education',
    contactMe: 'Contact me',
    color: '#7ABD53',
    whatsappText: 'Hi, I am interested in your services',
  },
  [LOCALES.SPANISH]: {
    locale: 'ES',
    seniority: 'Senior',
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
    experienceTitle: 'Experiencia',
    nttDescription:
      'En NTT, colaboré apasionadamente con diversos clientes para diseñar aplicaciones móviles de vanguardia, utilizando React, React Native y Flutter.',
    nttDuration: 'Junio 22 - Actualidad',
    taniDescription:
      'Aplicacion PWA para Profesionales de la salud que permite llevar un control de sus ingresos y facturación. Desarrollada con React, Redux, Firebase, Material UI, entre otras tecnologias.',
    taniDuration: 'Octubre 21 - Julio 22',
    cpaDescription:
      'Contribuí al desarrollo de aplicaciones web y de escritorio, enfocándome en soluciones orientadas a negocios en los sectores bancario y empresarial. Mi responsabilidad incluía el mantenimiento de programas basados VB5, VB6, VBA y React.',
    cpaDuration: 'Diciembre 20 - Junio 22',
    genubeDescription:
      'Diseñé y desarrollé una aplicación móvil en React Native que permite a los padres gestionar de manera eficiente todos los recursos de sus hijos en el entorno escolar. Gestioné exitosamente el proceso de compilación y despliegue, asegurando la disponibilidad fluida de la aplicación en la tienda de Android.',
    genubeDuration: 'Septiembre 23 - Diciembre 23',
    moodleDescription:
      'Diseñé una plataforma de campus virtual para las sedes regionales de la Universidad Tecnológica Nacional. Destacando mejoras sustanciales, me enfoqué principalmente en modificaciones visuales utilizando PHP, CSS y HTML.',
    moodleDuration: 'Agosto 17 - Diciembre 19',
    rollingDescription:
      'Impartí clases en línea de programación web full-stack, abarcando un currículo desde niveles básicos hasta intermedios, a una comisión de aproximadamente 25 estudiantes.',
    rollingDuration: 'Junio 20 - Septiembre 20',
    utnCarrer: 'Ingeniería en Sistemas de Información',
    utnDuration: '2011 - Presente',
    cefCarrer: 'Ciencias Económicas',
    cefDuration: '1998 - 2010',
    averageTitle: 'Promedio',
    educationTitle: 'Educación',
    contactMe: 'Contactame',
    color: '#fcd536',
    whatsappText: 'Hola, estoy interesado en tus servicios',
  },
};
