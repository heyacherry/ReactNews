### Practise
---
- Env Set up
  1. ```npm init```
  2. ```npm i webpack --save-dev```
     ```npm i webpack-dev-server --save-dev```
  3. ```npm install --save react react-dom```
  4. use React with Babel to enable the use of ES6 and JSX in your JavaScript code. <br>
     ```npm install babel-loader --save-dev```
  5. ```npm i babel-loader babel-core babel-preset-es2015 babel-preset-react --save-dev```(check here)[https://babeljs.io/docs/setup/#installation]
  6. ```npm i css-loader style-loader --save-dev```<br>安装样式加载器
  7. ```npm install --save-dev babel-plugin-react-html-attrs```<br> Transforms JSX class attributes into className and for attributes into htmlFor, allowing you to copy and paste HTML into your React components without having to manually edit these particular attributes each time.<br>
  babel插件,可以在JSX的html标签里直接写```class```,这样就可以直接拷贝html
  8. ```loader: "style-loader!css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]"```<br>
     定制哈希类名  
  9. update webpack.config.js && pacjage.json

  ---
  10. Ant Design 接入
      - ```npm add antd --save```
      - ```import css from 'antd/dist/antd.css';```

  11. 接口测试
      - Postman

  12. react-responsive
      - [ Media queries in react for responsive design. ](https://github.com/contra/react-responsive)
      - >= IE6*
      - 用于view port query,应用于pc/mobile两套代码的情景
  
  13. pc/mobile两套代码的应用
      -  响应式页面(media query),较好地实现响应式设计提高用户体验
      -  维护两套代码(js/css),劳动量较大


- ERROR
  1. ```Uncaught Error: Invariant Violation: _registerComponent(...): Target container is not a DOM element.```<br>
     ROOT CAUSE: By the time script is executed, document element is not available.[solution](https://stackoverflow.com/questions/26566317/invariant-violation-registercomponent-target-container-is-not-a-dom-elem)<br>
     ```<script>```应该放到目标DOM节点的后面

  2. ```Warning: Unknown DOM property class. Did you mean className?```<br>
     ROOT CAUSE: JSX中的HTML标签里的属性```class```应该写成```className```,才会被识别
   
  3. ```Warning: "There are multiple modules with names that only differ in casing" ```
     [引入文件大小写不一致](https://github.com/AngularClass/angular-starter/issues/926)