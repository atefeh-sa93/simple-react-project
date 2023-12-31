import { Link } from "react-router-dom";

const BlogsList = ({blogs, title}) => {
  
  return (
    <div className="blogs-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
      <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </Link>
      </div>
      ))}
    </div>
  );
}
 
export default BlogsList;