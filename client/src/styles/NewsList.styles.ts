import css from 'styled-jsx/css';

export const NewsListStyles = css`
  .news-list {
    padding: 0 1em;

    .news-item {
      padding: 1em 0;

      .news-item-title {
        font-size: 1rem;
        font-weight: 400;
        margin: 0;
        margin-bottom: 0.5em;

        a {
          color: #333;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      .news-item-details {
        font-size: 0.8rem;
        font-weight: bold;

        span {
          margin-right: 1em;
        }

        a {
          color: #6600ff;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
