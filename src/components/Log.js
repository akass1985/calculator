import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import selectResult, { selectBuffer, selectLog } from '../selectors'
import { hidden, redBright } from 'ansi-colors';
import Container from 'react-bootstrap/Container'

const Log = () => {

  const result = useSelector(selectResult);
  const buffer = useSelector(selectBuffer);
  const output = buffer ? buffer : result;
  const log = useSelector(selectLog);

  const scroll = () => {
    const textarea = document.getElementById('log');
    textarea.scrollTop = textarea.scrollHeight;
  }
  
  return (
      <Container id="log">
          <textarea 
            id="log"
            rows="5"
            onchange={ () => scroll() }
            style={{
                // border: "none",
                "text-align": "center",
                "min-width": "100%",
                "min-height": "100%",
                scrollToBottom: true, 
                overflow: hidden, 
                resize: "none"}}
            readonly
            value={log.join("\n")} />
      </Container>
  )
}

export default Log;
