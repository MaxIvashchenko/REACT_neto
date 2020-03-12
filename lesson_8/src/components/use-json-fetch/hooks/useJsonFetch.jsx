import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export default function useJsonFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        console.log(response)
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setData(data);
        setError(null);
      } catch (e) {
        setError(e);
        setData(null);
      } finally {
        setLoading(false);
      }
   }
   fetchData()
  }, [url])

  return [data, loading, error];
}

useJsonFetch.propTypes = {
  url: PropTypes.string
}

