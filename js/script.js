let searchBtn = document.querySelector('.search-icon');
let cancelBtn = document.querySelector('.cancel-icon');
let items = document.querySelector('.nav-items');
let form = document.querySelector('form');
let menuBtn = document.querySelector('.menu-icon span');

let url = 'https://digimon-api.vercel.app/api/digimon';
let titleMain = document.querySelector('.titleMain');

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

async function getTrainingDigimon() {
  displayNoneDigimon();
  document.getElementById('getTrainingDigimon').classList.remove('hide');

  titleMain.innerText = 'Digimons nível Training';

  let urlLevel = 'https://digimon-api.vercel.app/api/digimon/level/In Training';
  let response = await fetch(urlLevel);
  let data = await response.json();

  data.map((digimon) => {
    //card element
    let divCard = document.createElement('div');
    divCard.className = 'container';
    document.getElementById('getTrainingDigimon').appendChild(divCard);

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

async function getRookieDigimon() {
  displayNoneDigimon();
  document.getElementById('getRookieDigimon').classList.remove('hide');

  titleMain.innerText = 'Digimons nível Rookie';

  let urlLevel = 'https://digimon-api.vercel.app/api/digimon/level/Rookie';

  let response = await fetch(urlLevel);

  let data = await response.json();

  data.map((digimon) => {
    //card element
    let divCard = document.createElement('div');
    divCard.className = 'container';
    document.getElementById('getRookieDigimon').appendChild(divCard);

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

async function getChampionDigimon() {
  displayNoneDigimon();
  document.getElementById('getChampionDigimon').classList.remove('hide');

  titleMain.innerText = 'Digimons nível Champion';

  let urlLevel = 'https://digimon-api.vercel.app/api/digimon/level/Champion';

  let response = await fetch(urlLevel);

  let data = await response.json(); 

  data.map((digimon) => {
    //card element
    let divCard = document.createElement('div');
    divCard.className = 'container';
    document.getElementById('getChampionDigimon').appendChild(divCard);

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

async function getUltimateDigimon() {
  displayNoneDigimon();
  document.getElementById('getUltimateDigimon').classList.remove('hide');

  titleMain.innerText = 'Digimons nível Ultimate';

  let urlLevel = 'https://digimon-api.vercel.app/api/digimon/level/Ultimate';

  let response = await fetch(urlLevel);

  let data = await response.json();

  data.map((digimon) => {
    //card element
    let divCard = document.createElement('div');
    divCard.className = 'container';
    document.getElementById('getUltimateDigimon').appendChild(divCard);

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

function displayNoneDigimon() {
  allSectionContainer.forEach((element) => {
    element.classList.add('hide');
  });
}

async function getMegaDigimon() {
  displayNoneDigimon();
  document.getElementById('getMegaDigimon').classList.remove('hide');

  titleMain.innerText = 'Digimons nível Mega';

  let urlLevel = 'https://digimon-api.vercel.app/api/digimon/level/Mega';

  let response = await fetch(urlLevel);
  let data = await response.json();

  data.map((digimon) => {
    //card element
    let divCard = document.createElement('div');
    divCard.className = 'container';
    document.getElementById('getMegaDigimon').appendChild(divCard);

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

async function getDigimon() {
  displayNoneDigimon();
  
  let digimonInput = document.querySelector('.search-data').value;

  let urlDigimon = 'https://digimon-api.vercel.app/api/digimon';

  let response = await fetch(urlDigimon);

  let data = await response.json(); 

  data.map((digimon) => {

    let name = digimon.name;
    let url = `https://digimon-api.vercel.app/api/digimon/name/${name}`;
    localStorage.setItem(name,url);
  });
}
getDigimon();

console.log(names)

for(let count = 1; i <=209; i++) {
  
let digimonLocal = localStorage.key(count);

//  se key indexOF if -1 = erro

}