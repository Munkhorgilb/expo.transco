import { useNavigationState } from "@react-navigation/native";
import { getTabState, TabState } from "./helpers";

export function useNavigationTabState() {
  return useNavigationState((state) => {
    const res = {
      isAtHome: getTabState(state, "HomeTab") !== TabState.Outside,
      isAtMore: getTabState(state, "MoreTab") !== TabState.Outside,
    };
    if (!res.isAtHome && !res.isAtMore) {
      // HACK for some reason useNavigationState will give us pre-hydration results
      //      and not update after, so we force isAtHome if all came back false
      //      -prf
      res.isAtHome = true;
    }
    return res;
  });
}
