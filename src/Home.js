import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs]=useState([
        {title:'My new website', body:'Lorem ipsum dolor sit amet   elit. Quo, quam porro. Minus iusto quidem ullam?',author:'mario',id:1},
        {title:'Welcome to party', body:'Lorem ipsum dolor sit amet   elit. Quo, quam porro. Minus iusto quidem ullam?',author:'yoshi',id:2},
        {title:'Web dev top tips', body:'Lorem ipsum dolor sit amet   elit. Quo, quam porro. Minus iusto quidem ullam?',author:'mario',id:3}
    ]);
    const handelDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    return (
        <div className="home">
            <BlogList blogs={blogs} blogTitle="All Blogs" handelDelete={handelDelete}/>
        </div>
    );
}
 
export default Home;
