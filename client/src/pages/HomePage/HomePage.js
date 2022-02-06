import React from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const HomePage = () => {
  return (
    <main className="main">
      {/* hero section */}
      <section className="hero">
        <div className="hero__text">
          <p>4Goods is a communication app for non-profits and donors</p>
        </div>
        <Link to="/organizations">
          <Button>Learn more</Button>
        </Link>
      </section>

      {/* about section */}
      <section className="about">
        <h2 className="about__title">about</h2>
        <div className="about__wrapper">
          <div className="about__image"></div>
          <div className="about__wrapper2">
            <h3 className="about__subtitle">Who we are</h3>
            <p className="about__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              voluptatum repudiandae nulla molestiae numquam sapiente, tempore
              quidem nostrum, illum fugit, harum impedit cupiditate quod
              excepturi delectus voluptates mollitia iste atque praesentium
              accusantium minus aperiam iure. Labore ipsum quam repudiandae
              dolor, repellat qui incidunt veritatis, eius nihil illo voluptas
              dolores animi.
            </p>
          </div>
        </div>
      </section>

      {/* explore section */}
      <section className="explore">
        <div className="explore__wrapper">
          <h3 className="explore__title">Explore Organizations</h3>
          <p className="explore__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            voluptatum repudiandae nulla molestiae numquam sapiente, tempore
            quidem nostrum, illum fugit, harum impedit cupiditate quod excepturi
            delectus voluptates mollitia iste atque praesentium accusantium
            minus aperiam iure. Labore ipsum quam repudiandae dolor, repellat
            qui incidunt veritatis, eius nihil illo voluptas dolores animi.
          </p>
        </div>
        <div className="explore__image"></div>
      </section>

      {/* donate section */}
      <section className="donate">
        <div className="donate__wrapper">
          <div className="donate__image"></div>
          <div className="donate__wrapper2">
            <h3 className="donate__subtitle">Donate goods</h3>
            <p className="donate__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              dolorem aspernatur nemo, error est doloremque ab eaque placeat
              voluptas! Tempore itaque porro assumenda fugiat vitae sapiente ad,
              laudantium officiis harum perferendis! Maiores maxime inventore
              molestias. Architecto, vitae eos. At molestiae esse commodi culpa
              provident quis officiis laudantium magnam quia dolores ipsum
              accusamus nobis corporis minus ipsam facilis repellat deserunt
              error quos quaerat{" "}
            </p>
          </div>
        </div>
      </section>

      {/* more content */}
      <section className="more-content">
        <div className="more-content__wrapper">
          <h3 className="more-content__title">Something Else</h3>
          <p className="more-content__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            voluptatum repudiandae nulla molestiae numquam sapiente, tempore
            quidem nostrum, illum fugit, harum impedit cupiditate quod excepturi
            delectus voluptates mollitia iste atque praesentium accusantium
            minus aperiam iure. Labore ipsum quam repudiandae dolor, repellat
            qui incidunt veritatis, eius nihil illo voluptas dolores animi.
          </p>
        </div>
        <div className="more-content__image"></div>
      </section>
    </main>
  );
};

export default HomePage;
