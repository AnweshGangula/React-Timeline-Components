(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./Storybook/stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./HorizontalTimeine.stories.jsx":"./Storybook/stories/HorizontalTimeine.stories.jsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./Storybook/stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./Storybook/stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./Storybook/stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./Storybook/stories/HorizontalTimeine.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__("./node_modules/react/index.js");var _storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js"),_src_components_HorizontalTimeline__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./Storybook/stories/styles.css"),__webpack_require__("./src/components/HorizontalTimeline/index.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Horizontal Timeline Component",module).addParameters({storySource:{source:'import React, { useState } from "react";\nimport { storiesOf } from "@storybook/react";\nimport "./styles.css";\nimport { HorizontalTimeline } from "../../src/components/HorizontalTimeline";\n\nconst stories = storiesOf("Horizontal Timeline Component", module);\n\nstories.add("Horizontal Timeline", () => {\n  // below timelineJSON variable is a representation of the JSON data that you can store in a separate file\n  let timelineJSON = [\n    { name: "IIT Kharagpur", title: "B.Arch", duration: "2012-2017", type: "education", category: "academic", },\n    { name: "MIT", title: "Research Assistant", duration: "2018-2019", type: "education", category: "academic", },\n    { name: "Pitcher AG", title: "Internship", duration: "May 2014 - Jun 2014", type: "experience", category: "professional", },\n    { name: "Autodesk", title: "Internship", duration: "May 2015 - Jul 2015", type: "experience", category: "professional", },\n    { name: "Agile Development Scrum Master", title: "Certification", duration: "Feb 2016", type: "education", category: "professional", },\n    { name: "Google", title: "Web Designer", duration: "Aug 2017 - Mar 2020", type: "experience", category: "professional", },\n    { name: "Amazon", title: "AR/VR Engineer", duration: "Mar 2020 - May 2021", type: "experience", category: "professional", },\n    { name: "Meta", title: "Digital Reality Developer", duration: "Jun 2021 - present", type: "experience", category: "professional", },\n  ];\n\n  return <HorizontalTimeline timelineData={timelineJSON} />;\n});\n',locationsMap:{"horizontal-timeline":{startLoc:{col:12,line:8},endLoc:{col:1,line:22},startBody:{col:35,line:8},endBody:{col:1,line:22}}}}}).add("Horizontal Timeline",(function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_HorizontalTimeline__WEBPACK_IMPORTED_MODULE_3__.a,{timelineData:[{name:"IIT Kharagpur",title:"B.Arch",duration:"2012-2017",type:"education",category:"academic"},{name:"MIT",title:"Research Assistant",duration:"2018-2019",type:"education",category:"academic"},{name:"Pitcher AG",title:"Internship",duration:"May 2014 - Jun 2014",type:"experience",category:"professional"},{name:"Autodesk",title:"Internship",duration:"May 2015 - Jul 2015",type:"experience",category:"professional"},{name:"Agile Development Scrum Master",title:"Certification",duration:"Feb 2016",type:"education",category:"professional"},{name:"Google",title:"Web Designer",duration:"Aug 2017 - Mar 2020",type:"experience",category:"professional"},{name:"Amazon",title:"AR/VR Engineer",duration:"Mar 2020 - May 2021",type:"experience",category:"professional"},{name:"Meta",title:"Digital Reality Developer",duration:"Jun 2021 - present",type:"experience",category:"professional"}]})}))}.call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./Storybook/stories/styles.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./Storybook/stories/styles.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./Storybook/stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./Storybook/stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./Storybook/stories/styles.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,"#parent-timeline{\n    background-color: #212730;\n    color: white;\n}",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/HorizontalTimeline/HorizontalTimeline.css":function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_GET_URL_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),___CSS_LOADER_URL_IMPORT_0___=__webpack_require__("./src/assets/Work.svg"),___CSS_LOADER_URL_IMPORT_1___=__webpack_require__("./src/assets/Education.svg");exports=___CSS_LOADER_API_IMPORT___(!1);var ___CSS_LOADER_URL_REPLACEMENT_0___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);exports.push([module.i,':root {\n  --light-background: hsl(195, 55%, 53%);\n  --dark-background: hsl(216, 18%, 16%);\n  --text-color: hsl(0, 0%, 50%);\n}\n\n/* TODO: Highlight latest experience */\n.themeLight {\n  --dark-text-clr: var(--dark-background);\n}\n\n.themeDark {\n  --dark-text-clr: var(--light-background);\n}\n\n#parent-timeline,\n::after,\n::before {\n  --transp-background: hsla(0, 0%, 80%, 0.2);\n  --totalHeight: 300px;\n  --hBarHeight: 20px;\n  --itemOffset: 60px;\n  --vbarOffset: 55px;\n  --flagScale: 0;\n  --flagColor: transparent;\n\n  --vbarHeight: calc(\n    ((var(--totalHeight) - var(--hBarHeight)) / 2) -\n      (var(--itemOffset) + var(--vbarOffset)) + var(--hBarHeight)\n  );\n}\n\n/* ------------------------------------ UPDATE VARIABLE ON HOVER -------------------- */\n#parent-timeline:hover {\n  --itemOffset: 40px;\n  --vbarOffset: 0px;\n  --flagScale: 1;\n  --flagColor: var(--transp-background);\n}\n\n#parent-timeline {\n  height: var(--totalHeight);\n  position: relative;\n}\n\n.experience:before {\n  display: block;\n  content: " ";\n  background-color: var(--light-background);\n  -webkit-mask-image: url('+___CSS_LOADER_URL_REPLACEMENT_0___+");\n  mask-image: url("+___CSS_LOADER_URL_REPLACEMENT_0___+');\n  /* background-size: 22px 22px; */\n  height: 22px;\n  width: 22px;\n}\n.education:before {\n  display: block;\n  content: " ";\n  background-color: var(--light-background);\n  -webkit-mask-image: url('+___CSS_LOADER_URL_REPLACEMENT_1___+");\n  mask-image: url("+___CSS_LOADER_URL_REPLACEMENT_1___+');\n  /* background-size: 22px 22px; */\n  height: 22px;\n  width: 22px;\n}\n\n.flagPole-offset {\n  position: relative;\n  transition: top 200ms ease-in-out;\n}\n\n.flagPole {\n  background: var(--transp-background);\n  /* margin: 3px; */\n  height: var(--vbarHeight);\n  /* width: 20px;\n      align-self: center;\n      position: relative;  */\n  transition: 200ms ease-in-out;\n}\n\n.flagPole:before {\n  margin: 5px;\n  display: block;\n}\n\n#timeline-bar {\n  background: var(--transp-background);\n  width: 100%;\n  height: 20px;\n  /* margin-top: 10px; */\n  position: absolute;\n  top: calc(50% - (var(--hBarHeight) / 2));\n  display: flex;\n  justify-content: space-between;\n  font-size: smaller;\n}\n\n#timeline-bar p {\n  margin: auto 0;\n}\n\n#timeline-elements {\n  height: 100%;\n  padding: 0 10px;\n  display: flex;\n  gap: 20px;\n  justify-content: space-between;\n  text-align: right;\n  overflow: overlay;\n  white-space: nowrap;\n  /* position: relative; */\n}\n\n.timelineItem {\n  display: flex;\n  /* margin: 0 10px; */\n  /* margin-bottom: 40px; */\n  position: relative;\n  /* top: -2px; */\n  transition: 200ms ease-in-out;\n}\n\n.flagContents {\n  position: relative;\n}\n\n.flagContents > * {\n  margin: 5px;\n}\n\n.flagContents::before {\n  content: ".";\n  font-size: 0;\n  background: transparent;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  right: 0;\n  border-radius: 10px 0 0 10px;\n  transition: 200ms ease-in-out;\n  transform: scale(0);\n  transform-origin: 100% 0;\n}\n#parent-timeline:hover .flagContents::before {\n  transform: scale(1);\n  background: var(--transp-background);\n}\n.timelineItem > .flagPole-offset {\n  display: flex;\n}\n\n/* Dynamic Calculation start (odd even pair) */\n\n.timelineItem:nth-child(odd) {\n  top: var(--itemOffset);\n  align-self: flex-start;\n  align-items: flex-start;\n}\n\n.timelineItem:nth-child(even) {\n  bottom: var(--itemOffset);\n  align-self: flex-end;\n  align-items: flex-end;\n}\n\n.timelineItem:nth-child(odd) .flagPole-offset {\n  align-self: baseline;\n}\n\n.timelineItem:nth-child(even) .flagPole-offset {\n  align-self: flex-end;\n}\n\n.timelineItem:nth-child(odd) .flagPole {\n  /* display: flex;\n  align-items: baseline; */\n  position: relative;\n  top: var(--vbarOffset);\n}\n\n.timelineItem:nth-child(even) .flagPole {\n  display: flex;\n  align-items: flex-end;\n  position: relative;\n  bottom: var(--vbarOffset);\n}\n',""]),module.exports=exports},"./src/assets/Education.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Education.822db4a1.svg"},"./src/assets/Work.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Work.66cbe79a.svg"},"./src/components/HorizontalTimeline/HorizontalTimeline.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/HorizontalTimeline/HorizontalTimeline.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/HorizontalTimeline/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return HorizontalTimeline_HorizontalTimeline_HorizontalTimeline}));__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./src/components/HorizontalTimeline/HorizontalTimeline.css");var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var HorizontalTimeline_HorizontalTimeline_HorizontalTimeline=function HorizontalTimeline(props){function TimelineElements(props){var entry=props.entry;return Object(jsx_runtime.jsxs)("div",{className:"timelineItem",style:{right:"0px"},children:[Object(jsx_runtime.jsxs)("div",{className:"flagContents",children:[Object(jsx_runtime.jsx)("p",{className:entry.category,children:Object(jsx_runtime.jsx)("b",{children:entry.title})}),Object(jsx_runtime.jsx)("p",{children:entry.name}),Object(jsx_runtime.jsx)("p",{children:entry.duration})]}),Object(jsx_runtime.jsx)("div",{className:"flagPole-offset",children:Object(jsx_runtime.jsx)("div",{className:"flagPole "+entry.type})})]})}var timeline=props.timelineData.map((function(entry,index){return Object(jsx_runtime.jsx)(TimelineElements,{entry:entry},index)}));return Object(react.useEffect)((function(){var move=0,offset=0,animate_timeline=function animate_timeline(){var timelineElements=document.getElementById("timeline-elements").childNodes;timelineElements=_toConsumableArray(timelineElements),0===move?(timelineElements.forEach((function(currentValue,currentIndex,listObj){currentValue.style.right=offset+"px",offset+=20})),offset=0,move=1):(timelineElements.forEach((function(currentValue,currentIndex,listObj){currentValue.style.right="0px"})),move=0)},timelineDiv=document.getElementById("parent-timeline");timelineDiv.onmouseenter=animate_timeline,timelineDiv.onmouseleave=animate_timeline})),Object(jsx_runtime.jsxs)("div",{id:"parent-timeline",className:"themeLight",children:[Object(jsx_runtime.jsxs)("div",{id:"timeline-bar",children:[Object(jsx_runtime.jsx)("p",{children:"🞀 Past"}),Object(jsx_runtime.jsx)("p",{children:"Present 🞂"})]}),Object(jsx_runtime.jsx)("div",{id:"timeline-elements",children:timeline})]})};HorizontalTimeline_HorizontalTimeline_HorizontalTimeline.displayName="HorizontalTimeline",HorizontalTimeline_HorizontalTimeline_HorizontalTimeline.__docgenInfo={description:"",methods:[],displayName:"HorizontalTimeline"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HorizontalTimeline/HorizontalTimeline.js"]={name:"HorizontalTimeline",docgenInfo:HorizontalTimeline_HorizontalTimeline_HorizontalTimeline.__docgenInfo,path:"src/components/HorizontalTimeline/HorizontalTimeline.js"})},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);