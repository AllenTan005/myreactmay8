import React from "react";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">homepage</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
