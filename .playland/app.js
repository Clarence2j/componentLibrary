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
console.log(mds, pageRequire)

const routes = pages.map(page => {
  const Example = pageRequire(page).default
  console.log(Example)
  const name = page.replace(/(^\.\/)|(Example\.(js|tsx)$)/g, '')
  const mdName = `./${name}/${name.split('/').slice(-1)}.md`
  const overview = mds.includes(mdName) ? mdRequire(mdName) : ''

  return {
    name,
    path: `/${name}`,
    component: () => (
      <div className="KfeCollection-Example">
        <section>
          <Markdown text={overview} />
        </section>
        <section>
          <h1>示例</h1>
          <span className="light" onClick={() => onThemeChange('light')}>
            日间
          </span>
          <span className="dark" onClick={() => onThemeChange('dark')}>
            夜间
          </span>
          <Example />
        </section>
      </div>

    ),
  }
})

export default {routes}