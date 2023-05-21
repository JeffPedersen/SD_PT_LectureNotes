import React from 'react'
import MovieCreate from './MovieCreate'
import { Col, Container, Row } from 'reactstrap'

export default function MovieIndex() {
  return (
    <>
        <Container>
            <Row>
                <Col md="4">
                    <MovieCreate />
                </Col>
                <Col md="8">
                    [Table goes here]
                </Col>
            </Row>
        </Container>
    </>
  )
}
