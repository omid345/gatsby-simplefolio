import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Omid's portfolio", // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Omid's portfolio", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Omid Rajabi',
  subtitle: 'Here is a collection of my projects.',
  cta: 'See below',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'A little about me, I am a 2020 computer science graduate. I finished school during a pandemic and I have been working remotely since then.',
  paragraphTwo:
    "I like trying new languages, frameworks and any technology that I come across. I'm not afraid of failure, but never having tried!",
  paragraphThree:
    "I'm pretty involved in my community, specifically the Afghan community. My people the hazara are at risk minority under the oppresive regime of Taliban.",
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
  cta: 'Would you like to work with me? Awesome!',
  btn: 'Email me',
  email: 'omid.rajabi@mail.utoronto.ca',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Omid_janam',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/omidjan/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/omid345',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
