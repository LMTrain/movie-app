


const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img className="d-block img-fluid" src="https://lmtrain.github.io/lm-images/assets/images/bugatti_2.jpg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src="https://lmtrain.github.io/lm-images/assets/images/mydejavuredcar.jpg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src="https://lmtrain.github.io/lm-images/assets/images/futurecar9.jpg" alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src="https://lmtrain.github.io/lm-images/assets/images/futurecar18.jpg" alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src="https://lmtrain.github.io/lm-images/assets/images/mybmwm6.jpg" alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src="https://lmtrain.github.io/lm-images/assets/images/bugatti_la_voiture%20noire_up.jpg" alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src="https://lmtrain.github.io/lm-images/assets/images/bugatti_chiron%20sport2.jpg" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
        </div>
    )
}


export default Carousel
