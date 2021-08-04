import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          nav: {
              home: 'Home',
              about: 'About me',
              skills: 'Skills',
              projects: 'Projects',
              contact: 'Contact'
          },
          intro: {
              text: 'Software Engineer / Blogger / Speaker <br />26 Years Old, Kigali'
          },
          about: {
            heading: 'About me',
            para1: 'Hi, I\'m Jim – Software Engineer / Blogger from Kigali. I\'m interested in everything technology and entreprenuership.',
            para2: 'Formerly at Andela, I’m currently a Software Engineer at Bank Of Kigali and contributing to open source and pursuing personal projects.',
            para3: 'Hire me to build you a website, moblie application, or speak at your event.',
            para4: 'Ready to implement excellent projects with wonderful people.'
          },
          skills: {
              heading: 'Skills',
              text: 'I work with technologies including,',
              download: 'Download Resume'
          },
          projects: {
            heading: 'Projects'
          },
          contact: {
              heading: 'Contact',
              text: 'Want to know more or just chat? <br />You are Welcome',
              button: 'Send Message',
              message: 'Connect & Follow me on <br /> LinkedIn, Instagram, Twitter, Github',
              cancel: 'Cancel',
              send: 'Send Message'
          }
        }
      },
      fr: {
        translation: {
          nav: {
              home: 'Accueil',
              about: 'A propos de moi',
              skills: 'Compétences',
              projects: 'Projets',
              contact: 'Contacter'
          },
          intro: {
              text: 'Ingénieur Informaticien / Blogueur / Conférencier <br /> 26 ans, Kigali'
          },
          about: {
            heading: 'A propos de moi',
            para1: 'Bonjour, je suis Jim – Ingénieur Informaticien / Blogueur de Kigali. Je m\'intéresse à tout ce qui concerne la technologie et l\'entrepreneuriat.',
            para2: 'Anciennement chez Andela, je suis actuellement ingénieur informaticien à Banque de Kigali et je contribue à l\'open source et à la poursuite de projets personnels.',
            para3: 'Engagez-moi pour vous créer un site Web, une application mobile ou prendre la parole lors de votre événement.',
            para4: 'Prêt à mettre en œuvre d\'excellents projets avec des gens formidables.'
          },
          skills: {
            heading: 'Compétence',
            text: 'Je travaille avec des technologies telles que,',
            download: 'Télécharger le CV'
          },
          projects: {
            heading: 'Projets'
          },
          contact: {
            heading: 'Contacter',
            text: 'Vous voulez en savoir plus ou simplement discuter? <br />Vous êtes les bienvenus',
            button: 'Envoyer le message',
            message: 'Connectez-vous et suivez-moi sur <br /> LinkedIn, Instagram, Twitter, Github',
            cancel: 'Cancel',
            send: 'Send Message'
          }
        }
      }
    }
  });

export default i18n;