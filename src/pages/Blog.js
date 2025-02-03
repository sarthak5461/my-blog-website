import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import contentfulClient from "../contentfulClient.js";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import HeroBanner from "../components/HeroBanner.js";
import BlogImage from "../assets/case-studies-3.jpg";
import "../Styles/Blog.css";



const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
        const response = await contentfulClient.getEntries({
          content_type: "test", // Replace with your content type ID
          limit: 5, // Fetch 10 blogs
        });
        setBlogs(response.items);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-listing-section">
      <HeroBanner title="Blog" HeroImage={BlogImage} />

      <div className="page-center">
        <div className="blog-list">
          {blogs.length > 0 ? (
            blogs.map((blog) => {
              const summary = documentToPlainTextString(
                blog.fields.content
              ).slice(0, 150);
              return (
                <div key={blog.sys.id} className="blog-item">
                  <h3>{blog.fields.title}</h3>
                  {blog.fields.image && (
                    <img
                      src={blog.fields.image.fields.file.url}
                      alt={blog.fields.title}
                    />
                  )}
                  <p>{summary}...</p>
                  <Link className="read_more_btn" to={`/blog/${blog.sys.id}`}>
                    Read More
                  </Link>
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
