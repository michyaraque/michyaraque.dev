import React from 'react'
import useSWR from 'swr'

type IViews = {
  [key: string]: any;
}

type IProps ={
  slug: string;
  onlyNumber?: boolean;
}

const ShowViews = (props: IProps) => {

  const {slug, onlyNumber, ...restProps} = props;

  async function fetchController<JSON = IViews>(
    input: RequestInfo,
    init?: RequestInit
  ): Promise<JSON> {
    const res = await fetch(input, init);
    return res.json();
  }

  let views = 0;

  if (process.env.NODE_ENV !== 'development') {
    const { data }: IViews = useSWR<IViews>(`${process.env.NEXT_PUBLIC_DOMAIN_API}/views/${slug}`, fetchController)
    views = data?.total;
  }

  return (
    <div>{Number(views) > 0 || views !== undefined ? views : '---'} {!onlyNumber ? 'visitas' : ''}</div>
  )
}

export default ShowViews
