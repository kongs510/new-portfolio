/* eslint-disable prettier/prettier */
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
  name: '공민철입니다.',
  subtitle: '저는 프론트엔드 개발자입니다.',
  cta: '더 알아보기',
};

// ABOUT DATA
export const aboutData = {
  img: 'mypoto.png',
  aboutOne:
    '디자인과 프로그래밍 사이를 단단하게 잇는 프론트엔드 개발자를 목표로, 2020년 봄부터 꾸준히 프로그래밍을 공부하고 있습니다.' +
    '현재  SI 외주개발사업으로  자바스크립트 및 Java 기반 현대 hmall 쇼핑라이브/방송톡 어드민 웹페이지를 개선 및 고도화 작업을 진행하였고,현대 hmal 쇼핑라이브 다시보기 고객 웹페이지를 구현하였습니다.' +
    '내부 솔루션 으로는 메타버스 기반 실시간 강의 플랫폼인 아몬드 노트를 react-native 기반으로 mvp 및 신규 앱런칭전까지 개발을 진행하였던 경험이 있습니다.  또한 지난 몇 년 동안에는 두산그룹 회장단 보안 및 의전담당으로 재직하였던 경험이 있습니다. 오랜기간 회사생활로 인하여 조직간에 원활한 의사소통으로 인한 업무효율에 대해 이해하고 있으며 함께 하는것이 무엇인가?어떻게 함께 하느냐? 한순간 한순간 협업에 대해 고민하고 있습니다. ' +
    ' 새로운 기술/지식 등에 있어서 도전적인 정신을 가지고 매일 공부하고 있으며 오랫동안 회사와 함께 성장하길 기원합니다. 감사합니다.',
  resume: 'https://drive.google.com/file/d/1F_QmUA4AmxwkwjaKPRwkCcK-qKsC65wy/view',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'AlmondNote.jpg',
    title: '아몬드 노트',
    info: '메타버스 기반  비대면 교육 서비스',
    info2:
      '사용자간 공유하는 필기노트 기능, 화상강의 기능, 실시간 아바타 표정추적, 강의 통합관리 시스템',
    info3:
      'react-native 를 기반으로 재사용성을 고려한 UI 컴포넌트 개발 및 데이터 통신을 가능하게 하는 axios 연결 / UI 전반적인 기능 및 화면 구현',
    url: 'https://monkeysoft.co.kr/',
  },
  {
    id: nanoid(),
    img: 'playshopping.jpg',
    title: 'PLAY SHOPPING LIVE',
    info: '라이브 커머스 쇼핑라이브 다시보기 서비스',
    info2:
      '쇼핑라이브 다시보기 서비스, 채팅인입여부 선택가능 상품구매 가능 혜택,공지 선택여부 가능',
    info3:
      '영상기반 서비스로서 기존 쇼핑라이브 방송종료후 채팅서버에서 저장되어 있던 데이터를 DB에 저장 후 가져와서 사용하는 API 구현 및 기존 영상과 채팅 내용을 실시간으로 mapping 하는 기능 구현',
    url: 'https://hmall.com/m/mlbPlayCtgrVdo.do?mallCntnCtgrId=01009&mallCntnId=202209296007&orderBy=strtDtm&sText=&preView=0&inType=play',
  },
  {
    id: nanoid(),
    img: 'sl.png',
    title: '쇼핑라이브 어드민',
    info: '라이브 커머스 쇼핑라이브 어드민 서비스',
    info2:
      '현대홈쇼핑 쇼핑라이브 bo page로서, 소켓통신을 기반으로 각종 정보 및 신규API 구현 고도화 참여',
    info3:
      'JS 및 JAVA 기반 서비스로서  방송톡 api 신규 구현 - 고객의 채팅을 방송에 송출 하는 api 구현 ( 토네이도api  insert 및 update ) 관리자 닉네임 변경 api 구현 쇼호스트 전용 페이지 구현 ( 기존 관리자 페이지와 다르게 쇼호스트 전용으로 해당 기능만 display 하는 용도)',
    // url: 'https://doczip.kr/',
  },
  {
    id: nanoid(),
    img: 'bt.png',
    title: '방송톡 어드민',
    info: '라이브 커머스 방송톡 어드민 서비스',
    info2:
      '현대홈쇼핑 방송톡 bo page로서, 기존 쇼핑라이브 기능 및 방송화면 인입을 위한 방송톡 신규 토네이도 API 작업 참여',
    info3:
      'JS 및 JAVA 기반 서비스로서  고객과 관리자 실시간 답변 기능 구현,방송관련 수치 노출 구현 방송시간, 동접자수, 게스트수, 좋아요수 구현 및 다양한 신규기능작업 참여',
    // url: 'https://doczip.kr/',
  },
  {
    id: nanoid(),
    img: 'doczip.jpg',
    title: 'Doczip',
    info: '부동산 계약서 및 중개대상물 확인서 자동화 서비스',
    info2:
      '주소 입력후 국토부 공공API를  크롤링한 정보들을 토대로 부동산 계약서 및 중개대상물 확인서 자동화 서비스 개발 참여',
    info3:
      'React 기반으로 한 프로젝트로서 html 템플릿을 JavaScript에서의 프로퍼티 접근자를 사용하여 Html element를 bind 하는 작업 및 각종 form 을 만드는 역할을 진행',
    url: 'https://doczip.kr/',
  },
  {
    id: nanoid(),
    img: 'zzzipzip.jpg',
    title: 'zipzip',
    info: 'AI기반 빅데이터 수집을 통한 부동산 시세예측 서비스',
    info2: '최근 3개년 부동산거래 정보를 수집하여 빅데이터를 토대로매물 추천 서비스 집집 개발 참여',
    info3:
      '모바일 위주의 브라우저로서 Link 연결 및 fab 버튼 추가 하는등 UI 유지보수 및수정 업무 참여',
    url: 'https://zipzip.kr/',
  },
];

