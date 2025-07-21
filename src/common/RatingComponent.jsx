import classes from "./RatingComponent.module.css";

function RatingComponent({ ratingInput }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className="star">
          {i < rating ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className={classes.starRatingContainer}>
      {renderStars(Math.round(ratingInput))}
    </div>
  );
}

export default RatingComponent;
