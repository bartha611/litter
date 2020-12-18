import { Container, Row, Col } from 'reactstrap';
import React, { lazy, Suspense } from 'react';

const Sidebar = lazy(() =>
  import(/* webpackChunkName: 'sidebar' */ '../Sidebar')
);

const Search = lazy(() =>
  import(/* webpackChunkName: 'Search'*/ '../searchBar')
);

const Wrapper = Component => props => {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <Row>
        <Col className="sidebar" xs="12" sm="2" md="2" lg="3">
          <Sidebar />
        </Col>
        <Col
          style={{ borderRight: '1px solid #808080' }}
          xs="12"
          sm="10"
          md="8"
          lg="6"
        >
          <Component {...props} />
        </Col>
        <Col md="2" lg="3" className="d-none d-md-block">
          <Search />
        </Col>
      </Row>
    </Suspense>
  );
};

export default Wrapper;
