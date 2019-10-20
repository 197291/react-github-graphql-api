/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserFragment
// ====================================================

export interface UserFragment_followers {
  __typename: "FollowerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface UserFragment_following {
  __typename: "FollowingConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface UserFragment {
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
  followers: UserFragment_followers;
  /**
   * A list of users the given user is following.
   */
  following: UserFragment_following;
}
