import React from 'react'
import {findDOMNode} from 'react-dom'
import {Markdown} from 'playland'
import './app.css'


const onThemeChange = theme => {
  document.documentElement.setAttribute('data-theme', theme)
}

const pageRequire = require.context('../examples/', true, /Example\.(js|tsx)$/)
const pages = pageRequire.keys()
const mdRequire = require.context('../src/', true, /\.md$/)
const mds = mdRequire.keys()

const routes = pages.map(page => {
  const Example = pageRequire(page).default
  const name = page.replace(/(^\.\/)|(Example\.(js|tsx)$)/g, '')
  const mdName = `./${name}/${name.split('/').slice(-1)}.md`
  const overview = mds.includes(mdName) ? mdRequire(mdName) : ''

  return {
    name,
    path: `/${name}`,
    component: () => (
      <div>
        <section>
          <Markdown text={overview} />
        </section>
        <section>
          <h1>示例</h1>
          <span>balabala</span>
          <Example />
        </section>
      </div>
    ),
  }
})

export default {routes}
