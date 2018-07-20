import { injectGlobal } from 'styled-components';

export default function injectGlobalByTheme(theme) {
  switch (theme) {
    default:
      injectGlobal`
        html {
          font-family: Arial, Helvetica, sans-serif;
          color: #666;
          font-size: 1.1em;
        }
        
        a.button, button {
          font-size: 1em;
          padding: 0.25em 1em;
          border-radius: 3px;
          color: dodgerblue;
          border: 1px solid dodgerblue;
        }
      `;
      break;
  }
}