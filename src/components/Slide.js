import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Slide() {
  return (
    <div className="container div-slide">
      <div className="row">
        <div className="col-12">
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="w-100 d-block img-fluid slide"
                src="https://d2v9ipibika81v.cloudfront.net/uploads/sites/32/2016/12/GBV-woman-pt-1140-1140x450.png"
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="w-100 d-block img-fluid slide"
                src="https://www.politize.com.br/wp-content/uploads/2016/11/violencia-contra-a-mulher.png"
                alt="Second slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="w-100 d-block img-fluid slide"
                src="https://brazil.unfpa.org/sites/default/files/styles/news_detail/public/news/agressao_verbal_1200x630_03_site.jpg?itok=Sq2bq9wl"
                alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default Slide;
