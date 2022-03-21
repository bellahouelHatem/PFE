import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <Card>
      <CardImg alt="Card image cap" src={props.image} />
      <CardBody className="p-4">
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
        <CardText className="mt-3">{props.text}</CardText>
        <Link to={props.link}>
          <Button id = 'open' color={props.color}>try it</Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default Cards;
  