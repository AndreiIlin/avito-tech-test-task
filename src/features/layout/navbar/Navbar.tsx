import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../../ui-library/header';
import { Title } from '../../../ui-library/title';
import { Wrapper } from '../../../ui-library/wrapper';

export const Navbar: FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <Header>
      <Wrapper>
        <Title onClick={handleNavigate}>Hacker News</Title>
      </Wrapper>
    </Header>
  );
};
