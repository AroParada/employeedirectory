(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{44:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(3),c=n(13),a=n.n(c),l=n(14),i=n(15),o=n(16),j=n(20),h=n(19),d=n(17),u=n.n(d),b={getRandomUsers:function(){return u.a.get("https://randomuser.me/api/?results=20&nat=us")}};var m=function(e){return Object(r.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col",children:Object(r.jsx)("h1",{children:"Employee Directory \ud83d\udcd1"})})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col align-self-center",children:Object(r.jsx)("h6",{children:" Click on the carrot to filter by last name or use the search box to narrow your results"})})})]})})};var O=function(e){return Object(r.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(r.jsxs)("form",{className:"form-inline",htmlFor:"search",children:["Search:",Object(r.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control mr-sm-2",placeholder:"Search for employee ",id:"search"}),Object(r.jsx)("br",{})]})})},x=function(e){return console.log(e),Object(r.jsx)(r.Fragment,{children:e.results.map((function(e,t){var n=e.picture.thumbnail,s=e.dob.date,c=e.email,a=e.name,l=a.first,i=a.last,o=e.phone;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("img",{alt:e,className:"img-fluid",src:[n]})}),Object(r.jsx)("td",{children:[l,i].join(" ")}),Object(r.jsxs)("td",{children:[" ",o," "]}),Object(r.jsxs)("td",{children:[" ",c," "]}),Object(r.jsxs)("td",{children:[" ",[s.slice(0,10)].join(" ")," "]})]},t)}))})};var p=function(e){return Object(r.jsx)("main",{className:"wrapper",children:e.children})},f=(n(44),n(51)),v=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={results:[],search:""},e.handleInputChange=function(t){t.preventDefault();var n=t.target.name,r=t.target.value;e.setState(Object(l.a)({},n,r))},e.sortByLastName=function(){var t=e.state.results.sort((function(e,t){return t.name.last>e.name.last?-1:e.name.last>t.name.last?1:0}));"descending"===e.state.sortOrder?(t.reverse(),e.setState({sortOrder:"ascending"})):e.setState({sortOrder:"descending"}),e.setState({results:t})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.getRandomUsers().then((function(t){return e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{}),Object(r.jsx)(O,{handleInputChange:this.handleInputChange}),Object(r.jsx)(p,{children:Object(r.jsxs)(f.a,{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Image"}),Object(r.jsxs)("th",{children:["Name",Object(r.jsx)("span",{className:"downArrow",onClick:this.sortByLastName})]}),Object(r.jsx)("th",{children:"Phone"}),Object(r.jsx)("th",{children:"Email"}),Object(r.jsx)("th",{children:"DOB"})]})}),Object(r.jsx)("tbody",{children:Object(r.jsx)(x,{results:this.state.results})})]})})]})}}]),n}(s.Component);var g=function(){return Object(r.jsx)("div",{className:"app",children:Object(r.jsx)(v,{})})};n(47),n(48);a.a.render(Object(r.jsx)(g,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.66f14242.chunk.js.map