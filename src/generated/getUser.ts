/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUser
// ====================================================

export interface getUser_user_followers {
  __typename: "FollowerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface getUser_user_following {
  __typename: "FollowingConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface getUser_user {
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
  followers: getUser_user_followers;
  /**
   * A list of users the given user is following.
   */
  following: getUser_user_following;
}

export interface getUser {
  /**
   * Lookup a user by login.
   */
  user: getUser_user | null;
}

export interface getUserVariables {
  login: string;
}
