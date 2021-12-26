import React from 'react'
import { Badge, Button, Col, Container, Row } from 'react-bootstrap'

const TimerThree = ({ counter, start, timer3 }) => {
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
            variant={timer3 ? 'success' : 'danger'}
            disabled={!timer3}
            type='button'
            onClick={() => {
              start(false, true, false, 1, 2)
            }}
          >
            prev
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default TimerThree
