import React from 'react';
import { Row, Col, Icon, Spin, Alert} from 'antd';
import DateFormat from './common/dateFormat'

export default class MobileList extends React.Component{
      constructor(props){
          super(props);
          this.state = {
              news : ''
          }
      }

      componentWillMount(){
        fetch('https://newsapi.org/v1/articles?source='+ this.props.source +'&sortBy='+ this.props.sort +'&apiKey=7dbfebb9129140c09dc2d60099219721')
        .then(response => response.json())
        .then(json => {
           this.setState({ news: json.articles})
        })
      }

      render(){
          const { news } = this.state; //es2015 feature
          const newsList = news.length ?
                news.map((article,index) => (
                   <section key={index} id="mobileNewsContent">
                    <div id="mobileNewsListImg">
                        <img src={article.urlToImage} />
                    </div>
                    <div id="mobileNewsListInfo">
                        <h3>{ article.title }</h3>
                        <p>{ DateFormat(article.publishedAt) }</p>
                        <Icon type="heart-o" />
                    </div>   
                   </section>
                )):
                <Spin tip="Loading...">
                   <Alert
                    message="Wait"
                    description="The news is on the way.."
                    type="info"/>
                </Spin>
                
          return  ( 
               <Row type="flex" justify="center">
                 <Col span={24}>
                   <div  id="mobileNewsList"> {newsList} </div>
                 </Col>
               </Row>
               
          )                         
      }
}