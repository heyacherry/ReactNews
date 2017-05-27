import React from 'react';
import ReactDOM from 'react-dom';
import MOBHeader from './mob_header';
import MOBFooter from './mob_footer';

export default class MOBIndex extends React.Component{
    render(){
     return (
       <div>
         <MOBHeader></MOBHeader>
         <MOBFooter></MOBFooter>
       </div>
       )
    }
}