import React, { useEffect, useState } from "react";

import { useParams } from "react-router";

import sanityClient from "../../client/client";

import imageUrlBuilder from "@sanity/image-url";

import BlockContent from "@sanity/block-content-to-react";

import Spinner from "../../components/spinner/Spinner";

import "./single-post.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
        title, 
        slug, 
        mainImage{
          asset->{
            _id,
            url
          }
        },
        body,
        "name": author->name,
        "authorImage": author->image
      }`,
        { slug }
      )
      .then((data) => setSinglePost(data[0]))
      .catch((err) => console.log(err));
  }, [slug]);

  if (!singlePost) return <Spinner />;

  return (
    <div className="singlePost">
      <div className="singlePost-body">
        <img
          className="author-img"
          src={urlFor(singlePost.authorImage).width(100).url()}
          alt=""
        />
        <h2 className="singlePost-title">{singlePost.title}</h2>
      </div>
      <div className="singlePost-img">
        <img src={urlFor(singlePost.mainImage).width(200).url()} alt="" />
      </div>
      <div className="content">
        <BlockContent
          blocks={singlePost.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </div>
    </div>
  );
};

export default SinglePost;
