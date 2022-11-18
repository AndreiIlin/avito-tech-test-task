import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainScreen } from './screens/mainScreen';
import { NewsScreen } from './screens/newsScreen';
import { GlobalStyle } from './ui-library/globalStyle';
import { Navbar } from './features/layout/navbar';

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/:newId" element={<NewsScreen />} />
      </Routes>
    </>
  );
};
