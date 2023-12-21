/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

function getNode(node, context = document) {
  if (typeof node !== 'string') {
    throw new Error('getNode 함수의 인수는 문자 타입 이어야 합니다.');
  }
  return context.querySelector(node);
}

function setBgColor(index) {
  const body = getNode('body');
  body.style.background = ` 
   linear-gradient(to bottom,${data[index - 1].color[0]}, ${
    data[index - 1].color[1]
  })`;
}
function setImage(index) {
  const visualImage = getNode('.visual img');
  visualImage.src = `./assets/${data[index - 1].name}.jpeg`;
  visualImage.alt = data[index - 1].alt;
}

function setNameText(index) {
  const nickName = getNode('.nickName');
  nickName.textContent = data[index - 1].name;
}

const navigation = getNode('.nav ul');
navigation.addEventListener('click', handler);

function handler(event) {
  event.preventDefault();

  const li = event.target.closest('li');

  if (!li) return;

  const index = li.dataset.index;
  const list = [...navigation.children];
  const audioPlayer = new AudioPlayer(
    `./assets/audio/${data[index - 1].name}.m4a`
  );
  list.forEach((li) => {
    li.classList.remove('is-active');
  });
  li.classList.add('is-active');

  setBgColor(index);
  setImage(index);
  setNameText(index);

  audioPlayer.play();
}
