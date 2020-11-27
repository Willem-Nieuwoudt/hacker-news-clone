import css from 'styled-jsx/css';

export const CommentStyles = css`
  .comment {
    border-left: 2px solid gray;
    padding-left: 5px;
    margin-bottom: 20px;

    .comment-user {
      margin: 10px;
    }

    .comment-content {
      white-space: pre wrap;
      overflow: auto;
      word-wrap: break-word;
      font-size: 0.9rem;
    }

    span {
      color: blue;
      padding-top: 10px;
      cursor: pointer;
      font-size: 0.8rem;
    }
  }
`;
