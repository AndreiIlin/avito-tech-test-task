import React, { FC } from 'react';
import { AiOutlineComment, IoPersonOutline } from 'react-icons/all';
import { useNavigate, useParams } from 'react-router-dom';
import { CommentsList } from '../../features/comments/components/commentsList';
import { useGetNewsByIdQuery } from '../../features/news/news.services';
import { ButtonsSection } from '../../ui-library/buttonsSection';
import { ErrorMessage } from '../../ui-library/errorMessage';
import { FlexRow } from '../../ui-library/flexRow';
import { NewsItemDescription } from '../../ui-library/newsItemDescription';
import { NewsItemTitle } from '../../ui-library/newsItemTitle';
import { NewsLink } from '../../ui-library/newsLink';
import { RefreshButton } from '../../ui-library/refreshButton';
import { ReturnButton } from '../../ui-library/returnButton';
import { LoadingSpinner } from '../../ui-library/spinner/Spinner';
import { Wrapper } from '../../ui-library/wrapper';
import { handleDate } from '../../utils/dateHandler';

export const NewsScreen: FC = () => {
  const { newId } = useParams();

  const navigate = useNavigate();

  const handleReturnButton = () => {
    navigate('/');
  };

  const { data, isLoading, isError, refetch } = useGetNewsByIdQuery(Number(newId));

  return (
    <Wrapper>
      <ButtonsSection>
        <RefreshButton onClick={refetch}>Refresh</RefreshButton>
        <ReturnButton onClick={handleReturnButton}>Return to main page</ReturnButton>
      </ButtonsSection>
      {isLoading && <LoadingSpinner />}
      {isError && <ErrorMessage>Oops something goes wrong! Please refresh the page</ErrorMessage>}
      {data && (
        <>
          <NewsItemTitle>{data.title}</NewsItemTitle>
          <FlexRow>
            <IoPersonOutline style={{ marginRight: '5px' }} />
            <NewsItemDescription>{data.by}</NewsItemDescription>
            <AiOutlineComment style={{ marginRight: '5px' }} />
            <NewsItemDescription>{data.descendants}</NewsItemDescription>
            <NewsItemDescription>{handleDate(data.time)}</NewsItemDescription>
          </FlexRow>
          {data.url && (
            <NewsLink href={data.url} target={'_blank'}>
              Link on source
            </NewsLink>
          )}
          <CommentsList news={data} />
        </>
      )}
    </Wrapper>
  );
};
