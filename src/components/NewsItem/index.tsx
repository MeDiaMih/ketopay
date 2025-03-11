import { FC } from 'react';
import { NewsContentContainer, NewsDate, NewsDescription, NewsImage, NewsItemContainer, NewsTitle } from './styles';
import { NewsItemProps } from '../../types';
import { formatDate } from '../../utils/formatDate';


const NewsItem: FC<NewsItemProps> = ({ item }) => {
  
  return (
    <NewsItemContainer onClick={() => window.open(item.web_url, '_blank')}>
      {item.multimedia[0] && (
        <NewsImage src={`https://www.nytimes.com/${item.multimedia[0].url}`} alt={item.abstract} />
      )}
      <NewsContentContainer>
        <NewsTitle>{item.source}</NewsTitle>
        <NewsDescription>{item.abstract}</NewsDescription>
        <NewsDate>
          {formatDate(item.pub_date)}
        </NewsDate>
      </NewsContentContainer>
    
    </NewsItemContainer>
  );
};

export default NewsItem;