import "./Shop.css";
import shirt from "../../img/products/shirt.jpg";
import cd from "../../img/products/cd.jpg";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop__content">
        <h1>Loja Classic Rider's</h1>
        <div className="shop__content__card">
          <img src={shirt} alt="shirt" className="shop__content__img" />
          <p>Camisetas Classic Rider's</p>
          <a
            href="https://lapa1446326.mercadoshops.com.br/MLB-2130944377-camisetas-classic-riders-m-g-e-gg-_JM"
            target="_blank"
            rel="noopener noreferrer"
            className="shop_btn_buy"
          >
            Comprar
          </a>
        </div>
        <div className="shop__content__card">
          <img src={cd} alt="cd" className="shop__content__img" />
          <p>Disco Classic Rider's</p>
          <a
            href="https://lapa1446326.mercadoshops.com.br/MLB-2130823193-disco-classic-riders-_JM"
            target="_blank"
            rel="noopener noreferrer"
            className="shop_btn_buy"
          >
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shop;
