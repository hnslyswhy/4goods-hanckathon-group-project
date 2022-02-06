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

      <h2 className="about__title">about</h2>

      {/* about section */}
      <section className="about section">
        <div className="about__wrapper">
          <div className="about__image"></div>
          <div className="about__wrapper2">
            <h2 className="about__subtitle">Who We Are</h2>
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
      <section className="explore section">
        <div className="explore__wrapper">
          <div className="explore__wrapper2">
            <h2 className="explore__title">Explore Organizations</h2>
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
        <div className="explore__image"></div>
      </section>

      {/* donate section */}
      <section className="donate section">
        <div className="donate__wrapper">
          <div className="donate__image"></div>
          <div className="donate__wrapper2">
            <h2 className="donate__subtitle">Donate Goods</h2>
            <p className="about__text">
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
      <section className="more-content section">
        <div className="more-content__wrapper">
          <div className="more-content__wrapper2">
            <h2 className="more-content__title">We're In It Together</h2>
            <p className="about__text">
              "You have to be humble in what we're doing, but you have to be
              bold...We will get out there and try something. If it doesn't
              work, we will try something else. And we will keep trying until we
              find something that works." - Melinda Gates, Co-Chair & Trustee,
              Bill & Melinda Gates Foundation <br />
              Join us and make an impact!
            </p>
          </div>
        </div>
        <div className="more-content__image"></div>
      </section>
    </main>
  );
};

export default HomePage;
