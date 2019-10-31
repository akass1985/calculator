import React from 'react';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

const CalcButton = ({title, action}) => {
  return (
    <div>
        <Col>
            <Button 
              style={{
                "min-width": "100%"
              }}
              onClick={action}
              variant="primary">
              {title}
            </Button>
        </Col>
    </div>
  )
}

export default CalcButton
