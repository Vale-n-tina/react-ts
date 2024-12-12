
import Card from "react-bootstrap/Card";
import Article from "../assets/types/article";
import {Link} from "react-router-dom";

interface SingoleCardProps{
        array:Article
    }

const MyCard = (props:SingoleCardProps) => {

    const formattedDate = new Date(props.array.published_at).toLocaleString();
  return (
    <Link to={"/details/" + props.array.id} className="nav-link">
    <Card>
      <Card.Img variant="top" src={props.array.image_url
} />
      <Card.Body>
        <Card.Title>{props.array.title}</Card.Title>
       
        <Card.Footer className="text-muted">Publicato il {formattedDate}</Card.Footer>
      </Card.Body>
    </Card>
    </Link>
  );
};

export default MyCard;
