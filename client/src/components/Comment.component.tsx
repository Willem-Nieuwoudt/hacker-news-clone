import { IComment } from '../interfaces/news.interface';
import parse from 'react-html-parser';
import sanitizeHtml from 'sanitize-html';
import Comments from './Comments.component';
import { Fragment, useState } from 'react';

import { CommentStyles } from '../styles/Comment.styles';

interface IProps {
  comment: IComment;
}

const Comment = ({ comment: { user, content, comments } }: IProps) => {
  const [showReplies, setShowReplies] = useState<boolean>(false);

  const handleShowReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <div className='comment'>
      <h5 className='comment-user'>{user}</h5>

      <div className='comment-content'>{parse(sanitizeHtml(content, { transformTags: { p: 'div' } }))}</div>

      {comments.length > 0 && (
        <Fragment>
          {!showReplies && <span onClick={handleShowReplies}>{`View Replies (${comments.length})`}</span>}
          {showReplies && <span onClick={handleShowReplies}>Hide Replies</span>}
        </Fragment>
      )}

      {showReplies && <Comments comments={comments} />}

      <style jsx>{CommentStyles}</style>
    </div>
  );
};

export default Comment;
