import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import selectResult, { selectBuffer, selectLog } from '../selectors'
import { hidden, redBright } from 'ansi-colors';
import Container from 'react-bootstrap/Container'
// import { ItemTypes } from './Constants'

const Log = () => {

  const result = useSelector(selectResult);
  const buffer = useSelector(selectBuffer);
  const output = buffer ? buffer : result;
  const log = useSelector(selectLog);

  const scroll = () => {
    const textarea = document.getElementById('log');
    textarea.scrollTop = textarea.scrollHeight;
  }

  const preparation = line => {
    while (line.match(/(--|\+=|\+-|-\+)/)){
      while (line.match(/--/)) line = line.replace(/--/, '+');
      alert(line);
      line = line.replace(/\++/, '+');
      alert(line);
      line = line.replace(/\+-/, '-');
      alert(line);
      line = line.replace(/-\+/, '+');
      alert(line);
    }
    return line;
  }

  const calculate = line => {
    line = preparation(line);
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

  const validate = line => {
    if (line.match(/[^+*/0-9.-]/g)) return false;
    if (!line.match(/\s*([+-]?\d+[.]?\d*\s*[\+\-\*\/]+\s*[+-]?\d+[.]?\d*)\s*/)) return false;
    return true;
  }

  const onDrop = (e) => {
    var log = document.getElementById("logContent");
    var content = e.dataTransfer.getData("Text");
    log.textContent = content;
    e.target.style.border = "1px solid grey";
    if (!validate(content.replace(/\n/g, ""))) {
      e.target.style.backgroundColor = "red";
    } else {
      e.target.style.backgroundColor = "white";
      var display = document.getElementById("displayContent");
      display.value = calculate(content.replace(/\n/g, ""));
    }
  }
  
  return (
      <Container id="log">
          <textarea 
            id="logContent"
            rows="5"
            onchange={ () => scroll() }
            onDragOver={ document.addEventListener("dragover", function(event) {
              event.preventDefault();
            }) }
            onDrop={ e => onDrop(e) }
            onDragOver={ e =>  e.target.style.border = "3px solid red" }
            onDragLeave={ e => e.target.style.border = "1px solid grey" }
            style={{
                
                scrollToBottom: true, 
                overflow: hidden, 
                resize: "none"}}
            readonly
            value={log.join("\n")} />
      </Container>
  )
}

export default Log;
