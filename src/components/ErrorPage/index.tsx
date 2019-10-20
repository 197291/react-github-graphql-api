import * as React from 'react';

import './styles.scss';

const ErrorPage: React.FC = () => (
  <div className="ErrorPage">
    <h1>Ooops...</h1>
    <p>Something went wrong.</p>
    <p>Please, try again later.</p>
  </div>
);

export default ErrorPage;
