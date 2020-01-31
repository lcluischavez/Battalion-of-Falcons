// import React, { useContext } from "react"
// import { ArticleContext } from "./ArticleProvider"
// import Article from "./Article"
// import "./Articles.css"

// export default (props) => {
//     const { articles } = useContext(ArticleContext)
//     return (
//         <div className="articles">
//             <article className="articleList">
//                 {
//                     articles.map(art => <Article key={art.id} article={art} />)
//                 }
//             </article>
//         </div>
//     )
// }

import React, { useContext } from "react"
import { ArticleContext } from "./ArticleProvider"
import Article from "./Article"
import "./Articles.css"

export default (props) => {
    const { articles } = useContext(ArticleContext)

    return (
        <div className="articles">
            <h1>Articles</h1>
            <button onClick={() => props.history.push("/articles/create")}>
                Add Article
            </button>
            <article className="articleList">
                {articles.map(article => <Article key={article.id} article={article} />)}
            </article>
        </div>
    )
}

