import { gql } from 'graphql-request'

const fetchProjects = gql`
  query FetchProjects {
    projects {
      id
      title
      description
      createdAt
      pinImage {
        url
        mimeType
        fileName
      }
      skills {
        id
        link
        title
        icon {
          url
          fileName
          mimeType
        }
      }
    }
  }
`

export { fetchProjects }
