import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { Post } from '../components/Post'
import { Sidebar } from '../components/Sidebar'
import styles from '../styles/Home.module.css';
import { posts } from '../mock/post';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post key={post.id}
              author={post.author.name}
              info={post.author.info}
              avatar={post.author.avatarUrl}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default Home
