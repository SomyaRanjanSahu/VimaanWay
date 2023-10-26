import React from 'react';
import '../styles/travelGuide.css';
import Navbar from '../components/navbar';

function Guide() {
    return (
        <div id="guide-container">
            <Navbar />

            <div id="guideImage-container">
                <div id="guide-img">
                    <img src="india.png" alt="" classname="guide-img" />
                </div>
                <div id="guideImage-tagline">
                    <h2 className="guideImage-heading">Places to Visit in <span>India</span></h2>
                    <p>Places to Visit in India - The best places to visit in India to experience the most beautiful places like historical places, beach places, hill stations , honeymoon places, romantic places, adventure places, peaceful places and many more.</p>
                    <p className="guide-quote">" Travel while you’re still young. Lose yourself to find your own self. Live like there’s no tomorrow. And whatever you’ll explore today will last a lifetime with you. "</p>
                </div>
            </div>

            <hr />

            <h2 class="categories__title">Hill Stations</h2>
            <p class="categories__info">The hill stations of India welcome you with refreshing vacations for your friends and family. Dotted with wild flowers in full bloom, bright green beauty, apple orchards, waterfalls and unadulterated mountain air, all these hill stations present a pleasurable experience that you will remember for the rest of your life.</p>
            <section class="carousel">
                <div class="carousel__container">
                    <div class="carousel-item">
                        <img class="carousel-item__img" src="badrinath.jpg" alt="people" />
                        <div class="carousel-item__details">
                            <h5 class="carousel-item__details--title">BADRINATH</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="carousel-item__img" src="nainital.png" alt="people" />
                        <div class="carousel-item__details">
                            <h5 class="carousel-item__details--title">NAINITAL</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="carousel-item__img" src="mussorie.jpg" alt="people" />
                        <div class="carousel-item__details">
                            <h5 class="carousel-item__details--title">MUSSOORIE </h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="carousel-item__img" src="dalhousie.jpg" alt="people" />
                        <div class="carousel-item__details">
                            <h5 class="carousel-item__details--title">DALHOUSIE</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="carousel-item__img" src="kullu.jpg" alt="people" />
                        <div class="carousel-item__details">
                            <h5 class="carousel-item__details--title">KULLU</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="carousel-item__img" src="shimla.jpg" alt="people" />
                        <div class="carousel-item__details">
                            <h5 class="carousel-item__details--title">SHIMLA</h5>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img class="carousel-item__img" src="manali.jpg" alt="people" />
                        <div class="carousel-item__details">
                            <h5 class="carousel-item__details--title">MANALI</h5>
                        </div>
                    </div>
                </div>
            </section>

            <h2 class="categories__title">Beaches</h2>
            <p class="categories__info">With over 7500 km stretch of coastline in its geographical treasure, India has always been an alluring destination when it comes to refreshing holidays away from the hustle and bustle of metropolitan life. Especially if you love to throng the southern region of India, which is blessed with beauty of sea, sun and sand in its full bloom, then it is obvious to enjoy incredible holidays in India.</p>
            <section class="carousel">
                <div class="carousel__container">
                    <div class="carousel-item">
                        <img class="carousel-item__img" src="Sinquerim.jpg" alt="people" />
                        <div class="carousel-item__details">
                            <h5 class="carousel-item__details--title">Sinquerim Beach Goa</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="carousel-item__img" src="turtle.jpg" alt="people" />
                        <div class="carousel-item__details">
                            <h5 class="carousel-item__details--title">Turtle Beach Goa</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="carousel-item__img" src="anjuna.jpg" alt="people" />
                        <div class="carousel-item__details">
                            <h5 class="carousel-item__details--title">Anjuna Beach Goa</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="carousel-item__img" src="bogmalo.jpg" alt="people" />
                        <div class="carousel-item__details">
                            <h5 class="carousel-item__details--title">Bogmalo Beach Goa</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="carousel-item__img" src="baga.jpg" alt="people" />
                        <div class="carousel-item__details">
                            <h5 class="carousel-item__details--title">Baga Beach</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="carousel-item__img" src="butterfly.jpeg" alt="people" />
                        <div class="carousel-item__details">
                            <h5 class="carousel-item__details--title">Butterfly Beach</h5>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img class="carousel-item__img" src="elephanta.jpg" alt="people" />
                        <div class="carousel-item__details">
                            <h5 class="carousel-item__details--title">Elephant Beach</h5>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Guide;