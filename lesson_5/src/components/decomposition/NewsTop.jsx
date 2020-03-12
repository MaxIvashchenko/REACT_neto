import React from 'react'
import PropTypes from 'prop-types';
import List from './List';
import DateNow from './DateNow';
import ListItem from './ListItem';


/* Выводит список со ссылками на разделы новостей */
function NewsTop(props) {
  return (
    <div className="news-top">
      <List>
        {props.newsHeaders.map((o, index) => <ListItem key={index} className="inline-item"><a href={o.link}>{o.title}</a></ListItem>)}
      </List>
      <DateNow />
    </div>
  )
}

NewsTop.propTypes = {
  newsHeaders: PropTypes.arrayOf(PropTypes.object)
}

export default NewsTop

