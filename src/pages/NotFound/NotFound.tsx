import { Link } from 'react-router-dom';
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className='not-found-wrapper'>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className='link-to-home'>
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
