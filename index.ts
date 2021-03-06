// https://stackoverflow.com/questions/3512471/what-is-a-non-capturing-group-in-regular-expressions
// https://usefulangle.com/post/78/javascript-get-url-parameters

const value1 = "https://usefulangle.com/post/78/javascript-get-url-parameters?test=123&foo=ABC&dataToken=token_value&more=123"

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


// function replaceParam(url: string, paramName: string, newValue: string): string {
//   const urlObject = new URL(url);

//   if (urlObject.searchParams.has(paramName)) {
//     urlObject.searchParams.set(paramName, newValue)
//   }

//   return urlObject.href;
// }

function replaceToken(path, request): string {
  const url = new URL(path);

  if (url.searchParams.has('token')) {
    url.searchParams.set('token', 'request.uiTabToken')
  }
  
  if (url.searchParams.has('dataToken')) {
    url.searchParams.set('dataToken', 'request.uiTabToken')
  }

  return url.href;
}


//console.log(replaceToken(value1, {}))

function customLogger(options) {
  if (!options.path.includes(['properties', 'another_wtf_requests'])) {
    console.log(options)
  }
}
