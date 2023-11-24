import { gql } from '@apollo/client';

export const NEW_QUERY = gql`
query NewQuery {
    posts {
      edges {
        node {
          id
          slug
          title
          content
        }
      }
    }
  }
`