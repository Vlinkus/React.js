import { Link, useRouteError } from "react-router-dom";
import cat from './Images/kitty.png';

export default function ErrorPage(){
    const error = useRouteError();
    console.error(error);
    return(
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, accidentally we spilled some coffe beans...</p>
            <Link to="/" className="kitty" aria-current="page">
                               <img src={cat} className="kitty" alt="Kitty" />
            </Link>

            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}