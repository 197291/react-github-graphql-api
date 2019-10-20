import { useQuery } from '@apollo/react-hooks';

import { GET_USERS } from 'api-graphql/queries/users';
import { SearchType } from 'generated/globalTypes';
import { searchVariables } from 'generated/search';
import { getUsers } from 'generated/getUsers';
import { UserFragment } from 'generated/UserFragment';

export function useGetUsers(searchValue: string): UserFragment[] | null {
  const { loading, error, data } = useQuery<getUsers, searchVariables>(GET_USERS, {
    variables: { type: SearchType.USER, query: searchValue }
  });
  if (loading) return [];
  if (error) return null;
  if (data) {
    return data.search.nodes as UserFragment[];
  }
  return [];
}
