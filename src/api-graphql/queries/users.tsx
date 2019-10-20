import gql from 'graphql-tag';

const UserFragment = gql`
  fragment UserFragment on User {
    name
    company
    avatarUrl(size: 200)
    email
    login
    location
    url
    websiteUrl
    followers(first: 100) {
      totalCount
    }
    following(first: 100) {
      totalCount
    }
  }
`;

export const GET_USERS = gql`
  query search($type: SearchType!, $query: String!) {
    search(type: $type, query: $query, first: 100) {
      nodes {
        ...UserFragment
      }
    }
  }
  ${UserFragment}
`;

export const GET_USER = gql`
  query getUser($login: String!) {
    user(login: $login) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;
