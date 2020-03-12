import React from 'react';
import News from './News';
import Search from './Search';
import Banner from './Banner';
import Widgets from './Widgets';

/* Страница с собранными на ней блоками */
export default function Page(props) {
  return (
    <React.Fragment>
      <News />
      <Search />
      <Banner src="https://awaps.yandex.net/0/c1/tVK-Oiz0m0j0AMEash5AnUQrsXmyY2RGrTOumdned1J1vOsGH78vc8iVU+XxW_tABC5dA0rpM5BnJ26kaf+6FF4vlMjJgWpAFxoRPSSxwJk7IpZcS6+f-1peMkE_tmI6hW5TmSokfqcnNJjTlJ4YRB7oTir8J45Te+w35s6Q5cLnEL7YE7-B+m4sW_tXMRhC+Dd1umAOr3i2tK85GrQ5EykeKmcqO4ou65E8ZUub6-7beqeGhSpCP0j_tZTFNy5ycYzgRCQkl6s8-wFcUev184CavpWkz9gpsV-CfrhQwqXzx3aWTAPet_tLMfqFG6imEVN5mqT4jaMzdxOY6MrL5rKvhMaQQ8J5VcnvkeDkDuv+65AUGvI_KlrGlPH8XkXQGgQAA_A_.png" alt="Реклама" />
      <Widgets />
    </React.Fragment>
  )
}


