import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiInboxArrowDown } from "react-icons/hi2";
import "./App.css";

const Card = ({ title, subtitle, description, isPaid, image }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div
            className={`card ${isSelected ? "card-selected" : ""}`}
            onClick={() => setIsSelected(!isSelected)}
        >
            <div className="card-header">
                <div
                    className="card-icon"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                ></div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p className="card-subtitle">{subtitle}</p>
                </div>
            </div>
            <p className="card-description">{description}</p>
            <div className="card-footer">
                <span
                    className={`like-icon ${isLiked ? "liked" : ""}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsLiked(!isLiked);
                    }}
                >
                    <FaHeart className="like-icon1" />
                </span>
                <span className="inbox-icon">
                    <HiInboxArrowDown size={30} className="like-icon1" color="rgba(255, 255, 255, 0.6)" />
                </span>

                <button
                    className={`visit-button ${!isSelected ? "visit-button-active" : ""}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    Visit
                </button>
            </div>
        </div>
    );
};

export default Card;
