import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Provider } from 'react-redux';
import './App.css';
import PaceForm from './components/form';
import store from './store/store';



function App() {
  return (
    <Provider store={store}>
      <Container className="vh-100">
        <Row className="justify-content-center mb-3" >
          <h1>Pace Calculator</h1>
        </Row>
        <Row>
          <PaceForm />
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
