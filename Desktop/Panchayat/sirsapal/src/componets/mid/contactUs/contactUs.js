import './contactUs.css'
import Map from './map'
const ContactUs = () => {
    return (
        <div className='contact-us'>
            <h2 className='contact-us__header'>ContactUs</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae.</p>
            <div className='contact-us__contener'>
                <form className='contact-us__form'>
                    <div className='contat-us__form__items'>
                        <div>
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="user_name" />
                        </div>
                        <div>
                            <label for="mail">Email:</label>
                            <input type="email" id="mail" name="user_email" />
                        </div>
                        <div>
                            <label for="msg">Message:</label>
                            <textarea id="msg" name="user_message"></textarea>
                        </div>
                    </div>
                    <button className='contat-us__submit-button' type='submit'>submit</button>
                </form>
                <div className='contact-us__map'>
                    <Map />
                </div>
            </div>
        </div>
    )
}
export default ContactUs