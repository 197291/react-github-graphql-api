import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { GET_USER } from 'api-graphql/queries/users';
import Spinner from 'components/Spinner';
import ErrorPage from 'components/ErrorPage';

import './styles.scss';
import { getUser, getUserVariables } from 'generated/getUser';

const DetailsPage: React.FC = () => {
  let { login } = useParams();
  const { loading, error, data } = useQuery<getUser, getUserVariables>(GET_USER, {
    variables: { login: login as string }
  });
  if (loading) return <Spinner />;
  if (error) {
    console.error(error);
    return <ErrorPage />;
  }

  const user = data && data.user;
  return user ? (
    <main className="DetailsPage">
      <h1>{login}</h1>
      <div>
        <a href={`${user.url}`} target="_blank" rel="noopener noreferrer">
          <img src={`${user.avatarUrl}`} alt="avatar" />
        </a>
        <h2>
          <span>{user.name}</span>
          <span>{login}</span>
        </h2>
        {user.email && <a href={`mailto:${user.email}`}>{user.email}</a>}
        {user.location && <p>Location: {user.location}</p>}
        {user.websiteUrl && <p>Website: {user.websiteUrl}</p>}
        {user.followers && <p>Followers: {user.followers.totalCount}</p>}
        {user.following && <p>Following: {user.following.totalCount}</p>}
        <p>
          See profile page:{' '}
          <a href={`${user.url}`} rel="noopener noreferrer" target="_blank">
            {user.url}
          </a>
        </p>
      </div>
    </main>
  ) : (
    <p>There is no info about {login}. Maybe he's ninja!!</p>
  );
};

export default DetailsPage;
