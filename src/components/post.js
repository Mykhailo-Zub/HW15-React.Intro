import React from "react";

import SocialBtns from "./socialBtns";

import confirmImg from "../img/confirm.svg";
import downArrowImg from "../img/down-arrow.svg";

const Post = (props) => (
    <div className="post-wrapper">
        <div
            className="avatar"
            style={{ backgroundImage: `url(${props.author.photo})` }}
        ></div>
        <div className="content-column">
            <div className="name-row">
                <div className="name">{props.author.name}</div>
                <img src={confirmImg} alt="Confirmed" className="confirm" />
                <div className="nickname">{props.author.nickname}</div>
                <div className="dot"></div>
                <div className="date">{props.date}</div>
                <img
                    className="more-arrow"
                    src={downArrowImg}
                    alt="Show more"
                />
            </div>
            <div className="content">{props.content}</div>
            <div className="content-img">
                <img src={props.image} alt="Content" />
            </div>
            <SocialBtns />
        </div>
    </div>
);

export default Post;
