import React from 'react';
import { Tabs, Card, Spin, Alert } from 'antd';

export default class PCNewsBlock extends React.Component{
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
        const news = this.state.news
        const newsList = news.length ?
           news.map((article,index) => 
             <li key={index}> 
                 <a href="/">
                 { article.title }
                 </a>
             </li>
           ) :
           <Spin tip="Loading...">
                   <Alert
                    message="Wait"
                    description="The news is on the way.."
                    type="info"/>
           </Spin>

        return (
         <div class="newsList">
		    <Card>
				<ul>{newsList}</ul>
			</Card>
		</div>
        )
    }
}