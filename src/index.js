import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReactS3 from 'react-s3';
import App from './App';

const config = {
  bucketName: 'reactwebsitenk',
  dirName: 'alblum1', /* optional */
  region: 'us-east-1',
  accessKeyId: 'AKIA5YYLLSU24SBMWLVE',
  secretAccessKey: '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',
}

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
