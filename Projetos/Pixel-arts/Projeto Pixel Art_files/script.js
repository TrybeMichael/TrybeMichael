window.onload = function () {
  //requisito 2
  //aqui eu crio e formato uma caixa que vai agregar as minhas caixinhas de cores
  function createPallete() {
    const getBody = document.getElementsByTagName('main')[0];
    const sectionPallete = document.createElement('section');
    sectionPallete.id = 'color-palette';
    sectionPallete.style.width = '500px';
    sectionPallete.style.height = '200px';
    // sectionPallete.style.border = 'solid 1px black';
    // sectionPallete.style.backgroundColor = 'white';
    getBody.appendChild(sectionPallete);
  }
  //aqui eu crio uma função que será usada sempre que eu precisar criar uma cor aleatória
  function createRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  } //essa função foi criada com base nesse vídeo: https://www.youtube.com/watch?v=Jm28Ar5vwDc&t=3692s&ab_channel=DanielCintori

  //Requisito 3
  //Aqui eu crio as minhas caixinhas que vão agregar as minhas cores iniciais e as aleatórias depois de clicar no botão.
  function createDivs() {
    const divsParent = document.getElementsByTagName('section')[0];
    for (let index = 0; index < 4; index += 1) {
      const divPallete1 = document.createElement('div');
      divPallete1.classList = 'color';
      divPallete1.style.width = '50px';
      divPallete1.style.height = '50px';
      divPallete1.style.border = 'solid 1px black';
      divPallete1.style.margin = '30px';
      divPallete1.style.display = 'inline-block';
      divPallete1.style.alignContent = 'center';
      divsParent.appendChild(divPallete1);
    }
    //Requisito 4
    //Aqui eu defino as cores iniciais das minhas caixinhas sendo requisito que sejam cores diferentes e a primeira preta.
    const getDiv = document.getElementsByClassName('color')[0];
    getDiv.style.backgroundColor = 'black';
    const getDiv2 = document.getElementsByClassName('color')[1];
    getDiv2.style.backgroundColor = 'blue';
    const getDiv3 = document.getElementsByClassName('color')[2];
    getDiv3.style.backgroundColor = 'magenta';
    const getDiv4 = document.getElementsByClassName('color')[3];
    getDiv4.style.backgroundColor = 'yellow';
  }

  const createButton = () => {
    const getSection = document.getElementsByTagName('section')[0];
    const button = document.createElement('button');
    button.id = 'button-random-color';
    button.innerText = 'Cores aleatórias';
    button.style.margin = '30px';
    getSection.appendChild(button);
  };

  function storageColors() {
    let storageColorsArr = [];
    const getDiv = document.getElementsByClassName('color');
    for (let index = 0; index < getDiv.length; index += 1) {
      storageColorsArr.push(getDiv[index].style.backgroundColor);
    }
    localStorage.setItem('colorPalette', JSON.stringify(storageColorsArr));
  }

  function begginColors() {
    let getBegginColor = JSON.parse(localStorage.getItem('colorPalette'));
    let getDiv = document.getElementsByClassName('color');
    if (getBegginColor) {
      //Essa verificação foi feita com ajuda da Maysa Dantas em uma mentoria summer.
      for (let index = 1; index < getDiv.length; index += 1) {
        getDiv[index].style.backgroundColor = getBegginColor[index];
      }
    }
  }

  const addRandomColors = () => {
    const getButton = document.getElementById('button-random-color');
    const getDiv = document.querySelectorAll('.color');
    getDiv[0].classList.add('selected');
    getButton.addEventListener('click', function () {
      for (let index = 1; index < getDiv.length; index += 1) {
        getDiv[index].style.backgroundColor = createRandomColor();
      }
      storageColors(); //Essa parte do cógigo onde chamo a função depois do eventListener foi feita com ajuda do especialista Matheus na monitoria de projeto.
    });
  };

  function createTable() {
    const getBody = document.getElementsByTagName('main')[0];
    const sectionTable = document.createElement('section');
    sectionTable.id = 'pixel-board';
    sectionTable.style.width = '262px';
    sectionTable.style.height = '262px';
    // sectionTable.style.border = 'solid 1px black';
    // sectionTable.style.backgroundColor = 'white';
    sectionTable.style.display = 'flex';
    sectionTable.style.flexDirection = 'row';
    sectionTable.style.flexWrap = 'wrap';
    getBody.appendChild(sectionTable);
  }

  function createTableItems() {
    const getTable = document.getElementsByTagName('section')[1];
    for (let index = 0; index < 25; index += 1) {
      const tableItem = document.createElement('div');
      tableItem.classList = 'pixel';
      tableItem.style.width = '40px';
      tableItem.style.height = '40px';
      tableItem.style.border = 'solid 1px black';
      tableItem.style.margin = '5px';
      tableItem.style.backgroundColor = 'white';
      getTable.appendChild(tableItem);
    }
  }

  //requisito 9

  function chooseColor() {
    const getColorPalette = document.getElementById('color-palette');
      
    getColorPalette.addEventListener('click', function (event) {
      const currentSelectedColor = document.querySelector('.selected');
        currentSelectedColor.classList.remove('selected');
        event.target.classList.add('selected');     
    });
  }
  //Nessa função tive ajuda de colegas nessa thread: https://trybecourse.slack.com/archives/C040NSZTGHW/p1665260231424119
  
  //requisito 10

  function transferColor(){
    const getBoard = document.querySelectorAll('.pixel');
    for(let index = 0; index < getBoard.length; index += 1){
    getBoard[index].addEventListener('click', function(event){
      const getSelected = document.querySelector('.selected')
      event.target.style.backgroundColor = getSelected.style.backgroundColor
    })
    }
  }
  //Nesse requisito recebi ajuda da Maysa durante a monitoria summer.

  createPallete();
  createRandomColor();
  createDivs();
  createButton();
  addRandomColors();
  createTable();
  createTableItems();
  begginColors();
  chooseColor();
  transferColor()
};
