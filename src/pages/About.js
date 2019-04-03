import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

import '../assets/styles/About.scss';

export default () => (
  <Fragment>
    <h1 className="blue">About Page</h1>
    <Link to="/">Go to home page</Link>
  </Fragment>
);