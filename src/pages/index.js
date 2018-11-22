import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

//import pic01 from '../assets/images/grawler_station.jpg'
import pic02 from '../assets/images/seriema.jpg'
import pic03 from '../assets/images/caliandra.jpg'
import pic04 from '../assets/images/tamandua.jpg'
import pic05 from '../assets/images/loboguara.jpg'
import pic06 from '../assets/images/buraqueira.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Cerrado Beer"
                    meta={[
                        { name: 'description', content: 'A cerveja artesanal do cerrado' },
                        { name: 'keywords', content: 'cerveja, cerrado, artesanal' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        {/* <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Growler Station</h3>
                                <p>Em 2017 a Cerrado Beer inovou disponibilizando pelo Distrito Federal a 
                                    Kombi da Cerrado.</p>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link>
                        </article> */}
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Seriema</h3>
                                <p>German Pilsner. Cerveja extra clara, puro malte, com lupulagem equilibrada 
                                    e presente.</p>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Caliandra</h3>
                                <p>Vienna lager. Puro malte, clara e equilibrada. Ingredientes clássicos europeus 
                                    com um toque de lúpulos australianos.</p>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Tamanduá Bandeira</h3>
                                <p>American Brown Ale. Cerveja escura com notas maltadas de caramelo, chocolate e café, 
                                    harmonizam com uma carga generosa de lúpulos aromáticos americanos e ingleses.</p>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Lobo Guará</h3>
                                <p>American Double IPA. Muito lúpulo americano, muito malte e um toque de rapadura do cerrado 
                                    para acompanhar.</p>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Buraqueira</h3>
                                <p>Maturada com café 100% arábica Antonello Monardo, essa double brown ale tem 8% ABV e IBU 80.</p>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                    </section>
                    {/* <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                {/* <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section> */}
                </div>

            </Layout>
        )
    }
}

export default HomeIndex