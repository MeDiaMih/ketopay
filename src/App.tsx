import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { loadMoreNews, resetNews, setNewsStart } from './store/newsSlice';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Loader from './components/Loader';
import Menu from './components/Menu';
import Footer from './components/Footer';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

const AppContainer = styled.div`
    position: relative;
    max-width: 360px;
    margin: 0 auto;
    overflow: hidden;
`;

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { displayedNews, loading, error, hasMore } = useSelector((state: RootState) => state.news);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const currentDate = new Date();
    const year = String(currentDate.getFullYear());
    const month = String(currentDate.getMonth() + 1);
    dispatch(resetNews());
    dispatch(setNewsStart({ year, month }));
  }, [dispatch]);
  
  const fetchMoreData = () => {
    if (hasMore && !loading) {
      dispatch(loadMoreNews());
    }
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <AppContainer>
      <Header toggleMenu={toggleMenu} />
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
      <InfiniteScroll
        dataLength={displayedNews.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loader />}
      >
        <NewsList />
      </InfiniteScroll>
      <Footer />
    </AppContainer>
  );
};

export default App;