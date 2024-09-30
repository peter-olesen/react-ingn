import { useLocation } from 'react-router-dom';

export const PageNotFound = () => {
  const location = useLocation();

  return (
    <>
      <h1>404</h1>
      <h2>That page was not found: <br /> {location.pathname}</h2>
    </>
  );
};
