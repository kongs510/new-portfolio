import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '안녕하십니까? 저의 이름은', // Hello, my name is
  name: '공민철입니다.', // John
  subtitle: '저는 프론트엔드 개발자입니다.', // I'm the Unknown Developer.
  cta: '더 알아보기', // Know more
};

// ABOUT DATA
export const aboutData = {
  img: 'mypoto.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta1: '오랫동안 함께할 동료를 기다립니다!',
  cta2: '연락주세요🙇‍♂️',
  btn: '연락하기',
  email: 'comingdown@naver.com',
  img: "navpoto.png"
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      img: 'instagram.png',
      name: '',
      url: 'https://www.instagram.com/kongs510',
    },
    {
      id: nanoid(),
      img: 'github.png',
      name: '',
      url: 'https://github.com/kongs510',
    },
    {
      id: nanoid(),
      img: 'blog.png',
      name: '',
      url: 'https://blog.naver.com/comingdown',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
