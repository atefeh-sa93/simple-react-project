import { useState, useEffect } from "react";

const useFetch=  (url)=> {
  const [data, setBlogs] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    setTimeout(()=> {
      fetch(url)
      .then(res=> {
        if (!res.ok) {
          throw Error('could not fetch now!')
        }
        return res.json()
      })
      .then(data => {
        setError(null)
        setBlogs(data)
        setIsLoading(false)
      })
      .catch (err => {
        setIsLoading(false)
        setError(err.message)
      })
    }, 1000)
  }, [url])
  return {data, isLoading, error}
}

export default useFetch;