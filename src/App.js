import React from 'react';
import Banner from '~/components/Banner';
import strings from '~/config/strings';
import './assets/css/app.scss';
import './assets/css/fix.scss';

function App() {
  const bannerProps = {
    title: strings.banner.title,
    description: strings.banner.description
  }

  return (
    <div className="home">
      <Banner {...bannerProps} />
    </div>
  );
}

export default App;
