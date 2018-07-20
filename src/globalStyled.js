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
        
        body, h1, h2, h3, h4 {
          margin: 0px;
        }
        
        input, button {
          padding: 0.25em 0.25em;
          font-size: 1em;
          color: #666;
        }
        
        a.button, button {
          padding: 0.25em 1em;
          border-radius: 3px;
          color: dodgerblue;
          border: 1px solid dodgerblue;
        }
        
        textarea, select, input, button { outline: none; }
      `;
      break;
  }
}