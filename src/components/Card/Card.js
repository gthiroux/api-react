import "./Card.css";

const Card = ({ firstname, lastname }) => {
  return (
    <div className="card">
      <p>{firstname}</p>
      <p>{lastname}</p>
    </div>
  );
};

export default Card;
