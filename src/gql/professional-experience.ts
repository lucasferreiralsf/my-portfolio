import { gql } from 'graphql-request'

const fetchProfessionalExperiences = gql`
  query FetchProfessionalExperiences {
    professionalExperiences {
      id
      title
      startedAt
      finishedAt
      description
      company
    }
  }
`

export { fetchProfessionalExperiences }
