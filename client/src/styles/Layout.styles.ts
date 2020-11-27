import css from 'styled-jsx/css';

export const LayoutStyles = css`
  .layout {
    max-width: 800px;
    margin: 0 auto;
    background: #f6f6ef;

    nav {
      background: #f60;
      padding: 1em;

      .main-title {
        font-weight: bold;
      }

      .back-btn {
        font-size: 0.9rem;
        padding-right: 1em;
        cursor: pointer;
      }

      & > * {
        display: inline-block;
        color: black;
      }
    }

    .page-content {
      padding: 15px;
    }
  }
`;
