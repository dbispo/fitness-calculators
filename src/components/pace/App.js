import React from 'react';
import './App.css';
import store from './store/store';
import { changeTime } from './actions/actions';
import { Provider } from 'react-redux';
import PaceForm from './components/form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';


window.store = store;
window.changeTime = changeTime;

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
