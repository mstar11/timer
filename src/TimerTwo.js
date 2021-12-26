import React from 'react'
import { Badge, Button, Col, Container, Row } from 'react-bootstrap'

const TimerThree = ({ counter, start, timer2 }) => {
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
            disabled={!timer2}
            variant={timer2 ? 'success' : 'danger'}
            type='button'
            onClick={() => {
              start(true, false, false, 0, 1)
            }}
          >
            Prev
          </Button>
        </Col>
        <Col>
          <Button
            disabled={!timer2}
            variant={timer2 ? 'success' : 'danger'}
            type='button'
            onClick={() => {
              start(false, false, true, 2, 1)
            }}
          >
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default TimerThree
