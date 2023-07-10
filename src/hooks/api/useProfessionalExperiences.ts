import { fetchProfessionalExperiences, hygraphClient } from '@my-portfolio/gql'
import { getCurrentLocaleHeader } from '@my-portfolio/i18n'
import { HigraphResponseError, ProfessionalExperienceResponse } from '@my-portfolio/types'
import { NextRequest } from 'next/server'
import useSWR from 'swr'

export const useProfessionalExperiences = (req?: NextRequest) => {
  const headers = getCurrentLocaleHeader(req)
  const swr = useSWR<{ professionalExperiences: ProfessionalExperienceResponse[] }, HigraphResponseError[]>(
    fetchProfessionalExperiences,
    (query) => hygraphClient.request(query, {}, headers)
  )

  return {
    ...swr,
    data: swr.data?.professionalExperiences || []
  }
}
