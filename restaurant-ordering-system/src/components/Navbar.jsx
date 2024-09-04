import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/admin" className="text-xl font-bold">
          Admin Dashboard
        </Link>
        <Link to="/menu" className="text-xl font-bold">
          Menu
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
