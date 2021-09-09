import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion'

const Home = () => {
    const {data:blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
        <motion.h2 animate={{ fontSize: 50 }}>Welcome to Our Flatform</motion.h2>
        {error && (<div>{error}</div>)}
      {isPending && <div><h3>Loading....</h3></div>}
      {blogs && <BlogList blogs={blogs} blogTitle="All Blogs" />}
    </div>
  );
};

export default Home;
