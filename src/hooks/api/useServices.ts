import { fetchServices, hygraphClient } from '@my-portfolio/gql'
import { getCurrentLocaleHeader } from '@my-portfolio/i18n'
import { HigraphResponseError, ServiceResponse } from '@my-portfolio/types'
import { NextRequest } from 'next/server'
import useSWR from 'swr'

export const useServices = (req?: NextRequest) => {
  const headers = getCurrentLocaleHeader(req)
  const swr = useSWR<{ services: ServiceResponse[] }, HigraphResponseError[]>(fetchServices, (query) =>
    hygraphClient.request(query, {}, headers)
  )

  return {
    ...swr,
    data: swr.data?.services || []
  }
}
