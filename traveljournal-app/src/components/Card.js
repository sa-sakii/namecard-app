import React from "react"

export default function Card( props ) {
    return (
        <div className="main-card">
            <img className="location-img" src={`./images/places/${props.item.img}`} alt="image not found"/>
            <div className="location-stats">
            <div className="location-details">
                <div className="location">
                    <img className="location-icon" src="./images/location-icon.png" alt="image not found"/>
                    <p className="country">{props.item.country}</p>
                </div>
                <a href={props.item.googleMapsLink}>View on Google Maps</a>
            </div>
            <h2 className="title">{props.item.title}</h2>
            <p className="date">
                <span className="from-date">{props.item.fromDate} - </span>
                <span className="to-date">{props.item.toDate}</span>
            </p>
            <p className="description">{props.item.description}</p>
            </div>
        </div>
    )
}