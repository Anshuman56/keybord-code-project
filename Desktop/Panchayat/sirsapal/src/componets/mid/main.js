import './main.css'
import Register from './register';
import Event from './event';
import Leader from './leader';
import Population from './population';
import Schemes from './schemes/schemes';
import Gallery from './gallery/gallery';
import ContactUs from './contactUs/contactUs';

const Main = () => {
    return (
        <div className='main'>
            <div className='main__top'>
                <h2>WELCOME TO SIRSAPAL</h2>
                <h3>दो गज की दुरी मास्क है जरुरी</h3>
            </div>
            <div className='main__second'>
                <Register />
                <Event />
                <Leader />
            </div>
            <div className='main__three'>
                <Population />

            </div>
            <div className='main__four'>
                <Schemes />

            </div>
            <div className='main__five'>
                <Gallery />

            </div>
            <div className='main__six'>
                <ContactUs />
            </div>
        </div>
    );
}
export default Main;