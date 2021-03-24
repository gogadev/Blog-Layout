import React from "react";

import lineImg from "../../assets/line.png";
import authorImg from "../../assets/author.jpg";

import "./home.style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-section">
        <div className="home-text">
          "Don't wait for the right opportunity, create it!"
        </div>
        <div className="home-img">
          <img className="author_img home-section" src={authorImg} alt="" />
        </div>
      </div>

      <div className="about">
        <h1 className="title">About Me</h1>
        <p className="text_1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          exercitationem impedit maxime eum. Iusto id odio temporibus fugiat
          esse praesentium quam eius nisi suscipit nulla adipisci ratione
          nostrum excepturi sed saepe, aliquid quidem porro veniam odit illo
          enim reprehenderit maxime.
        </p>
        <p className="text_2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          explicabo, enim ullam labore nesciunt itaque quidem praesentium nisi
          pariatur neque iure totam dicta reprehenderit doloremque similique
          obcaecati maxime perspiciatis dolorum expedita earum aliquam molestiae
          vitae eligendi velit. Obcaecati, numquam optio? Neque dolore maxime
          sequi tenetur tempore rerum nobis nemo vitae consequuntur, quis
          quaerat asperiores, autem expedita! Officia, incidunt officiis eius
          dolores odit explicabo, doloribus in animi delectus, rem fuga. Sequi
          suscipit officia quidem animi! Nulla veritatis quisquam consectetur.
          Iste accusamus voluptatibus sit exercitationem, enim quaerat magni.
          Laboriosam a aliquam, recusandae dolore commodi saepe rem provident
          reiciendis atque maxime cumque quae quaerat quisquam tenetur! Unde
          quasi, ipsam esse necessitatibus qui non dignissimos molestias
          nesciunt incidunt!
        </p>
        <p className="text_3">
          Fugit est, perspiciatis rerum et esse doloremque deleniti ipsum
          eveniet ipsam iure aliquam tempora, tenetur voluptas labore, enim vel
          corrupti deserunt? Sed voluptatem tenetur provident delectus?
          Distinctio, quod reiciendis? Blanditiis, ut corrupti? Corporis
          accusamus voluptate alias autem atque est ipsam nihil veritatis
          dolorem, velit in laudantium laboriosam commodi, modi magni molestiae!
          Nulla commodi quo facere eius repellat in accusantium earum soluta,
          corporis sapiente dolorem ad maxime enim quis autem id, quas quasi ea
          veritatis assumenda ullam ipsa doloribus voluptatem fugit. Sint,
          debitis laudantium pariatur nobis dolore esse quidem nulla possimus,
          laborum asperiores et amet porro! Nobis provident architecto et
          facilis minima deleniti eligendi. Quia, nostrum explicabo maiores
          consequatur ad totam doloribus voluptatibus blanditiis reprehenderit
          quo veritatis deserunt architecto quasi assumenda esse eaque maxime
          laudantium saepe commodi culpa dolore. Cupiditate amet quam alias
          doloremque.
        </p>
      </div>
      <div className="underline">
        <img src={lineImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
