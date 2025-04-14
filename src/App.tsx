import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { FeaturedResearch } from './components/home/FeaturedResearch';
import { Research } from './pages/Research';
import { Team } from './pages/Team';
import { Alumni } from './pages/Alumni';
import { Publications } from './pages/Publications';
import { Social } from './pages/Social';
import { Contact } from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'research':
        return <Research />;
      case 'team':
        return <Team />;
      case 'alumni':
        return <Alumni />;
      case 'publications':
        return <Publications />;
      case 'social':
        return <Social />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <FeaturedResearch />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;