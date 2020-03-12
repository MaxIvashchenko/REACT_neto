import React, { useEffect, useState } from 'react';

const loadingImg = <img src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt='loading' />;

export default function Details({ info }) {
  const [detailed, setDetailed] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!info) return;
    setLoading(true);
    try {
      fetch(process.env.REACT_APP_DETAILS_URL + info.id + '.json')
        .then(res => res.json())
        .then(data => {
          setDetailed(data)
          setLoading(false);
        })
    } catch (e) {
      console.log(e);
    }
  }, [info]);
  
  return (
    <React.Fragment>
      {loading && loadingImg}

      {detailed &&
        <ul>
          <li><img src={detailed.avatar} alt='avatar' /></li>
          <li className="listItem name">{detailed.name}</li>
          <li className="listItem">City: {detailed.details.city}</li>
          <li className="listItem">Company: {detailed.details.company}</li>
          <li className="listItem">Position: {detailed.details.position}</li>
        </ul>
      }
    </React.Fragment>

  )
}