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
    'A little about me, I am a 2020 computer science graduate. Since finishing school, I have been working remotely for the past year.',
  paragraphTwo:
    'I like trying new languages, frameworks and any technology that I come across.',
  paragraphThree:
    "In the future I'd like to travel to Afghanistan and teach programming using my native tongue Farsi/Dari.",
  resume: 'OmidRajabiResume', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'heroku-fullstack.png',
    title: 'Activity suggestions',
    info: 'A simple fullstack todo list that uses react and node to store and retrieve random tasks from an api call.',
    info2: 'Tech: React, Nodejs, PostgreSQL, on Heroku,',
    url: 'https://deploy-fullstack-heroku.herokuapp.com/',
    repo: 'https://github.com/omid345/deploying-fullstack-with-heroku-sample.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'express-library.png',
    title: 'Local Library',
    info: 'A fullstack library site that uses pug, template web engine, to store and retrieve books.',
    info2: 'Tech: Pug, Nodejs, mongoDB, on Heroku',
    url: 'https://express-library-omid.herokuapp.com/catalog',
    repo: 'https://github.com/omid345/express-locallibrary.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'codestrips.png',
    title: 'Codestrips',
    info: 'A simple fullstack comic strip site, where user can store a comic they created.',
    info2: 'React, Nodejs, uses local sqlite',
    url: 'https://mini-capstone-codestrips.herokuapp.com/',
    repo: 'https://github.com/omid345/mini-capstone-codestrips', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Jamming.png',
    title: 'Jamming',
    info: 'User can search for music then add selected music to a new playlist on their Spotify account.',
    info2: 'Tech: React, Nodejs, on surge.sh',
    url: 'http://listify.surge.sh/',
    repo: 'https://github.com/omid345/listify', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'old-site.png',
    title: 'Portfolio',
    info: 'My first portfolio I coded without any fancy frameworks.',
    info2: 'Tech: Bootstrap, HTML, on github pages',
    url: 'https://omid345.github.io/final-sites/',
    repo: 'https://github.com/omid345/final-sites/tree/gh-pages', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: 'Email me',
  email: 'omid.345@gmail.ca',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://www.twitter.com/Omid_janam',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/omid.janam/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/omidjan/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/omid345',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
