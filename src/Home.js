import {useState} from 'react';

const Home = () => {
    const [blogs, seBlogs]=useState([
        {title:'My new website', body:'Lorem ipsum dolor sit amet   elit. Quo, quam porro. Minus iusto quidem ullam?',author:'mario',id:1},
        {title:'Welcome to party', body:'Lorem ipsum dolor sit amet   elit. Quo, quam porro. Minus iusto quidem ullam?',author:'yoshi',id:2},
        {title:'Web dev top tips', body:'Lorem ipsum dolor sit amet   elit. Quo, quam porro. Minus iusto quidem ullam?',author:'mario',id:3}
    ])
    return (
        <div className="home">
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h4>{blog.body}</h4>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;
