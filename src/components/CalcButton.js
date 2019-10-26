import React from 'react';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

const CalcButton = ({title, action}) => {
  return (
    <div class="justify-content-center">
        <Col className="col p-1">
            <Button 
                onClick={action}
                variant="primary">
                {title}
            </Button>
        </Col>
    </div>
  )
}

export default CalcButton
