const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@',
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리
*/

const button = domQuerySelector('.btn-login');
const inputEmail = domQuerySelector('.user-email-input');
const inputPassword = domQuerySelector('.user-password-input');

function test() {
  let emailValidation = false;
  let pwValidation = false;

  function validation111() {
    return [emailValidation, pwValidation];
  }

  return validation111();
}

const test3 = test();
// console.log(test3[0], test3[1]);
let emailValidation = test3[0];
let pwValidation = test3[1];

button.addEventListener('click', handlebutton);
inputEmail.addEventListener('input', handleMenuEmail);
inputPassword.addEventListener('input', handleMenuPW);

function domQuerySelector(data) {
  return document?.querySelector(data);
}

function handleMenuEmail() {
  if (checkValidation(this)) {
    emailValidation = true;
    console.log('이메일 유효성검사 성공');
  }
}
function handleMenuPW() {
  if (checkValidation(this)) {
    pwValidation = true;
    console.log('비밀번호 유효성검사 성공');
  }
}

function handlebutton(event) {
  event.preventDefault();
  checkAccount() === true && emailValidation === true && pwValidation === true
    ? movePage()
    : console.log('유효성검사실패');
}

function checkValidation(target) {
  if (target === inputEmail) {
    return setClassList(emailReg(target.value), target);
  } else if (target === inputPassword) {
    return setClassList(pwReg(target.value), target);
  }
}

function setClassList(value, data) {
  if (value === true) {
    data.classList.remove('is--invalid');
    return true;
  }
  data.classList.add('is--invalid');
  return false;
}

function checkAccount() {
  const value =
    inputEmail.value === user.id && inputPassword.value === user.pw
      ? true
      : false;
  return value;
}

function movePage() {
  window.location.href = 'welcome.html';
}

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
