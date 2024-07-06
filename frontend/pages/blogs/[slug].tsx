import { ProfileType, BlogType } from '@lib/types'
import { getBlogDetails, getProfileInfo } from '@lib/backendAPI'
import { useEffect, useState } from 'react'
import Loader from "@components/Loader"
import NoData from "@components/NoData"
import MetaData from '@components/MetaData'
import pageMeta from '@content/meta'
import dynamic from 'next/dynamic'
import { useClientID } from '@context/clientIdContext'
import BlogsData from '@content/Blogs'
import MyProfile from '@content/MyProfile'

const BlogLayout = dynamic(() => import('@layout/BlogLayout'), {
  loading: () => <Loader />,
})

export default function BlogDetails({ slug, blogData }: { slug: string, blogData: BlogType }) {
  const [isLoading, setIsLoading] = useState(true)

  function stripHtml(html: string) {
    const strippedText = html.replace(/<[^>]*>/g, '') // Removes all HTML tags
    return strippedText
  }

  const blogOverview = blogData?.overview ? stripHtml(blogData.overview) : undefined

  useEffect(() => {
    if (MyProfile) {
      setIsLoading(false)
    }
  }, [slug])

  return (
    <>
      <MetaData
        title={blogData.title || pageMeta.blogs.title}
        description={blogOverview || pageMeta.blogs.description}
        previewImage={blogData.image || pageMeta.blogs.image}
        keywords={blogData.tags || pageMeta.blogs.keywords}
      />

      {isLoading ? (
        <Loader />
      ) : blogData && MyProfile ? (
        <BlogLayout blog={blogData} profileInfo={MyProfile}></BlogLayout>
      ) : (
        <NoData allowSpacing={true} />
      )}
    </>
  )
}

export async function getServerSideProps(context: any) {
  const { slug } = context.params
  // const blogData: BlogType = await getBlogDetails('1', slug)
  let blogData:BlogType = {
    id: 0,
    slug: '',
    title: '',
    image: '',
    content: '',
    author: '',
    status: '',
    order: 0,
    total_views: 0,
    total_likes: 0,
    user_liked: false,
    created_at: '',
    updated_at: ''
  };
  const tmp = BlogsData.find((blog: BlogType) => blog.slug === slug)
  if (tmp !== undefined) {
    blogData = tmp; 
  }
  
  return {
    props: {
      slug,
      blogData
    }
  }
}
