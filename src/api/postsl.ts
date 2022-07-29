import client from './graphql'
import gql from 'graphql-tag'

const posts = {
  findAllPosts: (variables = {}) => {
    return client.query({
      query: gql`
        query ($pagination: PaginationQueryDto!) {
          findAllPosts(pagination: $pagination) {
            author
            content
            createAt
            id
            isPublic
            posterUrl
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
