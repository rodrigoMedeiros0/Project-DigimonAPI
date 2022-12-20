let searchBtn = document.querySelector('.search-icon');
let cancelBtn = document.querySelector('.cancel-icon');
let items = document.querySelector('.nav-items');
let form = document.querySelector('form');
let menuBtn = document.querySelector('.menu-icon span');

let titleMain = document.querySelector('.titleMain');

let all = document.getElementById('getAllDigimon');
let training = document.getElementById('getTrainingDigimon');
let rookie = document.getElementById('getRookieDigimon');
let champion = document.getElementById('getChampionDigimon');
let ultimate = document.getElementById('getUltimateDigimon');
let mega = document.getElementById('getMegaDigimon');
let search = document.getElementById('getSearchDigimon');

let allSectionContainer = document.querySelectorAll('.show-digimon');

menuBtn.onclick = () => {
  items.classList.add('active');
  menuBtn.classList.add('hide');
  searchBtn.classList.add('hide');
  cancelBtn.classList.add('show');
};
cancelBtn.onclick = () => {
  items.classList.remove('active');
  menuBtn.classList.remove('hide');
  searchBtn.classList.remove('hide');
  cancelBtn.classList.remove('show');
  form.classList.remove('active');
  cancelBtn.style.color = '#F18805';
};
searchBtn.onclick = () => {
  form.classList.add('active');
  searchBtn.classList.add('hide');
  cancelBtn.classList.add('show');
};

async function getAllDigimons() {
  titleMain.innerText = 'Lista com todos os Digimons';

  let url = 'https://digimon-api.vercel.app/api/digimon';
  let response = await fetch(url);
  let data = await response.json();

  localStorage.setItem('digimon', JSON.stringify(data));
}

getAllDigimons();

async function showAllDigimon() {
  titleMain.innerText = 'Lista com todos os Digimons';

  let arrayDigimon = JSON.parse(localStorage.getItem('digimon'));

  let filterResult = arrayDigimon.filter(
    (digimon) =>
      digimon.name.toLowerCase().match(searchInput) ||
      digimon.name.match(searchInput),
  );

  filterResult.forEach((digimon) => {
    let name = digimon.name;
    let level = digimon.level;
    let img = digimon.img;

    createContainerSearch(all, img, name, level);
  });
}

await showAllDigimon();

function clickShowAll() {
  displayNoneDigimon();
  all.classList.remove('hide');
  titleMain.innerText = 'Lista com todos os Digimons';
  document.getElementById('searchInput').value = '';
  activeNav();
}

function clickShowTraining() {
  displayNoneDigimon();
  training.classList.remove('hide');
  activeNav('In Training');
  titleMain.innerText = 'Filtro: In Training';
}

function clickShowRookie() {
  displayNoneDigimon();
  rookie.classList.remove('hide');
  activeNav('Rookie');
  titleMain.innerText = 'Filtro: Rookie';
}

function clickShowChampion() {
  displayNoneDigimon();
  champion.classList.remove('hide');
  activeNav('Champion');
  titleMain.innerText = 'Filtro: Champion';
}

function clickShowUltimate() {
  displayNoneDigimon();
  ultimate.classList.remove('hide');
  activeNav('Ultimate');
  titleMain.innerText = 'Filtro: Ultimate';
}

function clickShowMega() {
  displayNoneDigimon();
  mega.classList.remove('hide');
  activeNav('Mega');
  titleMain.innerText = 'Filtro: Mega';
}

function activeNav(filter) {
  const navBarAnchors = document.querySelectorAll('.nav-items a');
  navBarAnchors.forEach((element) => {
    if (element.innerHTML === filter) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

function showLevelDigimon(level, container) {
  document.getElementById('searchInput').value = '';

  let searchInput = (document.getElementById('searchInput').value = '');

  let nameFilter = container;

  let arrayDigimon = JSON.parse(localStorage.getItem('digimon'));
  let filterResult = arrayDigimon.filter(
    (digimon) =>
      digimon.name.toLowerCase().match(searchInput) ||
      digimon.name.match(searchInput),
  );

  filterResult.forEach((digimon) => {
    let name = digimon.name;
    let levelFilter = digimon.level;
    let img = digimon.img;

    if (level == levelFilter) {
      createContainerSearch(nameFilter, img, name, levelFilter);
    }
  });
}

showLevelDigimon('In Training', training);
showLevelDigimon('Training', training);
showLevelDigimon('Rookie', rookie);
showLevelDigimon('Champion', champion);
showLevelDigimon('Ultimate', ultimate);
showLevelDigimon('Mega', mega);

function searchDigimon() {
  displayNoneDigimon();
  clearSearchContainer();
  search.classList.remove('hide');

  let arrayDigimon = JSON.parse(localStorage.getItem('digimon'));

  let searchInput = document.getElementById('searchInput').value;

  let filterResult = arrayDigimon.filter(
    (digimon) =>
      digimon.name.toLowerCase().match(searchInput) ||
      digimon.name.match(searchInput),
  );

  let nameFilter = '';
  const navBarAnchors = document.querySelectorAll('.nav-items a');
  navBarAnchors.forEach((element) => {
    if (element.className == 'active') {
      nameFilter = element.innerHTML;
    }
  });

  if (searchInput.length > 0) {
    filterResult.forEach((digimon) => {
      let name = digimon.name;
      let level = digimon.level;
      let img = digimon.img;

      if (nameFilter == level) {
        createContainerSearch(search, img, name, level);
      }else if (nameFilter == ''){
        createContainerSearch(search, img, name, level);
      }
    });
      } else {
        switchDigimon(nameFilter);
      }
}

function displayNoneDigimon() {
  allSectionContainer.forEach((element) => {
    element.classList.add('hide');
  });
}

function clearSearchContainer() {
  if (search) {
    let containerSearch = document.getElementById('getSearchDigimon');
    while (containerSearch.firstChild) {
      containerSearch.removeChild(containerSearch.firstChild);
    }
  }
}

function createContainerSearch(container, digimonImage, digimon, level) {
  container.classList.remove('hide');
  let divCard = document.createElement('div');
  divCard.className = 'container';
  container.appendChild(divCard);

  let divImg = document.createElement('div');
  let img = document.createElement('img');
  divImg.classList.add('image');
  img.setAttribute('src', digimonImage);
  divImg.appendChild(img);
  divCard.appendChild(divImg);

  let divCardContent = document.createElement('div');
  let divInfo = document.createElement('div');
  let h2 = document.createElement('h2');
  let span = document.createElement('span');

  divCardContent.classList.add('content');
  divInfo.classList.add('info');
  h2.innerText = digimon;
  span.innerText = level;
  divInfo.appendChild(h2);
  divInfo.appendChild(span);
  divCardContent.appendChild(divInfo);

  divCard.appendChild(divCardContent);
}

function closeMenu() {
  items.classList.remove('active');
}

function switchDigimon(filter) {
  switch (filter) {
    case 'In Training':
      clickShowTraining();
      break;
    case 'Rookie':
      clickShowRookie();
      break;
    case 'Champion':
      clickShowChampion();
      break;
    case 'Ultimate':
      clickShowUltimate();
      break;
    case 'Mega':
      clickShowMega();
      break;
    default:
      clickShowAll();
  }
}
