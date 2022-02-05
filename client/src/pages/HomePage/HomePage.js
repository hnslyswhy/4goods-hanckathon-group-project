import React from "react";
import './HomePage.scss';
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero__image"></div>
        <Link to='/organizations'>
          <p className="hero__text">Learn more</p>   
        </Link>
      </section>

      <section className="about"> 
        <h3 className="about__title">about</h3>
        <div className="about__wrapper">
         <div className="about__image"></div>
          <div className="about__wrapper2">
            <h4 className="about__subtitle">Who we are</h4>
            <p className='about__text' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorem aspernatur nemo, error est doloremque ab eaque placeat voluptas! Tempore itaque porro assumenda fugiat vitae sapiente ad, laudantium officiis harum perferendis! Maiores maxime inventore molestias. Architecto, vitae eos. At molestiae esse commodi culpa provident quis officiis laudantium magnam quia dolores ipsum accusamus nobis corporis minus ipsam facilis repellat deserunt error quos quaerat eligendi distinctio, vero possimus repudiandae. Ab, ut quasi aut repudiandae eligendi modi. Cum reiciendis nisi repudiandae voluptatibus quasi animi possimus. Illum sit necessitatibus maxime doloremque reprehenderit suscipit perspiciatis placeat quibusdam accusantium, magnam eum minima iure nemo? Repellat quaerat nisi eos consectetur possimus qui, sunt tempora! Distinctio repudiandae debitis nesciunt sint. Provident quod amet asperiores tempora assumenda saepe possimus!</p>
          </div>
        </div>
      </section>

      <section className="explore">
       <div className="explore__wrapper">
         <h4 className="explore__title">Explore Organizations</h4>
         <p className="explore__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptatum repudiandae nulla molestiae numquam sapiente, tempore quidem nostrum, illum fugit, harum impedit cupiditate quod excepturi delectus voluptates mollitia iste atque praesentium accusantium minus aperiam iure. Labore ipsum quam repudiandae dolor, repellat qui incidunt veritatis, eius nihil illo voluptas dolores animi.</p>
       </div>
       <div className="explore__image"></div>
      </section>

    </main>
  );
};

export default HomePage;
