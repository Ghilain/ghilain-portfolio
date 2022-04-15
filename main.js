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
            <button id="btncli${cards.id}" onclick='showPop(${cards.id})' type="submit" class="btn btns btn-2 ${cards.butt}">see project</button>
          </div>
        </li>

`).join('');

cardList.innerHTML += projectCards;

// Popup window
const popupWindow = document.querySelector('.bgpopup');
const box = document.getElementById('popupwindow');

const popWindowContent = [
  {
    idi: 0,
    name1: 'Multi Post Stories',
    name2: 'Keeping track of hundreds  of components website',
    closee: '&times;',
    tech: ['html', 'bootstrap', 'Ruby on rails'],
    featuredImagepop: './images/popupdesk.png',
    popDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of
  type and scrambled it to make a type specimen book. It has
  survived not only five centuries, but also the leap into
  electronic typesetting, remaining essent`,
    imageSeelive: 'images/seelive.png',
    imageSeeproject: 'images/logogit.png',
    imagSeen: 'img-popup',
    buttonPop: 'btn-live1',
    buttonPop1: 'btn-live2',
    liveSource: 'live-source',
    ulistPop: 'puOut',
    livePrg: 'live-prg',

  },
  {
    idi: 1,
    name1: 'Profesional Art Printing Data',
    name2: 'Keeping track of hundreds  of components website',
    closee: '&times;',
    tech: ['html', 'bootstrap', 'Ruby on rails'],
    featuredImagepop: './images/MaskGroup3.png',
    popDescription: `A daily selection of privately personalized
     reads; no accounts or sign-ups required. has been the 
     industry's standard`,
    imageSeelive: 'images/seelive.png',
    imageSeeproject: 'images/logogit.png',
    imagSeen: 'img-popup1',
    buttonPop: 'btn-live3',
    buttonPop1: 'btn-live4',
    liveSource: 'live-source1',
    ulistPop: 'puOut1',
    livePrg: 'live-prg1',
  },
  {
    idi: 2,
    name1: 'Profesional Art Printing Data',
    name2: 'Keeping track of hundreds  of components website',
    closee: '&times;',
    tech: ['html', 'bootstrap', 'Ruby on rails'],
    featuredImagepop: './images/MaskGroup3.png',
    popDescription: `A daily selection of privately personalized
     reads; no accounts or sign-ups required. has been the 
     industry's standard`,
    imageSeelive: 'images/seelive.png',
    imageSeeproject: 'images/logogit.png',
    imagSeen: 'img-popup1',
    buttonPop: 'btn-live3',
    buttonPop1: 'btn-live4',
    liveSource: 'live-source1',
    ulistPop: 'puOut1',
    livePrg: 'live-prg1',

  },
  {
    idi: 3,
    name1: 'Profesional Art Printing Data',
    name2: 'Keeping track of hundreds  of components website',
    closee: '&times;',
    tech: ['html', 'bootstrap', 'Ruby on rails'],
    featuredImagepop: './images/MaskGroup3.png',
    popDescription: `A daily selection of privately personalized
     reads; no accounts or sign-ups required. has been the 
     industry's standard`,
    imageSeelive: 'images/seelive.png',
    imageSeeproject: 'images/logogit.png',
    imagSeen: 'img-popup1',
    buttonPop: 'btn-live3',
    buttonPop1: 'btn-live4',
    liveSource: 'live-source1',
    ulistPop: 'puOut1',
    livePrg: 'live-prg1',

  },
  {
    idi: 4,
    name1: 'Profesional Art Printing Data',
    name2: 'Keeping track of hundreds  of components website',
    closee: '&times;',
    tech: ['html', 'bootstrap', 'Ruby on rails'],
    featuredImagepop: './images/MaskGroup3.png',
    popDescription: `A daily selection of privately personalized
     reads; no accounts or sign-ups required. has been the 
     industry's standard`,
    imageSeelive: 'images/seelive.png',
    imageSeeproject: 'images/logogit.png',
    imagSeen: 'img-popup1',
    buttonPop: 'btn-live3',
    buttonPop1: 'btn-live4',
    liveSource: 'live-source1',
    ulistPop: 'puOut1',
    livePrg: 'live-prg1',

  },
  {
    idi: 5,
    name1: 'Profesional Art Printing Data',
    name2: 'Keeping track of hundreds  of components website',
    closee: '&times;',
    tech: ['html', 'bootstrap', 'Ruby on rails'],
    featuredImagepop: './images/MaskGroup3.png',
    popDescription: `A daily selection of privately personalized
     reads; no accounts or sign-ups required. has been the 
     industry's standard`,
    imageSeelive: 'images/seelive.png',
    imageSeeproject: 'images/logogit.png',
    imagSeen: 'img-popup1',
    buttonPop: 'btn-live3',
    buttonPop1: 'btn-live4',
    liveSource: 'live-source1',
    ulistPop: 'puOut1',
    livePrg: 'live-prg1',

  },
  {
    idi: 6,
    name1: 'Profesional Art Printing Data',
    name2: 'Keeping track of hundreds  of components website',
    closee: '&times;',
    tech: ['html', 'bootstrap', 'Ruby on rails'],
    featuredImagepop: './images/MaskGroup3.png',
    popDescription: `A daily selection of privately personalized
     reads; no accounts or sign-ups required. has been the 
     industry's standard`,
    imageSeelive: 'images/seelive.png',
    imageSeeproject: 'images/logogit.png',
    imagSeen: 'img-popup1',
    buttonPop: 'btn-live3',
    buttonPop1: 'btn-live4',
    liveSource: 'live-source1',
    ulistPop: 'puOut1',
    livePrg: 'live-prg1',

  },
];
function popData(popwindow) {
  const temp = document.createElement('template');
  temp.innerHTML = `
<div class="container-pop">
<div class="multi-med">
   <span class="multi">${popwindow.name1}</span>
   <span class="multi-media">${popwindow.name2}</span>
   <span id="close-popup" class="popupclose">${popwindow.closee}</span>
</div>
<div class="js-pop">
 <ul class="${popwindow.ulistPop}">

   ${popwindow.tech.map((litech, index) => `<li class="${index}">${litech}</li>`).join('')}
 </ul>
</div>
<div class="pop-querry">
<img class="${popwindow.imagSeen}" src="${popwindow.featuredImagepop}" alt="snapshoot" />
<div class="prg-btns">
<p class="${popwindow.livePrg}">
${popwindow.popDescription}
</p>
<div class="${popwindow.liveSource}">
<button class="${popwindow.buttonPop}" type="button">
 See Live <img src="${popwindow.imageSeelive}" alt="live icon" />
</button>
<button class="${popwindow.buttonPop1}" type="button">
 See Source <img src="${popwindow.imageSeeproject}" alt="github-icon" />
</button>
</div>
</div>
</div>
</div>
`;
  const box = document.getElementById('popupwindow');
  box.appendChild(temp.content);
}
let idi;
function showPop(idi) {
  popWindowContent.find((popwindow) => {
    if (Number(idi) === Number(popwindow.idi)) {
      popData(popwindow);
      popupWindow.style.display = 'flex';
    }
    return false;
  });
  const closeWindow1 = document.querySelector('#close-popup');
  const openinWindow = document.querySelector('.container-pop');
  closeWindow1.addEventListener('click', () => {
    box.innerHTML = '';
    popupWindow.style.display = 'none';
  });
  closeWindow1.addEventListener('click', () => {
    box.innerHTML = '';
    openinWindow.style.display = 'none';
  });
}
showPop(idi);
