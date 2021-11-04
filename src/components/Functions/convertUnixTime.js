export function convertUnixTime(timestamp) {
  var date = new Date(timestamp * 1000);
  var months = [
    'янв.',
    'фев.',
    'мар.',
    'апр.',
    'май',
    'июн.',
    'июл.',
    'авг.',
    'сен.',
    'окт.',
    'ноя.',
    'дек.',
  ];
  var timeStampCon =
    date.getDate() +
    ' ' +
    months[date.getMonth() - 1] +
    ' в ' +
    date.getHours() +
    ':' +
    date.getMinutes();

  return timeStampCon;
}

export function convertUnixTimeForPost(timestamp) {
  var today = new Date();
  var date = new Date(timestamp * 1000);
  var months = [
    'янв.',
    'фев.',
    'мар.',
    'апр.',
    'май',
    'июн.',
    'июл.',
    'авг.',
    'сен.',
    'окт.',
    'ноя.',
    'дек.',
  ];
  if (
    today.getDate() == date.getDate() &&
    today.getMonth() == date.getMonth() &&
    today.getFullYear() == date.getFullYear()
  ) {
    var timeStampCon =
      date.getDate() +
      ' ' +
      months[date.getMonth() - 1] +
      ' в ' +
      date.getHours() +
      ':' +
      date.getMinutes();
  } else {
    var timeStampCon =
      today.getHours() -
      date.getHours() +
      changeText(today.getHours() - date.getHours());
  }

  return timeStampCon;
}

function changeText(nCom) {
  const text_forms = [' час назад', ' часа назад', ' часов назад'];
  nCom = Math.abs(nCom) % 100;
  var nCom_ = nCom % 10;
  if (nCom > 10 && nCom < 20) {
    return text_forms[2];
  }
  if (nCom_ > 1 && nCom_ < 5) {
    return text_forms[1];
  }
  if (nCom_ == 1) {
    return text_forms[0];
  }
  return text_forms[2];
}
