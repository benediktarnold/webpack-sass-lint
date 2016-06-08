This repository is a demo for a bug in webpack or one of the used plugin. Simply run ```webpack``` or ```npm run start```to see the bug in action.

```
ERROR in   Error: Child compilation failed:
  undefined
  undefined

  - compiler.js:88
    [webpack-sass-lint]/[html-webpack-plugin]/lib/compiler.js:88:16

  - Compiler.js:214 Compiler.<anonymous>
    [webpack-sass-lint]/[webpack]/lib/Compiler.js:214:10

  - Compiler.js:403
    [webpack-sass-lint]/[webpack]/lib/Compiler.js:403:12

  - Tapable.js:67 Compiler.next
    [webpack-sass-lint]/[webpack]/[tapable]/lib/Tapable.js:67:11

  - CachePlugin.js:40 Compiler.<anonymous>
    [webpack-sass-lint]/[webpack]/lib/CachePlugin.js:40:4

  - Tapable.js:71 Compiler.applyPluginsAsync
    [webpack-sass-lint]/[webpack]/[tapable]/lib/Tapable.js:71:13

  - Compiler.js:400 Compiler.<anonymous>
    [webpack-sass-lint]/[webpack]/lib/Compiler.js:400:9

  - Compilation.js:577 Compilation.<anonymous>
    [webpack-sass-lint]/[webpack]/lib/Compilation.js:577:13

  - Tapable.js:60 Compilation.applyPluginsAsync
    [webpack-sass-lint]/[webpack]/[tapable]/lib/Tapable.js:60:69

  - Compilation.js:572 Compilation.<anonymous>
    [webpack-sass-lint]/[webpack]/lib/Compilation.js:572:10

  - Tapable.js:60 Compilation.applyPluginsAsync
    [webpack-sass-lint]/[webpack]/[tapable]/lib/Tapable.js:60:69

  - Compilation.js:567 Compilation.<anonymous>
    [webpack-sass-lint]/[webpack]/lib/Compilation.js:567:9

  - Tapable.js:60 Compilation.applyPluginsAsync
    [webpack-sass-lint]/[webpack]/[tapable]/lib/Tapable.js:60:69

  - Compilation.js:563 Compilation.<anonymous>
    [webpack-sass-lint]/[webpack]/lib/Compilation.js:563:8

  - Tapable.js:60 Compilation.applyPluginsAsync
    [webpack-sass-lint]/[webpack]/[tapable]/lib/Tapable.js:60:69

  - Compilation.js:525 Compilation.seal
    [webpack-sass-lint]/[webpack]/lib/Compilation.js:525:7
```