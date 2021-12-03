
### npm i = para instalar as dependecias

### `npm start`

### about
 - Desenvolvei usando React + Redux e axios para fazer as chamadas na api,
 fiz no deploy no Vercel, e por algum motivo a chamada na apiomd esta dando esse erro:

 `xhr.js:187 Mixed Content: The page at 'https://app-filmes-eight.vercel.app/' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://www.omdbapi.com/?apikey=925eba28&s=batman'. This request has been blocked; the content must be served over HTTPS.
(anonymous) @ xhr.js:187
e.exports @ xhr.js:13
e.exports @ dispatchRequest.js:51
s.request @ Axios.js:108
r.forEach.s.<computed> @ Axios.js:129
(anonymous) @ bind.js:9
(anonymous) @ index.js:25
s @ runtime.js:63
(anonymous) @ runtime.js:294
(anonymous) @ runtime.js:119
r @ asyncToGenerator.js:3
u @ asyncToGenerator.js:25
(anonymous) @ asyncToGenerator.js:32
(anonymous) @ asyncToGenerator.js:21
(anonymous) @ index.js:24
(anonymous) @ index.js:31
zl @ react-dom.production.min.js:262
t.unstable_runWithPriority @ scheduler.production.min.js:18
qo @ react-dom.production.min.js:122
Nl @ react-dom.production.min.js:261
(anonymous) @ react-dom.production.min.js:261
D @ scheduler.production.min.js:16
E.port1.onmessage @ scheduler.production.min.js:12
createError.js:16 Uncaught (in promise) Error: Network Error
    at e.exports (createError.js:16)
    at XMLHttpRequest.h.onerror (xhr.js:99)`


