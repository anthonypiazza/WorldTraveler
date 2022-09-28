import React from 'react';
import 'src/styles/App.scss';
import { Card } from 'src/components';
import { atlantaCard, londonCard, singaporeCard } from 'src/config'

function App() {
  return (
    <main className="app">
      <header className="header-text">World Traveler</header>
      <section className="container">
        <Card {...londonCard} />
      </section>
      <section className="container container--card-half-width">
        <Card {...atlantaCard} />
        <Card {...singaporeCard} />
      </section>
    </main>
  );
}

export default App;
