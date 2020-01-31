import React, { useContext, useRef } from "react"
import { ArticleContext } from "./ArticleProvider"
import "./Articles.css"

export default props => {
    const { addArticle } = useContext(ArticleContext)
    const articleTitle = useRef("")
    const articleTimestamp = useRef("")
    const articleSynopsis = useRef("")
    const articleUrl = useRef("")


    const constructNewArticle = () => {
            addArticle({
                title: articleTitle.current.value,
                timestamp: articleTimestamp.current.value,
                synopsis: articleSynopsis.current.value,
                url: articleUrl.current.value                

            })
        }
    

    return (
        <form className="articleForm">
            <h2 className="articleForm__title">New Article</h2>
            <div className="form-group">
                <label htmlFor="articleTitle">Article title</label>
                <input
                    type="text"
                    id="articleTitle"
                    ref={articleTitle}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Article title"
                />
            </div>
            <div className="form-group">
                <label htmlFor="articleTimestamp">Timestamp</label>
                <input
                    type="text"
                    id="articleTimestamp"
                    ref={articleTimestamp}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Timestamp"
                />
            </div>
            <div className="form-group">
                <label htmlFor="articleSynopsis">Synopsis</label>
                <input
                    type="text"
                    id="articleSynopsis"
                    ref={articleSynopsis}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Synopsis"
                />
            </div>
            <div className="form-group">
                <label htmlFor="articleUrl">Url</label>
                <input
                    type="text"
                    id="articleUrl"
                    ref={articleUrl}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Url"
                />
            </div>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewArticle()
                    }
                }
                className="btn btn-primary">
                Save Article
            </button>
        </form>
    )
}