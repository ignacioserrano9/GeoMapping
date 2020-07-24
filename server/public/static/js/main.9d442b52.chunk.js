(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{195:function(e,t,a){e.exports=a(419)},201:function(e,t,a){},419:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),l=a.n(o),c=a(7),i=a(8),u=a(10),s=a(9),m=(a(200),a(201),a(61)),p=a.n(m),h=function e(){var t=this;Object(c.a)(this,e),this.login=function(e){return t.service.post("/login",e)},this.signup=function(e){return t.service.post("/signup",e)},this.logout=function(){return t.service.post("/logout")},this.isLoggedIn=function(){return t.service.get("/loggedin")},this.service=p.a.create({baseURL:"".concat("https://geomapping-1.herokuapp.com/api"),withCredentials:!0})},d=a(11),g=a(72),E=a(51),f=a(27),v=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).logout=function(){n.AuthService.logout().then((function(){n.props.setTheUser(!1),n.props.handleToast(!0,"Usuario desconectado")})).catch((function(e){return console.log(e)}))},n.AuthService=new h,n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(g.a,{bg:"dark",variant:"dark",expand:"lg",sticky:"top"},r.a.createElement(g.a.Brand,null,r.a.createElement(f.b,{to:"/"},"GeoMapping_")),r.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(E.a,{className:"ml-auto"},this.props.loggedInUser?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a.Link,{as:"span"},r.a.createElement(f.c,{to:"/myRoutes",activeStyle:{color:"white"}},"Your Routes")),r.a.createElement(E.a.Link,{as:"span"},r.a.createElement(f.c,{to:"/createRoute",activeStyle:{color:"white"}},"Create a new route")),r.a.createElement(E.a.Link,{as:"span"},r.a.createElement("span",{onClick:this.logout},"Log Out")),r.a.createElement(E.a.Link,{as:"span"},r.a.createElement(f.c,{to:"/profile",activeStyle:{color:"white"}},"Hello, ",this.props.loggedInUser.username))):r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a.Link,{as:"span"},r.a.createElement(f.c,{to:"/signup",activeStyle:{color:"white"}},"Sign Up")),r.a.createElement(E.a.Link,{as:"span"},r.a.createElement(f.c,{to:"/login",activeStyle:{color:"white"}},"Log In"))))))}}]),a}(n.Component),b=a(36),C=function e(){var t=this;Object(c.a)(this,e),this.handleUpload=function(e){return t.service.post("/upload",e)},this.service=p.a.create({baseURL:"".concat("https://geomapping-1.herokuapp.com/api","/files"),withCredentials:!0})},y=a(26),O=a(4),S=a(63),j=a(49),I=a(37),k=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleFileUpload=function(e){var t=new FormData;t.append("photo",e.target.files[0]),n.filesService.handleUpload(t).then((function(e){console.log("Subida de archivo finalizada! La URL de Cloudinary es: ",e.data.secure_url),n.setState({avatar:e.data.secure_url})})).catch((function(e){return console.log(e)}))},n.handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(b.a)({},a,r))},n.handleFormSubmit=function(e){e.preventDefault(),n.authService.signup(n.state).then((function(e){n.props.setTheUser(e.data),n.props.history.push("/")})).catch((function(e){return console.log(e.response.data.message)}))},n.state={username:"",password:"",avatar:"",aboutMe:""},n.authService=new h,n.filesService=new C,n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(S.a,{as:"main"},r.a.createElement(j.a,null,r.a.createElement(I.a,{md:{offset:3,span:6}},r.a.createElement("h3",null,"New User"),r.a.createElement("hr",null),r.a.createElement(O.a,{onSubmit:this.handleFormSubmit},r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"User Name"),r.a.createElement(O.a.Control,{onChange:this.handleInputChange,value:this.state.username,name:"username",type:"text"})),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Password"),r.a.createElement(O.a.Control,{onChange:this.handleInputChange,value:this.state.password,name:"password",type:"password"})),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Description"),r.a.createElement(O.a.Text,{className:"text-muted"},"Tell us a bit about yourself."),r.a.createElement(O.a.Control,{as:"textarea",onChange:this.handleInputChange,value:this.state.description,name:"aboutMe",type:"text"})),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Avatar (file)"),r.a.createElement(O.a.Control,{name:"avatar",type:"file",onChange:this.handleFileUpload})),r.a.createElement(y.a,{variant:"dark",type:"submit"},"Sign Up!")))))}}]),a}(n.Component),w=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(b.a)({},a,r))},n.handleFormSubmit=function(e){e.preventDefault(),n.authService.login(n.state).then((function(e){n.props.setTheUser(e.data),n.props.history.push("/")})).catch((function(e){return console.log(e.response.data.message)}))},n.state={username:"",password:""},n.authService=new h,n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(S.a,{as:"main"},r.a.createElement(j.a,null,r.a.createElement(I.a,{md:{offset:3,span:6}},r.a.createElement("h3",null,"Log In"),r.a.createElement("hr",null),r.a.createElement(O.a,{onSubmit:this.handleFormSubmit},r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"User Name"),r.a.createElement(O.a.Control,{onChange:this.handleInputChange,value:this.state.username,name:"username",type:"text"})),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Password"),r.a.createElement(O.a.Control,{onChange:this.handleInputChange,value:this.state.password,name:"password",type:"password"})),r.a.createElement(y.a,{variant:"dark",type:"submit"},"Log In")))))}}]),a}(n.Component),L=function(e){return e.loggedInUser&&r.a.createElement("h1",null,"\xa1Hola, ",e.loggedInUser.username,"!")},U=function e(){var t=this;Object(c.a)(this,e),this.getAllRoutes=function(){return t.service.get("/getAllRoutes")},this.getOneRoute=function(e){return t.service.get("/getOneRoute/".concat(e))},this.getMyRoutes=function(e){return t.service.get("/getMyRoutes/".concat(e))},this.createRoute=function(e){return t.service.post("/createNewRoute",e)},this.addPoint=function(e){return t.service.post("/addPoint",e)},this.addRock=function(e){return t.service.post("/addRock",e)},this.getOnePoint=function(e){return t.service.get("/getOnePoint/".concat(e))},this.service=p.a.create({baseURL:"".concat("https://geomapping-1.herokuapp.com/api","/routes"),withCredentials:!0})},R=a(41),F=a(32),M=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={points:e.props.markers},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(F.GoogleMap,{defaultCenter:this.props.defaultCenter,defaultZoom:this.props.defaultZoom},r.a.createElement(F.Polyline,{path:this.state.points,geodesic:!0,options:{strokeColor:"#ff2527",strokeOpacity:.75,strokeWeight:2}}),this.state.points.map((function(e){return r.a.createElement(F.Marker,{position:{lat:e.lat,lng:e.lng}})})))}}]),a}(r.a.Component),T=Object(F.withScriptjs)(Object(F.withGoogleMap)(M)),x=function(e){var t=e.points.map((function(e){return e.location})).map((function(e){return{lat:parseFloat(e.lat),lng:parseFloat(e.lng)}})),a=Math.ceil(t.length/2)-1,n=t[a].lat,o=t[a].lng,l=e.loadingElement,c=e.containerElement,i=e.mapElement,u=e.defaultCenter,s=e.defaultZoom;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDq34sAhjDIRsBySpw92CgvTmo8mW8Mwt8&libraries=geometry,drawing,places",markers:t,loadingElement:l||r.a.createElement("div",{style:{height:"100%"}}),containerElement:c||r.a.createElement("div",{style:{height:"80vh"}}),mapElement:i||r.a.createElement("div",{style:{height:"100%"}}),defaultCenter:u||{lat:n,lng:o},defaultZoom:s||11}),r.a.createElement(f.b,{to:"/routeDetails/".concat(e._id)},e.name," ",r.a.createElement("br",null),e.description))},A=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={points:e.props.markers},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(F.GoogleMap,{defaultCenter:this.props.defaultCenter,defaultZoom:this.props.defaultZoom},this.state.points.map((function(e){return r.a.createElement(F.Marker,{position:{lat:e.lat,lng:e.lng}})})))}}]),a}(r.a.Component),D=Object(F.withScriptjs)(Object(F.withGoogleMap)(A)),G=function(e){var t=e.routes.map((function(e){return e.points[0].location})).map((function(e){return{lat:parseFloat(e.lat),lng:parseFloat(e.lng)}})),a=e.centerLoc.lat,n=e.centerLoc.lng,o=e.loadingElement,l=e.containerElement,c=e.mapElement,i=e.defaultCenter,u=e.defaultZoom;return r.a.createElement(D,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDq34sAhjDIRsBySpw92CgvTmo8mW8Mwt8&libraries=geometry,drawing,places",markers:t,loadingElement:o||r.a.createElement("div",{style:{height:"100%"}}),containerElement:l||r.a.createElement("div",{style:{height:"80vh"}}),mapElement:c||r.a.createElement("div",{style:{height:"100%"}}),defaultCenter:i||{lat:a,lng:n},defaultZoom:u||20})},P=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.updateRouteList(),n.geolocation()},n.updateRouteList=function(){n.routeService.getAllRoutes().then((function(e){return n.setState({routes:e.data})})).catch((function(e){return console.log(e)}))},n.state={routes:void 0,location:void 0},n.routeService=new U,n}return Object(i.a)(a,[{key:"geolocation",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.setState({location:{lat:t.coords.latitude,lng:t.coords.longitude}})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"HOLA!"),this.state.routes?r.a.createElement(G,{defaultZoom:10,routes:this.state.routes,centerLoc:this.state.location}):r.a.createElement(R.a,{animation:"grow",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement("p",null,"Rutas de todos los usuarios..."),this.state.routes?this.state.routes.map((function(e){return r.a.createElement(x,Object.assign({defaultZoom:15},e))})):r.a.createElement(R.a,{animation:"grow",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}}]),a}(n.Component),N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"GeoMapping_"),r.a.createElement("p",null,"NO LOGEADO! Mostrar aqu\xed una presentaci\xf3n para nuevos usuarios."))},_=function(e){return r.a.createElement(O.a,{onSubmit:e.onSubmit},r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Route Name"),r.a.createElement(O.a.Control,{onChange:e.inputChange,value:e.name,name:"name",type:"text"})),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Description of the Route"),r.a.createElement(O.a.Control,{as:"textarea",onChange:e.inputChange,value:e.description,name:"description",type:"text"})),r.a.createElement(y.a,{variant:"dark",type:"submit"},"Add a new Route"))},Z=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(b.a)({},a,r))},n.handleFormSubmit=function(e){e.preventDefault(),n.routeService.createRoute(n.state).then((function(e){n.props.history.push("/routeCreation/".concat(e.data._id))})).catch((function(e){return console.log(e.response.data.message)}))},n.state={name:"",description:"",owner:e.loggedInUser._id,points:[]},n.routeService=new U,n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(S.a,{as:"main"},r.a.createElement(j.a,null,r.a.createElement(I.a,{md:{offset:3,span:6}},r.a.createElement("h3",null,"New Route"),r.a.createElement("hr",null),r.a.createElement(_,Object.assign({},this.state,{onSubmit:this.handleFormSubmit,inputChange:this.handleInputChange})))))}}]),a}(n.Component),z=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){return n.updateRouteList()},n.updateRouteList=function(){n.routeService.getMyRoutes(n.state.userId).then((function(e){return n.setState({routes:e.data})})).catch((function(e){return console.log(e)}))},n.state={userId:e.loggedInUser._id,routes:void 0},n.routeService=new U,n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"HOLA!"),this.state.routes?this.state.routes.map((function(e){return r.a.createElement(x,Object.assign({defaultZoom:15},e))})):r.a.createElement(R.a,{animation:"grow",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}}]),a}(n.Component),B=function(e){return r.a.createElement(O.a,{onSubmit:e.onSubmit},r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Lat"),r.a.createElement(O.a.Control,{onChange:e.inputChange,value:e.location.lat,name:"lat",type:"text"}),r.a.createElement(O.a.Label,null,"Lon"),r.a.createElement(O.a.Control,{onChange:e.inputChange,value:e.location.lng,name:"lng",type:"text"})),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Name of the point"),r.a.createElement(O.a.Control,{onChange:e.inputChange,value:e.name,name:"name",type:"text"})),r.a.createElement(y.a,{variant:"dark",type:"submit"},"Add a new Point"))},H=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){return n.geolocation()},n.handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(b.a)({},a,r))},n.handleFormSubmit=function(e){n.geolocation(),e.preventDefault(),n.routeService.addPoint(n.state).then((function(){return n.props.updatePointList()})).catch((function(e){return console.log(e.response.data.message)}))},n.state={routeId:e.match.params.id,name:void 0,location:{lat:void 0,lng:void 0},rocks:[]},n.routeService=new U,n}return Object(i.a)(a,[{key:"geolocation",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.setState({location:{lat:t.coords.latitude,lng:t.coords.longitude}})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement(I.a,{md:{offset:3,span:6}},r.a.createElement("h3",null,"New Point"),r.a.createElement("hr",null),r.a.createElement(B,Object.assign({},this.state,{onSubmit:this.handleFormSubmit,inputChange:this.handleInputChange})))))}}]),a}(n.Component),q=function(e){return r.a.createElement(O.a,{onSubmit:e.onSubmit},r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Name"),r.a.createElement(O.a.Control,{onChange:e.inputChange,value:e.name,name:"name",type:"text"})),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Type of Rock"),r.a.createElement(O.a.Control,{onChange:e.inputChange,value:e.rockType,name:"rockType",type:"text"})),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Description"),r.a.createElement(O.a.Control,{onChange:e.inputChange,value:e.description,name:"description",type:"text"})),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Samples"),r.a.createElement(O.a.Control,{onChange:e.inputChange,value:e.samplesId,name:"samplesId",type:"text"})),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Photos"),r.a.createElement(O.a.Control,{onChange:e.fileUpload,name:"photos",type:"file"}),r.a.createElement("p",null,"Added photos: "),e.photos.map((function(e){return r.a.createElement("img",{src:e})}))),r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Directions"),r.a.createElement(O.a.Text,{className:"text-muted"},"Type of data"),r.a.createElement(O.a.Control,{onChange:e.inputChange,value:e.dataType,name:"dataType",type:"text"}),r.a.createElement(O.a.Text,{className:"text-muted"},"Data"),r.a.createElement(O.a.Control,{onChange:e.inputChange,value:e.data,name:"data",type:"text"})),r.a.createElement(y.a,{variant:"dark",type:"submit"},"Add rock!"))},W=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(b.a)({},a,r))},n.handleFileUpload=function(e){var t=new FormData;t.append("photo",e.target.files[0]),n.filesService.handleUpload(t).then((function(e){console.log("Subida de archivo finalizada! La URL de Cloudinary es: ",e.data.secure_url),n.setState({photos:n.state.photos.concat(e.data.secure_url)})})).catch((function(e){return console.log(e)}))},n.handleFormSubmit=function(e){e.preventDefault(),n.routeService.addRock(n.state).then((function(){return n.props.handleRockSubmit()})).catch((function(e){return console.log(e)}))},n.state={pointId:e.pointIdClicked,name:"",rockType:"",description:"",samplesId:"",photos:[],dataType:"",data:""},n.routeService=new U,n.filesService=new C,n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add a new rock to this point"),r.a.createElement("hr",null),r.a.createElement(q,Object.assign({},this.state,{onSubmit:this.handleFormSubmit,fileUpload:this.handleFileUpload,inputChange:this.handleInputChange})))}}]),a}(n.Component),J=a(127),Y=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){return n.updatePointList()},n.updatePointList=function(){n.routeService.getOneRoute(n.state.routeId).then((function(e){return n.setState({points:e.data.points})})).catch((function(e){return console.log(e)}))},n.handleModal=function(e){return n.setState({showModal:e})},n.pointIdClicked=function(e){return n.setState({pointIdClicked:e})},n.handleRockSubmit=function(){n.handleModal(!1),n.updatePointList()},n.state={routeId:e.match.params.id,points:void 0,pointIdClicked:void 0,showModal:!1},n.routeService=new U,n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Add points to the route while you are working!"),r.a.createElement("p",null,"Mapa aqui con los puntos"),r.a.createElement(H,Object.assign({},this.props,{updatePointList:this.updatePointList,routeId:this.state.routeId})),this.state.points?r.a.createElement("ul",null,this.state.points.map((function(t){return r.a.createElement("li",{key:t._id},r.a.createElement(y.a,{onClick:function(){e.handleModal(!0),e.pointIdClicked(t._id)},variant:"dark",size:"sm",style:{marginBottom:"20px"}},t.name))}))):r.a.createElement(R.a,{animation:"grow",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement(J.a,{size:"lg",show:this.state.showModal,onHide:function(){return e.handleModal(!1)}},r.a.createElement(J.a.Body,null,r.a.createElement(W,{pointIdClicked:this.state.pointIdClicked,handleRockSubmit:this.handleRockSubmit}))))}}]),a}(n.Component),K=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.getRouteInfo()},n.getRouteInfo=function(){n.routeService.getOneRoute(n.state.routeId).then((function(e){n.setState({route:e.data,ownerId:e.data.owner}),e.data.points.map((function(e){n.routeService.getOnePoint(e._id).then((function(e){return n.setState({points:n.state.points.concat(e.data).reverse()})}))}))})).catch((function(e){return console.log(e)}))},n.state={userId:e.loggedInUser._id,ownerId:void 0,routeId:e.match.params.id,route:void 0,points:[]},n.routeService=new U,n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.route?r.a.createElement(r.a.Fragment,null,r.a.createElement(x,Object.assign({defaultZoom:15},this.state.route)),r.a.createElement("h2",null,"Points of the route"),this.state.points.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,e.name),r.a.createElement("p",null,"Lat: ",e.location.lat),r.a.createElement("p",null,"Lng: ",e.location.lng),e.rocks.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Rocks in this point:"),r.a.createElement("p",null,"Name: ",e.name),r.a.createElement("p",null,"Description: ",e.description))})))})),this.state.userId===this.state.ownerId?r.a.createElement("p",null,"ES TU RUTA!"):null):r.a.createElement(R.a,{animation:"grow",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}}]),a}(n.Component),Q=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).setTheUser=function(t){return e.setState({loggedInUser:t},(function(){return console.log("El estado de App ha cambiado:",e.state)}))},e.fetchUser=function(){e.AuthService.isLoggedIn().then((function(t){return null===e.state.loggedInUser&&e.setState({loggedInUser:t.data})})).catch((function(e){return console.log({err:e})}))},e.state={loggedInUser:null},e.AuthService=new h,e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.fetchUser(),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{setTheUser:this.setTheUser,loggedInUser:this.state.loggedInUser}),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return e.state.loggedInUser?r.a.createElement(P,null):r.a.createElement(N,null)}}),r.a.createElement(d.a,{path:"/login",render:function(t){return r.a.createElement(w,Object.assign({},t,{setTheUser:e.setTheUser}))}}),r.a.createElement(d.a,{path:"/signup",render:function(t){return r.a.createElement(k,Object.assign({},t,{setTheUser:e.setTheUser}))}}),r.a.createElement(d.a,{path:"/profile",render:function(){return r.a.createElement(L,{loggedInUser:e.state.loggedInUser})}}),r.a.createElement(d.a,{path:"/createRoute",render:function(t){return r.a.createElement(Z,Object.assign({},t,{loggedInUser:e.state.loggedInUser}))}}),r.a.createElement(d.a,{path:"/myRoutes",render:function(t){return r.a.createElement(z,Object.assign({},t,{loggedInUser:e.state.loggedInUser}))}}),r.a.createElement(d.a,{path:"/routeCreation/:id",render:function(t){return r.a.createElement(Y,Object.assign({},t,{loggedInUser:e.state.loggedInUser}))}}),r.a.createElement(d.a,{path:"/routeDetails/:id",render:function(t){return r.a.createElement(K,Object.assign({},t,{loggedInUser:e.state.loggedInUser}))}})))}}]),a}(n.Component);l.a.render(r.a.createElement(f.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null))),document.getElementById("root"))}},[[195,1,2]]]);
//# sourceMappingURL=main.9d442b52.chunk.js.map