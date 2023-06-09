import { Routes as Switch, Route } from 'react-router-dom';
import { Index } from '../views/home';

export function Views() {
  return (
    <Switch>
      <Route path="/" element={<Index />} />
    </Switch>
  );
}
