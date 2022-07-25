import fetcher from '@/lib/fetcher'
import { useEffect } from 'react'
import useSWR from 'swr'

export default function ViewCounter({ slug }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher)
  const views = new Number(data?.total)

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      })

    registerView()
  }, [slug])

  return (
    <span className="text-gray-400">{`${views > 0 ? views.toLocaleString() : '–'} views`}</span>
  )
}
