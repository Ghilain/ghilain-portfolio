// mobile menu
const openMenu = document.querySelector('.logo-text');
const closeMenu = document.querySelector('.close-x');
const mobileMenu = document.querySelector('.nav-list');

openMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

mobileMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});
//recent work
const workSection = document.querySelector('#project');
const cardList = document.getElementById('cards')

const projectsList = [
  { id: 1,
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './Images/Snapshoot-page-2.png',
    technologies: ['html', 'css', 'javascript'],
    sourceLink: 'https://github.com/Christianib003/Portfolio-Moblie-Skeleton-Version',
    demoLink: 'https://christianib003.github.io/Portfolio-Moblie-Skeleton-Version/',
  },

  {
    id: 2,
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './Images/Snapshoot-page-2.png',
    technologies: ['html', 'css', 'javascript'],
    sourceLink: 'https://github.com/Christianib003/Portfolio-Moblie-Skeleton-Version',
    demoLink: 'https://christianib003.github.io/Portfolio-Moblie-Skeleton-Version/',
  },
  {
    id: 3,
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './Images/Snapshoot-page-2.png',
    technologies: ['html', 'css', 'javascript'],
    sourceLink: 'https://github.com/Christianib003/Portfolio-Moblie-Skeleton-Version',
    demoLink: 'https://christianib003.github.io/Portfolio-Moblie-Skeleton-Version/',
  },
  {
    id: 4,
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './Images/Snapshoot-page-2.png',
    technologies: ['html', 'css', 'javascript'],
    sourceLink: 'https://github.com/Christianib003/Portfolio-Moblie-Skeleton-Version',
    demoLink: 'https://christianib003.github.io/Portfolio-Moblie-Skeleton-Version/',
  },
  {
    id: 5,
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './Images/Snapshoot-page-2.png',
    technologies: ['html', 'css', 'javascript'],
    sourceLink: 'https://github.com/Christianib003/Portfolio-Moblie-Skeleton-Version',
    demoLink: 'https://christianib003.github.io/Portfolio-Moblie-Skeleton-Version/',
  },
  {
    id: 6,
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './Images/Snapshoot-page-2.png',
    technologies: ['html', 'css', 'javascript'],
    sourceLink: 'https://github.com/Christianib003/Portfolio-Moblie-Skeleton-Version',
    demoLink: 'https://christianib003.github.io/Portfolio-Moblie-Skeleton-Version/',
  },
];

const projectCards = projectsList.map((cards) => `
<div class="cardwork1">
<div class="container">
  <div class="action">
    <button class="buton1 buton5 butonpop" type="button"> See Project</button>
  </div>
  <div class="supporttext supporttext22">
    <p class="supporttext1">
    ${cards.description}
    </p>
  </div>
  <h2 class="titlpost">
    ${cards.name}
  </h2>
  <h2 class="titlpost2">
    Website Protfolio 
  </h2>
  <ul class="tag">
  ${cards.technologies.map((heading, index) => `<li class="info${index}">${heading}</li>`).join('')}
 </ul>
</div>              
</div>

`).join('');


cardList.innerHTML += projectCards;

