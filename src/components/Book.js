

const Book = ({image,title,price}) => {
  return <div>
    <h2>{title}</h2>
    <img src={image} alt="" />
    <p>{price} kc</p>
  </div>
}

export default Book