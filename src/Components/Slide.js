import '../style/Slide.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import HerbsPic from '../img/herbsPic.png'
import essentialOil from '../img/essentialOil.png'
import Perfums from '../img/perfumsPic.png'
import vegetaleOil from '../img/vegetaleOil.png'
function Slide() {
  return (
    <div>
         <Carousel 
            autoPlay 
            interval={4000} 
            infiniteLoop 
            showThumbs={false}
            showStatus={false}  
            stopOnHover={false} 
        >
            <div className="image-container" style={{ position: "relative", display: "inline-block",width:'100%' }}>
                <img className="slidePic" src={HerbsPic} alt="slide1" style={{ width: "100%", display: "block" }} />
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <h1 className='text-white cat'>HERBS</h1>
                    <Link to={`/our-products/HERBS`}><button className="btn btn-outline-light button">
                        Discover our products 
                    </button></Link>
                </div>
            </div>
            <div  className="image-container" style={{ position: "relative", display: "inline-block",width:'100%' }}>
                <img style={{ width: "100%", display: "block" }} className='slidePic' src={essentialOil} alt="slide2" />
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <h1 className='text-white cat'>ESSENTIAL OIL</h1>
                    <Link to={`/our-products/ESSENTIAL OIL`}><button  className=' btn btn-outline-light button' >Discover our products</button></Link>
                </div>
                
            </div>
            <div  className="image-container" style={{ position: "relative", display: "inline-block",width:'100%' }}>
                <img style={{ width: "100%", display: "block" }} className='slidePic' src={Perfums} alt="slide3" />
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <h1 className='text-white cat'>PERFUMS</h1>
                    <Link to={`/our-products/PERFUM`}><button className=' btn btn-outline-light button' >Discover Our Products</button> </Link>  
                </div>
                
            </div>
            <div  className="image-container" style={{ position: "relative", display: "inline-block",width:'100%' }}>
                <img style={{ width: "100%", display: "block" }} className='slidePic' src={vegetaleOil} alt="slide3" />
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <h1 className='text-white cat'>VEGETALE OIL</h1>
                    <Link to={`/our-products/VEGETALE OIL`}><button  className=' btn btn-outline-light button' >Discover Our Products</button></Link>
                </div>
                
            </div>
        </Carousel>
    </div>
  );
}

export default Slide;