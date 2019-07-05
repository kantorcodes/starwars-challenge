import React from 'react';
import Banner from '~/components/Banner';
import Navbar from '~/components/Navbar';
import ListView from '~/components/ListView';
import strings from '~/config/strings';
import './assets/css/app.scss';
import './assets/css/fix.scss';

const App = _ => {
  const bannerProps = {
    title: strings.banner.title,
    description: strings.banner.description
  }

  return (
    <div className="home">
      <Navbar title="Star Wars Api" />
      <Banner {...bannerProps} />
      <ListView />
    </div>
  );
}

export default App;
