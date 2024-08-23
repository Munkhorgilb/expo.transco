import {useContext} from 'react';
import {AppContext} from '../provider/AppProvider';

export default function useApp() {
  const mContext = useContext(AppContext);
  return mContext;
}
