import React from 'react';
import PropTypes from 'prop-types';
import news from './data/news';
import NewsTop from './NewsTop';
import newsHeaders from './data/newsHeaders';
import List from './List';
import ListItem from './ListItem';
import MainNew  from './MainNew';

const currencies = ['USD MOEX 65,29 +0,24', 'EUR MOEX 73,14 +0,41', 'НЕФТЬ58,32+1,02%+1,02%'],
      mainNew = {
        img: 'https://pp.userapi.com/c851232/v851232547/69cda/kN8-VQdnye0.jpg?ava=1',
        alt: 'Яндекс.Такси',
        title: 'Премиум и Ультима',
        text: 'Заказ премиальных машин в сервисе Яндекс.Такси',
        link: "#"
      }

/* Верхний блок страницы - выводит новости, время и курсы валют */
export default function News(props) {
  const iconStyle = {
    width: "16px",
    margin: "10px 10px 0 0",
  }

  return (
    <div className="news-wrapper">
      <div style={{width: "70%"}}>
        <NewsTop newsHeaders={newsHeaders}/>
        <List>
           {news.map((o, index) =>
            <ListItem key={index} link={o.link} icon={o.icon}>
              <img src={o.icon} alt={o.alt} style={iconStyle}/>
              <a href={o.link}>{o.title}</a>
            </ListItem>)}
        </List>
        <List>
           {currencies.map((o, index) =>
            <ListItem key={index} className="inline-item">{o}</ListItem>)}
        </List>
      </div>
      <MainNew {...mainNew} />
    </div>
  )
}

News.propTypes = {
  newsHeaders: PropTypes.arrayOf(PropTypes.object)
}


