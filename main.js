// // mobile menu
const openMenu = document.querySelector('.ml');
const closeMenu = document.querySelector('.close-x');
const mobileMenu = document.querySelector('.nav-list1');

openMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

mobileMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});
// recent work
const cardList = document.getElementById('pop');

const projectsList = [
  {
    id: 1,
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './Images/Snapshoot-page-2.png',
    technologies: 'html',
    technologies1: 'css',
    technologies2: 'javascript',
    sourceLink: 'https://ghilain.github.io/mobile-version-skeleton/',
    demoLink: 'https://github.com/Ghilain/mobile-version-skeleton/',
    spec: 'd-none',
    butt: 'btn-1st',
    ulist: 'li-btn',
  },

  {
    id: 2,
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './Images/Snapshoot-page-2.png',
    technologies: 'html',
    technologies1: 'css',
    technologies2: 'javascript',
    sourceLink: 'https://ghilain.github.io/mobile-version-skeleton/',
    demoLink: 'https://github.com/Ghilain/mobile-version-skeleton/',
    spec: 'd-none1',
    butt: 'd-none',
    ulist: 'li-bt',
  },
  {
    id: 3,
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './Images/Snapshoot-page-2.png',
    technologies: 'html',
    technologies1: 'css',
    technologies2: 'javascript',
    sourceLink: 'https://ghilain.github.io/mobile-version-skeleton/',
    demoLink: 'https://github.com/Ghilain/mobile-version-skeleton/',
    spec: 'd-none1',
    butt: 'd-none',
    ulist: 'li-bt',
  },
  {
    id: 4,
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './Images/Snapshoot-page-2.png',
    technologies: 'html',
    technologies1: 'css',
    technologies2: 'javascript',
    sourceLink: 'https://ghilain.github.io/mobile-version-skeleton/',
    demoLink: 'https://github.com/Ghilain/mobile-version-skeleton/',
    spec: 'd-none1',
    butt: 'd-none',
    ulist: 'li-bt',
  },
  {
    id: 5,
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './Images/Snapshoot-page-2.png',
    technologies: 'html',
    technologies1: 'css',
    technologies2: 'javascript',
    sourceLink: 'https://ghilain.github.io/mobile-version-skeleton/',
    demoLink: 'https://github.com/Ghilain/mobile-version-skeleton/',
    spec: 'd-none1',
    butt: 'd-none',
    ulist: 'li-bt',
  },
  {
    id: 6,
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: './Images/Snapshoot-page-2.png',
    technologies: 'html',
    technologies1: 'css',
    technologies2: 'javascript',
    sourceLink: 'https://ghilain.github.io/mobile-version-skeleton/',
    demoLink: 'https://github.com/Ghilain/mobile-version-skeleton/',
    spec: 'd-none1',
    butt: 'd-none',
    ulist: 'li-bt',
  },
];

const projectCards = projectsList.map((cards) => `
<li class="size bg${cards.id}">
          <div class="temp2 ${cards.spec}">
            <div class="pad">
              <h3 class="work card-heading">${cards.name}</h3>
              <p class="text text-2">
               ${cards.description}
              </p>
              <ul class="tech tech-2 ${cards.ulist} ">
              <li>${cards.technologies}</li>
              <li>${cards.technologies1}</li>
              <li>${cards.technologies2}</li>
              </ul>
            </div>
          </div>
          <div>
            <button id="btncli${cards.id}" type="submit" class="btn btns btn-2 ${cards.butt}">see project</button>
          </div>
        </li>

`).join('');

cardList.innerHTML += projectCards;

// Popup window
const popupWindow = document.querySelector('.bgpopup');

const popWindowContent = [
  {
    name1: 'Multi Post Stories',
    name2: 'Keeping track of hundreds  of components website',
    closee: 'X',
    li1: 'html',
    li2: 'bootstrap',
    li3: 'Ruby on rails',
    featuredImagepop: './images/popupdesk.png',
    popDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of
  type and scrambled it to make a type specimen book. It has
  survived not only five centuries, but also the leap into
  electronic typesetting, remaining essent`,
    imageSeelive: 'images/seelive.png',
    imageSeeproject: 'images/logogit.png',

  },
];

const popupWindowBox = popWindowContent.map((popwindow) => `
<div class="container-pop">
<div class="multi-med">
   <span class="multi">${popwindow.name1}</span>
   <span class="multi-media">${popwindow.name2}</span>
   <span id="close-popup">${popwindow.closee}</span>
</div>
<div class="js-pop">
 <ul class="puOut">
   <li>${popwindow.li1}</li>
   <li>${popwindow.li2}</li>
   <li>${popwindow.li3}</li>
 </ul>
</div>
<div class="pop-querry">
<img class="img-popup" src="${popwindow.featuredImagepop}" alt="snapshoot" />
<div class="prg-btns">
<p class="live-prg">
${popwindow.popDescription}
</p>
<div class="live-source">
<button class="btn-live" type="button">
 See Live <img src="${popwindow.imageSeelive}" alt="live icon" />
</button>
<button class="btn-live" type="button">
 See Source <img src="${popwindow.imageSeeproject}" alt="github-icon" />
</button>
</div>
</div>
</div>
</div>
`);
popupWindow.innerHTML = popupWindowBox;

const closeWindow = document.querySelector('#close-popup');
closeWindow.addEventListener('click', () => {
  popupWindow.style.display = 'none';
});

const openWindow = document.getElementById('btncli');
const openWindowcar = document.getElementById('btncli1');
const openWindowcar1 = document.getElementById('btncli2');
const openWindowcar2 = document.getElementById('btncli3');
const openWindowcar3 = document.getElementById('btncli4');
const openWindowcar4 = document.getElementById('btncli5');
const openWindowcar5 = document.getElementById('btncli6');

openWindow.addEventListener('click', () => {
  popupWindow.style.display = 'flex';
});
openWindowcar.addEventListener('click', () => {
  popupWindow.style.display = 'flex';
});
openWindowcar1.addEventListener('click', () => {
  popupWindow.style.display = 'flex';
});
openWindowcar2.addEventListener('click', () => {
  popupWindow.style.display = 'flex';
});
openWindowcar3.addEventListener('click', () => {
  popupWindow.style.display = 'flex';
});
openWindowcar4.addEventListener('click', () => {
  popupWindow.style.display = 'flex';
});
openWindowcar5.addEventListener('click', () => {
  popupWindow.style.display = 'flex';
});
