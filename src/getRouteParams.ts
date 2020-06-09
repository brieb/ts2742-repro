import { RouteComponentProps } from 'react-router-dom';

type TabNames = 'overview' | 'traveling' | 'hosting' | 'standards' | 'home-safety';

export const getRouteParams = (tabName?: TabNames) => ({
  location: { pathname: `/trust/${tabName}` },
  match: { params: { tabName } },
} as RouteComponentProps<{ tabName?: TabNames }>);
