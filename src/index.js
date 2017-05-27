import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import Antcss from 'antd/dist/antd.css';
import PCcss from './css/pc_main.css';
import MOBcss from './css/mob_main.css';
import PCIndex from './js/pc_index';
import MOBIndex from './js/mob_index';

const element = (
      <div>
      <MediaQuery query='(min-device-width: 1224px)'> {/*destop/laptop width*/}
        <PCIndex></PCIndex>
      </MediaQuery>
      <MediaQuery query='(max-device-width: 1224px)'>
        <MOBIndex></MOBIndex>
      </MediaQuery>  
      </div>
      )

ReactDOM.render(
  element,
  document.getElementById('container')
);