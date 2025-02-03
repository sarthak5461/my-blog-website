import React from "react";
import { Link } from "react-router-dom";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import "../Styles/FeatureBlog.css";

const FeatureBlogs = ({ blogs }) => {
  return (
    <div className="feature_blog_posts">
      <h2>Feature Blogs</h2>
      <div className="blog-list">
        {blogs.length > 0 ? (
          blogs.map((blog) => {
            // Extract plain text summary (first 150 chars)
            const summary = documentToPlainTextString(
              blog.fields.content
            ).slice(0, 150);

            return (
              <div key={blog.sys.id} className="blog-item">
                {blog.fields.image && (
                  <img className="feat_img"
                    src={blog.fields.image.fields.file.url}
                    alt={blog.fields.title}
                  />
                )}
                <h3>{blog.fields.title}</h3>
                <div className="content_sec">
                  <p>{summary}...</p>
                </div>
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
  );
};

export default FeatureBlogs;
