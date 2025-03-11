export interface NewsItem {
  abstract: string;
  web_url: string;
  multimedia: Array<{
    url: string;
  }>;
  pub_date: string;
  source: string;
}

export interface NewsState {
  allNews: NewsItem[];
  displayedNews: NewsItem[];
  groupedNews: Record<string, NewsItem[]>,
  loading: boolean;
  error: string | null;
  hasMore: boolean;
}

export interface HeaderProps {
  toggleMenu: () => void;
}

export interface NewsItemProps {
  item: NewsItem;
}

export interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}