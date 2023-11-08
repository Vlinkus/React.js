import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="container-footer">
            <div className="row">
                <div className="col-sm">
                    <h5 className="footer-block-title">
                        <span className="footerColumn"> INFORMATION </span>
                    </h5>
                </div>
                <div className="col-sm">
                    <h5 className="footer-block-title">
                        <span className="footerColumn"> LINKS </span>
                    </h5>
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                <Link to="https://github.com/Vlinkus" >My GitHub
                                </Link>
                            <span className="badge bg-primary rounded-pill">0</span>
                        </li>
                        {/* <li className="list-group-item d-flex justify-content-between align-items-center">
                            
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                           
                        </li> */}
                    </ul>
                </div>
                <div className="col-sm">
                    <h5 className="footer-block-title">
                        <span className="footerColumn"> SOME THINGS </span>
                    </h5>

                </div>
            </div>
        </div>
    );
}