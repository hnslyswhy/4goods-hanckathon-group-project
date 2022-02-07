import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DonationItemsPage.scss";

const DonationItemsPage = () => {
  const [allGoods, setAllGoods] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/donation").then((res) => {
      console.log(res);
      setAllGoods(res.data);
    });
  }, []);

  return (
    <main className="allGoods">
      <h1 className="allGoods__heading">All The Goods </h1>
      <section className="allGoods__goods">
        {allGoods &&
          allGoods.length &&
          allGoods.map((item) => {
            return (
              <article key={item._id} className="allGoods__card">
                <div className="allGoods__card-top">
                  <div className="allGoods__img-container">
                    <img
                      src={item.image}
                      alt="donation item"
                      className="allGoods__img"
                    />
                  </div>
                  <div className="allGoods__info">
                    <p className="allGoods__name">{item.itemName}</p>
                    <p className="allGoods__date">
                      Posted:
                      {new Date(item.date).toLocaleDateString()}
                    </p>

                    <p className="allGoods__status">
                      Status:
                      {item.status === "In Need" ? (
                        <span className="allGoods__in-need">In Need</span>
                      ) : (
                        <span className="allGoods__surplus">Surplus</span>
                      )}
                    </p>
                    <button className="allGoods__button">Contact</button>
                  </div>
                </div>
                <p className="allGoods__description">{item.information}</p>
              </article>
            );
          })}
      </section>
      <section className="allGoods__section">
        <button className="allGoods__donate">Donate</button>
      </section>
    </main>
  );
};

export default DonationItemsPage;
