import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Spin } from 'antd';

export default class PCNewsImgBlock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            news:''
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
        const styleImage = {
			display: "block",
			width: this.props.imageWidth,
			height: "90px"
		};
		const styleTitle = {
			width: this.props.imageWidth,
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
		};
    
        const news = this.state.news
        const newsList = news.length ?
           news.map((article,index) => 
             <div key={index} class="imageblock">
                 <a> 
                     <div class="custom-image">
                     <img src={article.urlToImage} style={styleImage} />
                     </div>
                     <div class="custom-card">
                       <h3 style={styleTitle}>{article.title}</h3>
                       <p>{article.author}</p>
                     </div>
                 </a>
             </div>
           ) :
           'Wait , the news are on the way..';

        return (
         <div class="newsList">
		    <Card title={this.props.cartTitle} bordered={true} style={{
					width: this.props.width}}>
			{newsList.slice(0,this.props.count-1)}
			</Card>
		</div>
        )
     }
  }