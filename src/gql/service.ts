import { gql } from 'graphql-request'

const fetchServices = gql`
  query FetchServices {
    services {
      id
      title
      description
      icon {
        url
        mimeType
        fileName
      }
    }
  }
`

export { fetchServices }
