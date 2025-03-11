import { FC } from 'react';
import { DateSeparator, NewsListContainer } from './styles';
import NewsItem from '../NewsItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const NewsList: FC = () => {
  const groupedNews = useSelector((state: RootState) => state.news.groupedNews);
  
  return (
    <NewsListContainer>
      {Object.entries(groupedNews).map(([date, newsItems]) => (
        <div key={date}>
          <DateSeparator>News for {date}</DateSeparator>
          {newsItems.map((item, index) => (
            <NewsItem key={index} item={item} />
          ))}
        </div>
      ))}
    </NewsListContainer>
  );
};

export default NewsList;