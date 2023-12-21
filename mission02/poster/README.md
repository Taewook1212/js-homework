# Poster ELEMENTAL

---

### Name : 강태욱

멋쟁이 사자처럼 프론트엔드 스쿨 8기 : js-home-work

# 1. 과제번호 : Mission 2

# 2. 구현 목표

1. 이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요.
   1. 이벤트 위임
   2. 반복문 2.이미지와 색상의 데이터는 data.js 에서 불러와주세요.
2. 각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.
3. 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요.
4. 함수를 분리시켜주세요.
   1. `setBgColor` 함수
   2. `setImage` 함수
   3. `setNameText` 함수
5. 가독성이 좋은 코드로 리팩토링 해주세요.

# 3. 주요 파일 구조

- index.html
- style.css
- main.js
- data.js (이미지 index, img src)
- audio.js (#비공개 필드, audio요소 메소드)

# 4. main.js 함수

#### \* function domQuerySelector(data)

    주어진 셀렉터에 해당하는 HTML 요소를 찾아 반환하는 역할

#### \* function handleMenuEmail()

     inputEmail 객체를 통해 이벤트 정보를 얻고, 해당 이벤트를 발생

#### \* function handleMenuPW()

     inputPassword 객체를 통해 이벤트 정보를 얻고, 해당 이벤트를 발생

#### \* function handlebutton(event)

     button 객체를 통해 이벤트 정보를 얻고, 해당 이벤트를 발생

#### \* function checkValidation(target)

     Email과 Password을 구분하여 유효성검사

#### \* function setClassList(value, data)

     inputEmail과 inputPassword의 classList라는 인스턴스 메소드를 사용하여 DOMTokenList에 html의 class를 추가한다.

     DOMTokenList ['user-email-input', value: 'user-email-input']
     유사배열

#### \* function checkAccount()

     기존 user.id와 user.pw 를 각각 입력한 email와 password 일치한지 판단
     true와 false 반환

#### \* function movePage()

     버튼 클릭 시 welcome.html 으로 page 이동

#### \* function emailReg(text)

    이메일 문자열이 정규표현식과 일치하는지 여부

#### \* function pwReg(text)

    페스워드 문자열이 정규표현식과 일치하는지 여부

# 6. 피드백 받고 싶은 부분

1. 전역변수 생성에 대한 평가(최대한 전역변수는 안만드는게 좋다고 알고 있습니다. 쓸데없는 전역변수를 만든게 아닐까합니다.)

2. input과 email를 addEventListener('input', handler)로 한번에 받을 수 있는지, 조금 더 리펙토링이 가능한지 궁금합니다.

3. closure와 생성자로 만드는 Class함수를 사용해도 괜찮은건지.. 궁금합니다.
