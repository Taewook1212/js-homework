# 네이버 로그인 페이지 구현

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

---

- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

---

### Name : 강 태 욱

멋쟁이 사자처럼 프론트엔드 스쿨 8기 : js-home-work

# 1. 과제번호 : Misson1

# 2. 구현 목표

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

# 3. 요약설명

1. input 태그의 email과 password 두개를 각각 input 이벤트리스너를 적용
2. 각각 유효성검사 후 성공하면 특정 변수에 true 실패하면 false 값을 할당.
3. true를 판단하여 버튼에 click 이벤트리스너를 적용하여 화면이동을 구현.

# 4. 주요 파일 구조

- index.html
- style.css
- main.js

# 5. main.js 함수

#### \* function getNode(node, context = document)

    주어진 셀렉터에 해당하는 HTML 요소를 찾아 DOM 객체로 반환

#### \* function setBgColor(index)

     이미지 클릭시 배경 색상 변경

#### \* function setImage(index)

     이미지 선택시 해당 이미지를 큰 박스안에 동일한 이미지로 변경.

#### \* function setNameText(index)

     textContent 메소드에 선택된 이미지의 글자를 할당하여 .nickName 요소에 text값 변경

#### \* function handler(event)

     클릭 시 선택된 부분에 is-active 클래스를 설정
     각 실행함수들 설정.

# 6. 피드백 받고 싶은 부분

1. addEventListener를 쓸데없이 많이쓴걸까요?

2. audioPlayer기능에서 이미지 클릭 시 나오는 기능 중에, 두개의 이미지 클릭시 소리 겹침이 발생. 이것을 고치는 방법 미구현..
