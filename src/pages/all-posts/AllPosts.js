import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import sanityClient from "../../client/client";

import allPostsImg from "../../assets/feather.png";

import "./all-posts.style.css";

const AllPosts = () => {
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
                title, 
                slug, 
                mainImage{
                    asset->{
                        _id, 
                        url
                    }
                }
            }`
      )
      .then((data) => setAllPosts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="all-posts">
      <img className="main-img" src={allPostsImg} alt="" />
      <h2 className="all-posts-title">
        <span className="_title">W</span>elcome to my blog posts...
      </h2>
      <div className="all-posts-body">
        {allPosts &&
          allPosts.map((post, index) => (
            <Link to={"/" + post.slug.current} key={post.slug.current}>
              <span key={index}>
                <img src={post.mainImage.asset.url} alt="" />
              </span>
              <div className="post-title">
                <h2>{post.title}</h2>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default AllPosts;
