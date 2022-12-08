import client from './graphql'
import gql from 'graphql-tag'

const posts = {
  findAllPosts: (variables = {}) => {
    return client.query({
      query: gql`
        query ($pagination: PaginationQueryDto!) {
          findAllPosts(pagination: $pagination) {
            author
            createAt
            id
            introduction
            posterUrl
            tag
            title
            updateAt
          }
        }
      `,
      variables
    })
  },
  findOnePost: (variables = {}) => {
    return client.query({
      query: gql`
        query ($id: String!) {
          findOnePost(id: $id) {
            author
            createAt
            id
            introduction
            content
            tag
            title
            updateAt
          }
        }
      `,
      variables
    })
  },
  findPostsByTag: (variables = {}) => {
    return client.query({
      query: gql`
        query ($tag: String!) {
          findPostsByTag(tag: $tag) {
            author
            createAt
            id
            introduction
            content
            tag
            title
            updateAt
          }
        }
      `,
      variables
    })
  }
}

export default posts
