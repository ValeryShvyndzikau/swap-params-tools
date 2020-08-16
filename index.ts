// https://stackoverflow.com/questions/3512471/what-is-a-non-capturing-group-in-regular-expressions
// https://usefulangle.com/post/78/javascript-get-url-parameters

const value1 = "https://usefulangle.com/post/78/javascript-get-url-parameters?test=123&foo=ABC&token=token_value&more=123"

function replaceUrlParam(url, paramName, paramValue) {
    if (paramValue == null) {
        paramValue = '';
    }
    var pattern = new RegExp('\\b('+paramName+'=).*?(&|#|$)');
    if (url.search(pattern)>=0) {
        return url.replace(pattern,'$1' + paramValue + '$2');
    }
    url = url.replace(/[?#]$/,'');
    return url + (url.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue;
}


function replaceParam(url: string, paramName: string, newValue: string): string {
  const urlObject = new URL(url);

  if (urlObject.searchParams.has(paramName)) {
    urlObject.searchParams.set(paramName, newValue)
  }

  return urlObject.href;
}



console.log(replaceParam(value1, "token", '123'))
