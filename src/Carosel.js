import Carousel from 'react-bootstrap/Carousel';


function Carouselsection(){
    return(
        <div>
               <Carousel>
                    <Carousel.Item>
                        < img src="img/img1.jpg" className='carosel-img' />
                    </Carousel.Item>
                    <Carousel.Item>
                        < img src="img/img5.jpg" className='carosel-img'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        < img src="img/img6.jpg" className='carosel-img' />
                    </Carousel.Item>
                    </Carousel>
        </div>
    )
}
export default Carouselsection;