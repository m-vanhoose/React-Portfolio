import React from 'react';

function Nav({ currentPage, pageChange }) {
  return (
    <div class="header">
      <ul class="nav row align-items-start">
        <div class="col-5 name">Brett Vanhoose</div>
        <li class="col nav-item navButton">
          <a
           href="#aboutMe"
           onClick={() => pageChange('AboutMe')}
           className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
         >
            <p>About Me</p>
          </a>
        </li>
        <li class="col nav-item navButton">
          <a
            href="#portfolio"
           onClick={() => pageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li class="col nav-item navButton">
         <a
            href="#resume"
           onClick={() => pageChange('Resume')}
           className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
           Resume
          </a>
        </li>
        <li class="col nav-item navButton">
          <a
            href="#contact"
            onClick={() => pageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
           Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
