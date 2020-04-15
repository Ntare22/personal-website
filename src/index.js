import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render( <Form /> , wrapper) : false;
