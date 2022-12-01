import "./About.css";
import tweet_search from "../Images/dark-tweet.jpg";
import random_tweet from "../Images/random-tweets.jpg";

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-header">
                Welcome to the Twitter Search and Random Tweet Generator App!
            </h1>
            <div className="about-body">
                <div className="search-body">
                    <img
                        src={tweet_search}
                        alt="search-tweets"
                        className="search-tweets"
                    />
                    <div className="search-text">
                        <h2 className="about-search-header">
                            Tweet Search Feature
                        </h2>
                        <p>
                            The tweet search features allows you to search for
                            tweets by username or by string text match. If you
                            begin your search with an @, an HTTP GET request is
                            made to the server to specifically query that user.
                            If the @ is omitted, this application will simply
                            search the last 10 tweets containing a match to
                            whatever string you've entered.
                        </p>
                    </div>
                </div>
                <div className="random-body">
                    <img
                        src={random_tweet}
                        alt="random-tweets"
                        className="random-tweets"
                    />
                    <div className="random-text">
                        <h2 className="about-random-header">
                            Random Tweet Generator
                        </h2>
                        <p>
                            The Random Tweet Generator allows you to click a
                            button to return a tweet from a set of my five
                            favorite twitter users. Click will return a random
                            user and a random tweet from their last 10 tweets.
                            The users incluse Neil Degrasse Tyson, Scientific
                            American, The American Natural History Museum,
                            IFLScience, and NASA.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
