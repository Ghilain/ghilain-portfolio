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
    name: 'Kwita Izina Event',
    description: 'The Kwita Izina gorilla naming ceremony is modelled off a centuries-old tradition in Rwanda.',
    featuredImage: './images/kwita-izina.PNG',
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
    name: 'Food Recipe',
    description: 'This is a Capstone project being built in the second module of curriculum at microverse.',
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
    name: 'Covid data',
    description: 'Web app showing COVID data for the country have more cases around world and use disease.sh api data',
    featuredImage: './Images/Snapshoot-page-2.png',
    technologies: 'react',
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
    name: 'Budget App',
    description: 'The Ruby on Rails capstone project is about building a mobile web application where you can manage your budget.',
    featuredImage: './Images/Snapshoot-page-2.png',
    technologies: 'ruby',
    technologies1: 'ruby on rails',
    technologies2: 'javascript',
    sourceLink: 'https://ghilain.github.io/mobile-version-skeleton/',
    demoLink: 'https://github.com/Ghilain/mobile-version-skeleton/',
    spec: 'd-none1',
    butt: 'd-none',
    ulist: 'li-bt',
  },
  {
    id: 5,
    name: 'Recipe Food',
    description: 'The Recipe food app keeps track of all your recipes, and ingredients.',
    featuredImage: './Images/Snapshoot-page-2.png',
    technologies: 'ruby',
    technologies1: 'ruby on rails',
    technologies2: 'javascript',
    sourceLink: 'https://ghilain.github.io/mobile-version-skeleton/',
    demoLink: 'https://github.com/Ghilain/mobile-version-skeleton/',
    spec: 'd-none1',
    butt: 'd-none',
    ulist: 'li-bt',
  },
  {
    id: 6,
    name: 'Motorbike Booking',
    description: 'Motorbike Booking is a react frontend application for booking Motorbikes.',
    featuredImage: './Images/Snapshoot-page-2.png',
    technologies: 'react',
    technologies1: 'ruby on rails',
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
          <div class="temp${cards.id} ${cards.spec}">
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
            <button id="btncli${cards.id}" onclick='showPop(${cards.id})' type="submit" class="btn btns btn-2">see project</button>
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
    name1: 'Space Travelers Hub',
    name2: 'Space Travelers Hub',
    closee: '&times;',
    tech: ['react', 'javascript', 'redux'],
    featuredImagepop: './images/space-traveler-hub.PNG',
    popDescription: `Space Travelers Hub is web application for a company that provides commercial and scientific space travel services. Consists of Rockets, Missions, and the My Profile section.
    In this application users can book rockets and join selected space missions available to go in the space.`,
    imageSeelive: 'images/seelive.png',
    imageSeeproject: 'images/logogit.png',
    imagSeen: 'img-popup',
    buttonPop: 'btn-live1',
    buttonPop1: 'btn-live2',
    liveSource: 'live-source',
    ulistPop: 'puOut',
    livePrg: 'live-prg',
    liveslink: 'https://space-traveler-hubs.herokuapp.com/',
    sourcelink: 'https://github.com/Ghilain/space-travelers-hub',

  },
  {
    idi: 1,
    name1: 'Kwita Izina Event',
    name2: 'Kwita Izina Event',
    closee: '&times;',
    tech: ['html', 'css', 'javascript'],
    featuredImagepop: './images/kwita-izina.PNG',
    popDescription: 'The Kwita Izina gorilla naming ceremony is modelled off a centuries-old tradition in which Rwandans name their children in the presence of family and friends. And happen every year.',
    imageSeelive: 'images/seelive.png',
    imageSeeproject: 'images/logogit.png',
    imagSeen: 'img-popup1',
    buttonPop: 'btn-live3',
    buttonPop1: 'btn-live4',
    liveSource: 'live-source1',
    ulistPop: 'puOut1',
    livePrg: 'live-prg1',
    liveslink: 'https://ghilain.github.io/kwita-izina-event/',
    sourcelink: 'https://github.com/Ghilain/kwita-izina-event',

  },
  {
    idi: 2,
    name1: 'Food Recipe',
    name2: 'Food Recipe',
    closee: '&times;',
    tech: ['html', 'css', 'javascript'],
    featuredImagepop: './images/food-recipee.PNG',
    popDescription: "This is a Capstone project being built in the second module of curriculum at microverse. it's an application that uses the MealDB API to display meals and instructions on how to make the meals. The project also utilizes the Involvement API to update and display comments and likes for the meals",
    imageSeelive: 'images/seelive.png',
    imageSeeproject: 'images/logogit.png',
    imagSeen: 'img-popup1',
    buttonPop: 'btn-live3',
    buttonPop1: 'btn-live4',
    liveSource: 'live-source1',
    ulistPop: 'puOut1',
    livePrg: 'live-prg1',
    liveslink: 'https://ghilain.github.io/food-recipee/dist/index.html',
    sourcelink: 'https://github.com/Ghilain/food-recipee',

  },
  {
    idi: 3,
    name1: 'Covid data',
    name2: 'Covid data',
    closee: '&times;',
    tech: ['react', 'css', 'javascript'],
    featuredImagepop: './images/covid-pro.PNG',
    popDescription: 'Web app showing COVID data for the country have more cases around world and use disease.sh api data',
    imageSeelive: 'images/seelive.png',
    imageSeeproject: 'images/logogit.png',
    imagSeen: 'img-popup1',
    buttonPop: 'btn-live3',
    buttonPop1: 'btn-live4',
    liveSource: 'live-source1',
    ulistPop: 'puOut1',
    livePrg: 'live-prg1',
    liveslink: 'https://frabjous-crisp-b21f74.netlify.app/',
    sourcelink: 'https://github.com/Ghilain/covid-data',

  },
  {
    idi: 4,
    name1: 'Budget App',
    name2: 'Budget App',
    closee: '&times;',
    tech: ['ruby', 'bootstrap', 'Ruby on rails'],
    featuredImagepop: './images/budget-app.PNG',
    popDescription: 'The Ruby on Rails capstone project is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    imageSeelive: 'images/seelive.png',
    imageSeeproject: 'images/logogit.png',
    imagSeen: 'img-popup1',
    buttonPop: 'btn-live3',
    buttonPop1: 'btn-live4',
    liveSource: 'live-source1',
    ulistPop: 'puOut1',
    livePrg: 'live-prg1',
    liveslink: 'https://desolate-fjord-22181.herokuapp.com/',
    sourcelink: 'https://github.com/Ghilain/budget-app/tree/dev',

  },
  {
    idi: 5,
    name1: 'Recipe Food',
    name2: 'Recipe Food',
    closee: '&times;',
    tech: ['ruby', 'css3', 'Ruby on rails'],
    featuredImagepop: './images/food-recipee.PNG',
    popDescription: 'The Recipe food app keeps track of all your recipes, and ingredients. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.',
    imageSeelive: 'images/seelive.png',
    imageSeeproject: 'images/logogit.png',
    imagSeen: 'img-popup1',
    buttonPop: 'btn-live3',
    buttonPop1: 'btn-live4',
    liveSource: 'live-source1',
    ulistPop: 'puOut1',
    livePrg: 'live-prg1',
    liveslink: 'https://github.com/Ghilain/recipes-food',
    sourcelink: 'https://github.com/Ghilain/recipes-food',

  },
  {
    idi: 6,
    name1: 'Motorbike Booking',
    name2: 'Motorbike Booking',
    closee: '&times;',
    tech: ['ruby', 'react', 'Ruby on rails'],
    featuredImagepop: './images/motobikin-phone.PNG',
    popDescription: 'Motorbike Booking is a react frontend application for booking Motorbikes. This application serves as user interface for the backend and users can create, and delete Motorbikes, as well as add reservations. Users can sign up or sign in to able to book motor.',
    imageSeelive: 'images/seelive.png',
    imageSeeproject: 'images/logogit.png',
    imagSeen: 'img-popup1',
    buttonPop: 'btn-live3',
    buttonPop1: 'btn-live4',
    liveSource: 'live-source1',
    ulistPop: 'puOut1',
    livePrg: 'live-prg1',
    liveslink: 'https://motorbike-booking.netlify.app/',
    sourcelink: 'https://github.com/RWUBAKWANAYO/motorbike_booking_frontend',

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
<button class="${popwindow.buttonPop}" onclick=" window.open('${popwindow.liveslink}','_blank')" type="button">
 See Live <img src="${popwindow.imageSeelive}" alt="live icon" />
</button>
<button class="${popwindow.buttonPop1}" onclick=" window.open('${popwindow.sourcelink}','_blank')" type="button">
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