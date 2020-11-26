import { IComment } from '../interfaces/news.interface';
import Comment from './Comment.component';

interface IProps {
  comments: IComment[];
}

const Comments = ({ comments }: IProps) => {
  return (
    <div className='comments'>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}

      <style jsx>
        {`
          .comments {
            margin-left: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default Comments;