import HomeImage from "../assets/hero_banner.jpg";
import HeroBanner from "../components/HeroBanner.js";
import Testimonials from "../components/Testimonials.js";
import contentfulClient from "../contentfulClient.js";
import FeaturedBlogs from "../components/FeaturedBlogs.js";
import { useState, useEffect } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await contentfulClient.getEntries({
        content_type: "test",
        limit: 5,
      });
      setBlogs(response.items);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <HeroBanner title="Home" HeroImage={HomeImage} />
      <div className="page-center">
        <FeaturedBlogs blogs={blogs} />
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
