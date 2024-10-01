import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from '../pages/Home';
import { PageNotFound } from '../pages/PageNotFound';
import { PATHS } from './paths';
import { Layout } from '../layout/Layout';
import { Article } from '../pages/Article';

export const Router = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      [PATHS.home]: 'Intet nyt - Godt nyt',
      [PATHS.news]: 'About',
      [PATHS.contact]: 'Contact',
      [PATHS.article]: '',
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
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={"/article"} element={<Article />} />
        {/* <Route path={PATHS.about} element={<About />} />
        <Route path={PATHS.contact} element={<Contact />} /> */}

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
