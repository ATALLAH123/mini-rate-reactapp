import React from 'react'
import { useState } from 'react';



export default function rating() {

    const [selectedRating, setselectedrating] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleRatingClicked(rating) {

        setselectedrating(rating);
    }
    function handleFormsubmitted(event) {
        event.preventDefault();
        setIsSubmitted(true)
    }
    return isSubmitted ? (
        <div className="paneltwo"><img src="phone.png" alt="" className="phoneimg" />
            <p className="selected"> you selected {selectedRating} out of 5</p>
            <h1 className="tittle">thank you!</h1>
            <p className="description">we apreciated you giving time for a rating that realy help us if you ever need more support dont esetate to get in touch. </p></div>
    ) :
        <form onSubmit={handleFormsubmitted} className="panel" >
            <img src="star.png" alt="" className="icon" />
            <h1 className="tittle">How did we do?</h1>
            <p className="description">please let us know how we did with your support request. all feedback is important to improve our work.</p>

            <div className="ratebt">
                {[1, 2, 3, 4, 5].map((rating) => (
                    <button onClick={() => handleRatingClicked(rating)}
                        className="ratingbt"
                        type="button"
                    >{rating}</button>
                ))}

            </div>

            <button type="submit" disabled={selectedRating === undefined} className="submit">submit</button>
        </form>
}
