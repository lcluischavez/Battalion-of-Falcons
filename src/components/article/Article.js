import React, { useContext } from "react"
import { ArticleContext } from "./ArticleProvider"
import "./Articles.css"

export default ({ article, match, history }) => {
    const { articles, deleteArticle } = useContext(ArticleContext)

    return (
    <section className="article">
        <h3 className="article__title">{article.title}</h3>
        <div className="article__synopsis">{article.title}</div>
        <div className="article__timeStamp">{article.timeStamp}</div>
        <div className="article__url">{article.url}</div>
         <button className="btn--delete"
                onClick={() => {
                deleteArticle(article)
                    .then(() => {
                        history.push("/")
                     })
                    }} >Delete
            </button>
    </section>
)}
