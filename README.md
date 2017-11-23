<p align="center"><a "https://www.npmjs.com/package/lightning-tools" target="_blank"><img width="100"src="http://outt0i9l8.bkt.clouddn.com/lightning.png"></a></p>

<p align="center">
    <a "https://www.npmjs.com/package/lightning-tools" target="_blank"><img src="https://img.shields.io/badge/version-1.1.4-blue.svg?style=flat" alt="Build Status"></a>
    <a "https://www.npmjs.com/package/lightning-tools" target="_blank" target="_blank"><img src="https://img.shields.io/travis/rust-lang/rust.svg" alt="Build Status"></a>
    <a "https://www.npmjs.com/package/lightning-tools" target="_blank"><img src="https://img.shields.io/packagist/l/doctrine/orm.svg" alt="Build Status"></a>
    <a "https://www.npmjs.com/package/lightning-tools" target="_blank"><img src="https://img.shields.io/npm/v/npm.svg" alt="Version"></a>
    <a "https://www.npmjs.com/package/lightning-tools" target="_blank"><img src="https://img.shields.io/badge/dependency-lodash-ff69b4.svg" alt="Version"></a>
</p>

<h2 align="center">lightning-tools：闪电鸟</h2>

> :zap:Slogan: 提高前端的生产率

<a href="http://super2god.coding.me/lightning-tools-wiki/#/README" target="_blank">:eyes:API文档<a>

### Quick start

#### Install
```
npm install lightning-tools -S
```

#### Use
```js
import _ from 'lightning-tools'
_.fen2yuan(2000)
```

#### Use in Vue
```html
<template>
  <div>
    <span v-text="fen2yuan(2000) + '元'"></span>
  </div>
</template>

<script>
import _ from 'lightning-tools'

export default {
  data () {
    return {
      fen2yuan: _.fen2yuan
    }
  }
}
</script>
```