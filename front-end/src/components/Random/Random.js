import "./Random.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import likes from "../Images/love.png";
import retweets from "../Images/repost.png";

const Random = () => {
    const [randomUserData, setRandomUserData] = useState([]);

    const favorite_twitter_users = [
        "@AMNH",
        "@sciam",
        "@IFLScience",
        "@nasa",
        "@neiltyson",
    ];

    const handleClick = (e) => {
        e.preventDefault();
        const randomUser = Math.floor(
            Math.random() * favorite_twitter_users.length
        );
        const result = favorite_twitter_users[randomUser];
        getRandomData(result);
    };

    const getRandomData = (randomUser) => {
        axios
            .get("/RandomTweet", { params: { random_user: randomUser } })
            .then((randomTweet) => {
                setRandomUserData(randomTweet.data.statuses);
            })
            .catch((err) => console.log(err.message));
    };

    const renderExtendedEntities = (randomTweet) => {
        if (randomTweet.hasOwnProperty("extended_entities")) {
            return (
                <img
                    src={randomTweet.extended_entities.media[0].media_url}
                    alt="media"
                    className="tweet-extended-media"
                />
            );
        }
        return <></>;
    };

    const display_random_tweets = () => {
        const tweetRandomizer = Math.floor(Math.random() * 10);
        const randomTweetList = randomUserData.map((randomTweet, key) => {
            return (
                <div className="tweet" key={key}>
                    <span className="image-container">
                        <img
                            src={randomTweet.user.profile_image_url_https}
                            alt={randomTweet.profile_image_url_https}
                            className="tweet-profile-pic"
                        />
                    </span>
                    <span>
                        <span className="tweet-author">
                            <span className="tweet-username">
                                {randomTweet.user.name}
                            </span>
                            <span className="tweet-handle">
                                @{randomTweet.user.screen_name}
                            </span>
                        </span>
                        <div className="tweet-body">
                            <div className="tweet-text">
                                {randomTweet.full_text}
                            </div>
                        </div>
                        <div className="tweet-metrics">
                            <span className="tweet-retweet-count">
                                <img
                                    src={retweets}
                                    className="tweet-retweets"
                                    alt="retweets"
                                />
                                {randomTweet.retweet_count}
                            </span>
                            <span className="tweet-favorite-count">
                                <img
                                    src={likes}
                                    className="tweet-likes"
                                    alt="likes"
                                />
                                {randomTweet.favorite_count}
                            </span>
                        </div>
                        {renderExtendedEntities(randomTweet)}
                    </span>
                </div>
            );
        });
        return randomTweetList[tweetRandomizer];
    };

    return (
        <div className="random-container">
            <h1 className="random-header">Tweet Randomizer!</h1>
            <h3 className="random-tweet-text">
                Click the button to get a random tweet from Neil Degrasse Tyson,
                Scientific American, IFLScience, NASA, and the American Natural
                History Museum
            </h3>
            <div className="random-tweet-container">
                {display_random_tweets()}
            </div>
            <Button onClick={handleClick} className="random-tweet-button">
                Get A Random Tweet!
            </Button>
        </div>
    );
};

export default Random;
