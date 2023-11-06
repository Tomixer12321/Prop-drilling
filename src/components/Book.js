import PropTypes from "prop-types"

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

export default Book