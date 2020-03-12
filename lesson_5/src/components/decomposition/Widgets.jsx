import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import widgets from './data/widgets';
import ListItem from './ListItem';

/* Отображает список с виджетами внизу страницы */
export default function Widgets(props) {
  return (
    <List className="widgets">
       {widgets.map((o, index) =>
        <ListItem key={index} className="widget">
          <h3>{o.title}</h3>
          <List>
            {o.text.map((string, index) => 
              <ListItem key={index}>
                {string}
              </ListItem>
            )}
          </List>
        </ListItem>)}
    </List>
  )
}

Widgets.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.object)
}

