const Card = ({source, item}) => {
    return(
        <div className="card"> 
            
                <div className="incard">
                <img src={source} alt="img1"></img>
                <p>Shop {item}</p>
                </div>
            
            
           
        </div>
    )
}

export default Card;