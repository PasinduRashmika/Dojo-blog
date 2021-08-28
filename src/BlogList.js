const BlogList = ({blogs,title,handelDelete}) => {
    //  const blogs = props.blogs;
    //  const blogTitle=props.blogTitle;

    return (
        <div className="blog-list">
            <h2 className='blog-title'>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <button onClick={()=> handelDelete(blog.id)}>Delete Blog</button>
                    <h2>{blog.title}</h2>
                    <h4>{blog.body}</h4>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;