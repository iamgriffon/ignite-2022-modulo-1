import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from '../styles/Comment.module.css'

interface CommentProps {
  content: string;
  onDelete: (props: string) => void;
}

export function Comment({ content, onDelete }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0);
  const [isCommentLiked, setIsCommentLiked] = useState(false);

  function handleDeleteComment() {
    onDelete(content)
  }

  function likeComment() {
    if (isCommentLiked) {
      setLikeCount(state => state - 1
      )
    } else {
      setLikeCount(state => state + 1)
    }
    setIsCommentLiked(!isCommentLiked)
  }

  return (
    <div className={styles.comment}>
      <img src="https://github.com/iamgriffon.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gustavo Dupin</strong>
              <time title='24 de Agosto às 14:36' dateTime='2022-08-24 14:36:30'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar Comentário' onClick={handleDeleteComment}><Trash size={24} /></button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={likeComment}>
            <ThumbsUp weight={isCommentLiked ? 'fill' : 'regular'} />
            {isCommentLiked ? 'Curtiu' : 'Curtir'} <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}