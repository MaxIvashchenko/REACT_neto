import React from 'react'
import PropTypes from 'prop-types'
import useJsonFetch from './hooks/useJsonFetch'

export default function UseHook({url}) {
  const [data, loading, error] = useJsonFetch(url);

  return (
    <div>
      {data && <p>{data.status}</p>}
      {loading ? <img src="https://media1.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif" alt='load'/> : data && <p>{data.status}</p>}
      {error && <span>Error!</span>}
    </div>
  )
}

UseHook.propTypes = {
  url: PropTypes.string.isRequired
}
