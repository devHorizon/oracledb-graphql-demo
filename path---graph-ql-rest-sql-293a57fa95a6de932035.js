webpackJsonp([0xd1c0ce3bdda2],{1957:function(e,a){e.exports={data:{postBySlug:{html:'<h4 id="why-oracledb--graphql-together"><a href="#why-oracledb--graphql-together" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why OracleDB &#x26; GraphQL together?</h4>\n<p>Before we can answer this, let\'s compare the specifications we\'ve introduced today: GraphQL, REST, &#x26; SQL</p>\n<h3 id="graphql-vs-rest"><a href="#graphql-vs-rest" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>GraphQL vs REST</h3>\n<p>So <strong>HOW</strong> does GraphQL present these putative benefits? Let\'s investigate a few...</p>\n<h4 id="network-traffic"><a href="#network-traffic" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Network Traffic</h4>\n<p>Imagine we impemented our schema with two APIs; one REST and one GraphQL. Our REST resource will be the "User" object. </p>\n<p>The traditional REST API specification calls for a different endpoint for each resource!\nImagine you want to make a page that shows your friends (or followers) list. </p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># our example API call with REST </span>\n\n<span class="token comment"># our example domain name</span>\n<span class="token comment"># is mysillysevername.com</span>\n<span class="token comment"># curl is a common command line utility for HTTP operations</span>\n<span class="token comment"># like GET, PUT, DELETE which form the foundation of REST</span>\n\n<span class="token function">curl</span> -X GET mysillyservername.com/users/<span class="token operator">&lt;</span>id<span class="token operator">></span>             <span class="token comment"># get user information</span>\n<span class="token function">curl</span> -X GET mysillyservername.com/users/<span class="token operator">&lt;</span>id<span class="token operator">></span>/posts       <span class="token comment"># get user posts</span>\n<span class="token function">curl</span> -X GET mysillyservername.com/users/<span class="token operator">&lt;</span>id<span class="token operator">></span>/followers   <span class="token comment"># get user posts</span></code></pre>\n      </div>\n<p>That\'s three requests, and if our REST API doesn\'t offer sparse fieldsets (where you specify the fields you want in the url) then we\'re underfetching and overfetching. </p>\n<h4 id="overfetching-or-underfetching"><a href="#overfetching-or-underfetching" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>"Overfetching" or "Underfetching"</h4>\n<p>The GraphQL API allows all of the disparate data to be returned <em>with a single API call</em>.\nWith our REST API (^above) we <em>don\'t get enough data</em> in one request so we have to make three. In each of those three our server returns <em>too much data</em> because the server just returns all the resource data\nfor that REST endpoint! </p>\n<p>It sure would be nice if we had a query language that could give us <em>just the right amount of data</em>, be\n<em>of similar what we\'re using</em> (largely javascript), and versiile enough to alloq <em>super simple nested queries</em></p>\n<p><strong>Enter GraphQL</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token comment"># our example API call with GraphQL </span>\n\n<span class="token keyword">query</span> <span class="token punctuation">{</span>\n  users <span class="token punctuation">{</span>\n    id\n    following<span class="token punctuation">{</span>\n      fullName\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The REST API specification is closely tied to the HTTP verbs (GET, PUT, etc) and the structure of the data.\nThat can lead to unweildly APIs where your REST Resource (an API endpoint for a particular thing in REST parlance) can\nonly proivde </p>\n<p>Instead of returning <em>too much data</em> or <em>too little data</em> you can recieve <em>just the data you need</em>!</p>\n<p>[[<a href="https://www.w3.org/2001/sw/wiki/REST">6</a>],[<a href="https://www.oreilly.com/learning/building-a-simple-graphql-server-with-neo4j">7</a>]]</p>\n<h3 id="graphql-vs-sql"><a href="#graphql-vs-sql" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>GraphQL vs SQL</h3>\n<p>Both are Query Languages - So what\'s the difference? </p>\n<p><strong>SQL</strong> was designed to work with <em>Relational Databases</em>, which are databases where everything is stored in columns and rows\n(this is oversimplified definition but bear with me). It\'s syntax is great for manipulating flat tables. </p>\n<p><strong>GraphQL</strong> was designed with web developers in mind - developers who typically work with\n<em>Javascript Object Notation (JSON)</em>. The syntax of GraphQL allows for nested objects AND abstractions\nthat aren\'t tied to a particular data structure. SQL allows for similar functionality with features like view and stored\nprocedures BUT GraphQL has provided this as a first-class citizen</p>\n<p>Just as there is no "best" way to store data there is no "best" language to define &#x26; manipulate it. </p>\n<h4 id="use-cases"><a href="#use-cases" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use Cases</h4>\n<h3 id="integrating-apis"><a href="#integrating-apis" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Integrating APIs</h3>\n<p>Have lots of Data Warehouses? Deisgning the next great API for your Data Mart that will power your customer-facing apps?\n<img src="graphql-v-rest-cloud-arch.png" width="100%" /></p>\n<p>GraphQL can add speed by sitting on top of a caching layer. Because GraphQL returns the only what a client asks for\nyour developers know <em>exactly</em> what data is getting requested and so know <em>exactly</em> what to cache. </p>\n<h3 id="rapid-application-development"><a href="#rapid-application-development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rapid Application Development</h3>\n<p>An ORM for the web-first generation. </p>',timeToRead:3,excerpt:"Why OracleDB & GraphQL together? Before we can answer this, let's compare the specifications we've introduced today: GraphQL, REST, & SQL…",frontmatter:{title:"GraphQL REST & SQL"}},tableOfContents:{chapters:[{title:"Overview",entries:[{entry:{childMarkdownRemark:{fields:{slug:"/overview"},frontmatter:{title:"Overview"}}}}]},{title:"Running the Demo",entries:[{entry:{childMarkdownRemark:{fields:{slug:"/running-the-demo"},frontmatter:{title:"Running the Demo"}}}},{entry:{childMarkdownRemark:{fields:{slug:"/running-in-the-cloud"},frontmatter:{title:"Running in the Cloud"}}}},{entry:{childMarkdownRemark:{fields:{slug:"/running-with-docker"},frontmatter:{title:"Running with Docker"}}}}]},{title:"GraphQL & Oracle DB?",entries:[{entry:{childMarkdownRemark:{fields:{slug:"/about-graph-ql"},frontmatter:{title:"About GraphQL"}}}},{entry:{childMarkdownRemark:{fields:{slug:"/about-oracle-db"},frontmatter:{title:"About Oracle DB"}}}},{entry:{childMarkdownRemark:{fields:{slug:"/graph-ql-rest-sql"},frontmatter:{title:"GraphQL REST & SQL"}}}}]},{title:"Learn More",entries:[{entry:{childMarkdownRemark:{fields:{slug:"/learn-more"},frontmatter:{title:"Learn More"}}}}]},{title:"Summary",entries:[{entry:{childMarkdownRemark:{fields:{slug:"/summary"},frontmatter:{title:"Summary"}}}},{entry:{childMarkdownRemark:{fields:{slug:"/references"},frontmatter:{title:"References"}}}}]}]}},pathContext:{slug:"/graph-ql-rest-sql"}}}});
//# sourceMappingURL=path---graph-ql-rest-sql-293a57fa95a6de932035.js.map