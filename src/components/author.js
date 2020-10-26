import React from 'react'
import AuthorImg from '../../static/author/dummy.png'

const Author = () =>{
    return(
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                     <div className="grid-child" id="author-contents">

                        <p>
                            Hello, I am Diana Harvey Darrisaw retired patient care food service supervisor. I had worked in nutrition field for over 30 years in the Philadelphia area hospitals. A Mother of 2 adults and one adult grandson.
                        </p>

                        <h1 className="author-name-tag">
                            <span>Diana Harvey</span>
                            <span>Darrisaw</span>
                        </h1>
                        
                        <span className="author-tagline">Author & Writer</span>

                     </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg}/>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;