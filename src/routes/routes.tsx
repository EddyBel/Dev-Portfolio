import { Routes as Switch, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { PATHS } from '../web.config';
import { Index } from '../views/home';
import { Works } from '../views/works';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export function Views() {
  return (
    <>
      <Switch>
        <Route path={PATHS.Home} element={<Index />} />
        <Route path={PATHS.Works} element={<Works />} />
        <Route path={PATHS.Repositories} element={<Index />} />
        <Route path={PATHS.Notes} element={<Index />} />
        <Route path={PATHS.Contact} element={<Index />} />
      </Switch>
      <ScrollToTop />
    </>
  );
}
