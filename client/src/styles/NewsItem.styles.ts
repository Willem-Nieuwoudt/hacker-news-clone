import css from 'styled-jsx/css';

export const NewsItemStyles = css`
  .news-item-title {
    font-size: 1.2rem;
    padding: 0.5em;
    margin: 0;
    font-weight: 300;

    a {
      color: #333;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .news-item-details {
    font-size: 0.8rem;
    padding: 0.5em;
    padding-bottom: 1em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 1em;

    strong {
      margin-right: 1em;
    }
  }
`;
