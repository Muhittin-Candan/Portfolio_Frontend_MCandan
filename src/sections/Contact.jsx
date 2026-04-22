import '../styles/contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Kontakt</h2>
        <p className="contact-intro">Ich freue mich auf deine Nachricht!</p>
        <form className="contact-form">
          <input type="text" placeholder="Dein Name" required />
          <input type="email" placeholder="Deine E-Mail" required />
          <textarea placeholder="Deine Nachricht" rows="5" required></textarea>
          <button type="submit" className="btn btn-primary">Senden</button>
        </form>
      </div>
    </section>
  )
}
