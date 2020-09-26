(this["webpackJsonptrial-assignment"]=this["webpackJsonptrial-assignment"]||[]).push([[0],{162:function(e,t,a){},311:function(e){e.exports=JSON.parse('{"routers":{"landing":"welcome"},"landing":{"title":"Welcome to UpWork Trial Assignment - Marco","input":"Input","output":"Output"},"input":{"user":"User","name":"Name (LastName FirstName)","gender":"Gender","age":"Age","email":"Email address","country":"Country","city":"City","req":{"required":"This field is required.","alpha":"This field must contain alpha characters","email":"Wrong email address format."},"submit":"Continue","data":"Data","upload":"Upload csv file","date":"Date","input_csv":"Input CSV data","fulltext":"Fulltext search","sortBy":"Sort by","sortOrder":"Order"}}')},313:function(e,t,a){var n=a(565);n.keys().forEach((function(t){var a=n(t);Object.keys(a).forEach((function(t){e.exports[t]=a[t]}))}))},360:function(e,t,a){e.exports=a(844)},52:function(e,t,a){"use strict";a.r(t),a.d(t,"INFO",(function(){return r})),a.d(t,"ERROR",(function(){return c})),a.d(t,"WARNING",(function(){return o})),a.d(t,"SUCCESS",(function(){return i})),a.d(t,"DISMISS",(function(){return l})),a.d(t,"CLEAR",(function(){return s})),a.d(t,"notificationError",(function(){return u})),a.d(t,"notificationSuccess",(function(){return m})),a.d(t,"notificationInfo",(function(){return d})),a.d(t,"notificationWarning",(function(){return f})),a.d(t,"notificationDismiss",(function(){return p}));var n=a(64),r="NOTIFICATIONS/INFO",c="NOTIFICATIONS/ERROR",o="NOTIFICATIONS/WARNING",i="NOTIFICATIONS/SUCCESS",l="NOTIFICATIONS/DISMISS",s="NOTIFICATIONS/CLEAR",u=function(e){return{type:c,payload:{id:"noti-error-".concat(Object(n.a)()),level:"error",message:e}}},m=function(e){return{type:i,payload:{id:"noti-success-".concat(Object(n.a)()),level:"success",message:e}}},d=function(e){return{type:r,payload:{id:"noti-info-".concat(Object(n.a)()),level:"info",message:e}}},f=function(e){return{type:o,payload:{id:"noti-warning-".concat(Object(n.a)()),level:"warning",message:e}}},p=function(e){return{type:l,payload:e}}},552:function(e,t,a){var n={"./input/reducer.js":553,"./notification/reducer.js":555};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=552},553:function(e,t,a){"use strict";a.r(t),a.d(t,"initialState",(function(){return c}));var n=a(51),r=a(62),c={loading:!1,error:null,data:{submitted:!1,name:null,gender:null,age:null,email:null,country:null,city:"",date:"",csv_input:null,csv_array:[]}};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0,a=t.type,o=t.payload;switch(console.log("reducer",a,o),a){case r.SET_CURENT_INPUT:return Object(n.a)({},e,{data:Object(n.a)({},o)});default:return e}}},555:function(e,t,a){"use strict";a.r(t);var n=a(330),r=a(51),c=a(52),o={notifications:[]};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,a=t.type,i=t.payload;switch(a){case c.ERROR:case c.SUCCESS:case c.WARNING:case c.INFO:return Object(r.a)({},e,{notifications:[].concat(Object(n.a)(e.notifications),[i])});case c.DISMISS:return Object(r.a)({},e,{notifications:e.notifications.filter((function(e){return e.id!==i}))});case c.CLEAR:return Object(r.a)({},o)}return Object(r.a)({},e)}},565:function(e,t,a){var n={"./input/actions.js":62,"./notification/actions.js":52};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=565},566:function(e,t,a){},568:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t),a.d(t,"SET_CURENT_INPUT",(function(){return o})),a.d(t,"addInputResult",(function(){return i}));var n=a(23),r=a.n(n),c=a(35),o="SET_CURENT_INPUT";function i(e){return function(){var t=Object(c.a)(r.a.mark((function t(a,n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"SET_CURENT_INPUT",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}},64:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return c}));var n=a(71);function r(e,t){var a=e.split("/").filter((function(e){return e.length>0})),r=n.a[t].routers,c=Object.keys(r);return(a=a.map((function(e){return c.indexOf(e)>-1?r[e]:e}))).reduce((function(e,t){return"".concat(e,"/").concat(t)}),"/".concat(t))}var c=function(){var e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return"".concat(e()).concat(e(),"-").concat(e())}},71:function(e,t,a){"use strict";var n=a(311),r={en:n};t.a=r},842:function(e,t,a){},844:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(19),c=a(20),o=a(21),i=a(1),l=a.n(i),s=a(26),u=a.n(s),m=a(93),d=a(303),f=a(15),p=a(204),v=a(304),h=a.n(v),b=a(305),g=a(306),E=a.n(g),O=a(853),y=a(307),N=a(308),j=a(309),w={form:O.a,intl:m.intlReducer,routing:N.routerReducer,thunk:y.reducer},S=a(552);S.keys().forEach((function(e){var t=E()(e.replace(/\.\/(.+)\/.+$/,"$1"));w[t]=S(e).default}));var C=Object(j.composeResetReducer)(Object(f.c)(w)),k={key:"upwork",storage:h.a,whitelist:[""]},x=Object(p.a)(k,C),I=Object(f.d)(x,Object(f.a)(b.a)),_=Object(p.b)(I),R=a(25),T=a(17),D=a(312),F=a.n(D),M=a(313),A=(a(566),function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).updateNotifications=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=e.props,n=a.notifications,r=a.dismissNotification,c=a.intl.messages,o=t&&t.map((function(e){return e.id})),i=n&&n.map((function(e){return e.id}));t&&t.filter((function(e){return i.indexOf(e.id)<0})).map((function(t){return e.notificationSystem.removeNotification(t.id)})),n&&n.filter((function(e){return o.indexOf(e.id)<0})).map((function(e){return{uid:e.id,title:e.translatedTitle||e.title||c["notification_fallback_title_".concat(e.level)],message:e.translatedMessage||e.message||c["notification_fallback_message_".concat(e.level)],level:e.level,position:"tc",autoDismiss:6,onRemove:function(){return r(e.id)}}})).filter((function(e){return e.message})).map((function(t){return e.notificationSystem.addNotification(t)}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.notifications&&this.updateNotifications()}},{key:"componentDidUpdate",value:function(e){this.props.notifications&&this.props.notifications!==e.notifications&&this.updateNotifications(e.notifications)}},{key:"getNotificationMessage",value:function(e){}},{key:"render",value:function(){var e=this;return this.props.notifications?l.a.createElement(F.a,{ref:function(t){e.notificationSystem=t},style:!1}):null}}]),a}(l.a.Component)),B=Object(T.c)(Object(R.connect)((function(e){return{notifications:e.notification.notifications}}),(function(e){return Object(f.b)({dismissNotification:M.notificationDismiss},e)}))(A)),U=a(854),P=a(134),L=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.content,a=Object(P.a)(e,["content"]);return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row flex-xl-nowrap"},l.a.createElement(t,a)))}}]),a}(l.a.Component),q=Object(T.c)(Object(R.connect)((function(){return{}}))(L)),W=function(e){e.locale;var t=e.component,a=Object(P.a)(e,["locale","component"]);return l.a.createElement(U.a,Object.assign({},a,{render:function(e){return l.a.createElement(q,Object.assign({},e,{content:t}))}}))},G=a(71),z=a(23),K=a.n(z),Y=a(35),H=a(78),J=a(314),V=a.n(J),$=a(98),Z=a(316),Q=a.n(Z),X=a(315),ee=a.n(X),te=["Russia","UK","Germany","Spain","Italy","Ukraine","France","Romania","Hungary","Belarus","Poland","Serbia","Austria","Czech Republic","Bulgaria","Croatia","Latvia","Sweden","Netherlands","Moldova","Lithuania","Portugal","Finland","Bosnia","Norway","Denmark"],ae=["Moscow","LONDON","St Petersburg","BERLIN","MADRID","ROMA","KIEV","PARIS","Bucharest","BUDAPEST","Hamburg"],ne=["male","female"],re=(a(568),a(569),function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).onChangeInput=function(e){r.setState(Object(H.a)({},"".concat(e.target.name),e.target.value))},r.onChangeSelect=function(e,t){r.setState(Object(H.a)({},"".concat(t),e))},r.onChangeDatePicker=function(e,t){Object.keys(r.state).includes(t)&&r.setState(Object(H.a)({},"".concat(t),e))},r.openDatepicker=function(e){r["_ref_calendar_"+e].setOpen(!0)},r.setCsvData=function(e,t){e&&e.length&&r.setState({csv_input:e.join("\r\n"),csv_array:e})},r.submitForm=function(){r.validator.allValid()?r.props.onSubmit(r.state):(r.validator.showMessages(),r.forceUpdate())},r.state={name:"",gender:{},age:{},email:"",country:{},city:{},date:"",csv_file:"",csv_input:"",csv_array:[]},r}return Object(r.a)(a,[{key:"componentWillMount",value:function(){var e=this.props.intl,t=e.locale,a=e.messages;this.validator=new V.a({autoForceUpdate:this,className:"uk-text-danger",locale:"".concat(t),messages:{required:a.input.req.required,alpha:a.input.req.alpha,email:a.input.req.email},validators:{name:{message:"The name must be composed from first_name and last_name separated by space.",rule:function(e,t,a){return a.helpers.testRegex(e,/^[A-Z][a-z]+[\s|,][A-Z][a-z]{1,19}$/i)&&-1===t.indexOf(e)},required:!0}}})}},{key:"render",value:function(){var e=this,t=this.props.intl.messages;console.log("MESSAGES",t);for(var a=this.state,n=a.name,r=a.gender,c=a.age,o=a.email,i=a.country,s=a.city,u=a.date,m=(a.csv_file,a.csv_input),d=[],f=0;f<=120;f++)d.push({value:f,label:f});var p=[];te&&te.length&&te.forEach((function(e){p.push({value:e,label:e})}));var v=[];ne&&ne.length&&ne.forEach((function(e){v.push({value:e,label:e})}));var h=[];return ae&&ae.length&&ae.forEach((function(e){h.push({value:e,label:e})})),l.a.createElement("form",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h2",null,t.input.user))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 col-md-8"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"name",className:"form-control",value:n,placeholder:t.input.name,onChange:function(t){return e.onChangeInput(t)},onBlur:function(){return e.validator.showMessageFor("name")}}),this.validator.message("name",n,"name"))),l.a.createElement("div",{className:"col-sm-6 col-md-2"},l.a.createElement("div",{className:"form-group"},l.a.createElement($.a,{name:"gender",classNamePrefix:"select",options:v,onChange:function(t){return e.onChangeSelect(t,"gender")},onBlur:function(){return e.validator.showMessageFor("gender")},placeholder:t.input.gender}),this.validator.message("gender",r,"required"))),l.a.createElement("div",{className:"col-sm-6 col-md-2"},l.a.createElement("div",{className:"form-group"},l.a.createElement($.a,{name:"age",classNamePrefix:"select",options:d,onChange:function(t){return e.onChangeSelect(t,"age")},onBlur:function(){return e.validator.showMessageFor("age")},placeholder:t.input.age}),this.validator.message("age",c,"required")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 col-md-8"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",name:"email",className:"form-control",value:o,placeholder:t.input.email,onChange:function(t){return e.onChangeInput(t)},onBlur:function(){return e.validator.showMessageFor("email")}}),this.validator.message("email",o,"required|email"))),l.a.createElement("div",{className:"col-sm-6 col-md-2"},l.a.createElement("div",{className:"form-group"},l.a.createElement($.a,{name:"country",classNamePrefix:"select",options:p,onChange:function(t){return e.onChangeSelect(t,"country")},onBlur:function(){return e.validator.showMessageFor("country")},placeholder:t.input.country}),this.validator.message("country",i,"required"))),l.a.createElement("div",{className:"col-sm-6 col-md-2"},l.a.createElement("div",{className:"form-group"},l.a.createElement($.a,{name:"city",classNamePrefix:"select",options:h,onChange:function(t){return e.onChangeSelect(t,"city")},onBlur:function(){return e.validator.showMessageFor("city")},placeholder:t.input.city}),this.validator.message("city",s,"required")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h2",null,t.input.data))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 col-md-10"},l.a.createElement("div",{className:"form-group"},l.a.createElement(ee.a,{onFileLoaded:function(t,a){return e.setCsvData(t,a)}}))),l.a.createElement("div",{className:"col-sm-6 col-md-2"},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"uk-flex uk-flex-column"},l.a.createElement("div",{className:"uk-flex uk-flex-row uk-flex-middle date-select"},l.a.createElement(Q.a,{name:"date",className:"form-control",selected:u,placeholderText:t.input.date,onChange:function(t){return e.onChangeDatePicker(t,"date")},value:u,dateFormat:"dd-MM-yyyy",onBlur:function(){return e.validator.showMessageFor("date")},ref:function(t){return e._ref_calendar_date=t}}),l.a.createElement("label",{className:"date-label",onClick:function(){return e.openDatepicker("date")}},l.a.createElement("span",{"uk-icon":"icon: calendar; ratio: 1.5"}))),this.validator.message("date",u,"required"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{rows:"30",name:"csv_input",className:"form-control",value:m,placeholder:t.input.csv_input,onChange:function(t){return e.onChangeInput(t)},onBlur:function(){return e.validator.showMessageFor("csv_input")}}),this.validator.message("csv_input",m,"required")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"btns",onClick:function(){return e.submitForm()}},t.input.submit)))))}}]),a}(l.a.Component)),ce=Object(T.c)(Object(R.connect)((function(e){return{}}),(function(e){return Object(f.b)({},e)}))(re)),oe=a(318),ie=a.n(oe),le=a(62),se=(a(162),function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).fullTextSearch=function(){var e=Object(Y.a)(K.a.mark((function e(t){var a,n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.props.data,n=[],!(t.length>=3)){e.next=9;break}return r.setState({loading:!0}),e.next=6,Object.values(a).forEach((function(e,a){var r=!1;0===a?n.push(e):e.length&&Object.values(e).forEach((function(a){if(a&&a.toString().toLowerCase().indexOf(t)>-1){if(r)return;r=!0,n.push(e)}}))}));case 6:r.setState({filteredData:n,isFiltered:!0,loading:!1}),e.next=10;break;case 9:r.setState({data:r.props.data,isFiltered:!1,loading:!1});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.sortOrder=function(){var e=Object(Y.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.setState({sortOrder:t},Object(Y.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.sortData();case 2:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.sortBy=function(){var e=Object(Y.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.setState({sortBy:t},Object(Y.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.sortData();case 2:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.sortData=function(){var e=r.props,t=e.data,a=(e.intl.messages,r.state),n=a.filteredData,c=a.isFiltered,o=a.sortBy,i=a.sortOrder,l=[],s=(l=!c&&t?t:n)[0].indexOf(o.charAt(0).toUpperCase()+o.slice(1)),u=[];u="asc"===i?l.slice(1).sort((function(e,t){return e[s].toLowerCase()>t[s].toLowerCase()?1:-1})):l.slice(1).sort((function(e,t){return t[s].toLowerCase()>e[s].toLowerCase()?1:-1}));var m=l.slice(0,1).concat(u);r.setState({isFiltered:!0,filteredData:m})},r.state={filteredData:[],isFiltered:!1,currPage:1,totalRows:31,loading:!1,sortOrder:"asc",sortBy:""},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.intl.messages,r=this.state,c=r.filteredData,o=r.isFiltered,i=r.currPage,s=r.totalRows,u=r.sortOrder,m=r.sortBy,d=[],f=(d=!o&&a?a:c)&&d.length?d[0]:[],p=d&&d.length?d.slice(i,i*s+1):[];return l.a.createElement(l.a.Fragment,null,l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"search",name:"fullTextSearch",onChange:function(t){return e.fullTextSearch(t.target.value)},placeholder:n.input.fulltext})),l.a.createElement("td",null,l.a.createElement("select",{className:"select",name:"sortBy",onChange:function(t){return e.sortBy(t.target.value)},placeholder:n.input.sortBy,value:m},l.a.createElement("option",{value:"none"},"Sort by"),f?f.map((function(e,t){return l.a.createElement("option",{key:"option-".concat(t),value:"".concat(e.toLowerCase())},e)})):"")),l.a.createElement("td",null,l.a.createElement("select",{className:"select",name:"sortOrder",onChange:function(t){return e.sortOrder(t.target.value)},placeholder:n.input.sortOrder,value:u},l.a.createElement("option",{value:"asc"},"Asc"),l.a.createElement("option",{value:"desc"},"Desc")))))),l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,f?f.map((function(e,t){return l.a.createElement("th",{key:"th-".concat(t),scope:"col"},e)})):"")),l.a.createElement("tbody",null,p?p.map((function(e,t){return l.a.createElement("tr",{key:"row-".concat(t)},e?e.map((function(e,a){return l.a.createElement("td",{key:"col-".concat(t,"-").concat(a)},e)})):"")})):"")),l.a.createElement("div",{className:"pagination"}))}}]),a}(l.a.Component)),ue=Object(T.c)(Object(R.connect)(null,null)(se)),me=a(45),de=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.x,a=e.y,n=e.payload;return l.a.createElement("g",{transform:"translate(".concat(t,",").concat(a,")")},l.a.createElement("text",{x:0,y:0,dx:-5,dy:2,textAnchor:"end",transform:"rotate(-90)",className:"customized-y-axis-tick-text"},"".concat(n.value)))}}]),a}(l.a.Component),fe=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.data,t=[];return e&&e.length&&(e[0][0],e[0][1],e.slice(1).forEach((function(e){t.push({name:e[0],product:e[0],price:e[1]})}))),l.a.createElement("div",{style:{width:"100%",height:400}},l.a.createElement(me.d,null,l.a.createElement(me.b,{data:t,margin:{top:10,right:30,left:0,bottom:150}},l.a.createElement(me.f,{dataKey:"name",interval:0,tickSize:3,tick:l.a.createElement(de,null)},l.a.createElement(me.c,{value:"Product",position:"insideBottom",angle:0,style:{textAnchor:"middle"},offset:-120})),l.a.createElement(me.g,{type:"number"},l.a.createElement(me.c,{value:"Price",position:"insideLeft",angle:-90,style:{textAnchor:"middle"}})),l.a.createElement(me.e,null),l.a.createElement(me.a,{dataKey:"price",fill:"#82ca9d"}))))}}]),a}(l.a.Component),pe=Object(T.c)(Object(R.connect)(null,null)(fe)),ve=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.input,t=ie()(e.date).format("YYYY-MM-DD"),a=e.csv_array?e.csv_array:[];return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 d-flex justify-content-end"},e.name,", ",e.gender&&e.gender.label?e.gender.label:"",", ",e.age&&e.age.label?e.age.label:"")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 col-md-4"},t),l.a.createElement("div",{className:"col-sm-12 col-md-10"},l.a.createElement("div",{className:"d-flex justify-content-end"},e.city&&e.city.label?e.city.label:""," ",e.country&&e.country.label?e.country.label:""," ",e.email))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 col-md-6"},l.a.createElement(ue,{data:a})),l.a.createElement("div",{className:"col-sm-12 col-md-6"},l.a.createElement(pe,{data:a}))))}}]),a}(l.a.Component),he=Object(T.c)(Object(R.connect)((function(e){return{input:e.input.data}}),(function(e){return Object(f.b)({addInputResult:le.addInputResult},e)}))(ve)),be=(a(842),function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleSubmit=function(){var e=Object(Y.a)(K.a.mark((function e(t){var a;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.props.addInputResult,t.submitted){e.next=8;break}return e.next=4,a(t);case 4:e.sent,r.setState({currentTab:"output"}),e.next=8;break;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={currentTab:"input"},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.intl.messages,t=this.state.currentTab;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h1",{className:"tagline"},e.landing.title)),l.a.createElement("div",{className:"row"},l.a.createElement("ul",{className:"nav nav-pills mb-12",id:"pills-tab",role:"tablist"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link ".concat("input"===t?"active show":""),id:"pills-input-tab","data-toggle":"pill",href:"#pills-input",role:"tab","aria-controls":"pills-home","aria-selected":"true"},e.landing.input)),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link ".concat("output"===t?"active show":""),id:"pills-output-tab","data-toggle":"pill",href:"#pills-output",role:"tab","aria-controls":"pills-output","aria-selected":"false"},e.landing.output))),l.a.createElement("div",{className:"tab-content",id:"pills-tabContent"},l.a.createElement("div",{className:"tab-pane fade ".concat("input"===t?"active show":""),id:"pills-input",role:"tabpanel","aria-labelledby":"pills-input-tab"},l.a.createElement(ce,{onSubmit:this.handleSubmit})),l.a.createElement("div",{className:"tab-pane fade ".concat("output"===t?"active show":""),id:"pills-output",role:"tabpanel","aria-labelledby":"pills-output-tab"},l.a.createElement(he,null))))))}}]),a}(l.a.Component)),ge=Object(T.c)(Object(R.connect)((function(e){return{input:e.input.data}}),(function(e){return Object(f.b)({addInputResult:le.addInputResult},e)}))(be)),Ee=a(64),Oe=Object(T.c)((function(e){var t=e.intl;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h1",null,"Not found"),l.a.createElement("div",{className:"not-found-medium"},l.a.createElement("p",{className:"back-home"},l.a.createElement("a",{href:Object(Ee.b)("/",t.locale)},"Home")))))})),ye=function(e,t){return l.a.createElement(U.b,{history:e},l.a.createElement(U.c,null,l.a.createElement(W,{exact:!0,path:"/",component:ge}),",",function(e){var t=[];return Object.keys(G.a).forEach((function(a){var n={store:e,locale:a};t=t.concat([l.a.createElement(W,Object.assign({key:"".concat(a,"-home-route")},n,{exact:!0,path:"/".concat(a),component:ge}))])})),t}(t),l.a.createElement(W,{exact:!0,path:"*",component:Oe}),","))},Ne=a(329),je=Object(Ne.a)();a(843);I.dispatch(Object(m.updateIntl)({locale:"en",messages:G.a.en}));var we=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement(m.Provider,{store:I},l.a.createElement(d.a,{loading:null,persistor:_},l.a.createElement("div",null,l.a.createElement(B,null),ye(je))))}}]),a}(l.a.Component);u.a.render(l.a.createElement(we,null),document.getElementById("root"))}},[[360,1,2]]]);
//# sourceMappingURL=main.5c219744.chunk.js.map