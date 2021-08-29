const FeatImg = ({imgsrc, p1,p2,p3,style}) => {
    return(
        <div className="ftimg" style={style}>
            <img src={imgsrc} alt="img6" style={{marginTop:"32px"}}></img>
            <p className="pa1">{p1}</p>
            <p className="pa2"> {p2} </p>
            <p className="pa3">{p3}</p>
        </div>
    )
}

export default FeatImg;