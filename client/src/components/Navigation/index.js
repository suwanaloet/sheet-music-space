/* import React from 'react';

function Nav(props) {
  const navElements = ['Landing', 'Home', 'Profile', 'Login', 'Signup'];


  return (
    <nav>
      <ul className="nav">
        {navElements.map((ele) => (
          <li className="" key={ele}>
            <a href={'#' + ele}
            onClick={() => props.handlePageChange(ele)}
            className={
              props.currentPage === ele ? 'nav-link active' : 'nav-link'
              }
            >
              {ele}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );


}

export default Nav
*/
//NOT CURRENTLY IN USE