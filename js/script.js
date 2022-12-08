let url = "https://digimon-api.vercel.app/api/digimon";

async function getAllDigimons() {

  let response = await fetch(url);

  console.log(response);

  let data = await response.json();

  console.log(data)

  data.map((digimon)=> {

    //card element
    let divCard = document.createElement('div');
    divCard.className='card';
    document.querySelector('.container').appendChild(divCard); 

    //div face front
    let divFront = document.createElement('div');
    divFront.classList.add('space','front');

    let img = document.createElement('img');
    img.setAttribute('src',`${digimon.img}`);
    let nameFront = document.createElement('h3');
    nameFront.innerText = digimon.name;


    divFront.appendChild(img);
    divFront.appendChild(nameFront);
    divCard.appendChild(divFront);

    //div face back
    let divBack = document.createElement('div');
    divBack.classList.add('space','back');

    let nameBack = document.createElement('h3');
    nameBack.innerText = digimon.name;

    let level = document.createElement('p');
    level.innerText = digimon.level;

    divBack.appendChild(nameBack);
    divBack.appendChild(level);
    divCard.appendChild(divBack);


    // let div = document.createElement('div');
    // let img = document.createElement('img')
    // let h3 = document.createElement('h3')
    // let p = document.createElement('p')

    // img.setAttribute('src',`${digimon.img}`);
    // h3.innerText = digimon.name;
    // p.innerText = digimon.level;

    // div.appendChild(img);
    // div.appendChild(h3);
    // div.appendChild(p);


    // document.querySelector('.container').appendChild(div)
  });
}

 getAllDigimons();
