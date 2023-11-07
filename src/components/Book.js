import PropTypes from "prop-types"
import defaultImage from "../images/Misko Average.jpg"

const Book = ({image,title,price}) => {
  return <div>
    <h2>{title ||"defaultni nazev"}</h2>
    <img src={image || defaultImage} alt="" />
    <p>{price || 1000} kc</p>
  </div>
}

Book.propTypes={
    image:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
}
// Book.defaultProps={
//   image:defaltImage,
//   title:"defaltni nazev",
//   price:1000,
// }

export default Book