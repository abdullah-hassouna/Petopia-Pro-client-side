import { PostProps } from '@/app/interfaces/postInterface'
import axiosCall from '@/axios/axiosCall'
import { useEffect, useState } from 'react'

function callExplorePosts(isInView?: boolean | null) {
  const [pagination, setPagination] = useState<number>(0)
  const [posts, setPosts] = useState<PostProps[]>([])
  const [isLoadingPosts, setIsLoadingPosts] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async (pageNumber: number) => {
      setIsLoadingPosts(true)
      setError(null)

      try {
        const response = await axiosCall.get("posts/explore", { params: { index: pageNumber, count: 8 } })
        console.log('API Response:', response.data.data.Posts)

        if (response.status === 200) {
          setPosts(prev => [...prev, ...(response.data.data.Posts)])
        } else {
          throw new Error(`Unexpected response status: ${response.status}`)
        }
      } catch (err) {
        console.error('Error fetching posts:', err)
        setError(err.message || 'Failed to fetch posts')
      } finally {
        setIsLoadingPosts(false)
      }
    }

    if (isInView || pagination === 0) {
      setPagination(prev => {
        let newV = prev + 1
        fetchPosts(newV)
        return newV
      })
    }
  }, [isInView])

  return { isLoadingPosts, posts, error }
}

export default callExplorePosts