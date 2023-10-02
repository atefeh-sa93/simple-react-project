import BlogsList from './BlogsList'
import useFetch from './useFetch'

const Home = () => {
  const {data : blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog)=> blog.id !== id)
    // setBlogs(newBlogs)
  }

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading....</div>}
      {blogs && <BlogsList blogs={blogs} title='All blogs!' handleDelete={handleDelete}/>}
      {/* <BlogsList blogs={blogs.filter((blog) => blog.author === 'yoshi')} title='Yoshi blogs!'/> */}
    </div>
  );
}
 
export default Home;