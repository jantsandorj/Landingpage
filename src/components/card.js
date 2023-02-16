import Card from "react-bootstrap/Card";

function Cards({
  iconName,
  title,
  paragraph,
  cardImg,
  isDiv,
  price,
  category,
}) {
  return (
    <Card
      style={{ backgroundColor: "white", border: "none", margin: " 0 1rem" }}
    >
      <Card.Img variant="top" src={cardImg} />
      <Card.Body>
        <div
          style={{
            display: isDiv ? "flex" : "none",
            width: "63px",
            height: "63px",
            backgroundColor: " #F9F9F9",
            borderRadius: "50%",
            marginBottom: "1.2rem",
          }}
          className="justify-content-center align-items-center middle"
        >
          <i
            className={`cardIcon bi bi-${iconName}`}
            style={{ fontSize: "30px" }}
          ></i>
        </div>
        <Card.Text className="grayParagraph">{category}</Card.Text>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="grayParagraph">{paragraph}</Card.Text>
        <Card.Text className="price">{price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
