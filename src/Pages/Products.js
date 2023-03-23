
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Prodcut = () => {
    return (
        <div className="product">

        <h1>Welcome to Fake Amazon</h1>

        <div className="header">
            <Link to="">Apple</Link>
            <Link to="samsung">Samsung</Link>
            <Link to="nokia">Nokia</Link>
        </div>

        <Outlet />
        </div>
    );
}

export default Prodcut;