"use strict";(self.webpackChunkms_gh_pages=self.webpackChunkms_gh_pages||[]).push([[336],{4032:function(e,t,n){var a=n(8453),o=n(6540);function r(e){const t=Object.assign({p:"p",h4:"h4",a:"a",span:"span",strong:"strong"},(0,a.RP)(),e.components);return o.createElement(o.Fragment,null,o.createElement(t.p,null,"Here is an example of a usecase in which the Message Broker could be useful."),"\n",o.createElement(t.h4,{id:"notification-system",style:{position:"relative"}},o.createElement(t.a,{href:"#notification-system","aria-label":"notification system permalink",className:"anchor before"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Notification system"),"\n",o.createElement(t.p,null,"Let’s say you have some document uploading functionality in your UI.\nThe uploading may take up to a minute and you don’t want the user to have to wait, so once the upload is complete you want to have a pop-up notification appear which tells the user that their upload was successful."),"\n",o.createElement(t.p,null,"The code for your pop-up notification can live anywhere in your codebase, and can “listen” for a “document_uploaded” message using the MessageBroker.\nNow all that needs to happen is for the document upload service to publish that message when the upload completes."),"\n",o.createElement(t.p,null,o.createElement(t.strong,null,"Note:")," that with this model, our document uploading service doesn’t even have to know about the existence of the notification service, so everything is nice and decoupled."),"\n",o.createElement(t.h4,{id:"mediator-pattern",style:{position:"relative"}},o.createElement(t.a,{href:"#mediator-pattern","aria-label":"mediator pattern permalink",className:"anchor before"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Mediator Pattern"),"\n",o.createElement(t.p,null,"More generically, the Message Broker essentially acts as a ",o.createElement(t.a,{href:"https://refactoring.guru/design-patterns/mediator"},"Mediator")," for your components.\nAny time you would apply the Mediator pattern, the Message Broker is the perfect solution to avoid you some boilerplate coding."))}t.A=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?o.createElement(t,e,o.createElement(r,e)):r(e)}},7762:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c},default:function(){return s}});var a=n(4032),o=n(6540),r=n(1061),i=n(1917);const l=e=>{let{title:t,data:n,location:a,children:i}=e;return o.createElement(r.A,{data:n,location:a},o.createElement("article",{className:"page-main content"},o.createElement("header",null,o.createElement("h2",null,t)),i))};function s(e){return o.createElement(l,e,o.createElement(a.A,e))}const c=e=>{let{data:t,pageContext:n}=e;const a=`${n.frontmatter.title} | ${t.site.siteMetadata.title}`;return o.createElement(i.A,{title:a},o.createElement("meta",{name:"description",content:n.description}))}}}]);
//# sourceMappingURL=component---src-templates-page-js-content-file-path-content-use-cases-mdx-f514ce2eb1d2a9d49fe5.js.map