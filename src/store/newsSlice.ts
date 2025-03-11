import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsItem, NewsState } from '../types';

const initialState: NewsState = {
  allNews: [],
  displayedNews: [],
  groupedNews: {},
  loading: false,
  error: null,
  hasMore: true,
};

const sortNewsByDate = (news: NewsItem[]) => {
  return [...news].sort((a, b) => {
    return new Date(b.pub_date).getTime() - new Date(a.pub_date).getTime();
  });
};

const groupNewsByDate = (news: NewsItem[]) => {
  return news.reduce((acc, item) => {
    const date = new Date(item.pub_date).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {} as Record<string, NewsItem[]>);
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNewsStart(state, _action: PayloadAction<{ year: string; month: string }>) {
      state.loading = true;
      state.error = null;
    },
    setNewsSuccess(state, action: PayloadAction<NewsItem[]>) {
      state.loading = false;
      
      // Сортируем все новости
      state.allNews = sortNewsByDate(action.payload);
      
      // Отображаем первые 10 новостей
      state.displayedNews = state.allNews.slice(0, 10);
      
      // Группируем отображаемые новости
      state.groupedNews = groupNewsByDate(state.displayedNews);
      
      state.hasMore = state.allNews.length > 10;
    },
    setNewsFail(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    loadMoreNews(state) {
      const nextNews = state.allNews.slice(
        state.displayedNews.length,
        state.displayedNews.length + 10,
      );
      state.displayedNews = [...state.displayedNews, ...nextNews];
      
      // Обновляем groupedNews для всех отображаемых новостей
      state.groupedNews = groupNewsByDate(state.displayedNews);
      
      state.hasMore = state.displayedNews.length < state.allNews.length;
    },
    resetNews(state) {
      state.allNews = [];
      state.displayedNews = [];
      state.groupedNews = {};
      state.hasMore = true;
    },
    
    addNewNews(state, action: PayloadAction<NewsItem[]>) {
      // Добавляем новые новости в начало списка
      state.allNews = sortNewsByDate([...action.payload, ...state.allNews]);
      state.displayedNews = state.allNews.slice(0, state.displayedNews.length);
      state.groupedNews = groupNewsByDate(state.displayedNews);
    },
  },
});

export const { setNewsStart, setNewsSuccess, setNewsFail, resetNews, loadMoreNews, addNewNews } =
  newsSlice.actions;
export default newsSlice.reducer;