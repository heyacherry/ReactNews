import React from 'react';
import { Row, Col, Carousel, Tabs } from 'antd';
import PCNewsBlock from './pc_news_blocks';
import PCNewsImgBlock from './pc_news_img_blocks';

const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component{
    render(){
      const settings = {
        dots:true,
        infinite:true,
        speed: 500,
        slidesToShow:1,
        autoplay:true
        };

      return (
        <div>
          <Row type="flex" justify="center">
           <Col span={20} class='container' >
            <div class='left-container'>
                <Carousel { ...settings }> 
                  <div><img src="./src/img/carousel_1.jpg" width="680px"/></div>
                  <div><img src="./src/img/carousel_2.jpg" width="680px"/></div>
                  <div><img src="./src/img/carousel_3.jpg" width="680px"/></div>
                  {/*<div><img src="./src/img/carousel_4.jpg" width="600px"/></div>*/}
                </Carousel>
            </div>
            <div class='right-container'>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="ABC News" key="1">
                       <PCNewsBlock source='abc-news-au' sort='top' class='news-item'></PCNewsBlock>
                  </TabPane>
                  <TabPane tab="BBC News" key="2">
                       <PCNewsBlock source='bbc-news' sort='top' class='news-item'></PCNewsBlock>
                  </TabPane>
                  <TabPane tab="Google News" key="3">
                       <PCNewsBlock source='google-news' sort='top' class='news-item'></PCNewsBlock>
                  </TabPane>
                  <TabPane tab="Hacker News" key="4">
                       <PCNewsBlock source='hacker-news' sort='top' class='news-item'></PCNewsBlock>
                  </TabPane>
               </Tabs>
            </div>
            <div>
               <PCNewsImgBlock source='entertainment-weekly' width="100%" cartTitle="Entertainment-weekly" sort='top' imageWidth="3.5rem" count={10}></PCNewsImgBlock>
            </div>
          </Col>
          </Row>
         </div>
         )
    }
}