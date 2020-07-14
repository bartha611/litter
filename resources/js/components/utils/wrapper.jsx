import { Container, Row, Col } from 'reactstrap';
import React, { lazy, Suspense } from 'react';

const Sidebar = lazy(() =>
  import(/* webpackChunkName: 'sidebar' */ '../sidebar')
);

const Wrapper = Component => {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <Container>
        <Row>
          <Col xs="2" md="2" lg="2">
            <Sidebar />
          </Col>
          <Col xs="8" md="8" lg="6">
            {<Component />}
          </Col>
          <Col xs="2" md="2" lg="4">
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </Suspense>
  );
};

export default Wrapper;
