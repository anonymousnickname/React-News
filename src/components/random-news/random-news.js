import React, { Component }  from "react";

import RandomNewsView from '../../view-components/random-news-view'
import LoadingSpinner from '../../view-components/loading-spinner'
import NewsService from '../../services/news-service'
import ErrorIndicator from "../error-indicator";
import './random-news.css'

  export default class RandomNews extends Component {

    newsService = new NewsService();
    id = Math.floor(Math.random() * (11 - 1)) + 1
    state = {
        title: null,
        body: null,
        photo: null,
        loadingPhoto: true,
        loadingNews: true,
        error: false
    }

    componentDidMount() {
        this.updateNews();
        this.updatePhoto();
        this.interval = setInterval(this.updateAll, 2000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    updateAll = () => {
        this.id = Math.floor(Math.random() * (11 - 1)) + 1;
        this.updateNews()
        this.updatePhoto()
    }

     updateNews = () => {
        this.newsService.getPost(this.id).then(post => {
            this.setState({
                title: post.title,
                body: post.body,
                loadingNews: false
            })
        }).catch(this.onError)
    }

    updatePhoto = () => {
        this.newsService.getPhoto(this.id).then(post => {
            this.setState({
                photo: post.url,
                loadingPhoto: false
            })
        }).catch(this.onError)
    }

    onError = err => {
        this.setState({
            error: true,
            loadingNews: false,
            loadingPhoto: false
        })
    }

      render() {
        const {title, body, photo, loadingNews, loadingPhoto, error} = this.state;

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = (loadingNews || loadingPhoto) ? <LoadingSpinner/> : null;
        const content = (!loadingNews && !loadingPhoto) && !error ? <RandomNewsView photo={photo} title={title} body={body}/> : null;
          
        return(
        <div className="random-news__card">
           {errorMessage}
           {spinner}
           {content}
        </div>
            )
        }
}
