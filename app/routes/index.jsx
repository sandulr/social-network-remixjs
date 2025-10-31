import { Link } from "remix";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';

function Home(){

  const [posts, setPosts] = useState([]);

  useEffect(async() => {
    console.log('l')
    const res = await fetch(`/api/get/photographs/`, {method: 'POST',headers: {'Content-Type': 'application/json',}})
    const newPosts = await res.json()
    console.log(newPosts)
    setPosts(posts => newPosts);
  }, [posts]);

  const getMorePosts = async () => {
    console.log('getting more posts');
  }

  return (
    <div>
      <InfiniteScroll
              dataLength={posts.length}
              next = {getMorePosts}
              hasMore={true}
              loader={<div id="allphotosofgcontainerloading">
                  <div style={{textAlign:'center'}}>Loading...</div>
              </div>}
              endMessage={<div style={{textAlign:'center'}}><h3>Fagacy</h3></div>}
          >
              {posts.map((post) => (
                <div key={post.id} className={`separateclass`}>
                  <Link href={`/photograph/${post.id}/`}>
                    <a>
                      <img src={post.photo ? '/posts/gallery/'+post.photo : (post.small ? post.small : post.photo_links)}
                        className={IndexStyle.border20}
                        alt={post.caption ? post.caption : ''}
                        width="1000"
                        height="1100"
                        objectFit="cover" />
                    </a>
                  </Link>
              </div>
              ))}
          </InfiniteScroll>
    </div>
  )
}

export default Home
