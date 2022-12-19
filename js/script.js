let searchBtn = document.querySelector('.search-icon');
let cancelBtn = document.querySelector('.cancel-icon');
let items = document.querySelector('.nav-items');
let form = document.querySelector('form');
let menuBtn = document.querySelector('.menu-icon span');

let url = 'https://digimon-api.vercel.app/api/digimon';
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

function displayNoneDigimon() {
  allSectionContainer.forEach((element) => {
    element.classList.add('hide');
  });
}

async function getAllDigimons() {
  displayNoneDigimon();
  document.getElementById('getAllDigimon').classList.remove('hide');

  titleMain.innerText = 'Lista com todos os Digimons';

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

let fetchLevelDigimon = async (level, id) => {
  let url = `https://digimon-api.vercel.app/api/digimon/level/${level}`;

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

function searchDigimon() {
  displayNoneDigimon();
  // searchDigimonContainer.removeChild(document.getElementsByTagName("div"));
  let digimonInput = document.querySelector('.search-data').value;

  let urlInputDigimon = `https://digimon-api.vercel.app/api/digimon/name/${digimonInput}`;

  titleMain.innerText = 'Resultado da Pesquisa:';

  document.getElementById('getSearchDigimon').classList.remove('hide');

  let cont = document.querySelectorAll('.digimonSearch');

  fetch(urlInputDigimon)
    .then((response) => response.json())
    .then((data) => {
      data.map((digimon) => {
        //card element
        let divCard = document.createElement('div');
        divCard.classList.add('container', 'digimonSearch');
        document.getElementById('getSearchDigimon').appendChild(divCard);

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

        document
          .getElementById('getSearchDigimon')
          .replaceChild(
            divCard,
            document.getElementById('getSearchDigimon').childNodes[0],
          );
      });
    })
    .catch((error) => {
      titleMain.innerText = `Não existe nenhum Digimon com esse nome: ${digimonInput}`;
    });
}
async function getDigimonLocal() {
  displayNoneDigimon();
  search.classList.add('hide');


  let arrayDigimon = JSON.parse(localStorage.getItem('digimon'));

  let searchInput = document.getElementById('searchInput').value;
  clearSearchContainer()

  let filterResult = arrayDigimon.filter(
    (digimon) =>
      digimon.name.toLowerCase().match(searchInput) ||
      digimon.name.match(searchInput),
  );

  if (searchInput.length > 0) {
    filterResult.forEach((digimon) => {
      let name= digimon.name;
      let level= digimon.level;
      let img = digimon.img;
      createContainerSearch(search,img,name,level)
    });
    
  }
}

function clearSearchContainer() {
  let containerSearch = document.getElementById('getSearchDigimon');

  while (containerSearch.firstChild) {
    containerSearch.removeChild(containerSearch.firstChild);
  }
}



function createContainerSearch(container,digimonImage,digimon, level) {
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

getAllDigimons();