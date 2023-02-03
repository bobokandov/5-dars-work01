import { Component } from "react";
import "./ProductCard.css";

class ProductCard extends Component {
  constructor() {
    super();
  }

  render() {
    console.log("mahslot ochildi");
    console.log(this.props);
    const { ProductImg, groupName, price, pricMonth, title } = this.props.date;

    return (
      <div className="productCard p-3">
        <img className="d-block productImg" src={ProductImg} alt="" />
        <a href="#" className="groupName d-block mt-2 mb-3">
          {groupName}
        </a>
        <p className="price">{price} so'm</p>
        <p className="priceMonth">{pricMonth} som/oy</p>
        <p className="title"> {title}</p>
        <a href="#" className="btn">
          Sotvolish
        </a>
      </div>
    );
  }
}

export default ProductCard;
