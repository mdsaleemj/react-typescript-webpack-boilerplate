import 'core-js/features/array/flat-map'
import 'core-js/features/map'
import 'core-js/features/promise'
import 'core-js/features/set'
import 'raf/polyfill'
import 'whatwg-fetch'

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
const name: string = "happydev";
console.log(name);

type Employee = {
  name: string,
  age: number
}

const emp: Employee = {
  name: "Bob",
  age: 45,
}

console.log(emp);


ReactDOM.render(
    <h1>Hello React!</h1>,
    document.getElementById('app-root'),
)