import {NavigationState, PartialState} from '@react-navigation/native';

type State = NavigationState | Omit<PartialState<NavigationState>, 'stale'>;

export function getCurrentRoute(state: State) {
  let node = state.routes[state.index || 0];
  while (node.state?.routes && typeof node.state?.index === 'number') {
    node = node.state?.routes[node.state?.index];
  }
  return node;
}

export function isTab(current: string, route: string) {
  // NOTE
  // our tab routes can be variously referenced by 3 different names
  // this helper deals with that weirdness
  // -prf
  return (
    current === route ||
    current === `${route}Tab` ||
    current === `${route}Inner`
  );
}

export function getTabState(state: State | undefined, tab: string): TabState {
  if (!state) {
    return TabState.Outside;
  }
  const currentRoute = getCurrentRoute(state);
  if (isTab(currentRoute.name, tab)) {
    return TabState.InsideAtRoot;
  } else if (isTab(state.routes[state.index || 0].name, tab)) {
    return TabState.Inside;
  }
  return TabState.Outside;
}

export enum TabState {
  InsideAtRoot,
  Inside,
  Outside,
}
