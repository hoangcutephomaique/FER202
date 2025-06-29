import React from 'react';
import { Carousel } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://intphcm.com/data/upload/poster-quang-cao-web-do-an.jpg"
            alt="Banner 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://2.bp.blogspot.com/-yQa9x9u5rf4/WCWRaJZV8_I/AAAAAAAACNY/F_qKGv8SYDAb_nsOvAVeFfftbJj3RcYdgCLcB/s1600/Khuyen-mai-the-gioi-hai-san-II.png"
            alt="Banner 2"
          />
        </Carousel.Item>
      </Carousel>
      <h3 className="text-danger mt-3">This is Home Page</h3>
    </div>
  );
}

export default Home;
