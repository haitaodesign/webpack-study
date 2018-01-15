// @flow

/**
 * 操作 DOM 元素，把 content 显示到网页上
 */
export function show(content) {
    window.document.getElementById('app').innerHTML = `<h1>Hello,${content}</h1>`;
  }
  