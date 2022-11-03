import './Contact.css';
import Footer from './Components/Footer'

function Contact() {
  return (
    <div>
        <div className="container">
            <form action=".">
                <div className='form-header'>
                    <h1>Contact Me</h1>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </div>

                {/* names */}
                <div className='names-inputs'>
                    <div className='text-name-field'>
                        <label for="first_name">First name</label>
                        <input id="first_name" type="text" placeholder="Enter your first name" required pattern="^[a-zA-Z]{3,8}\s[a-zA-Z]{3,8}" />
                    </div>
                    <div className='text-name-field'>
                        <label for="last_name">Last name</label>
                        <input id="first_name" type="text" placeholder="Enter your last name" required pattern="^[a-zA-Z]{3,8}\s[a-zA-Z]{3,8}" />
                    </div>
                </div>

                {/* email */}
                <div className='text-email-field'>
                    <label for="last_name">Email</label>
                    <input id="email" type="email" placeholder="yourname@email.com" required />
                </div>

                {/* message */}
                <div className='text-email-field'>
                    <label for="last_name">Message</label>
                    <textarea id="message" placeholder="Send me a message and I'll reply you as soon as possible..." required />
                </div>

                {/* checkbox */}
                <div class="checkbox">
                    <input type="checkbox" id="" className="checkbox-box" />
                    <label className="">You agree to providing your data to arcteggzz who may contact you.</label>
                </div>

                {/* button */}
                <button className="" type="submit" id="btn__submit">
                    Send message
                </button>
            </form>
        </div>
        <Footer />
    </div>
  );
}

export default Contact;
