import './Contact.css';
import Footer from './Components/Footer'

function Contact() {
  return (
    
    <form className="Contact" action=".">
        <div className='form-header'>
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
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
        <div className='text-email-field'>
            <label for="last_name">Email</label>
            <input id="first_name" type="email" placeholder="yourname@email.com" required />
        </div>
    </form>
    
  );
}

export default Contact;
