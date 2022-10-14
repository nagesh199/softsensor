import Carousel from 'react-bootstrap/Carousel';

const Slide=()=> {
  return (
    <Carousel>
      <Carousel.Item>
        <img 
          width="100%"
          height="400px"
          className="d-block w-100"
          src="https://www.drip.com/hs-fs/hubfs/Imported_Blog_Media/Ralph-Lauren-GIF-2.gif?width=600&height=497&name=Ralph-Lauren-GIF-2.gif"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
      <img
          width="100%"
          height="400px"
          className="d-block w-100"
          src="https://morecustomersapp.com/wp-content/uploads/2022/06/Banners-on-eCommerce-site.gif"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          height="400px"
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/54075d27e4b021337ce39834/1543474118952-1LCP2IKSO7WOW9DHILI8/ear02.gif"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;