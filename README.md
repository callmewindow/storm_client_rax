# storm_client_rax

> rax-materials-basic-app

注意：考虑到运行效果，如果不做任何修改，tsconfig.json中的下方配置项会报错
"suppressImplicitAnyIndexErrors": true,

> 报错内容：Option 'suppressImplicitAnyIndexErrors' is deprecated and will stop functioning in TypeScript 5.5. Specify compilerOption '"ignoreDeprecations": "5.0"' to silence this error；即该配置项已经启用，并将在ts5.5中停止运行，目前可以增加ignore的选项来暂时消除这个错误

因此我就这么干了，新增的配置项含义根据翻译可知：忽视弃用，即忽视5.0版本中的弃用报错

## Getting Started

### `npm run start`

Runs the app in development mode.

Open [http://localhost:3333](http://localhost:3333) to view it in the browser.

The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `build` folder.
