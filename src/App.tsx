import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Directions from './components/Directions';

function App() {
  return (
    <div className="App">
      <Header isMobile={false} />
      <div className="content">
        <Directions title="Популярные направления из Москвы" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
