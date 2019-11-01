export const validate = line => {
    if (line.match(/[^+*/0-9.-]/g)) return false;
    if (line.match(/[.]{2,}/)) return false;
    if (line.match(/[+][-][+]/)) return false;
    if (line.match(/[-][+][-]/)) return false;
    if (line.match(/[-]{3,}/)) return false;
    if (line.match(/[+]{3,}/)) return false;
    if (line.match(/[*]{2,}/)) return false;
    if (line.match(/\/{2,}/)) return false;
    if (line.match(/[*]\//)) return false;
    if (line.match(/\/[*]/)) return false;
    if (!line.match(/\s*([+-]?\d+[.]?\d*\s*[\+\-\*\/]+\s*[+-]?\d+[.]?\d*)\s*/)) return false;
    return true;
  }

export const preparate = line => {
    while (line.match(/[-]{2,}|[+]{2,}|\+-|-\+/)) {
      line = line.replace(/--/, '+');
      line = line.replace(/[+]{2,}/, '+');
      line = line.replace(/\+-/, '-');
      line = line.replace(/-\+/, '+');
    }
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

  