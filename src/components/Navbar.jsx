import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex justify-content-between align-items-center">
      
        <Link className="navbar-brand" to="/">
          START FRAMEWORK
        </Link>

      
        <div className="d-flex gap-5">
          <Link className="nav-link text-white" to="/about">
            About
          </Link>
          <Link className="nav-link text-white" to="/portfolio">
            Portfolio
          </Link>
          <Link className="nav-link text-white" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
