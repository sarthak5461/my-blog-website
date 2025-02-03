import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import contentfulClient from "../contentfulClient.js";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await contentfulClient.getEntry(id);
        setBlog(response);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  const renderOptions = {
    renderNode: {
      [BLOCKS.TABLE]: (_, children) => <table>{children}</table>,
      [BLOCKS.TABLE_ROW]: (_, children) => <tr>{children}</tr>,
      [BLOCKS.TABLE_HEADER_CELL]: (_, children) => <th>{children}</th>,
      [BLOCKS.TABLE_CELL]: (_, children) => <td>{children}</td>,
    },
  };

  return (
    <div>
      {blog ? (
        <>
          <h2>{blog.fields.title}</h2>
          {blog.fields.image && (
            <img
              src={blog.fields.image.fields.file.url}
              alt={blog.fields.title}
            />
          )}
          <div>
            {documentToReactComponents(blog.fields.content, renderOptions)}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogDetails;
