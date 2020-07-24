import React, {Component} from 'react'


import NewsView from '../../view-components/news-view'
import NewsService from '../../services/news-service'
import Spinner from '../spinner'

import './news.css'


export default class News extends Component {

    newsService = new NewsService();
    state = {
        posts: null
    }

    componentDidMount() {
        this.newsService.getAllPosts().then(posts => {
            this.setState({
                posts
            })
        })
    }

    renderItems(arr) {
        return arr.map(({id, title, body}) => {
            return (
        <div className="news__card" key={id}>
            <NewsView  title={title} body={body} id={id}/>
         </div>
            )
            
        })
    }

    render() {

        const {posts} = this.state;
      
        if (!posts) {

            return (
                <div className="center">
                    <Spinner/>
                </div>
            )
        }
        const items = this.renderItems(posts)
        return (
            <div className="news__wrapper">
                     {items}  
            </div>
        )
    }
   
}

