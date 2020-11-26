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

        .news-item-title-a {
          color: #333;
        }

        .news-item-title-a:hover {
          text-decoration: underline;
        }
      }

      .news-item-details {
        font-size: 0.8rem;
        font-weight: bold;

        .news-item-details-span {
          margin-right: 1em;
        }

        .news-item-details-a {
          color: #6600ff;
        }

        .news-item-details-a:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
