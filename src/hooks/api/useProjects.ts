import { fetchProjects, hygraphClient } from '@my-portfolio/gql'
import { getCurrentLocaleHeader } from '@my-portfolio/i18n'
import { HigraphResponseError, ProjectResponse } from '@my-portfolio/types'
import { NextRequest } from 'next/server'
import useSWR from 'swr'

export const useProjects = (req?: NextRequest) => {
  const headers = getCurrentLocaleHeader(req)
  const swr = useSWR<{ projects: ProjectResponse[] }, HigraphResponseError[]>(fetchProjects, (query) =>
    hygraphClient.request(query, {}, headers)
  )

  return {
    ...swr,
    data: swr.data?.projects || []
  }
}
