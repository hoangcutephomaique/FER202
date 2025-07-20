import { Carousel } from 'react-bootstrap';

export default function CarouselBanner() {
  return (
    <Carousel className="mb-4">
      <Carousel.Item>
        <img className="d-block w-100" src="/images/homestay1.jpg" alt="First slide" height={400} />
        <Carousel.Caption>
          <h3>Homestay thư giãn</h3>
          <p>Trải nghiệm thiên nhiên trong lành</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/homestay2.jpg" alt="Second slide" height={400} />
        <Carousel.Caption>
          <h3>Không gian riêng tư</h3>
          <p>Phòng hiện đại, tiện nghi</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/homestay3.jpg" alt="Second slide" height={400} />
        <Carousel.Caption>
          <h3>Dịch vụ tận tâm</h3>
          <p>Chăm sóc bạn từ những chi tiết nhỏ nhất</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}
