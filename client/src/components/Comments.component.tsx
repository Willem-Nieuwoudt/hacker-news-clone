import { IComment } from '../interfaces/news.interface';
import Comment from './Comment.component';
import { CommentsStyles } from '../styles/Comments.styles';

interface IProps {
  comments: IComment[];
}

const Comments = ({ comments }: IProps) => {
  return (
    <div className='comments'>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}

      <style jsx>{CommentsStyles}</style>
    </div>
  );
};

export default Comments;
