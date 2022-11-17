import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainScreen } from './screens/mainScreen';
import { NewsScreen } from './screens/newsScreen';
import { GlobalStyle } from './ui-library/globalStyle';

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/:newId" element={<NewsScreen />} />
      </Routes>
    </>
  );
};
