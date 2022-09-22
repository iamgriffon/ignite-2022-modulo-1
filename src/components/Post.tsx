import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from '../styles/Post.module.css';
import { Avatar } from './Avatar';
import { Comment } from './Comment'

export interface PostContentProps {
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostProps {
  author: string;
  info: string
  content: PostContentProps[];
  avatar: string;
  publishedAt: Date;
}

export function Post({ author, info, avatar, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(['Post muito bacana, viu?'])
  const [newCommentText, setNewCommentText] = useState('');

  function handleAddComment(event: FormEvent) {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleDeleteComment(commentToBeDeleted: string){
    const newComentsPostDeletion = comments.filter(comment => {
      return comment !== commentToBeDeleted
    });

    setComments(newComentsPostDeletion)
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value);
  }

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'");

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const isCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={avatar} />
          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <span>{info}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>Publicado {publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(item => {
          switch (item.type) {
            case 'paragraph': return <p>{item.content}</p>
            case 'link': return <a href={`https://${item.content}`}><p>{item.content}</p></a>
            default: break;
          }
        })}

      </div>
      <form onSubmit={e => handleAddComment(e)} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário' value={newCommentText} onChange={handleNewCommentChange} />
        <footer>
          <button type='submit' disabled={isCommentEmpty}>Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment content={comment} onDelete={handleDeleteComment} />
          )
        })}
      </div>
    </article>
  )
}