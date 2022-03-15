// import our old friend, the Link component
import { Link } from 'react-router-dom';

function Header(props) {

    console.log("Header props:", props)

    return (
        <header>
            {/* Wrap the h1 in a Router link which navigates back to the homepage */}
            <Link to="/">
                <h1>{props.heading}</h1>
            </Link>
        </header>
    )
}

export default Header;