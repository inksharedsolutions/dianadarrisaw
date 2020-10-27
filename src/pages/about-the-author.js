import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/dummy.png'

const ATB = (props)=>{
	
	return (
		<> 
		 	<Layout>
		 		<Nav pathExt={props.path}/>

                <Banner 
                    spanFirst={`About The`} 
                    contextHeading={`Author`}/>
                
		 		<div className="container">
				    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                “Sugar and spice don’t play nice”.
                                </h4>
                                <span className="ata-span-fx">
                                    author quote
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            Hello, I am Diana Harvey Darrisaw, retired patient care food service supervisor. I had worked in nutrition field for over 30 years in the Philadelphia area hospitals. A mother of 2 adults and one adult grandson. I was educated in nutrition through the board education food supervisors school. Completed courses at Penn State, Georgia State Colleges in basic nutrition. Certified nationally with the dietary mangers association for 25 years. I attended many professional seminars around the area to keep up with changes in management and nutrition. I had the pleasure of great direction in this field by dieticians that had been a part of army, navy, and air force. They shared with me their methods and experiences in nutrition care. I was blessed to have worked closely with chefs, who displayed how you can eat happy and healthy.
                            </p>

                            <p>
                            Writing to share is rewarding for me. After years had went by, I became a part of the struggle with health conditions in certain pertaining to what and how I ate. Having health conditions varying in different areas of the body, I learned the real value of nutrition in my overall health. This is a great need for people, so I made it my purpose.
                            </p>

                            <p>
                            I am a published writer and enjoy sharing with my fellow seniors. Being healthy and happy in our struggles with meal planning and enjoying tasty recipes. (food is life). Combination meal planning can need help by many if not knowing or understanding how to put 2 t0 4 food allowances together in a meal. Such as (diabetic, cardio, gout, cholesterol) each condition food allowances has to fit in the overall meal.
                            </p>

                            <p>My published books are: </p>
                            <p>*Diabetics Eating Healthy and Happy - rights and wrongs in meal planning. (tasty) recipes. Meal planning</p>
                            <p>*Eating with Dialysis and Diabetes - being sure in food choices you understand for 2 not one diet. (need alertness in daily meal planning).</p>
                            <p>*The Senior Hood Struggling to Stay Healthy and Happy - (important) formation needed in staying healthy with happy.</p>
                            <p>*Recipes and Meal Planning - recipes that are easy, tasty, and balancing your meals.</p>
                            <p>*Salad galore and more - salads done in a (variety ways) but are healthy, pointing out “what” certain foods have in them (nutrition). (attractive cover with a healthy happy inside)</p>
                            <p>*Eggs Galore and More - for the “not too many egg yolks” person. Ways to have the protein from the egg</p>
                            <p>Uplifting prayers - prayers can uplift.</p>
                            <p>Gout doesn’t live here anymore… for now. Information that I have found to help (very well) in this condition.</p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Diana Darrisaw</span>
                                </span>
                            </p>
                            
                        </article>
                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;
