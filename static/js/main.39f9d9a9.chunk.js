(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={listItem:"ContactList_listItem__1rAm8"}},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(9),i=n.n(c),o=n(8),s=n(2),u=n(3),l=n(4),b=n(6),d=n(5),h=(n(15),n(19)),m=n(0),j=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.formSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state)},t.handleInputChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(s.a)({},a,r))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{onSubmit:this.formSubmit,children:[Object(m.jsxs)("label",{children:[" Name",Object(m.jsx)("input",{value:this.state.name,onChange:this.handleInputChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{children:[" Phone",Object(m.jsx)("input",{value:this.state.number,onChange:this.handleInputChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),f=j,p=function(t){var e=t.inputChange,n=t.filter;return Object(m.jsxs)("label",{children:["Find contacts by name",Object(m.jsx)("input",{value:n,onChange:e,type:"text",name:"filter"})]})},O=n(10),C=n.n(O),v=function(t){var e=t.contactsData,n=t.onRemoveContact;return Object(m.jsx)("ul",{children:e.map((function(t){return Object(m.jsxs)("li",{className:C.a.listItem,children:[Object(m.jsxs)("p",{children:[t.name," :"]}),Object(m.jsx)("p",{children:t.number}),Object(m.jsx)("button",{type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},x=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleInputChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(s.a)({},a,r))},t.addContact=function(e){var n=e.name,a=e.number,r={id:Object(h.a)(),name:n,number:a},c=t.state.contacts.find((function(t){return n.toLowerCase()===t.name.toLowerCase()}));c?alert("".concat(n," is already in contacts!")):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[r])}}))},t.removeContact=function(e){t.setState((function(t){return{contacts:Object(o.a)(t.contacts).filter((function(t){return t.id!==e}))}}))},t.filterContact=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(f,{onSubmit:this.addContact}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(p,{inputChange:this.handleInputChange,filter:t}),Object(m.jsx)(v,{contactsData:this.filterContact(),onRemoveContact:this.removeContact})]})}}]),n}(a.Component),g=x;i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.39f9d9a9.chunk.js.map