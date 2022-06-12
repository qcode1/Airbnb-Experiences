import React from "react"
import Star from "../images/star.png"


export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card-group">
            <div className="card">
                <img src={props.coverImg} alt="User Experience" className="card--img" />
                {badgeText && <div className="card--badge">{badgeText}</div>}
            </div>
            <p className="ratings"> 
                <img src={Star} alt="Star" className="star--img" /> 
                <span className="score">{props.stats.rating}</span>
                <span className="ratings--text">({props.stats.reviewCount}) · {props.location}</span> 
            </p>
            <p className="desc">{props.title}</p>
            <p className="rate"> 
                <span className="rate--price">From ${props.price}</span>
                <span className="rate--text">/ person</span> 
            </p>
        </div>
    )
}