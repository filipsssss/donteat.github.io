

/* importa os POP UPS */
document.addEventListener('DOMContentLoaded', function () {
  const popups = [
    'assets/images/adp_7_popup/img1.png',
    'assets/images/adp_7_popup/img2.png',
    'assets/images/adp_7_popup/img3.png',
    'assets/images/adp_7_popup/img4.png',
    'assets/images/adp_7_popup/img5.png',
    'assets/images/adp_7_popup/img6.png',
    'assets/images/adp_7_popup/img7.png',
    'assets/images/adp_7_popup/img8.png',
    'assets/images/adp_7_popup/img9.png',
    'assets/images/adp_7_popup/img10.png',
    'assets/images/adp_7_popup/img11.png',
    'assets/images/adp_7_popup/img12.png',
    'assets/images/adp_7_popup/img13.png',
    'assets/images/adp_7_popup/img14.png',
    'assets/images/adp_7_popup/img15.png',
  ];

  const popups2 = [
    //estética 1
    'assets/images/adp_1_popup/img1.png',
    'assets/images/adp_1_popup/img2.png',
    'assets/images/adp_1_popup/img3.png',
    'assets/images/adp_1_popup/img4.png',
    'assets/images/adp_1_popup/img5.png',
    'assets/images/adp_1_popup/img6.png',
    'assets/images/adp_1_popup/img7.png',
    'assets/images/adp_1_popup/img8.png',
    'assets/images/adp_1_popup/img9.png',
    'assets/images/adp_1_popup/img10.png',
    'assets/images/adp_1_popup/img11.png',
    'assets/images/adp_1_popup/img12.png',
    'assets/images/adp_1_popup/img13.png',
    'assets/images/adp_1_popup/img14.png',
    'assets/images/adp_1_popup/img15.png',
    //estética 2
    'assets/images/adp_2_popup/img1.png',
    'assets/images/adp_2_popup/img2.png',
    'assets/images/adp_2_popup/img3.png',
    'assets/images/adp_2_popup/img4.png',
    'assets/images/adp_2_popup/img5.png',
    'assets/images/adp_2_popup/img6.png',
    'assets/images/adp_2_popup/img7.png',
    'assets/images/adp_2_popup/img8.png',
    'assets/images/adp_2_popup/img9.png',
    'assets/images/adp_2_popup/img10.png',
    'assets/images/adp_2_popup/img11.png',
    'assets/images/adp_2_popup/img12.png',
    'assets/images/adp_2_popup/img13.png',
    'assets/images/adp_2_popup/img14.png',
    'assets/images/adp_2_popup/img15.png',
    //estética 3
    'assets/images/adp_3_popup/img1.png',
    'assets/images/adp_3_popup/img2.png',
    'assets/images/adp_3_popup/img3.png',
    'assets/images/adp_3_popup/img4.png',
    'assets/images/adp_3_popup/img5.png',
    'assets/images/adp_3_popup/img6.png',
    'assets/images/adp_3_popup/img7.png',
    'assets/images/adp_3_popup/img8.png',
    'assets/images/adp_3_popup/img9.png',
    'assets/images/adp_3_popup/img10.png',
    'assets/images/adp_3_popup/img11.png',
    'assets/images/adp_3_popup/img12.png',
    'assets/images/adp_3_popup/img13.png',
    'assets/images/adp_3_popup/img14.png',
    'assets/images/adp_3_popup/img15.png',
    //estética 4
    'assets/images/adp_4_popup/img1.png',
    'assets/images/adp_4_popup/img2.png',
    'assets/images/adp_4_popup/img3.png',
    'assets/images/adp_4_popup/img4.png',
    'assets/images/adp_4_popup/img5.png',
    'assets/images/adp_4_popup/img6.png',
    'assets/images/adp_4_popup/img7.png',
    'assets/images/adp_4_popup/img8.png',
    'assets/images/adp_4_popup/img9.png',
    'assets/images/adp_4_popup/img10.png',
    'assets/images/adp_4_popup/img11.png',
    'assets/images/adp_4_popup/img12.png',
    'assets/images/adp_4_popup/img13.png',
    'assets/images/adp_4_popup/img14.png',
    'assets/images/adp_4_popup/img15.png',
    //estética 5
    'assets/images/adp_5_popup/img1.png',
    'assets/images/adp_5_popup/img2.png',
    'assets/images/adp_5_popup/img3.png',
    'assets/images/adp_5_popup/img4.png',
    'assets/images/adp_5_popup/img5.png',
    'assets/images/adp_5_popup/img6.png',
    'assets/images/adp_5_popup/img7.png',
    'assets/images/adp_5_popup/img8.png',
    'assets/images/adp_5_popup/img9.png',
    'assets/images/adp_5_popup/img10.png',
    'assets/images/adp_5_popup/img11.png',
    'assets/images/adp_5_popup/img12.png',
    'assets/images/adp_5_popup/img13.png',
    'assets/images/adp_5_popup/img14.png',
    'assets/images/adp_5_popup/img15.png',
    //estética 6
    'assets/images/adp_6_popup/img1.png',
    'assets/images/adp_6_popup/img2.png',
    'assets/images/adp_6_popup/img3.png',
    'assets/images/adp_6_popup/img4.png',
    'assets/images/adp_6_popup/img5.png',
    'assets/images/adp_6_popup/img6.png',
    'assets/images/adp_6_popup/img7.png',
    'assets/images/adp_6_popup/img8.png',
    'assets/images/adp_6_popup/img9.png',
    'assets/images/adp_6_popup/img10.png',
    'assets/images/adp_6_popup/img11.png',
    'assets/images/adp_6_popup/img12.png',
    'assets/images/adp_6_popup/img13.png',
    'assets/images/adp_6_popup/img14.png',
    'assets/images/adp_6_popup/img15.png',
    //estética 7
    //estética 8
    'assets/images/adp_8_popup/img1.png',
    'assets/images/adp_8_popup/img2.png',
    'assets/images/adp_8_popup/img3.png',
    'assets/images/adp_8_popup/img4.png',
    'assets/images/adp_8_popup/img5.png',
    'assets/images/adp_8_popup/img6.png',
    'assets/images/adp_8_popup/img7.png',
    'assets/images/adp_8_popup/img8.png',
    'assets/images/adp_8_popup/img9.png',
    'assets/images/adp_8_popup/img10.png',
    'assets/images/adp_8_popup/img11.png',
    'assets/images/adp_8_popup/img12.png',
    'assets/images/adp_8_popup/img13.png',
    'assets/images/adp_8_popup/img14.png',
    'assets/images/adp_8_popup/img15.png'
  ]

  /* flag para o timeout, é utilizada para saber se a primeira imagem já apareceu, se apareceu muda para 1 
  e com isso o valor do timeout é alterado de 5s para 1,5s */
  let flag = 0;
  let popupFlag = 0;

  // guarda o índice dos popups em um array para que eles sejam verificados e não se repitam
  let showedPopupIndexes = [];

  // Define o eixo X da posição de cada imagem
  function getRandomPositionX() {
    const maxWidth = window.innerWidth;
    let randomX = Math.floor(Math.random() * maxWidth);

    if (randomX + 100 > maxWidth)
      randomX = randomX - 200;

    return randomX + 'px';
  }

  // Define o eixo X da posição de cada imagem
  function getRandomPositionY() {
    const maxHeight = window.innerHeight;
    let randomY = Math.floor(Math.random() * maxHeight);

    if (randomY + 150 > maxHeight)
      randomY = randomY - 250;

    return randomY + 'px';
  }

  /*Define o tamanho da imagem de acordo com a percentagem, 
  assim a imagem recebe a proporção de acordo com o tamanho da tela e ela cresce proporcionalmente igual
    */
  function getSize() {
    let size = 0;
    size = randomPercentage(30, 40);
    return size;
  }

  // function para definir a porcentagem de forma aleatória
  function randomPercentage(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  /* function para criar popups:
  1 - utiliza a getSize() para definir o tamanho proporcional que a imagem terá;
  2 - altera o CSS para definir as imagens e aplicar informações como tamanho e posição
  3 - cria o elemento e adiciona ao body 
  */
  function createPopup(imageSrc) {
    let size = getSize();

    const popup = document.createElement('div');

    popup.className = 'popup';
    popup.style.position = 'absolute';
    popup.style.zIndex = '888';

    popup.style.marginLeft = getRandomPositionX();
    popup.style.marginTop = getRandomPositionY();

    popup.style.width = `${size}%`;
    popup.style.height = `${size}%`;
    popup.style.zIndex = 50;

    const image = document.createElement('img');
    image.src = imageSrc;
    image.style.width = `${size}%`;
    image.style.zIndex = 51;
    // image.style.height = `${size}%`; 

    popup.appendChild(image);
    document.body.appendChild(popup);

    return popup;
  }


  /* função principal que exibe os popups de forma aleatória: 
  1 - gera um indice aleatório para escolher qual imagem do array de popups deve aparecer
  2 - entra no setTimeout() para aplicar o delay na hora de mostrar a imagens;
  3 - dentro do setTimeout() faz uma checagem para saber se já exibiu algum popup,
  se não exibiu a flag continua 0 (nesse caso o delay dura 5s), se exibiu algum antes
  a flag passa a ser 1 (nesse caso o delay dura apenas 1,5s)
  4 - crias os popups;
  5 - exibe os popups ao mudar o style.display para 'block'
  6 - adiciona o índice da imagem escolhida ao array showedPopupIndexes
  7 - chama novamente a função principal e envia o array showedPopupIndexes para que ela
  continue verificando se já existem popups exibidos

  **Importante: tudo isso contece dentro do setTimeout, mas o tempo de espera é o que 
  está definido na Function timeoutControl que parece estar fora, mas na verdade é o segundo argumento
  */

  function showRandomPopup(showedPopupIndexes) {
    let popup = "";
    let popupImage = "";


    let timeoutID = setTimeout(() => {
      if (showedPopupIndexes.length > 0) {
        flag = 1;
      }

      let randomIndex = generateIndex(showedPopupIndexes, popups);

      if(showedPopupIndexes.length > 13 && popupFlag === 0){
        popupFlag = 1;
        showedPopupIndexes = [];
      }

      if (popupFlag === 1) {
        randomIndex = generateIndex(showedPopupIndexes, popups2);
        popupImage = popups2[randomIndex];
      } else {
        popupImage = popups[randomIndex];
      }

        popup = createPopup(popupImage);
        popup.style.display = 'block';

      showedPopupIndexes.push(randomIndex);
      showRandomPopup(showedPopupIndexes);
    }, timeoutControl(flag));
  }

  

  /* isso aqui é uma função que controla o tempo dos popups,
  a mesma tem um if dentro:

  é a mesma coisa que:

    if (flag === 0)
      return 5000;
    else
      return 1500;
  */

  function timeoutControl(flag) {
    return flag === 0 ? 8000 : 400;
  }

  // tenta gerar um indice aleatório para ser usado na identificação da imagem, se já existir esse index ele tenta novamente, ou seja não deixa repetir imagens

  function generateIndex(showedPopupIndexes, popupsToShow) {
    let randomIndex = Math.floor(Math.random() * popupsToShow.length);

    while (showedPopupIndexes.indexOf(randomIndex) !== -1) {
      randomIndex = Math.floor(Math.random() * popupsToShow.length);
    }

    return randomIndex;
  }
  
  showRandomPopup(showedPopupIndexes);
});

/* FULLSCREEN */
var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
  /* button mudar de sitio depois de clickar */
  document.getElementById("fullscreen").style.top = '101vh';
}

// Botão do Start Over
document.addEventListener("DOMContentLoaded", function() {
  var fimDiv = document.getElementById("fim");
  fimDiv.style.opacity = "0"; // Inicia com opacidade 0

  setTimeout(function() {
      fimDiv.style.opacity = "1";
      fimDiv.style.animation // Torna a div visível
  }, 50000); // 80 segundos em milissegundos
});