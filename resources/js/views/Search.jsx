import React, { lazy } from 'react';
import { Container, Row, Col } from 'reactstrap';

const SearchBar = lazy(() =>
  import(/* webpackChunkName: 'SearchBar' */ '../components/searchBar')
);

const Sidebar = lazy(() =>
  import(/* webpackChunkName: 'Sidebar' */ '../components/sidebar')
);

const Search = () => {
  return (
    <Container>
      <Row>
        <Col xs="12" md="1" lg="3">
          <Sidebar />
        </Col>
        <Col xs="12" md="7" lg="6">
          <SearchBar type="main" />
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
