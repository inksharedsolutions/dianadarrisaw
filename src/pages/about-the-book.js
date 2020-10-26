import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/Book_Cover.png'



const ATB = (props)=>{

    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'ruth-claxton',
	  config: { identifier:  12, slug}
    }
      

	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`The Early Years`,
                                    spanFirst:`A Memoir`,
                                    imgSrc: Book1,
                                    id:'',
                                    content:
                                    `
                                        <p>
                                        If you have diabetes and are tired of the same boring recipes and meal plans, read how I enjoy tasty, healthy food with a flare. Read to see how planning your meals can be rewarding for you. Enjoy desserts, salads, and smoothies. No one should eat unhappily. I share ways and means of how eating healthy and happy can take place without a lot of extra cost. Diabetes is a health condition, not a banner saying, "Shame."
                                        </p> 
                                    `,

                                    ebooks:{
                                        stratton:'https://www.stratton-press.com/books/diabetics-happy-eating-healthy/',
                                        barnes:'https://www.barnesandnoble.com/w/diabetics-happy-eating-healthy-diana-harvey-darrisaw/1137465221?ean=9781648951114',
                                        amazon:'https://www.amazon.com/Diabetics-Eating-Healthy-Harvey-Darrisaw-ebook/dp/B08FPC74JL/ref=sr_1_1?dchild=1&keywords=9781648951114&qid=1597777587&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Diabetics-Eating-Healthy-Harvey-Darrisaw/dp/1648951104/ref=sr_1_1?dchild=1&keywords=9781648951107&qid=1597777604&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/diabetics-happy-eating-healthy-diana-harvey-darrisaw/1137465221?ean=9781648951107',
                                        booksamillion:'https://www.booksamillion.com/p/Diabetics-Happy-Eating-Healthy/Diana-Harvey-Darrisaw/9781648951107?id=8009965417365&_ga=2.35253090.2145208486.1603698726-1770015116.1600996550',
                                    }
                                }} 
                            />

                            <div className="commentSection">
                                <div id="disqus_thread">
                                    <DiscussionEmbed {...disqusConfig} />
                                </div>
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;