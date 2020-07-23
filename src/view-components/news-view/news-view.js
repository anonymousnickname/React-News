import React  from "react";

import './news-view.css'
const NewsView = ({title, body}) => {
    return (
     <>
    <div className="news__inner-wrapper">
        <div className="news__title">{title}</div>
        <div className="news__text">{body}</div>
     </div>
    </>
        )
    }

export default NewsView