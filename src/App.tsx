import React from 'react';
import Advantages from './components/Advantages';
import Directions from './components/Directions';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header isMobile={false} />
      <div className="content">
        <Advantages />
        <Directions title="Популярные направления из Москвы" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
