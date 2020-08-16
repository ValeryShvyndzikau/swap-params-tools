// https://stackoverflow.com/questions/3512471/what-is-a-non-capturing-group-in-regular-expressions


const value1 = "https://alpine.global.ssl.fastly.net/alpine/v3.12/community/x86_64/APKINDEX.tar.gz?test=123&foo=ABC&token=token_value"

function replaceParam(value: string, newValue: string): string {
  return value.replace(/(src=).*?(&)/g, '$1' + newValue + '$2');
}




