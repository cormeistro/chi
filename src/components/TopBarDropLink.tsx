import { Link } from "react-router-dom";

interface Props {
  location: string;
  text: string;
}

const TopBarDropLink = ({ location, text }: Props) => {
  return (
    <Link to={location}>
      {text} <span>&#9660;</span>
    </Link>
  );
};

export default TopBarDropLink;
