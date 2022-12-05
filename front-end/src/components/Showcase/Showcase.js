import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Showcase.css";
import axios from "axios";
import likes from "../Images/love.png";
import retweets from "../Images/repost.png";
import search from "../Images/search.jpg";
const Showcase = () => {
    const [searchInput, setSearchInput] = useState("");
    const [userHasSearched, setUserHasSearched] = useState(false);
    const [tweetData, setTweetData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        getTweets();
    };

    const getTweets = async () => {
        try {
            await axios
                .get("/SearchTweets", { params: { userInput: searchInput } })
                .then((tweets) => {
                    setTweetData(tweets.data.statuses);
                    setUserHasSearched(true);
                });
        } catch (err) {
            console.log(err);
        }
    };

    const renderExtendedEntities = (tweet) => {
        if (tweet.hasOwnProperty("extended_entities")) {
            return (
                <div className="extended-media-container">
                    <img
                        src={tweet.extended_entities.media[0].media_url}
                        alt="media"
                        className="tweet-extended-media"
                    />
                </div>
            );
        }
        return <></>;
    };

    const display_tweets = () => {
        const tweet_list = tweetData.map((tweet, key) => {
            return (
                <div className="tweet" key={key}>
                    <span className="image-container">
                        <img
                            src={tweet.user.profile_image_url_https}
                            alt={tweet.profile_image_url_https}
                            className="tweet-profile-pic"
                        />
                    </span>
                    <span>
                        <span className="tweet-author">
                            <span className="tweet-username">
                                {tweet.user.name}
                            </span>
                            <span className="tweet-handle">
                                @{tweet.user.screen_name}
                            </span>
                        </span>
                        <div className="tweet-body">
                            <div className="tweet-text">{tweet.full_text}</div>
                        </div>
                        <div className="tweet-metrics">
                            <span className="tweet-retweet-count">
                                <img
                                    src={retweets}
                                    className="tweet-retweets"
                                    alt="retweets"
                                />
                                {tweet.retweet_count}
                            </span>
                            <span className="tweet-favorite-count">
                                <img
                                    src={likes}
                                    className="tweet-likes"
                                    alt="likes"
                                />
                                {tweet.favorite_count}
                            </span>
                        </div>
                        {renderExtendedEntities(tweet)}
                    </span>
                </div>
            );
        });
        if (tweet_list.length > 0 && userHasSearched) {
            return tweet_list;
        }
        if (tweet_list.length === 0 && userHasSearched) {
            return (
                <h3>
                    Error, there were no matches for your search. Please refine
                    it and try again.
                </h3>
            );
        } else {
            return (
                <>
                    <h3>Search for a Twitter user or a text string</h3>
                    <img
                        src={search}
                        alt="search"
                        className="search-image"
                    ></img>
                </>
            );
        }
    };
    return (
        <div className="showcase-container">
            <Form className="search-form" onSubmit={handleSubmit}>
                <input
                    className="search-input"
                    type="text"
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    placeholder="Ex: @nasa for NASA's tweets, or NASA to match tweets containing the string 'NASA' "
                    required
                />
                <Button className="search-button" type="submit">
                    Search User
                </Button>
            </Form>
            <div>{display_tweets()}</div>
        </div>
    );
};

export default Showcase;
