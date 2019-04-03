import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import '../assets/styles/Home.scss';

export default () => (
  <Fragment>
    <h1 className="red">Home Page</h1>
    <Link to="/about">Go to about page</Link>
  </Fragment>
);