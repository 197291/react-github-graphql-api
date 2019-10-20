/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { SearchType } from "./globalTypes";

// ====================================================
// GraphQL query operation: search
// ====================================================

export interface search_search_nodes_Issue {
  __typename: "Issue" | "PullRequest" | "Repository" | "Organization" | "MarketplaceListing" | "App";
}

export interface search_search_nodes_User_followers {
  __typename: "FollowerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface search_search_nodes_User_following {
  __typename: "FollowingConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface search_search_nodes_User {
  __typename: "User";
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * The user's public profile company.
   */
  company: string | null;
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: URI;
  /**
   * The user's publicly visible profile email.
   */
  email: string;
  /**
   * The username used to login.
   */
  login: string;
  /**
   * The user's public profile location.
   */
  location: string | null;
  /**
   * The HTTP URL for this user
   */
  url: URI;
  /**
   * A URL pointing to the user's public website/blog.
   */
  websiteUrl: URI | null;
  /**
   * A list of users the given user is followed by.
   */
  followers: search_search_nodes_User_followers;
  /**
   * A list of users the given user is following.
   */
  following: search_search_nodes_User_following;
}

export type search_search_nodes = search_search_nodes_Issue | search_search_nodes_User;

export interface search_search {
  __typename: "SearchResultItemConnection";
  /**
   * A list of nodes.
   */
  nodes: (search_search_nodes | null)[] | null;
}

export interface search {
  /**
   * Perform a search across resources.
   */
  search: search_search;
}

export interface searchVariables {
  type: SearchType;
  query: string;
}
