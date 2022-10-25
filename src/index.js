import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { GifExpert } from './GiftExpertApp';


const divRoot = ReactDOM.createRoot(document.querySelector("#root"));

divRoot.render(<GifExpert></GifExpert>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
