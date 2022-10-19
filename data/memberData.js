const memberData = {
  UichinLee: {
    name: 'Uichin Lee',
    program: 'Director',
    position: 'Professor',
    email: 'uclee@kaist.ac.kr',
    image: '/static/images/members/UichinLee.png',
    scholar: 'https://scholar.google.co.kr/citations?user=Sc2pBzYAAAAJ',
    research_interests: [],
  },
  WoohyeokChoi: {
    name: 'Woohyeok Choi',
    position: 'Post Doc',
    program: 'Post Doc',
    email: 'woohyeok.choi@kaist.ac.kr',
    image: '/static/images/members/WoohyeokChoi.png',
    scholar: 'https://scholar.google.com/citations?user=PaIwvKYAAAAJ&hl=en',
    homepage: 'https://woohyeok-choi.github.io',
    github: 'https://github.com/woohyeok-choi',
    research_interests: [
      'Mobile/Ubiquitous Health',
      'Behavior change with mobile computing and machine learning',
    ],
  },
  InyeopKim: {
    name: 'Inyeop Kim',
    position: 'Post Doc',
    program: 'Post Doc',
    email: 'inyeop@kse.kaist.ac.kr',
    image: '/static/images/members/InyeopKim.png',
    scholar: 'https://scholar.google.com/citations?user=VQ8rjvkAAAAJ&hl=ko&oi=ao',
    research_interests: ['Context-aware system', 'Digital wellbeing'],
  },
  JoonyoungPark: {
    name: 'Joonyoung Park',
    position: 'PhD Program',
    program: 'PhD Program',
    email: 'jypark@kse.kaist.ac.kr',
    image: '/static/images/members/JoonyoungPark.jpg',
    scholar: 'https://scholar.google.co.kr/citations?user=uzqaSMMAAAAJ&hl=ko',
    github: 'https://github.com/zelatore',
    research_interests: ['Behavioral Psychology', 'JIT-based DBCI', 'Reinforcement Learning'],
  },
  SoowonKang: {
    name: 'Soowon Kang',
    position: 'PhD Program',
    program: 'PhD Program',
    email: 'sw.kang@kaist.ac.kr',
    image: '/static/images/members/SoowonKang.jpg',
    scholar: 'https://scholar.google.com/citations?user=B9HMz0EAAAAJ&hl=ko',
    github: 'https://github.com/soowon-kang',
    research_interests: [
      'Social Computing',
      'Affective Computing',
      'Sensor Data Science',
      'Mobile Systems',
    ],
  },
  HyunsooLee: {
    name: 'Hyunsoo Lee',
    position: 'PhD Program',
    program: 'PhD Program',
    email: 'hslee90@kaist.ac.kr',
    image: '/static/images/members/HyunsooLee.jpg',
    scholar: 'https://scholar.google.com/citations?user=ctglUjoAAAAJ&hl=ko',
    github: 'https://github.com/hslee90',
    research_interests: [
      'Sensor Data Privacy',
      'Usable Privacy',
      'Human Factors in Privacy and Security',
    ],
  },
  HansooLee: {
    name: 'Hansoo Lee',
    position: 'PhD Program',
    program: 'PhD Program',
    email: 'hansoo@kaist.ac.kr',
    image: '/static/images/members/HansooLee.png',
    scholar: 'https://scholar.google.co.kr/citations?user=Ezt-IT0AAAAJ',
    github: 'https://github.com/hansoolee18',
    research_interests: ['Mobile Sensing', 'Digital Health', 'Routine Computing'],
  },
  GyuwonJung: {
    name: 'Gyuwon Jung',
    position: 'PhD Program',
    program: 'PhD Program',
    email: 'gwjung@kaist.ac.kr',
    image: '/static/images/members/GyuwonJung.jpg',
    scholar: 'https://scholar.google.com/citations?user=byhoe3YAAAAJ',
    research_interests: ['Digital Health', 'Causal Inference', 'Human-Data Interaction'],
  },
  EunjiPark: {
    name: 'Eunji Park',
    position: 'PhD Program',
    program: 'PhD Program',
    email: 'eunji.park@kaist.ac.kr',
    image: '/static/images/members/EunjiPark.png',
    scholar: 'https://scholar.google.com/citations?user=Kx8C1FQAAAAJ&hl=ko',
    homepage: 'https://cookingfoil.github.io/',
    github: 'https://github.com/cookingfoil',
    research_interests: [
      'User modeling; Quantitative measurement of human performance',
      'Multimodal interaction and sensor fusion',
    ],
  },
  YoungjiKoh: {
    name: 'Youngji Koh',
    position: 'PhD Program',
    program: 'PhD Program',
    email: 'youngji@kaist.ac.kr',
    image: '/static/images/members/YoungjiKoh.jpg',
    scholar: 'https://scholar.google.com/citations?user=9YItZ30AAAAJ&hl=en',
    github: 'https://github.com/youngji-koh',
    research_interests: ['Mobile Sensing', 'Mental Health', 'Voice User Interaction'],
  },
  YugyeongJung: {
    name: 'Yugyeong Jung',
    position: 'PhD Program',
    program: 'PhD Program',
    email: 'yugyeong.jung@kaist.ac.kr',
    image: '/static/images/members/YugyeongJung.jpg',
    github: 'https://github.com/yugyeongjung',
    research_interests: ['Data visualization', 'Human-data interaction', 'Social robotics'],
  },
  DuriLee: {
    name: 'Duri Lee',
    position: 'PhD Program',
    program: 'PhD Program',
    email: 'duri.lee@kaist.ac.kr',
    image: '/static/images/members/DuriLee.jpg',
    research_interests: ['Human Digital Twin', 'e-Mental Health Modeling', 'IoT sensor data'],
  },
  PanyuZhang: {
    name: 'Panyu Zhang',
    position: 'Master Program',
    program: 'Master Program',
    email: 'panyu@kaist.ac.kr',
    image: '/static/images/members/PanyuZhang.jpg',
    research_interests: ['Routine Computing', 'Affective Computing'],
  },
  YouwonShin: {
    name: 'Youwon Shin',
    position: 'Master Program',
    program: 'Master Program',
    email: 'youwon.shin@kaist.ac.kr',
    github: 'https://github.com/yuwon-shin',
    homepage: 'https://yuwon-shin.github.io/',
    scholar: 'https://scholar.google.com/citations?user=u0HFXqQAAAAJ&hl=ko',
    image: '/static/images/members/YouwonShin.jpg',
    research_interests: ['IoT sensor data', 'Data visualization'],
  },
  JieunLim: {
    name: 'Jieun Lim',
    position: 'Master Program',
    program: 'Master Program',
    email: 'jieun.lim@kaist.ac.kr',
    scholar: 'https://scholar.google.com/citations?user=XyHQwXkAAAAJ&hl=en',
    image: '/static/images/members/JieunLim.jpg',
    research_interests: ['VUI', 'Smartspeaker Interaction'],
  },
  HeiYiuLaw: {
    name: 'Hei Yiu Law',
    position: 'Master Program',
    program: 'Master Program',
    email: 'emilyelhy@kaist.ac.kr',
    github: 'https://github.com/emilyelhy',
    homepage: 'https://www.linkedin.com/in/hei-yiu-law/',
    image: '/static/images/members/EmilyLaw.jpg',
    research_interests: ['Embedded system', 'Smart device', 'Privacy'],
  },
  SangjunPark: {
    name: 'Sangjun Park',
    position: 'Master Program',
    program: 'Master Program',
    email: 'grey10170@kaist.ac.kr',
    github: 'https://github.com/highjun10170',
    homepage: 'https://highjun10170.github.io/',
    image: '/static/images/members/SangjunPark.jpg',
    research_interests: ['Causal Inference'],
  },
  YunjoHan: {
    name: 'Yunjo Han',
    position: 'Master Program',
    program: 'Master Program',
    email: 'yjhan99@kaist.ac.kr',
    github: 'https://github.com/yjhan99',
    image: '/static/images/members/YunjoHan.jpg',
    research_interests: ['Affective Computing', 'Mobile Sensing'],
  },

  // From Here Alumni
  YongShinKim: {
    name: 'Yongshin Kim',
    position: 'Alumni',
    korean_name: '김용신',
    graduated: '2022',
    program: 'Master Program',
    email: 'ys.k@kaist.ac.kr',
    homepage: 'https://yong-shin.github.io/',
    current_position: '',
  },
  JeungminOh: {
    name: 'Jeungmin Oh',
    position: 'Alumni',
    graduated: 'LOA',
    korean_name: '오정민',
    program: 'PhD Program',
    email: 'jminoh@kaist.ac.kr',
  },
  EugeneLee: {
    graduated: 'LOA',
    name: 'Eugene Lee',
    position: 'Alumni',
    program: 'Master Program',
    email: 'eugene.lee@kaist.ac.kr',
  },
  WoohyeokChoi2021: {
    name: 'Woohyeok Choi',
    position: 'Alumni',
    korean_name: '최우혁',
    graduated: '2021',
    program: 'PhD Program',
    email: 'woohyeok.choi@kaist.ac.kr',
    current_position: 'Post Doc(IC Lab)',
  },
  InyeopKim2021: {
    name: 'Inyeop Kim',
    position: 'Alumni',
    korean_name: '김인엽',
    graduated: '2021',
    program: 'PhD Program',
    email: 'kiyeob4416@kaist.ac.kr',
    current_position: 'Post Doc(IC Lab)',
  },
  CheulYoungPark: {
    name: 'Cheul Young Park',
    position: 'Alumni',
    graduated: '2021',
    korean_name: '박철영',
    program: 'Master Program',
    email: 'cheulyop@kaist.ac.kr',
  },
  MinhyoungKim: {
    name: 'Minhyoung Kim',
    position: 'Alumni',
    korean_name: '김민형',
    graduated: '2021',
    program: 'Master Program',
    email: 'mindrome95@kaist.ac.kr',
  },
  JuhoSun: {
    name: 'Juho Sun',
    position: 'Alumni',
    korean_name: '선주호',
    graduated: '2021',
    program: 'Master Program',
    email: 'juho.sun@kaist.ac.kr',
    current_position: 'Yanolja',
  },
  DaeheePark: {
    name: 'Daehee Park',
    position: 'Alumni',
    korean_name: '박대희',
    graduated: '2020',
    program: 'PhD Program',
    email: 'daehee.park@kaist.ac.kr',
    current_position: 'Samsung Research',
  },
  AukKim: {
    name: 'Auk Kim',
    position: 'Alumni',
    korean_name: '김아욱',
    graduated: '2020',
    program: 'PhD Program',
    email: 'kimauk@kaist.ac.kr',
    current_position: 'Professor(Kangwon National University)',
  },
  NaraeCha: {
    name: 'Narae Cha',
    position: 'Alumni',
    korean_name: '차나래',
    graduated: '2020',
    program: 'Master Program',
    email: 'nr.cha@kaist.ac.kr',
    current_position: 'LG CNS',
  },
  JongwonKim: {
    name: 'Jongwon Kim',
    position: 'Alumni',
    korean_name: '김종원',
    graduated: '2019',
    program: 'Master Program',
    email: 'jong1k@kaist.ac.kr',
    current_position: 'TmaxSoft',
  },
  DuyeonKim: {
    name: 'Duyeon Kim',
    position: 'Alumni',
    korean_name: '김두연',
    graduated: '2019',
    program: 'Master Program',
    email: 'duyeon@kaist.ac.kr',
    current_position: 'PhD Program (KAIST ISysE)',
  },
  SangkeunPark: {
    name: 'Sangkeun Park',
    position: 'Alumni',
    korean_name: '박상근',
    graduated: '2019',
    program: 'PhD Program',
    email: 'sk.park@kaist.ac.kr',
    current_position: 'Samsung SDS',
    homepage: 'http://sangkeunpark.com/',
  },
  JaejeungKim: {
    name: 'Jaejeung Kim',
    position: 'Alumni',
    korean_name: '김재정',
    graduated: '2019',
    program: 'PhD Program',
    email: 'jjk@kaist.ac.kr',
  },
  JeminLee: {
    name: 'Jemin Lee',
    position: 'Alumni',
    korean_name: '이제민',
    program: 'Post Doc',
    email: 'leejaymin@kaist.ac.kr',
    current_position: 'ETRI',
    homepage: 'https://leejaymin.github.io/index.html',
  },
  RihunKim: {
    name: 'Rihun Kim',
    position: 'Alumni',
    korean_name: '김리헌',
    graduated: '2018',
    program: 'Master Program',
    email: 'rihun.kim@kaist.ac.kr',
    current_position: 'Kakao',
  },
  HayoungJung: {
    name: 'Hayoung Jung',
    position: 'Alumni',
    korean_name: '정하영',
    graduated: '2018',
    program: 'Master Program',
    email: 'hayoung0202@kaist.ac.kr',
    current_position: 'CJ Olivenetworks',
  },
  GyuwonJung2018: {
    name: 'Gyuwon Jung',
    position: 'Alumni',
    korean_name: '정규원',
    graduated: '2018',
    program: 'Master Program',
    email: 'qonejung@kaist.ac.kr',
    current_position: 'PhD Program(ICLab)',
  },
  ChristineBalili: {
    name: 'Christine Balili',
    position: 'Alumni',
    korean_name: '크리스틴',
    graduated: '2018',
    program: 'Master Program',
    email: 'ccbalili@kaist.ac.kr',
  },
  SujinKwon: {
    name: 'Sujin Kwon',
    position: 'Alumni',
    korean_name: '권수진',
    graduated: '2017',
    program: 'Master Program',
    email: 'sujingjing@kaist.ac.kr',
    current_position: 'ADD',
  },
  SungwookMoon: {
    name: 'Sungwook Moon',
    position: 'Alumni',
    korean_name: '문성욱',
    graduated: '2017',
    program: 'Master Program',
    email: 'm.sw@kaist.ac.kr',
  },
  HayeonJeong: {
    name: 'Hayeon Jeong',
    position: 'Alumni',
    korean_name: '정하연',
    graduated: '2017',
    program: 'Master Program',
    email: 'hayeon412@kaist.ac.kr',
    current_position: 'Amorepacific Research',
  },
  MinsamKo: {
    name: 'Minsam Ko',
    position: 'Alumni',
    korean_name: '고민삼',
    graduated: '2016',
    program: 'PhD Program',
    email: 'msko@kaist.ac.kr',
    current_position: 'Hanyang Univ. ERICA',
  },
  JoohyunKim: {
    name: 'Joohyun Kim',
    position: 'Alumni',
    korean_name: '김주현',
    graduated: '2016',
    program: 'Master Program',
    email: 'joohyun.kim@kaist.ac.kr',
    current_position: 'IQVIA',
  },
  SergeyLeksikov: {
    name: 'Sergey Leksikov',
    position: 'Alumni',
    korean_name: '세르게이',
    graduated: '2016',
    program: 'Master Program',
    email: 'sergey@kaist.ac.kr',
    current_position: 'Lablup Inc.',
  },
  EmiliaIlincai: {
    name: 'Emilia Ilincai',
    position: 'Alumni',
    korean_name: '에밀리아',
    program: 'Master Exchange(DTU)',
    email: 'ilincai.emilia@gmail.com',
  },
  SouravDandapat: {
    name: 'Sourav Dandapat',
    position: 'Alumni',
    korean_name: '소라브',
    program: 'Post Doc',
    email: 'sourav@kaist.ac.kr',
  },
  AejinSong: {
    name: 'Aejin Song',
    position: 'Alumni',
    korean_name: '송애진',
    graduated: '2016',
    program: 'Master Program',
    email: 'aejin.song@kaist.ac.kr',
  },
  SungjunKang: {
    name: 'Sungjun Kang',
    position: 'Alumni',
    korean_name: '강성준',
    graduated: '2015',
    program: 'Master Program',
    email: 'sjkang89@kaist.ac.kr',
  },
  DaeheeShin: {
    name: 'Daehee Shin',
    position: 'Alumni',
    korean_name: '신대희',
    graduated: '2015',
    program: 'Master Program',
    email: 'daehee.shin@kaist.ac.kr',
  },
  SoobinYang: {
    name: 'Soobin Yang',
    position: 'Alumni',
    korean_name: '양수빈',
    graduated: '2015',
    program: 'Master Program',
    email: 'subin.yang@kaist.ac.kr',
  },
  TaehwaOh: {
    name: 'Taehwa Oh',
    position: 'Alumni',
    korean_name: '오태화',
    graduated: '2015',
    program: 'Master Program',
    email: 'barlog90@kaist.ac.kr',
  },
  JoonwonLee: {
    name: 'Joonwon Lee',
    position: 'Alumni',
    korean_name: '이준원',
    graduated: '2014',
    program: 'Master Program',
    email: 'cafielo@kaist.ac.kr',
    current_position: 'Naver',
  },
  YoungchangKo: {
    name: 'Youngchang Ko',
    position: 'Alumni',
    korean_name: '고영창',
    graduated: '2013',
    program: 'Master Program',
    email: 'youngchang@kaist.ac.kr',
    current_position: 'ADD',
  },
  EunheeYi: {
    name: 'Eunhee Yi',
    position: 'Alumni',
    korean_name: '이은희',
    graduated: '2012',
    program: 'Master Program',
    email: 'eunhee.yi@kaist.ac.kr',
    current_position: 'LGE',
  },
}

export default memberData
