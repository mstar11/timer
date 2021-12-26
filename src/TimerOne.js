import React from 'react'
import { Badge, Button, Col, Container, Row } from 'react-bootstrap'

const TimerOne = ({ counter, start, timer1}) => {
  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Row
        style={{
          margin: '10px',
        }}
      >
        <Col>
          <Badge bg='dark'>{counter}</Badge>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            disabled={!timer1}
            variant={timer1 ? 'success' : 'danger'}
            type='button'
            onClick={() => {
              start(false, true, false, 1, 0 )
            }}
          >
            next
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default TimerOne
