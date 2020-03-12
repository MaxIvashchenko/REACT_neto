import React from 'react';
import PropTypes from 'prop-types';
import searchLinks from './data/searchLinks';
import List from './List';
import SearchForm from './SearchForm';

/* Блок поиска - список ссылок, форма поиска, подсказка */
function Search(props) {
  return (
    <div>
      <List>
          {searchLinks.map((o, index) => <li key={index} className="inline-item"><a href={o.link}>{o.title}</a></li>)}
      </List>
      <SearchForm />
      <span>Найдётся всё. Например, самая большая планета солнечной системы</span>
    </div>
  )
}

Search.propTypes = {
  searchLinks: PropTypes.arrayOf(PropTypes.object)
}

export default Search

