import "./index.css";
import "bootstrap/js/src/collapse.js";
import Navbar from "../navbar";

//this function renders a header that will collapse on 991px into a burger icon. It includes a Navbar imported from Navbar component.
function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary header">
      <div className="container-fluid">
          <h1 className="navbar-brand">Ainhoa</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/*unordered list with the navbar links */}
          <Navbar />
        </div>
      </div>
    </nav>
  );
}

export default Header;
