import Card from './card';
const CardSet = () => {
    return(
        <div  classname="outcard">
            <span id="card1"><Card source = "https://images.ctfassets.net/uuc5ok478nyh/28hfBJ1mqho10JHWUltf0X/720c1c1212efc928775e881214f528b8/Category-Multivitamin.jpg?w=145&h=90&fl=progressive&q=90&fm=jpg" item="Multivitamin"/> </span>
            <Card source = "https://images.ctfassets.net/uuc5ok478nyh/4HeUbLZGWaKoK7JPYdRuWg/0f36a544cda868ee9603f103c9cbefe0/Category-Protein__1_.jpg?w=580&h=359&q=90&fm=webp" item="Protein"/>
            <Card source = "https://images.ctfassets.net/uuc5ok478nyh/59zqn8KhaMI6DcFJ38CnDu/98d1899324e223ceec2f7d1aff84c3ee/Category-Pregnancy__1_.jpg?w=580&h=359&q=90&fm=webp" item="Pregnancy"/>
            <Card source = "https://images.ctfassets.net/uuc5ok478nyh/2RQ7pdzdW9JmLk0z0shhzM/cb2bdddeb740841de6153bea9e1b7d0f/Category-Bundles.jpg?w=580&h=359&q=90&fm=webp" item="Bundles"/>
        </div>
    )
}

export default CardSet;