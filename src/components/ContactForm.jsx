import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <>
      <div className="form-container">
        <h1>Send a message to us!</h1>
        <form>
          <input placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input placeholder="Subject" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
