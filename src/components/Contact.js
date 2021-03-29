import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            {/* <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section> */}
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-shopping-cart"></span>
                        <h3>Compre Online</h3>
                        <a href="http://store.cerrado.beer" target="_blank">Cerrado Store</a><br />
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-whatsapp"></span>
                        <h3>Whatsapp</h3>
                        <a href="https://api.whatsapp.com/send?l=pt_br&phone=5561998504451">Contato</a><br />
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:atendimento@cerrado.beer">atendimento@cerrado.beer</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Telefones</h3>
                        <span><a href="tel:+5561998504451">(61) 99850 4451</a><br />
                        </span>

                    </div>
                </section>
                {/* <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>1234 Somewhere Road #5432<br />
                        Nashville, TN 00000<br />
                        United States of America</span>
                    </div>
                </section> */}
            </section>
        </div>
    </section>
)

export default Contact
