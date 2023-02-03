import { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import ProductCard from "./Components/ProductCard";

const dataProduct = [
  {
    id: 1,
    ProductImg:
      "https://olcha.uz/image/266x266/products/2022-12-23/smartfon-xiaomi-redmi-note-11-pro-6-gb-128gb-zvezdno-goluboy-185214-0.jpeg",
    groupName: "Smartphone",
    price: "3 290 000",
    pricMonth: "220 000",
    title: "Xiome Redmi 10 4/128GB Sea BLue",
  },
  {
    id: 2,
    ProductImg:
      "https://olcha.uz/image/266x266/products/2022-12-23/smartfon-xiaomi-redmi-note-11-pro-6-gb-128gb-zvezdno-goluboy-185214-0.jpeg",
    groupName: "Smartphone",
    price: "5 290 000",
    pricMonth: "220 000",
    title: "Xiome Redmi 10 4/128GB Sea BLue",
  },
  {
    id: 3,
    ProductImg:
      "https://olcha.uz/image/266x266/products/2022-12-23/smartfon-xiaomi-redmi-note-11-pro-6-gb-128gb-zvezdno-goluboy-185214-0.jpeg",
    groupName: "Smartphone",
    price: "4 290 000",
    pricMonth: "220 000",
    title: "Xiome Redmi 10 4/128GB Sea BLue",
  },
  {
    id: 4,
    ProductImg:
      "https://olcha.uz/image/266x266/products/2022-12-23/smartfon-xiaomi-redmi-note-11-pro-6-gb-128gb-zvezdno-goluboy-185214-0.jpeg",
    groupName: "Smartphone",
    price: "1 290 000",
    pricMonth: "220 000",
    title: "Xiome Redmi 10 4/128GB Sea BLue",
  },
  {
    id: 5,
    ProductImg:
      "https://olcha.uz/image/266x266/products/2022-12-23/smartfon-xiaomi-redmi-note-11-pro-6-gb-128gb-zvezdno-goluboy-185214-0.jpeg",
    groupName: "Smartphone",
    price: "3 290 000",
    pricMonth: "220 000",
    title: "Xiome Redmi 10 4/128GB Sea BLue",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="products " className="py-5">
          <div className="container-fluid">
            <div className="row">
              {dataProduct.map((value, index) => {
                return (
                  <div
                    key={value.id}
                    className="col-sm-6 col-md-4 col-lg-3 productCol"
                  >
                    <ProductCard date={value} />
                  </div>
                );
              })}
              {/*<div className="col-sm-6 col-md-4 col-lg-3 productCol">
                 <ProductCard {...dataProduct[0]} /> 
                <ProductCard date={dataProduct[0]} />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 productCol">
                <ProductCard date={dataProduct[1]} />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 productCol">
                <ProductCard date={dataProduct[2]} />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 productCol">
                <ProductCard date={dataProduct[3]} />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 productCol">
                <ProductCard date={dataProduct[4]} />
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
