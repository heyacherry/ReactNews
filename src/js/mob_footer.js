import React from 'react';
import { Row, Col } from 'antd';

export default class MOBFooter extends React.Component{
       render() {
       return (
        <footer>
             <Row type="flex" justify="center">
              <Col span={20} class="footer">
               &copy;&nbsp;2017ReactNews.&nbsp;
               Check <a href="">Code</a>
               </Col>
             </Row>
        </footer>
        )
    }
}


