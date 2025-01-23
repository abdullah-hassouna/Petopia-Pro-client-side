'use client'
import TrindingSidebar from './components/sidebars/TrendingSidebar'
import PostContainer from './components/Post/PostsContainer'

function Home() {

  return (
    <div className="w-full mb-14 md:mb-0">
      <div className="flex justify-between items-center">
        <PostContainer
          posts={[{ tag: 'adoption' }, { tag: 'help' }, { tag: 'discuss' }, { tag: 'product' }, { tag: 'other' }]}
        />
        <TrindingSidebar />
      </div>
    </div>
  )
}

export default Home
