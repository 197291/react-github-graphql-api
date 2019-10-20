/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { SearchType } from "./globalTypes";

// ====================================================
// GraphQL query operation: getUsers
// ====================================================

export interface getUsers_search_nodes_Issue {
  __typename: "Issue" | "PullRequest" | "Repository" | "Organization" | "MarketplaceListing" | "App";
}

export interface getUsers_search_nodes_User {
  __typename: "User";
  /**
   * The user's public profile name.
   */
  name: string | null;
}

export type getUsers_search_nodes = getUsers_search_nodes_Issue | getUsers_search_nodes_User;

export interface getUsers_search {
  __typename: "SearchResultItemConnection";
  /**
   * A list of nodes.
   */
  nodes: (getUsers_search_nodes | null)[] | null;
}

export interface getUsers {
  /**
   * Perform a search across resources.
   */
  search: getUsers_search;
}

export interface getUsersVariables {
  type: SearchType;
  query: string;
}
