import React from "react";
import "./Card.css";
import pin from "../../images/location-pin.svg"

export default function Card(props) {
    return(
        <section className="card">
            <img 
            src= { require(`../../images/${props.imageUrl}`).default } 
            alt="" 
            className="card--photo"/>
            <div className="card--info">
                <div className="card--info--location">
                    <img src={ pin } className="card--location--pin"/> 
                    { props.location.toUpperCase() }
                    <a href= { props.googleMapsUrl } className="card--location-link">View on Google Maps</a> 
                </div>
                <h1>{ props.title }</h1>
                <h4>{ props.startDate } - { props.endDate }</h4>
                <p>{ props.description }</p>
            </div>
        </section>
    )
}