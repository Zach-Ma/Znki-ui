

import { useEffect } from 'React';
import {
  useLocation
} from "react-router-dom";

/**
 * 
 * @returns query hook
 * @todo 
 */
export const useQuery = () => {
  let location = useLocation();
  useEffect(() => {

  }, []);
  // return new URLSearchParams(useLocation().search);
}
