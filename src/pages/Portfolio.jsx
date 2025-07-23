import chefs1 from "../assets/chefs-1.jpg";

const cardImg = chefs1;

export default function Portfolio() {
  return (
    <div className="bg-success text-white min-vh-100 flex-grow-1 py-5">
      <div className="container text-center">
        <h2 className="text-uppercase m-5">Portfolio component </h2>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={cardImg} className="card-img-top" alt="Project 1" />
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={cardImg} className="card-img-top" alt="Project 2" />
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={cardImg} className="card-img-top" alt="Project 3" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={cardImg} className="card-img-top" alt="Project 1" />
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={cardImg} className="card-img-top" alt="Project 2" />
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={cardImg} className="card-img-top" alt="Project 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
