import { Link } from "react-router-dom";

interface Props {
  location: string;
  text: string;
}

const TopBarListLink = ({ location, text }: Props) => {
  return (
    <li>
      <Link to={location}>{text}</Link>
    </li>
  );
};

export default TopBarListLink;
