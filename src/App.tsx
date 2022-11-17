import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainScreen } from './screens/mainScreen';
import { NewsScreen } from './screens/newsScreen';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/:newId" element={<NewsScreen />} />
    </Routes>
  );
};
