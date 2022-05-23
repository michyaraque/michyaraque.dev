import React from 'react'
import useSWR from 'swr'

const ShowViews = ({slug, onlyNumber = false, ...props}: {slug: string, onlyNumber?: boolean}) => {

  async function fetchController<JSON = any>(
    input: RequestInfo,
    init?: RequestInit
  ): Promise<JSON> {
    const res = await fetch(input, init);
    return res.json();
  }

  const { data } = useSWR<any>(`https://michyaraque.dev/easy-backend/views/${slug}`, fetchController)
  const views = data?.total;

  return (
    <div>{views > 0 || views !== undefined ? views : '---'} {!onlyNumber && 'visitas'}</div>
  )
}

export default ShowViews
