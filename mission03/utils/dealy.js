import { isNumber, isObject } from './typeOf.js';

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '아싸성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
};

export function delayP(options) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    // timeout = options; 해도 되는데 지금 아래에 구조분해를해서 지금은 안됨
    config.timeout = options;
  }

  if (isObject(options)) {
    // 객체가 들어오면 객체 추가
    config = { ...defaultOptions, ...options };
  }

  const { shouldReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 지금은 우리가 직접 조건을 나눔, 원래는 api가 알아서 할 수 있음
      if (!shouldReject) {
        resolve(data);
        //  onSuccess xhr API 와 같음
      } else {
        reject(errorMessage);
        //  onFail xhr API 와 같음
      }
    }, timeout);
  });
}
