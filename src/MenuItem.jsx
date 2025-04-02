import React from "react";
import { useState } from "react";

const MenuItem = (props) => {
  const { id, title, category, price, img, desc } = props;
  const [isShowing, setIsShowing] = useState(false);

  const toggleDescription = () => {
    setIsShowing((prev) => !prev);
  };

  return (
    <article className="menu-item" key={id}>
      <img className="img" src={img} alt={title} />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">${price}</span>
        </header>
        <p className="item-text">
          {isShowing ? desc : `${desc.substring(0, 50)}...`}
          <a className="menu_a" onClick={() => toggleDescription()}>
            {isShowing ? " Show Less" : " Show More"}
          </a>
        </p>
      </div>
    </article>
  );
};

export default MenuItem;
