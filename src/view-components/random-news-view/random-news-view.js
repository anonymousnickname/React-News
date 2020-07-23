import React  from "react";

import './random-news-view.css'
const RandomNewsView = ({photo = null, title, body}) => {
    return (
     <>
    <div className="random-news__photo">
        <img src={photo} alt="Photot" className="random-news__img"/>
    </div>
    <div className="random-news__inner-wrapper">
        <div className="random-news__title">{title}</div>
        <div className="random-news__text">{body}</div>
     </div>
    </>
        )
    }

export default RandomNewsView