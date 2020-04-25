import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Provider } from 'react-redux';
import './App.css';
import PaceForm from './components/form';
import store from './store/store';
import { useIntl } from 'gatsby-plugin-intl';



function App() {
  const intl = useIntl()
  return (
    <Provider store={store}>
      <Container>
        <Row className="mb-3" >
          <h1>{intl.formatMessage({id : 'paceCalculator'})}</h1>
        </Row>
        <Row>
          <PaceForm />
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
