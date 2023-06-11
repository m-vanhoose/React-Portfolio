import React, { useState } from 'react';
import Nav from './nav';
import Contact from './pages/contact';
import AboutMe from './pages/aboutMe';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

export default function Container() {
    const [currentPage, setPage] = useState('Home');
    const renderPage = () => {
      if (currentPage === 'AboutMe') {
        return <AboutMe />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Contact />;
    };
  
    const pageSwap = (page) => setPage(page);
  
    return (
      <div>
        <Nav currentPage={currentPage} pageChange={pageSwap} />
        {renderPage()}
      </div>
    );
  }
  