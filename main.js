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

const projectsList = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: './Images/Snapshoot-page-2.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back end dev',
    company: 'Canopy',
    year: '2015',
    sourceLink: 'https://github.com/Christianib003/Portfolio-Moblie-Skeleton-Version',
    demoLink: 'https://christianib003.github.io/Portfolio-Moblie-Skeleton-Version/',
  },
];