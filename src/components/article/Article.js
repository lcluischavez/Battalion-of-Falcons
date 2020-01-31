// import React from "react"
// import "./Articles.css"

// export default ({ article }) => (
//     <section className="article">
//         <h3 className="article__name">{article.title}</h3>
//         <div className="article__synopsis">{article.synopsis}</div>
//         <div className="article__timeStamp">{article.timeStamp}</div>
//         <div className="article__url">{article.url}</div>
//     </section>
// )

import React from "react"
import "./Articles.css"

export default ({ article }) => (
    <section className="article">
        <h3 className="article__title">{article.title}</h3>
        <div className="article__synopsis">{article.title}</div>
        <div className="article__timeStamp">{article.timeStamp}</div>
        <div className="article__url">{article.url}</div>
    </section>
)