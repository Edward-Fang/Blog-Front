import client from './index'
import gql from 'graphql-tag'

const getPosts = (variables = {}) => {
  console.log(variables)
  return client.query({
    query: gql`
      query($pagination: PaginationQueryDto!){
        findAllPosts(pagination: $pagination){
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

export default getPosts
