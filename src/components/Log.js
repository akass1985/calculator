import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import selectResult, { selectBuffer, selectLog } from '../selectors'
import { hidden, redBright } from 'ansi-colors';
import Container from 'react-bootstrap/Container'
import { validate, preparate, calculate } from '../utils'

const Log = () => {

  const result = useSelector(selectResult);
  const buffer = useSelector(selectBuffer);
  const output = buffer ? buffer : result;
  const log = useSelector(selectLog);

  const scroll = () => {
    const textarea = document.getElementById('log');
    textarea.scrollTop = textarea.scrollHeight;
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
