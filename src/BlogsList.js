const BlogsList = ({blogs, title, handleDelete}) => {
  
  return (
    <div className="blogs-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
      <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <button onClick={()=> handleDelete(blog.id)}>Delete</button>
      </div>
      ))}
    </div>
  );
}
 
export default BlogsList;