export const leftProjectsData = [
  {
    id: nanoid(),
    img: 'youtube.jpg',
    title: 'YouTube',
    introduction: '기능설명',
    info1: 'landing page 구현',
    info2: 'upload 기능 구현 ',
    info3: '썸내일 생성 구현',
    info4: 'detail page 동영상 재생기능 구현',
    info5: '좋아요 싫어요 구독 버튼 구현',
    info6: '댓글 및 대댓글 기능 구현 ',
    info7: '로그인 및 회원가입 기능 구현 ',
    info8: '배포 진행 ( heroku 이용 )',
    url: 'https://react-yyyyy.herokuapp.com/',
    repo: 'https://github.com/kongs510/react-youtube', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'self.jpg',
    title: '포트폴리오',
    introduction: '기능설명',
    info: 'Gatsby 기반 포트폴리오(템플릿) 사이트 구현',
    info1: '스크롤 및 버튼으로 해당 페이지 이동가능',
    info2: 'Nav bar 구현 ',
    info3: '배포된 연결 링크 및 깃허브 코드 링크 버튼 구현으로 해당페이지 이동 가능',
    info4: 'email 전송 기능 구현',
    info5: '하단 footer에 insta , GitHub , blog 이미지 및 링크 연결',
    info6: '도메인 연결 및 배포 진행 ( 가비아 및 Netlify 이용 )',
    info7: '',
    info8: '',
    url: 'https://kongs510.site/',
    repo: 'https://github.com/kongs510/new-portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'slack.jpg',
    title: 'slack',
    introduction: '기능설명',
    info1: 'Slack 채널(1대 다 채팅) 구현',
    info2: 'DM(1대1 채팅 ) 기능 구현',
    info3: '실시간 채팅 기능 구현',
    info4: '회원가입 기능 구현',
    info5: '로그인 , 로그아웃 기능 구현',
    info6: '활성화 비활성화 표시 기능 구현',
    info7: '',
    info8: '',
    url: '',
    repo: 'https://github.com/kongs510/sleact-fronted',
    repo1: 'https://github.com/kongs510/sleact-server',
  },
  {
    id: nanoid(),
    img: 'twitter.jpg',
    title: '트워터 클론코딩',
    introduction: '기능설명',
    info: '트윗 기능 구현 ( CRUD 기능 구현 )',
    info1: '이미지 추가 구현',
    info2: '프로필 기능 구현 ( 프로필 이름 변경 가능 )',
    info3: '간편로그인 기능 구현 ( 구글 , 깃허브 ) ',
    info4: '회원가입 및 로그아웃 구현',
    info5: '배포 진행 ( heroku 이용 )',
    info6: '',
    info7: '',
    info8: '',
    url: 'https://twitter-kongs.herokuapp.com/',
    repo: 'https://github.com/kongs510/nwitter', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'movieapp.jpg',
    title: '무비평점 landing page',
    introduction: '기능설명',
    info: 'landing page 구현',
    info1: 'detail page 구현',
    info2: 'loading 구현',
    info3: 'Nav 구현',
    info4: '',
    info5: '',
    info6: '',
    info7: '',
    info8: '',
    url: 'https://kongs510.github.io/movie_app/',
    repo: 'https://github.com/kongs510/movie_app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nextjs.jpg',
    title: '쇼핑 landing page',
    introduction: '기능설명',
    info: 'next.js 기반 쇼핑 landing page',
    info1: '자동 리프리쉬 기능 구현스크롤 및 버튼으로 해당 페이지 이동가능',
    info2: '서버사이드 렌더링 지원',
    info3: 'loading 구현',
    info4: '400 or 500 error page 구현',
    info5: '',
    info6: '',
    info7: '',
    info8: '',
    url: 'https://nextjsshop.netlify.app/',
    repo: 'https://github.com/kongs510/nextjs-shopping', // if no repo, the button will not show up
  },
];

export const rightProjectsData = [];

// CONTACT DATA
export const contactData = {
  cta1: '오랫동안 함께할 동료를 기다립니다!',
  cta2: '연락주세요🙇‍♂️',
  btn: '연락하기',
  email: 'comingdown@naver.com',
  img: 'navpoto.png',
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
