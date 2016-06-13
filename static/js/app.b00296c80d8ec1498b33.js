webpackJsonp([2,1],[function(e,t,s){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var a=s(16),n=i(a),o=s(107),l=i(o),c=s(106),r=i(c),u=s(79),d=i(u);s(6);var p=s(8),f=i(p),v=s(13),m=i(v);n["default"].use(l["default"]),n["default"].use(r["default"]);var b=function(e){return function(t){s.e(0,function(s){var i=[s(109)(e)];t.apply(null,i)}.bind(this))}},h=new l["default"]({saveScrollPosition:!0,transitionOnLoad:!0,linkActiveClass:"is-active"});n["default"].http.interceptors.push(function(){return{request:function(e){return d["default"].inc(.2),e},response:function(e){return d["default"].done(),e}}}),h.beforeEach(function(e){var t=e.next;d["default"].start(),t()}),h.afterEach(function(){d["default"].done()}),h.map({"/dashboard":{name:"Dashboard",component:m["default"]},"/charts/chartJs":{name:"ChartJs",component:b("./components/pages/Charts/ChartJs")},"/charts/chartist":{name:"Chartist",component:b("./components/pages/Charts/Chartist")},"/charts/peity":{name:"Peity",component:b("./components/pages/Charts/Peity")},"/charts/plotly":{name:"Plotly",component:b("./components/pages/Charts/Plotly")},"/ui/typography":{name:"Typography",component:b("./components/pages/UI/Typography")},"/ui/buttons":{name:"Buttons",component:b("./components/pages/UI/Buttons")},"/ui/icons":{name:"Icons",component:b("./components/pages/UI/Icons")}}),h.redirect({"/":"/dashboard"}),h.start(f["default"],"app")},,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},function(e,t,s){var i,a;s(65),i=s(42),a=s(93),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=[{link:"Dashboard",label:"Dashboard",icon:"fa-tachometer"},{label:"Charts",icon:"fa-bar-chart-o",expanded:!0,subMenu:[{link:"ChartJs",label:"ChartJs"},{link:"Chartist",label:"Chartist"},{link:"Peity",label:"Peity"},{link:"Plotly",label:"Plotly"}]},{label:"UI Features",icon:"fa-laptop",expanded:!1,subMenu:[{link:"Buttons",label:"Buttons"},{link:"Typography",label:"Typography"},{link:"Icons",label:"Icons"}]}]},function(e,t,s){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var a=s(16),n=i(a);n["default"].transition("bounce",{enterClass:"bounceIn",leaveClass:"bounceOut"}),n["default"].transition("fade",{enterClass:"fadeIn",leaveClass:"fadeOut"}),n["default"].transition("zoom",{enterClass:"zoomIn",leaveClass:"zoomOut"})},function(e,t,s){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(16),n=i(a),o=s(108),l=i(o),c=s(5),r=i(c);n["default"].use(l["default"]);var u=new l["default"].Store({state:{menu:r["default"],sidebar:{opened:!1}},mutations:{}});t["default"]=u},function(e,t,s){var i,a;s(60),i=s(27),a=s(88),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},function(e,t,s){var i,a;s(69),i=s(28),a=s(97),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},function(e,t,s){var i,a;s(72),i=s(30),a=s(100),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},function(e,t,s){var i,a;s(61),i=s(31),a=s(89),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},function(e,t,s){var i,a;s(62),i=s(32),a=s(90),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},function(e,t,s){var i,a;s(70),i=s(37),a=s(98),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},function(e,t,s){var i,a;s(64),i=s(41),a=s(92),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},,,,function(e,t,s){e.exports=s.p+"static/img/logo.5c8c1f0.png"},,,,,,,,,function(e,t,s){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(7),n=i(a),o=s(11),l=i(o),c=s(12),r=i(c),u=s(10),d=i(u),p=s(9),f=i(p);t["default"]={store:n["default"],components:{Navbar:l["default"],Sidebar:r["default"],Levelbar:d["default"],FooterBar:f["default"]}}},function(e,t){"use strict"},,function(e,t,s){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(14),n=i(a);t["default"]={vuex:{getters:{menu:function(e){return e.menu}}},components:{Breadcrumb:n["default"]},data:function(){return{defaultList:[{label:"Home",link:"Dashboard"}]}},computed:{name:function(){return this.$route.name||this.$route.title},list:function(){return this.defaultList.concat(this.find(this.name,this.menu))}},methods:{find:function(e,t){for(var s=[],i=0,a=t.length;a>i;++i){var n=t[i];if(n.label===e){s.push({label:n.label,link:n.link});break}if(n.subMenu){n.link&&s.push({lable:n.label,link:n.link});var o=this.find(e,n.subMenu);o.length?s=s.concat(o):n.link&&s.pop()}}return s}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={vuex:{getters:{sidebar:function(e){return e.sidebar}}},methods:{toggleSidebar:function(){this.sidebar.opened=!this.sidebar.opened}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={vuex:{getters:{menu:function(e){return e.menu},sidebar:function(e){return e.sidebar}}},ready:function(){window.addEventListener("DOMContentLoaded",this.handleResize),window.addEventListener("resize",this.handleResize)},methods:{toggle:function(e,t){this.hasCollapse(e)&&(t.preventDefault(),e.expanded=!e.expanded)},hasCollapse:function(e){return!!e.subMenu},isExpanded:function(e){return e.expanded},handleResize:function(e){var t=document.body.getBoundingClientRect();this.sidebar.opened=t.width-3>=768}}}},,,,,function(e,t,s){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(4),n=i(a);t["default"]={components:{Chart:n["default"]},data:function(){return{data:[300,50,100]}},computed:{chartData:function(){return{labels:["Red","Blue","Yellow"],datasets:[{data:this.data,backgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]}}},created:function(){var e=this;setInterval(function(){e.data.forEach(function(t,s){e.data.$set(s,Math.ceil(1e3*Math.random()))})},1024)}}},,,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{list:{type:Array,required:!0,"default":function(){return[]}}},methods:{isLatest:function(e){return e===this.list.length-1}}}},function(e,t,s){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(3),n=i(a),o=s(45),l=i(o),c=["line","bar","radar","polarArea","pie","doughnut"];t["default"]={mixins:[n["default"]],props:{width:{type:Number},height:{type:Number},type:{type:String,required:!0,validator:function(e){return c.indexOf(e)>-1}},data:{type:Object,required:!0,"default":function(){return{}}},options:{type:Object,"default":function(){return{}}}},ready:function(){var e=this.$el,t="va-canvas-"+this.uuid;e.setAttribute("id",t),this.chart=new l["default"](e,{type:this.type,data:this.data,options:this.options})},data:function(){return{chart:null}},watch:{data:function(e){var t=this;this.$nextTick(function(){t.chart.update()})}}}},,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},,function(e,t){},function(e,t){},,,,function(e,t){},function(e,t){},,function(e,t){},,,,,,,,,,,,,,,,function(e,t){e.exports='<div id=app> <navbar></navbar> <sidebar></sidebar> <section class=app-main> <div class="container is-fluid is-marginless app-content"> <levelbar></levelbar> <router-view class=animated transition=fade transition-mode=out-in keep-alive> </router-view> </div> </section> <footer-bar></footer-bar> </div>'},function(e,t,s){e.exports='<section class="hero is-bold app-navbar"> <div class=hero-head> <div class="container is-fluid is-marginless"> <nav class="nav is-1"> <div class=nav-left> <a class="nav-item hero-brand" href=#> <img src='+s(18)+' alt="Vue Admin Panel Framework"> <span class=vue>Vue</span><strong class=admin>Admin</strong> </a> <a class="nav-item is-hidden-tablet" @click=toggleSidebar> <span class=icon> <i class="fa fa-bars" aria-hidden=true></i> </span> </a> </div> <div class=nav-right></div> </nav> </div> </div> </section>'},function(e,t){e.exports='<aside class="menu app-sidebar animated" :class="{ \'slideInLeft\': sidebar.opened, \'slideOutLeft\': !sidebar.opened }"> <ul class=menu-list> <li v-for="item in menu"> <a v-link="{ name: item.link }" @click="toggle(item, $event)" aria-expanded="{{ isExpanded(item) }}"> <span class="icon is-small" v-if=item.icon> <i class="fa {{ item.icon }}"></i> </span> <span>{{ item.label }}</span> <span class="icon is-small is-angle" v-if=item.subMenu> <i class="fa fa-angle-down"></i> </span> </a> <ul v-if=item.subMenu :class="{ \'va-collapse\': item.subMenu }"> <li v-for="subItem in item.subMenu"> <a v-link="{ name: subItem.link }">{{ subItem.label }}</a> </li> </ul> </li> </ul> </aside>'},,function(e,t){e.exports='<ol class=breadcrumb _v-07e48542=""> <li v-for="(index, item) in list" _v-07e48542=""><span v-if=isLatest(index) class=active _v-07e48542="">{{item.label}}</span> <a v-else="" v-link="{ name: item.link }" _v-07e48542="">{{item.label}}</a> </li> </ol>'},function(e,t){e.exports='<canvas :width=width :height=height _v-0dcdd2ef=""></canvas>'},,,,function(e,t){e.exports='<footer class=footer _v-2c70981c=""> <div class=container _v-2c70981c=""> <div class="content has-text-centered" _v-2c70981c=""> <p class=social _v-2c70981c=""> <a href=https://github.com/fundon/vue-admin _v-2c70981c=""> <span class=icon _v-2c70981c=""> <i class="fa fa-github" _v-2c70981c=""></i> </span> </a> <a href=https://twitter.com/_fundon _v-2c70981c=""> <span class=icon _v-2c70981c=""> <i class="fa fa-twitter" _v-2c70981c=""></i> </span> </a> </p> <p _v-2c70981c=""><span class=icon _v-2c70981c=""><i class="fa fa-code" _v-2c70981c=""></i></span> with <span class=icon _v-2c70981c=""><i class="fa fa-heart" _v-2c70981c=""></i></span> by <a href=https://github.com/fundon _v-2c70981c="">fundon</a>.</p> <p _v-2c70981c="">Code licensed under <a href=https://github.com/fundon/vue-admin/blob/master/LICENSE _v-2c70981c="">MIT</a>.</p> </div> </div> </footer>'},function(e,t){e.exports='<div _v-2f0c4620=""> <div class="tile is-ancestor" _v-2f0c4620=""> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">One</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> </article> </div> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Two</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> </article> </div> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Three</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> </article> </div> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Four</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> </article> </div> </div> <div class="tile is-ancestor" _v-2f0c4620=""> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <h4 class=title _v-2f0c4620="">Five</h4> <div class=content _v-2f0c4620=""> <chart :type="\'doughnut\'" :data=chartData _v-2f0c4620=""></chart> </div> </article> </div> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <h4 class=title _v-2f0c4620="">Six</h4> <div class=content _v-2f0c4620=""> <chart :type="\'pie\'" :data=chartData _v-2f0c4620=""></chart> </div> </article> </div> </div> <div class="tile is-ancestor" _v-2f0c4620=""> <div class="tile is-vertical is-9" _v-2f0c4620=""> <div class=tile _v-2f0c4620=""> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Seven</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> <div class=content _v-2f0c4620=""> <p _v-2f0c4620="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> </div> </article> </div> <div class="tile is-8 is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Eight</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> <div class=content _v-2f0c4620=""> <p _v-2f0c4620="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> </div> </article> </div> </div> <div class=tile _v-2f0c4620=""> <div class="tile is-8 is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Nine</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> <div class=content _v-2f0c4620=""> <p _v-2f0c4620="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> </div> </article> </div> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <p class=title _v-2f0c4620="">Ten</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> <div class=content _v-2f0c4620=""> <p _v-2f0c4620="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p> </div> </article> </div> </div> </div> <div class="tile is-parent" _v-2f0c4620=""> <article class="tile is-child box" _v-2f0c4620=""> <div class=content _v-2f0c4620=""> <p class=title _v-2f0c4620="">Eleven</p> <p class=subtitle _v-2f0c4620="">Subtitle</p> <div class=content _v-2f0c4620=""> <p _v-2f0c4620="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p> <p _v-2f0c4620="">Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p> </div> </div> </article> </div> </div> </div>'},,function(e,t){e.exports='<nav class="level va-levelbar" _v-b0edf2ca=""> <div class=level-left _v-b0edf2ca=""> <div class=level-item _v-b0edf2ca=""> <h3 class="subtitle is-5" _v-b0edf2ca=""> <strong _v-b0edf2ca="">{{ name }}</strong> </h3> </div> </div> <div class=level-right _v-b0edf2ca=""> <breadcrumb :list=list _v-b0edf2ca=""></breadcrumb> </div> </nav>'}]);
//# sourceMappingURL=app.b00296c80d8ec1498b33.js.map