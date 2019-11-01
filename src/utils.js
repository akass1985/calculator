// проверка корректности входных данных
export const validate = line => {
    if (line.match(/[^+*/0-9.-]/g)) return false; // не из NumPad'а
    if (line.match(/[.]{2,}/)) return false; // двойные точки
    if (line.match(/[+][-][+]/)) return false; // + - +
    if (line.match(/[-][+][-]/)) return false; // - + -
    if (line.match(/[-]{3,}/)) return false; // 3 и больше минуса
    if (line.match(/[+]{3,}/)) return false; // 3 и больше плюса
    if (line.match(/[*]{2,}/)) return false; // 2 и больше умножить
    if (line.match(/\/{2,}/)) return false; // 2 и больше разделить
    if (line.match(/[*]\//)) return false; // умножить разделить
    if (line.match(/\/[*]/)) return false; // разделить умножить
    // отсутствует два слагаемых и операция над ними
    if (!line.match(/\s*([+-]?\d+[.]?\d*\s*[\+\-\*\/]+\s*[+-]?\d+[.]?\d*)\s*/)) return false;
    return true;
  }

// упрощение входных данных
export const preparate = line => {
    // заменяем…
    while (line.match(/[-]{2,}|[+]{2,}|\+-|-\+/)) {
      line = line.replace(/--/, '+'); // парные минусы на плюс
      line = line.replace(/[+]{2,}/, '+'); // 2 и более плюса на один
      line = line.replace(/\+-/, '-'); // плюс минус на минус
      line = line.replace(/-\+/, '-'); // минус плюс на минус
    }
    // убираем ведущие нули
    line = line.replace(/\d+[.]?\d*/g, (str, p1, offset, s) => parseFloat(str) );
    return line;
  }

  export const calculate = line => {
    line = preparate(line);
    const re = /([+-]?\d+[.]?\d*\s*[\+\-\*\/]+\s*[+-]?\d+[.]?\d*)/;
    var result = line.replace(re, (str, p1, offset, s) => eval(p1) );
    try {
      do {
        line = result;
        result = line.replace(re, (str, p1, offset, s) => eval(p1) );
        if (result.match(/Infinity/)) return 'Infinity';
      } while ( result !== line);
      return eval(result);
    } catch (e){
      return "Error"
    }
  }

  