//자력으로 해결하지 못해서 실습하는형태로 진행하였습니다..
var url = document.querySelector('#url');
var url = document.querySelector('#url');
var url = document.querySelector('#url');

btn.addEventListener('click', fetch);
url.addEventListener('keypress', checkSubmit);

function fetch() {
  var fetch_url = url.value;
  printLog('');

  if (!url) {
    window.alert('url를 입력하세요');
  } else {
    fetch(url).then(good).catch(bad);
  }
}

function checkSubmit(e) {
  if (e.keyCode === 13) {
    fetchUrl();
  }
}

function printLog(str) {
  log.value = str;
}

function good(result) {
  result.text().then(printLog);
}

function bad(error) {
  printLog(error);
}
