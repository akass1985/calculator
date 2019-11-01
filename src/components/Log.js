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

  const addDrop = (e) => {
    // var e = e || window.event; // get window.event if e argument missing (in IE)   
    if (e.preventDefault) { e.preventDefault(); } // stops the browser from redirecting off to the image.

    var dt    = e.dataTransfer;
    var files = dt.files;
    for (var i=0; i<files.length; i++) {
      var file = files[i];
      var reader = new FileReader();
        
      //attach event handlers here...
    
      reader.readAsDataURL(file);
    }
    return false;
  }

  const onDrop = (e) => {
    var log = document.getElementById("logContent");
    log.textContent = e.dataTransfer.getData("Text");
    e.target.style.border = "1px solid grey";
  }
  const onDragOver = (e) =>  e.target.style.border = "3px solid red";
  const onDragLeave = (e) => e.target.style.border = "1px solid grey";
  
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
            onDragOver={ e => onDragOver(e) }
            onDragLeave={ e => onDragLeave(e) }
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
