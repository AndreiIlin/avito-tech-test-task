import React, { FC } from 'react';
import { AiOutlineComment, AiOutlineLike, IoPersonOutline } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';
import { FlexRow } from '../../../../ui-library/flexRow';
import { NewsItemContainer } from '../../../../ui-library/newsItemContainer';
import { NewsItemContent } from '../../../../ui-library/newsItemContent';
import { NewsItemDescription } from '../../../../ui-library/newsItemDescription';
import { NewsItemDescriptionContainer } from '../../../../ui-library/newsItemDescriptionContainer';
import { NewsItemTitle } from '../../../../ui-library/newsItemTitle';
import { OrderContainer } from '../../../../ui-library/orderContainer';
import { OrderText } from '../../../../ui-library/orderText';
import { handleDate } from '../../../../utils/dateHandler';
import { useGetNewsByIdQuery } from '../../news.services';

interface NewsItemProps {
  newsId: number;
  order: number;
}

export const NewsItem: FC<NewsItemProps> = ({ newsId, order }) => {
  const { data } = useGetNewsByIdQuery(newsId);

  const navigate = useNavigate();

  const handleNavigateToNews = () => {
    if (data) {
      navigate(`/${data.id}`);
    }
  };

  return (
    <>
      {data && (
        <NewsItemContainer onClick={handleNavigateToNews}>
          <OrderContainer>
            <OrderText>{order}</OrderText>
          </OrderContainer>
          <NewsItemContent>
            <NewsItemTitle>{data.title}</NewsItemTitle>
            <FlexRow>
              <NewsItemDescriptionContainer>
                <AiOutlineLike style={{ marginRight: '5px' }} />
                <NewsItemDescription>{data.score}</NewsItemDescription>
              </NewsItemDescriptionContainer>
              <NewsItemDescriptionContainer>
                <IoPersonOutline style={{ marginRight: '5px' }} />
                <NewsItemDescription>{data.by}</NewsItemDescription>
              </NewsItemDescriptionContainer>
              <NewsItemDescriptionContainer>
                <AiOutlineComment style={{ marginRight: '5px' }} />
                <NewsItemDescription>{data.descendants}</NewsItemDescription>
              </NewsItemDescriptionContainer>
              <NewsItemDescription>{handleDate(data.time)}</NewsItemDescription>
            </FlexRow>
          </NewsItemContent>
        </NewsItemContainer>
      )}
    </>
  );
};
