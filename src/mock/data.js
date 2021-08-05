import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '',
  lang: '',
  description: '',
};

// HERO DATA
export const heroData = {
  title: '안녕하십니까? 저의 이름은',
  name: '공민철입니다.', // John
  subtitle: '저는 프론트엔드 개발자입니다.',
  cta: '더 알아보기',
};

// ABOUT DATA
export const aboutData = {
  img: 'mypoto.png',
  aboutOne: "디자인과 프로그래밍 사이를 단단하게 잇는 프론트엔드 개발자를 목표로, 2020년 봄부터 꾸준히 프로그래밍을 공부하고 있습니다.",
  aboutTwo: "저는 지난 몇 년 동안에는 두산그룹 회장단 보안 및 의전담당으로 재직하였던 경험이 있습니다.",
  aboutThree: "오랜기간 회사에 재직했던 경험으로 인하여 조직간에 원활한 의사소통으로 인한 업무효율에 대해 이해하고 있으며 함께 하는것이 무엇인가? 함께 하려면 어떻게 해야 하느냐? 등 한순간 한순간 협업에 대해 고민하고 있습니다.",
  aboutFour: "현재 React 기반으로 개발을 진행하고 있으며, 새로운 기술/지식 등에 있어서 도전적인 정신을 가지고 매일 공부하고 있습니다.",
  aboutFive: "함께 하는 동료로서 오랫동안 회사와 함께 성장하길 기원합니다.감사합니다.",
  resume: '',
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
];

export const miniprojectsData = [
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
