import React, { useEffect, useState } from 'react'

const updateView = async (slug: string, setViews: React.Dispatch<React.SetStateAction<string | number>>) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_API}/views/${slug}`, {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const { total } = await response.json();
    setViews(total);

  } catch (error: any) {
    console.error({
      status: error.cause.res?.status
    })
  }
}

const useUpdateViews = (slug: string) => {

  const [views, setViews] = useState<string | number>(0);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      updateView(slug, setViews);
    }
  }, []);

  return {
    views
  }
}

export default useUpdateViews
