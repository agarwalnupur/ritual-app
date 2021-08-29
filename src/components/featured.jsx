import FeatImg from './featimg'

const Featured = () => {
    return(
        <div className="ffft">
        <div className="fullft" style={{marginBottom:"32px"}}>
            <div>
                <h2 className="ftpdt">Featured Products</h2>
                <a href="https://ritual.com/shop-all" style={{float:"right"}}>Shop All</a>
            </div>
            
            <div>    
                <FeatImg imgsrc="https://images.ctfassets.net/uuc5ok478nyh/1ZktS2HFz58J4p46qXEZE3/c5f97ad5a9bec6c5d10d452d32db3447/PDP_EFW_Bottle.jpg?w=560&h=560&q=100&fm=webp"
                    p1="Essential for Women" 
                    p2="Multivitamin 18+"
                    p3="The clinical-backed multivitamin, reimagined for women 18+."
                    className="img1" />
                
                
                <FeatImg imgsrc="https://images.ctfassets.net/uuc5ok478nyh/3MK3Sz4okY78iVRU575Vkr/2d16d86a29e30903a5ab952a90d2816a/PDP_EPRE_Bottle__1_.jpg?w=140&h=140&q=100&fm=webp"
                    p1="Essential for Women"
                    p2="Prenatal Multivitamin"
                    p3="The prenatal multivitamin for thinking, trying, and when it's time." />

                <FeatImg imgsrc="https://images.ctfassets.net/uuc5ok478nyh/2YwsjloMBemmIMHFyHTSn2/fe327945e221a81b15d02da321c0dd38/PDP-EP18-Bag.jpg?w=140&h=140&fl=progressive&q=100&fm=jpg"
                    p1="Essential Protein"
                    p2="Daily Shake 18+"
                    p3="The reimagined plant-based protein for adults 18-49." />
                
                <FeatImg imgsrc="https://images.ctfassets.net/uuc5ok478nyh/7pqVHaplmMPwPwbSL0xR7y/f48f55f5c9f59f14c4ad5a18dfeaf1f7/PDP_EFM_Bottle.jpg?w=560&h=560&fl=progressive&q=100&fm=jpg"
                    p1="Essential for Men"
                    p2="Multivitamin 18+"
                    p3="The scientifically-developed multivitamin for men 18-49 to help fill nutrient gaps in their diets.*"
                   style={{marginTop:"32px"}} />
            </div>
        </div>
        </div>
    )
}
export default Featured;