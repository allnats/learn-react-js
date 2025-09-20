export default function StarRating({ maxRating = 5 }) {
  return (
    <article className="star-rating-container" style={containerStyle}>
      <div className="star-rating" style={starRatingStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </article>
  );
}

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starRatingStyle = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};
