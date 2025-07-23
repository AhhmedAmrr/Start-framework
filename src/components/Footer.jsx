export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 ">
      <div className="container">
        <div className="row text-center">

      
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">LOCATION</h5>
            <p className="mb-1">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

        
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">AROUND THE WEB</h5>
            <div className="d-flex justify-content-center gap-3 mt-2">
              <a href="#" className="text-white fs-5">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>

        
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">ABOUT FREELANCER</h5>
            <p className="mx-auto" >
              Freelance is a free to use, licensed Bootstrap theme created by Route
            </p>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-center text-white py-3 mt-4">
        Copyright © Your Website 2021
      </div>
    </footer>
  )
}
