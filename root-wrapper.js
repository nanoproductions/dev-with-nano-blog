import { MDXProvider } from '@mdx-js/react'
import Code from './src/components/Code'
import styles from './src/components/css/Markdown.module.scss'

import React from 'react'

const components = {
  h2: ({ children }) => <h2 style={{}}>{children}</h2>,
  'p.inlineCode': (props) => <code className={styles.precode} {...props} />,
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          className={styles.codeblock}
          codeString={props.children.trim()}
          language={props.className && props.className.replace('language-', '')}
          {...props}
        />
      )
    }
  },
  a: (props) => (
    <a {...props} style={{ color: 'white' }}>
      {props.children}
    </a>
  ),
  li: (props) => (
    <li {...props} style={{ marginLeft: '1.2rem' }}>
      {props.children}
    </li>
  ),
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
