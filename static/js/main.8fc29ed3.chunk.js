(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),i=n(3),o=n.n(i),s=(n(14),n(4)),d=n(5),u=n(6),b=n(8),j=n(7);function l(e){var t=e.message;return Object(c.jsx)("span",{children:t})}function h(e){var t=e.good,n=e.neutral,r=e.bad,a=e.total,i=e.positivePercentage;return Object(c.jsxs)(c.Fragment,{children:[a>0&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"Statistics"}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["Good:",t]}),Object(c.jsxs)("li",{children:["Neutral:",n]}),Object(c.jsxs)("li",{children:["Bad:",r]}),Object(c.jsxs)("li",{children:["Total:",a]}),Object(c.jsxs)("li",{children:["Positive Feedback:",i,"%"]})]})]}),0===a&&Object(c.jsx)(l,{message:"No feedback given"})]})}function O(e){var t=e.options,n=e.onLeaveFeedback;return Object(c.jsx)(c.Fragment,{children:t.map((function(e){return Object(c.jsx)("button",{type:"button",name:e,onClick:n,children:e},e)}))})}function v(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:t}),n]})}var g=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var n=t.currentTarget.name;e.setState((function(e){return Object(s.a)({},n,Number(e[n]+1))}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=void 0===t?0:t,c=e.countTotalFeedback();return c?Math.round(n/c*100):0},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v,{title:"Please leave feedback",children:Object(c.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:this.onLeaveFeedback})}),Object(c.jsx)(v,{title:"",children:Object(c.jsx)(h,{good:e.good,neutral:e.neutral,bad:e.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(r.Component);g.defaultProps={};var f=g;var x=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(f,{})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),F()}},[[15,1,2]]]);
//# sourceMappingURL=main.8fc29ed3.chunk.js.map