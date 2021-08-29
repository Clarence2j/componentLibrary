## 使用

**安装**

```bash
yarn add @testlocal/npmbag
# or npm install --save @testlocal/npmbag
```

**引用**

```js
import {Alert} from '@testlocal/npmbag';

<Alert {...} />

```

## 开发

**本地开发**

```bash
\$ yarn

\$ npm run start
```

在 examples 目录下进行 mock 开发。

**调试**

clone `@testlocal/npmbag` 项目到本地，然后在 `@testlocal/npmbag` 目录内使用 `$ yarn link`

然后在项目目录内使用 `$ yarn link @testlocal/npmbag`，重新启动本地服务，即可使用本地的魔改版 @testlocal/npmbag 进行调试了。

**备注**

本项目对外提供编译后的代码# componentLibrary
