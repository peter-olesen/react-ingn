import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { PageNotFound } from '../pages/PageNotFound';
import { PATHS } from './paths';

export const Router = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      [PATHS.home]: 'React + Vite Boilerplate',
      [PATHS.about]: 'About',
      [PATHS.contact]: 'Contact',
    };

    const currentTitle = pageTitles[location.pathname];

    if (currentTitle) {
      document.title = currentTitle;
    } else {
      document.title = '404 Page Not Found';
    }
  }, [location]);

  return (
    <Routes>
      <Route index path={PATHS.home} element={<Home />} />
      <Route path={PATHS.about} element={<About />} />
      <Route path={PATHS.contact} element={<Contact />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
