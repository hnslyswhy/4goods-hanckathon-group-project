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
          <p>
            Fill & Feel the <span className="hero__strong">love</span>.{" "}
          </p>
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
            <h2 className="about__subtitle">Who we are</h2>
            <p className="about__text">
              4Goods is a hub bringing our community together. <br />
              Everyone is rich, having something to give out; Yet Everyone is
              poor, needing others' help at a certain time. <br />
              Just by taking a minute to share your surplus through 4Goods, you
              may help someone on the other side of the phone to go through a
              hard time; <br />
              Just by taking a minute to browser through 4Goods, you may find
              some strength, some love, and some goods needed to march on;{" "}
              <br />
              When you open the map, you will see all the goodness, the warmness
              around you. <br />
              Join 4Goods. Let's build our community{" "}
              <span className="about__strong">together</span>.
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
            <h2 className="donate__subtitle">Donate goods</h2>
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
            <h2 className="more-content__title">Something Else</h2>
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
        <div className="more-content__image"></div>
      </section>
    </main>
  );
};

export default HomePage;
