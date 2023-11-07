import PropTypes from "prop-types"
import defaltImage from "../images/Misko Average.jpg"

const Book = ({image,title,price}) => {
  return <div>
    <h2>{title}</h2>
    <img src={image} alt="" />
    <p>{price} kc</p>
  </div>
}

Book.propTypes={
    image:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
}
Book.defaultProps={
  image:defaltImage,
  title:"defaltni nazev",
  price:1000,
}

export default Book