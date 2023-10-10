import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('mario')
  const navigate = useNavigate()

  const handleSubmit = (e)=> {
    e.preventDefault();
    const data = {title, body, author}
    
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "content-type" : "application/json" },
      body: JSON.stringify(data)
    }).then(() =>{
      navigate('/')
    })
  }

  return ( 
    <div className="create">
      <h1>Add a new blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input 
          type="text" 
          required
          vaalue={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea 
          required
          value={body}
          onChange={(e)=>setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        <button>Add blog</button>
      </form>
    </div>
  );
}
 
export default Create;