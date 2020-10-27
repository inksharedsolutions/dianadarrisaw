import React from 'react'
import {Link} from 'gatsby'
import FrontBook from '../../static/books/Book_Cover.png'

const MidBook = (props)=>{
    return(
        <>    
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        <div className="book-wraps">
                            <img src={FrontBook}/>
                        </div>

                        <div className="content-wraps">

                            <span className="italic-tag">
                                Read, listen, and learn in various formats
                            </span>

                            <h1 className="heading--featured">
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p>
                                If you have diabetes and are tired of the same boring recipes and meal plans, read how I enjoy tasty, healthy food with a flare. Read to see how planning your meals can be rewarding for you. 
                            </p>

                            <button className="btn-book-featured">
                                <Link to="/book">
                                    Read More
                                </Link>
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook