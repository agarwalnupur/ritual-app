const Footer = () => {
    return(
        <div className="foot">
            <section className="footin">
                <h3 className="susc">Subscribe for updates,exclusive promotions, and more.</h3>
                
            </section>
            <div className="email">
                <input type="text" placeholder="Enter your email"/>
            </div>
            <div className="foot2">
                <span>Ritual</span>
                <aside className="shop">
                    <h4>SHOP</h4>
                    <ul>
                        <li>Multivitamin</li>
                        <li>Protein</li>
                        <li>Bundles</li>
                        <li>Gift Cards</li>
                    </ul>
                </aside>
                <aside className="about">
                    <h4>ABOUT</h4>
                    <ul>
                        <li>Ingredients</li>
                        <li>Who we Are</li>
                        <li>Our Clinical Study</li>
                        <li>The Journal</li>
                        <li>Reviews</li>
                    </ul>
                </aside>
                <aside className="more">
                    <h4>MORE</h4>
                    <ul>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Help</li>
                    </ul>
                </aside>


            </div>
            <div className="foot3">
                <div>Privacy Policy</div>
                <div>Terms of Services</div>
                <div>Accessibilty</div>
                <div>Do not Track<br/></div>
            </div>
            <span id="foot4">©2021 Ritual. All rights reserved.</span>
            <div className="foot6">
                <div className="box">
                * These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease
                </div>
                <span id="foot4">The FDA plays a specific role in regulating the nutraceutical industry.  <u>Learn More.</u> </span>
            </div>
            
        

        </div>
    )
}
export default Footer;