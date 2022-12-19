let searchBtn = document.querySelector('.search-icon');
let cancelBtn = document.querySelector('.cancel-icon');
let items = document.querySelector('.nav-items');
let form = document.querySelector('form');
let menuBtn = document.querySelector('.menu-icon span');

let titleMain = document.querySelector('.titleMain');

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
  displayNoneDigimon();
  navBarAnchors.forEach((element) => element.classList.remove('active'));

  document.getElementById('getAllDigimon').classList.remove('hide');

  titleMain.innerText = 'Lista com todos os Digimons';

  let url = 'https://digimon-api.vercel.app/api/digimon';
  let response = await fetch(url);
  let data = await response.json();

  localStorage.setItem('digimon', JSON.stringify(data));

  data.map((digimon) => {
    //card element
    let divCard = document.createElement('div');
    divCard.className = 'container';
    document.getElementById('getAllDigimon').appendChild(divCard);

    //div image
    let divImg = document.createElement('div');
    let img = document.createElement('img');
    divImg.classList.add('image');
    img.setAttribute('src', `${digimon.img}`);
    divImg.appendChild(img);
    divCard.appendChild(divImg);

    //card - digimon level
    let divCardContent = document.createElement('div');
    let divInfo = document.createElement('div');
    let h2 = document.createElement('h2');
    let span = document.createElement('span');

    divCardContent.classList.add('content');
    divInfo.classList.add('info');
    h2.innerText = digimon.name;
    span.innerText = digimon.level;
    divInfo.appendChild(h2);
    divInfo.appendChild(span);
    divCardContent.appendChild(divInfo);

    divCard.appendChild(divCardContent);
  });
}

const navBarAnchors = document.querySelectorAll('.nav-items a');

let fetchLevelDigimon = async (level, id) => {
  closeMenu();
  let searchInput = document.getElementById('searchInput').value = '';
  document.getElementById('searchInput').innerText = '';
  let url = `https://digimon-api.vercel.app/api/digimon/level/${level}`;
  navBarAnchors.forEach((element) => {
    if (element.innerHTML === level) {
      navBarAnchors.forEach((element) => element.classList.remove('active'));
      element.classList.add('active');
    }
  });
  displayNoneDigimon();
  id.classList.remove('hide');

  let response = await fetch(url);
  let data = await response.json();

  data.map((digimon) => {
    //card element
    let divCard = document.createElement('div');
    divCard.className = 'container';
    id.appendChild(divCard);

    //div image
    let divImg = document.createElement('div');
    let img = document.createElement('img');
    divImg.classList.add('image');
    img.setAttribute('src', `${digimon.img}`);
    divImg.appendChild(img);
    divCard.appendChild(divImg);

    //card - digimon level
    let divCardContent = document.createElement('div');
    let divInfo = document.createElement('div');
    let h2 = document.createElement('h2');
    let span = document.createElement('span');

    divCardContent.classList.add('content');
    divInfo.classList.add('info');
    h2.innerText = digimon.name;
    span.innerText = digimon.level;
    divInfo.appendChild(h2);
    divInfo.appendChild(span);
    divCardContent.appendChild(divInfo);

    divCard.appendChild(divCardContent);
    titleMain.innerText = `Digimons level: ${digimon.level}`;
  });
};

let fetchNameDigimon = async (name, id) => {
  id.classList.remove('hide');
  let url = `https://digimon-api.vercel.app/api/digimon/name/${name}`;

  let response = await fetch(url);
  let data = await response.json();

  data.map((digimon) => {
    //card element
    let divCard = document.createElement('div');
    divCard.className = 'container';
    id.appendChild(divCard);

    //div image
    let divImg = document.createElement('div');
    let img = document.createElement('img');
    divImg.classList.add('image');
    img.setAttribute('src', `${digimon.img}`);
    divImg.appendChild(img);
    divCard.appendChild(divImg);

    //card - digimon level
    let divCardContent = document.createElement('div');
    let divInfo = document.createElement('div');
    let h2 = document.createElement('h2');
    let span = document.createElement('span');

    divCardContent.classList.add('content');
    divInfo.classList.add('info');
    h2.innerText = digimon.name;
    span.innerText = digimon.level;
    divInfo.appendChild(h2);
    divInfo.appendChild(span);
    divCardContent.appendChild(divInfo);

    divCard.appendChild(divCardContent);
    titleMain.innerText = `Resultado: `;
  });
};

async function searchDigimon() {
  displayNoneDigimon();
  search.classList.add('hide');

  let arrayDigimon = JSON.parse(localStorage.getItem('digimon'));

  let searchInput = document.getElementById('searchInput').value;
  clearSearchContainer();

  let filterResult = arrayDigimon.filter(
    (digimon) =>
      digimon.name.toLowerCase().match(searchInput) ||
      digimon.name.match(searchInput),
  );
  let nameFilter = '';
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
      if (nameFilter == level || nameFilter == '') {
        createContainerSearch(search, img, name, level);
      }
    });
  } else {
    switch (nameFilter) {
      case 'In Training':
        fetchLevelDigimon('In Training', training);
        break;
      case 'Rookie':
        fetchLevelDigimon('Rookie', rookie);
        break;
      case 'Champion':
        fetchLevelDigimon('Champion', champion);
        break;
      case 'Ultimate':
        fetchLevelDigimon('Ultimate', ultimate);
        break;
      case 'Mega':
        fetchLevelDigimon('Mega', mega);
        break;
        default: 
      getAllDigimons();
    }
  }
}

function displayNoneDigimon() {
  allSectionContainer.forEach((element) => {
    element.classList.add('hide');
  });
}

function clearSearchContainer() {
  let containerSearch = document.getElementById('getSearchDigimon');

  while (containerSearch.firstChild) {
    containerSearch.removeChild(containerSearch.firstChild);
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
  titleMain.innerText = `Resultado: `;
}

function closeMenu() {
  items.classList.remove('active');
}
getAllDigimons();
