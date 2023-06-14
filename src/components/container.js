import React, { useState } from 'react';
import Nav from './nav';
import Footer from './footer'
import Contact from './pages/contact';
import AboutMe from './pages/aboutMe';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

export default function Container() {
    const [currentPage, setPage] = useState('Home');
    const renderPage = () => {
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <AboutMe />;
    };
  
    const pageSwap = (page) => setPage(page);
  
    return (
      <div>
        <Nav currentPage={currentPage} pageChange={pageSwap} />
        {renderPage()}
        <Footer />
      </div>
    );
  }
  