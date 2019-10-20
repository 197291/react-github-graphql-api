import React from 'react';
import { useHistory } from 'react-router-dom';

import '../styles.scss';

type Props = {
  login: string;
  avatarUrl: string | null;
};

export const DEFAULT_URL_IMG = 'https://via.placeholder.com/40';

const SearchItemRow: React.FC<Props> = (props) => {
  const { login, avatarUrl, ...rest } = props;
  let history = useHistory();

  function handleClick() {
    history.push(`/users/${login}`);
  }
  const imgSrc = avatarUrl || DEFAULT_URL_IMG;

  return (
    <li {...rest} onClick={handleClick}>
      <div>
        <img src={`${imgSrc}`} alt="avatar" />
      </div>
      <div>{login}</div>
    </li>
  );
};

export default SearchItemRow;
