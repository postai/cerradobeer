import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/mosaico_cerradopub.jpg'
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
                    <section id="cervejas" className="tiles">
                        
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major2">
                                <h3></h3>
                                <p>German Pilsner. Cerveja extra clara, puro malte, com lupulagem equilibrada 
                                    e presente.</p>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                        
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major2">
                                <h3></h3>
                                <p>American Brown Ale. Cerveja escura com notas maltadas de caramelo, chocolate e café, 
                                    harmonizam com uma carga generosa de lúpulos aromáticos americanos e ingleses.</p>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>

                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major2">
                                <h3></h3>
                                <p>Vienna lager. Puro malte, clara e equilibrada. Ingredientes clássicos europeus 
                                    com um toque de lúpulos australianos.</p>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major2">
                                <h3></h3>
                                <p>American Double IPA. Muito lúpulo americano, muito malte e um toque de rapadura do cerrado 
                                    para acompanhar.</p>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major2">
                                <h3></h3>
                                <p>Com café 100% arábica Antonello Monardo, essa double brown ale tem 8% ABV e 80 IBU.</p>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                    </section>
                    <section id="onde">
                        <div className="inner">
                            <header className="major">
                                <h2>Onde Encontrar</h2>
                            </header>
                            <p><iframe src="https://www.google.com/maps/d/u/0/embed?mid=1uNYPzStzG8dfdCvHuiZDHEyviyIYvUm5" width="100%" height="600px"/></p>
                            <ul className="actions">
                                {/* <li><Link to="/landing" className="button next">Get Started</Link></li> */}
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex