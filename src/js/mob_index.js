import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs} from 'antd';
import MOBHeader from './mob_header';
import MOBNewsList from './mob_list';
import MOBFooter from './mob_footer';

const TabPane = Tabs.TabPane;

export default class MOBIndex extends React.Component{
    render(){
     return (
       <div>
         <MOBHeader></MOBHeader>
         <Tabs>
					 <TabPane tab="ABC" key="1"><MOBNewsList source='abc-news-au' sort='top'/></TabPane>
					 <TabPane tab="BBC" key="2"><MOBNewsList  source='bbc-news' sort='top'/></TabPane>
					 <TabPane tab="Google" key="3"><MOBNewsList source='google-news' sort='top' /></TabPane>
           <TabPane tab="Hacker" key="4"><MOBNewsList  source='hacker-news' sort='top'/></TabPane>
					 <TabPane tab="Entertainment" key="5"><MOBNewsList  source='entertainment-weekly'/></TabPane>
				</Tabs>
         <MOBFooter></MOBFooter>
       </div>
       )
    }
}