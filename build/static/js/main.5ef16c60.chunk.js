(this["webpackJsonpreact-modal-window-test"]=this["webpackJsonpreact-modal-window-test"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var o,a,r,i,s=n(0),c=n.n(s),u=n(5),l=n.n(u),d=(n(18),n(19),n(11)),b=(n(20),n(6)),j=n(7),p=n(8),O=n(4),m=(n(12),n(2)),f=(o=function(){function e(){Object(j.a)(this,e),Object(b.a)(this,"isModalWindowOpen",a,this)}return Object(p.a)(e,[{key:"setIsModalWindowOpen",value:function(e){this.isModalWindowOpen=e}}]),e}(),a=Object(O.a)(o.prototype,"isModalWindowOpen",[m.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(O.a)(o.prototype,"setIsModalWindowOpen",[m.b],Object.getOwnPropertyDescriptor(o.prototype,"setIsModalWindowOpen"),o.prototype),o),h={name:"",surname:""},w=(r=function(){function e(){Object(j.a)(this,e),Object(b.a)(this,"formFieldsData",i,this)}return Object(p.a)(e,[{key:"setUserFormData",value:function(e){this.formFieldsData=e}}]),e}(),i=Object(O.a)(r.prototype,"formFieldsData",[m.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return h}}),Object(O.a)(r.prototype,"setUserFormData",[m.b],Object.getOwnPropertyDescriptor(r.prototype,"setUserFormData"),r.prototype),r),v=Object.freeze({userFormStore:new w,modalWindowStore:new f}),x=c.a.createContext(v),g=(x.Provider,function(e){return c.a.useContext(x)[e]}),F=n(9),y=n(1),W=Object(F.a)((function(){var e=g("userFormStore"),t=g("modalWindowStore"),n=Object(s.useState)(""),o=Object(d.a)(n,2),a=o[0],r=o[1],i=Object(s.useState)(""),c=Object(d.a)(i,2),u=c[0],l=c[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h2",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f \u0438 \u0444\u0430\u043c\u0438\u043b\u0438\u044e"}),Object(y.jsxs)("form",{className:"user_form",onSubmit:function(n){null===n||void 0===n||n.preventDefault();var o={name:a,surname:u};e.setUserFormData(o),t.setIsModalWindowOpen(!0),r(""),l("")},children:[Object(y.jsx)("input",{className:"input_text",type:"text",value:a,onChange:function(e){r(null===e||void 0===e?void 0:e.target.value)},placeholder:"\u0418\u043c\u044f",maxLength:20,required:!0}),Object(y.jsx)("input",{className:"input_text",type:"text",value:u,onChange:function(e){l(null===e||void 0===e?void 0:e.target.value)},placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",maxLength:20,required:!0}),Object(y.jsx)("button",{className:"button button_save",type:"submit",children:"\u0413\u043e\u0442\u043e\u0432\u043e"})]})]})})),D=(n(23),function(){var e=g("userFormStore"),t=g("modalWindowStore");return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"ModalWindow",children:["\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435,"," ",e.formFieldsData.name," ",e.formFieldsData.surname,Object(y.jsx)("button",{className:"button button_danger",onClick:function(){t.setIsModalWindowOpen(!1)},children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})})});var S=Object(F.a)((function(){var e=g("modalWindowStore");return Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)("header",{className:"App-header",children:[Object(y.jsx)(W,{}),e.isModalWindowOpen&&Object(y.jsx)(D,{})]})})})),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),a(e),r(e),i(e)}))};l.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(S,{})}),document.getElementById("root")),M()}},[[24,1,2]]]);
//# sourceMappingURL=main.5ef16c60.chunk.js.map