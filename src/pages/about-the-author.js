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
                                “Sugar and spice Don’t play nice”.
                                </h4>
                                <span className="ata-span-fx">
                                    author quote
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                                Hello, I am Diana Harvey Darrisaw retired patient care food service supervisor. I had worked in nutrition field for over 30 years in the Philadelphia area hospitals. A mother of 2 adulst and school. Completed courses at Penn State, Georgia State Colleges in basic nutrition. Certified nationality with the dietary mangers associations for 25 years. I attended many professional of great direction in this field by dieticians that had been part of army, navy, and air force. They shared with me their methods and experiences in nutrition care. I was blessed to have worked closely wiwth chefs, who displayed how you can eat happy and healthy.
                            </p>

                            <p>
                                Writing to share is rewarding for me. After years had went by, I became a part of the sturggle with health conditions in certain pertaning to what and how I ate. Having health conditions varing in different areas of the body, I learned the real value of nutrition in my overall health. This is a great need for people, so I made it my purpose.
                            </p>

                            <p>
                               I am a pubclished writer and enjoyy sharin gwith my fello seniors. Being healthy and happy in our stuggles with meal planning and enjoying tasty recipes. (Food is life). Combination of meal planning can need help by many if not knowing or understanding how to put 2 to 3 food allowances together in a meal. Such as (Diabetic, Cardio, Got, Cholesterol) each condition food allowances has to fit in the overall meal.
                            </p>

                            <p>* My published books are: </p>
                            <p>* Diabetics eating healthy and happy -rights and wrongs in meal planning. (Tasty) recipes. meal planning</p>
                            <p>*Eating with dyalysis and diabetes-Being sure in food choices you understand for 2 not one diet. (need alertness in daily meal planning).</p>
                            <p>*Seniors struggling to stay healthy and happy- (important) formation needed in staying healthy with happy.</p>
                            <p>Recipes and meal planning- recipes that are easy, tasty, and balancing your meals.</p>
                            <p>Salad Galore and more- salads done in a (variety ways) but are healthy, pointing out "what" certain food have in them (nutrition). (Attraction cover with a healhty happy inside)</p>
                            <p>Eggs galore and more- for the "not too many egg yolks" person. Ways to have the protein from the egg without the</p>
                            <p>Uplifting Prayers- prayers can uplift.</p>
                            <p>Gout doesn't live here anymore... for now. information that I have found to help (very well) in this condition.</p>

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
