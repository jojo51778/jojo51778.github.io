(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{255:function(t,a,r){"use strict";r.r(a);var s=r(28),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"http报文首部"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http报文首部"}},[t._v("#")]),t._v(" http报文首部")]),t._v(" "),r("p",[r("img",{attrs:{src:"/httpheader.jpg",alt:"报文首部"}})]),t._v(" "),r("h4",{attrs:{id:"通用首部字段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通用首部字段"}},[t._v("#")]),t._v(" 通用首部字段")]),t._v(" "),r("p",[r("img",{attrs:{src:"/generalfield.jpg",alt:"通用首部字段"}})]),t._v(" "),r("h4",{attrs:{id:"实体首部字段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实体首部字段"}},[t._v("#")]),t._v(" 实体首部字段")]),t._v(" "),r("p",[r("img",{attrs:{src:"/entityfield.jpg",alt:"实体首部字段"}})]),t._v(" "),r("h3",{attrs:{id:"http请求报文"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http请求报文"}},[t._v("#")]),t._v(" HTTP请求报文")]),t._v(" "),r("p",[t._v("在请求中，HTTP报文由方法、URL、HTTP版本、HTTP首部字段等部分构成")]),t._v(" "),r("p",[r("img",{attrs:{src:"/requestheader.jpg",alt:"请求报文"}})]),t._v(" "),r("h4",{attrs:{id:"请求首部字段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求首部字段"}},[t._v("#")]),t._v(" 请求首部字段")]),t._v(" "),r("p",[r("img",{attrs:{src:"/requestfield.jpg",alt:"请求首部字段"}})]),t._v(" "),r("h3",{attrs:{id:"http响应报文"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http响应报文"}},[t._v("#")]),t._v(" HTTP响应报文")]),t._v(" "),r("p",[t._v("在响应中，HTTP报文由HTTP版本、状态码（数字和原因短语）、HTTP首部字段3部分组成")]),t._v(" "),r("p",[r("img",{attrs:{src:"/responseheader.jpg",alt:"响应报文"}})]),t._v(" "),r("h4",{attrs:{id:"响应首部字段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应首部字段"}},[t._v("#")]),t._v(" 响应首部字段")]),t._v(" "),r("p",[r("img",{attrs:{src:"/responsefiled.jpg",alt:"请求首部字段"}})]),t._v(" "),r("h3",{attrs:{id:"缓存请求指令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缓存请求指令"}},[t._v("#")]),t._v(" 缓存请求指令")]),t._v(" "),r("p",[r("img",{attrs:{src:"/requestcache.jpg",alt:"缓存请求指令"}})]),t._v(" "),r("h3",{attrs:{id:"缓存响应指令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缓存响应指令"}},[t._v("#")]),t._v(" 缓存响应指令")]),t._v(" "),r("p",[r("img",{attrs:{src:"/responsecache.jpg",alt:"缓存响应指令"}})]),t._v(" "),r("h2",{attrs:{id:"与http协作的web服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#与http协作的web服务器"}},[t._v("#")]),t._v(" 与HTTP协作的Web服务器")]),t._v(" "),r("p",[t._v("一台Web服务器可以搭建多个独立域名的Web网站，也可以作为通信路径的中转服务器提升传输效率")]),t._v(" "),r("h3",{attrs:{id:"用单台虚拟主机实现多个域名"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用单台虚拟主机实现多个域名"}},[t._v("#")]),t._v(" 用单台虚拟主机实现多个域名")]),t._v(" "),r("p",[t._v("在相同的IP地址下，由于虚拟主机可以寄存多个不同主机名和域名的Web网站，因此在发送HTTP请求时，\n必须在Host首部内完整指定主机名或者域名的URI")]),t._v(" "),r("h3",{attrs:{id:"通信数据转发程序：代理、网关、隧道"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通信数据转发程序：代理、网关、隧道"}},[t._v("#")]),t._v(" 通信数据转发程序：代理、网关、隧道")]),t._v(" "),r("h4",{attrs:{id:"代理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代理"}},[t._v("#")]),t._v(" 代理")]),t._v(" "),r("p",[t._v("代理是一种有转发功能的应用程序，它扮演了位于服务器和客户端“中间人”的角色，接收由客户端的请求并\n转发给服务器，同时也接收服务器返回的响应并转发给客户端,转发时需要加入Via首部信息字段以标记经过的主机信息\n"),r("img",{attrs:{src:"/proxy.jpg",alt:"代理"}})]),t._v(" "),r("p",[t._v("好处：利用缓存技术减少网络带宽的流量，组织内部针对网站的访问控制，以获取访问日志为主要目标")]),t._v(" "),r("h5",{attrs:{id:"缓存代理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缓存代理"}},[t._v("#")]),t._v(" 缓存代理")]),t._v(" "),r("p",[t._v("代码转发响应时，缓存代理会预先将资源的副本保存在代理服务器上，当再次请求相同资源，直接从代理服务器返回")]),t._v(" "),r("h5",{attrs:{id:"透明代理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#透明代理"}},[t._v("#")]),t._v(" 透明代理")]),t._v(" "),r("p",[t._v("转发请求或响应时，不对报文做任何加工的代理类型称为透明代理。反之，对报文内容进行加工的代理称为非透明代理")]),t._v(" "),r("h4",{attrs:{id:"网关"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网关"}},[t._v("#")]),t._v(" 网关")]),t._v(" "),r("p",[t._v("网关是转发其他服务器通信数据的服务器，接收从客户端发来的请求时，它就像自己拥有资源的源服务器一样对请求进行处理。\n有时客户端可能都不会察觉，自己的通信目标是个网关。\n"),r("img",{attrs:{src:"/gateway.jpg",alt:"网关"}}),t._v("\n利用网关可以由http请求转化为其他协议通信\n好处：利用网关能提高通信的安全性，因为可以在客户端与网关之间的通信线路上加密以确保连接的安全。比如网关可以连接数据库，\n使用SQL语句查询数据")]),t._v(" "),r("h4",{attrs:{id:"隧道"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#隧道"}},[t._v("#")]),t._v(" 隧道")]),t._v(" "),r("p",[t._v("隧道是相隔甚远的客户端和服务器两者之间的进行中转，并保持双方连接的应用程序\n"),r("img",{attrs:{src:"/tunnel.jpg",alt:"隧道"}}),t._v("\n隧道可以按要求建立一条与其他服务器的通信道路，届时使用SSL等加密手段进行通信，通过隧道的传输，可以和远距离的服务器安全通信，隧道本身透明的，\n客户端不用在意隧道的存在")]),t._v(" "),r("h3",{attrs:{id:"缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),r("p",[t._v("代理服务器缓存\n"),r("img",{attrs:{src:"/servercache.jpg",alt:"服务器缓存"}})]),t._v(" "),r("p",[t._v("客户端缓存")]),t._v(" "),r("p",[r("img",{attrs:{src:"/clientcache.jpg",alt:"客户端缓存"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);