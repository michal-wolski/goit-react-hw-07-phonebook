import { Circles } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

export function Loader() {
  const loader = useSelector(state => state.contacts.isLoading);
  return <div>{loader && <Circles ariaLabel="loading-indicator" />}</div>;
}
