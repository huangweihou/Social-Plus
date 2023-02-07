(this["webpackJsonparound-web"]=this["webpackJsonparound-web"]||[]).push([[0],{218:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},236:function(e,t,a){e.exports=a.p+"static/media/blue-marker.bc8cc4ea.svg"},242:function(e,t,a){e.exports=a(529)},247:function(e,t,a){},528:function(e,t,a){},529:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(9),s=a.n(r),l=(a(247),a(16)),i=a(17),c=a(19),u=a(18),m=a(10),d=a(218),g=a.n(d),p=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{src:g.a,alt:"logo",className:"App-logo"}),n.a.createElement("span",{className:"App-title"},"Around"),this.props.isLoggedIn?n.a.createElement("a",{className:"logout",onClick:this.props.handleLogout},n.a.createElement(m.a,{type:"logout"})," Logout"):null)}}]),a}(o.Component),h=a(542),f=a(544),v=a(545),b=a(541),E=a(537),y=a(538),w=a(45),O=a(531),L="TOKEN_KEY",S="http://34.72.110.55:8080",P={enableHighAccuracy:!0,maximumAge:3e5,timeout:27e3},k="video",j="unknown",C=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={confirmDirty:!1,autoCompleteResult:[]},e.handleConfirmBlur=function(t){var a=t.target.value;e.setState({confirmDirty:e.state.confirmDirty||!!a})},e.compareToFirstPassword=function(t,a,o){var n=e.props.form;a&&a!==n.getFieldValue("password")?o("Two passwords that you enter is inconsistent!"):o()},e.validateToNextPassword=function(t,a,o){var n=e.props.form;a&&e.state.confirmDirty&&n.validateFields(["confirm"],{force:!0}),o()},e.handleSubmit=function(t){t.preventDefault(),e.props.form.validateFields((function(e,t){e||(console.log("Received values of form: ",t),fetch("".concat(S,"/signup"),{method:"POST",body:JSON.stringify({username:t.username,password:t.password})}).then((function(e){if(e.ok)return e.text();throw new Error(e.statusText)})).then((function(e){console.log("===== ",e),b.a.success("Registration succeed!")})).catch((function(e){console.error(e),b.a.error("Registration failed.")})))}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};return n.a.createElement(E.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},{onSubmit:this.handleSubmit,className:"register"}),n.a.createElement(E.a.Item,{label:"Username"},e("username",{rules:[{required:!0,message:"Please input your username!"}]})(n.a.createElement(y.a,null))),n.a.createElement(E.a.Item,{label:"Password",hasFeedback:!0},e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(n.a.createElement(y.a.Password,null))),n.a.createElement(E.a.Item,{label:"Confirm Password",hasFeedback:!0},e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(n.a.createElement(y.a.Password,{onBlur:this.handleConfirmBlur}))),n.a.createElement(E.a.Item,t,n.a.createElement(w.a,{type:"primary",htmlType:"submit"},"Register"),n.a.createElement("p",null,"I already have an account, go back to ",n.a.createElement(O.a,{to:"/login"},"login"))))}}]),a}(o.Component),N=E.a.create({name:"register"})(C),I=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).handleSubmit=function(t){t.preventDefault(),e.props.form.validateFields((function(t,a){t||(console.log("Received values of form: ",a),fetch("".concat(S,"/login"),{method:"POST",body:JSON.stringify({username:a.username,password:a.password})}).then((function(e){if(e.ok)return e.text();throw new Error(e.stateText)})).then((function(t){console.log(t),e.props.handleLoginSucceed(t),b.a.success("Login Success")})).catch((function(e){console.error(e),b.a.error("Login failed.")})))}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return n.a.createElement(E.a,{onSubmit:this.handleSubmit,className:"login-form"},n.a.createElement(E.a.Item,null,e("username",{rules:[{required:!0,message:"Please input your username!"}]})(n.a.createElement(y.a,{prefix:n.a.createElement(m.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),n.a.createElement(E.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(n.a.createElement(y.a,{prefix:n.a.createElement(m.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),n.a.createElement(E.a.Item,null,n.a.createElement(w.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",n.a.createElement(O.a,{to:"/register"},"register now!")))}}]),a}(o.Component),T=E.a.create({name:"normal_login"})(I),F=a(536),A=a(532),x=a(533),M=a(534),B=a(540),D=a(143),G=a(229),R=a.n(G),W=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.images.map((function(e){return Object(D.a)(Object(D.a)({},e),{},{customOverlay:n.a.createElement("div",{className:"gallery-thumbnail"},n.a.createElement("div",null,"".concat(e.user,": ").concat(e.caption)))})}));return n.a.createElement("div",{className:"gallery"},n.a.createElement(R.a,{backdropClosesModal:!0,images:e,enableImageSelection:!1}))}}]),a}(o.Component),q=a(539),J=a(535),z=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).normFile=function(e){return console.log("Upload event:",e),Array.isArray(e)?e:e&&e.fileList},e.beforeUpload=function(){return!1},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t={labelCol:{span:6},wrapperCol:{span:14}};return n.a.createElement(E.a,t,n.a.createElement(E.a.Item,{label:"Message"},e("message",{rules:[{required:!0,message:"Please input message."}]})(n.a.createElement(y.a,null))),n.a.createElement(E.a.Item,{label:"Image/Video"},n.a.createElement("div",{className:"dropbox"},e("image",{valuePropName:"fileList",getValueFromEvent:this.normFile,rules:[{required:!0,message:"Please select an image."}]})(n.a.createElement(J.a.Dragger,{name:"files",beforeUpload:this.beforeUpload},n.a.createElement("p",{className:"ant-upload-drag-icon"},n.a.createElement(m.a,{type:"inbox"})),n.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),n.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload."))))))}}]),a}(n.a.Component),U=E.a.create()(z),V=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={visible:!1,confirmLoading:!1},e.showModal=function(){e.setState({visible:!0})},e.handleOk=function(){console.log("ok"),e.form.validateFields((function(t,a){if(console.log(a),!t){var o=localStorage.getItem(L),n=JSON.parse(localStorage.getItem("POS_KEY")),r=n.lat,s=n.lon,l=new FormData;l.set("lat",r),l.set("lon",s),l.set("message",a.message),l.set("image",a.image[0].originFileObj),e.setState({confirmLoading:!0}),fetch("".concat(S,"/post"),{method:"POST",headers:{Authorization:"".concat("Bearer"," ").concat(o)},body:l}).then((function(t){if(t.ok)return e.props.loadNearbyPosts();throw new Error("Failed to create post.")})).then((function(){e.setState({visible:!1,confirmLoading:!1}),e.form.resetFields(),b.a.success("Post created successfully!")})).catch((function(t){console.error(t),b.a.error("Failed to create post."),e.setState({confirmLoading:!1})}))}}))},e.handleCancel=function(){console.log("Clicked cancel button"),e.setState({visible:!1})},e.getFormRef=function(t){e.form=t},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.visible,a=e.confirmLoading;return n.a.createElement("div",null,n.a.createElement(w.a,{type:"primary",onClick:this.showModal},"Create New Post"),n.a.createElement(q.a,{title:"Create New Post",visible:t,onOk:this.handleOk,okText:"Create",confirmLoading:a,onCancel:this.handleCancel},n.a.createElement(U,{ref:this.getFormRef})))}}]),a}(o.Component),K=a(54),_=a(236),Y=a.n(_),H=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isOpen:!1},e.handleToggle=function(){e.setState((function(e){return{isOpen:!e.isOpen}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.post,t=e.user,a=e.message,o=e.url,r=e.location,s=e.type,l=r.lat,i=r.lon,c="image"===s,u=c?void 0:{url:Y.a,scaledSize:new window.google.maps.Size(26,41)};return n.a.createElement(K.Marker,{position:{lat:l,lng:i},onMouseOver:c?this.handleToggle:void 0,onMouseOut:c?this.handleToggle:void 0,onClick:c?void 0:this.handleToggle,icon:u},this.state.isOpen?n.a.createElement(K.InfoWindow,null,n.a.createElement("div",null,c?n.a.createElement("img",{src:o,alt:a,className:"around-marker-image"}):n.a.createElement("video",{src:o,controls:!0,className:"around-marker-video"}),n.a.createElement("p",null,"".concat(t,": ").concat(a)))):null)}}]),a}(n.a.Component),Z=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).getMapRef=function(t){e.map=t,window.map=t},e.reloadMarker=function(){var t=e.getCenter(),a=e.getRadius();e.props.loadPostsByTopic(t,a)},e}return Object(i.a)(a,[{key:"getCenter",value:function(){var e=this.map.getCenter();return{lat:e.lat(),lon:e.lng()}}},{key:"getRadius",value:function(){var e=this.map.getCenter(),t=this.map.getBounds();if(e&&t){var a=t.getNorthEast(),o=new window.google.maps.LatLng(e.lat(),a.lng());return.001*window.google.maps.geometry.spherical.computeDistanceBetween(e,o)}}},{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("POS_KEY")),t=e.lat,a=e.lon;return n.a.createElement(K.GoogleMap,{ref:this.getMapRef,defaultZoom:11,defaultCenter:{lat:t,lng:a},onDragEnd:this.reloadMarker,onZoomChanged:this.reloadMarker},this.props.posts.map((function(e){return n.a.createElement(H,{post:e,key:e.url})})))}}]),a}(o.Component),X=Object(K.withScriptjs)(Object(K.withGoogleMap)(Z)),$=F.a.TabPane,Q=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoadingGeoLocation:!1,isLoadingPosts:!1,error:"",posts:[]},e.onSuccessLoadGeoLocation=function(t){console.log(t);var a=t.coords,o=a.latitude,n=a.longitude;localStorage.setItem("POS_KEY",JSON.stringify({lat:o,lon:n})),e.setState({isLoadingGeoLocation:!1,error:""}),e.loadNearbyPosts()},e.onFailedLoadGeoLocation=function(){e.setState({isLoadingGeoLocation:!1,error:"Failed to load geo location."})},e.loadNearbyPosts=function(){var t=JSON.parse(localStorage.getItem("POS_KEY")),a=t.lat,o=t.lon,n=localStorage.getItem(L);return e.setState({isLoadingPosts:!0,error:""}),fetch("".concat(S,"/search?lat=").concat(a,"&lon=").concat(o,"&range=20000"),{method:"GET",headers:{Authorization:"".concat("Bearer"," ").concat(n)}}).then((function(e){if(e.ok)return e.json();throw new Error("Failed to load post.")})).then((function(t){console.log(t),e.setState({posts:t||[],isLoadingPosts:!1})})).catch((function(t){console.error(t),e.setState({isLoadingPosts:!1,error:t.message})}))},e.handleTopicChange=function(t){var a=t.target.value;e.setState({topic:a}),"around"===a?e.loadNearbyPosts():e.loadFacesAroundTheWorld()},e.loadFacesAroundTheWorld=function(){var t=localStorage.getItem(L);return e.setState({isLoadingPosts:!0,error:""}),fetch("".concat(S,"/cluster?term=face"),{method:"GET",headers:{Authorization:"".concat("Bearer"," ").concat(t)}}).then((function(e){if(e.ok)return e.json();throw new Error("Failed to load posts")})).then((function(t){console.log(t),e.setState({posts:t||[],isLoadingPosts:!1})})).catch((function(t){console.error(t),e.setState({isLoadingPosts:!1,error:t.message})}))},e.loadPostsByTopic=function(t,a){return"around"===e.state.topic?e.loadNearbyPosts(t,a):e.loadFacesAroundTheWorld()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log(navigator.geolocation),"geolocation"in navigator?(this.setState({isLoadingGeoLocation:!0,error:""}),navigator.geolocation.getCurrentPosition(this.onSuccessLoadGeoLocation,this.onFailedLoadGeoLocation,P)):this.setState({error:"Geolocation is not supported."})}},{key:"renderImagePosts",value:function(){var e=this.state.posts.filter((function(e){return"image"===e.type})).map((function(e){return{user:e.user,src:e.url,thumbnail:e.url,caption:e.message,thumbnailWidth:400,thumbnailHeight:300}}));return n.a.createElement(W,{images:e})}},{key:"renderVideoPosts",value:function(){var e=this.state.posts;return n.a.createElement(A.a,{gutter:30},e.filter((function(e){return[k,j].includes(e.type)})).map((function(e){return n.a.createElement(x.a,{span:6,key:e.url},n.a.createElement("video",{src:e.url,controls:!0,className:"video-block"}),n.a.createElement("p",null,e.user,": ",e.message))})))}},{key:"renderPosts",value:function(e){var t=this.state,a=t.error,o=t.isLoadingGeoLocation,r=t.isLoadingPosts,s=t.posts;return a||(o?n.a.createElement(M.a,{tip:"Loading geo location..."}):r?n.a.createElement(M.a,{tip:"Loading posts..."}):s.length>0?"image"===e?this.renderImagePosts():this.renderVideoPosts():"No nearby posts")}},{key:"render",value:function(){var e=n.a.createElement(V,{loadNearbyPosts:this.loadPostsByTopic});return n.a.createElement("div",null,n.a.createElement(B.a.Group,{onChange:this.handleTopicChange,value:this.state.topic},n.a.createElement(B.a,{value:"around"},"Posts Around Me"),n.a.createElement(B.a,{value:"face"},"Faces Around The World")),n.a.createElement(F.a,{tabBarExtraContent:e,className:"main-tabs"},n.a.createElement($,{tab:"Image Posts",key:"1"},this.renderPosts("image")),n.a.createElement($,{tab:"Video Posts",key:"2"},this.renderPosts(k)),n.a.createElement($,{tab:"Map",key:"3"},n.a.createElement(X,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyD3CEh9DXuyjozqptVB5LA-dN7MxWWkr9s&v=3.exp&libraries=geometry,drawing,places",loadingElement:n.a.createElement("div",{style:{height:"100%"}}),containerElement:n.a.createElement("div",{style:{height:"600px"}}),mapElement:n.a.createElement("div",{style:{height:"100%"}}),posts:this.state.posts,loadPostsByTopic:this.loadPostsByTopic}))))}}]),a}(n.a.Component),ee=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).getLogin=function(){return e.props.isLoggedIn?n.a.createElement(h.a,{to:"/home"}):n.a.createElement(T,{handleLoginSucceed:e.props.handleLoginSucceed})},e.getHome=function(){return e.props.isLoggedIn?n.a.createElement(Q,null):n.a.createElement(h.a,{to:"/login"})},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"main"},n.a.createElement(f.a,null,n.a.createElement(v.a,{path:"/login",render:this.getLogin}),n.a.createElement(v.a,{path:"/register",component:N}),n.a.createElement(v.a,{path:"/home",render:this.getHome}),n.a.createElement(v.a,{render:this.getLogin})))}}]),a}(o.Component),te=(a(528),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoggedIn:Boolean(localStorage.getItem(L))},e.handleLoginSucceed=function(t){localStorage.setItem(L,t),e.setState({isLoggedIn:!0})},e.handleLogout=function(){localStorage.removeItem(L),e.setState({isLoggedIn:!1})},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(p,{handleLogout:this.handleLogout,isLoggedIn:this.state.isLoggedIn}),n.a.createElement(ee,{handleLoginSucceed:this.handleLoginSucceed,isLoggedIn:this.state.isLoggedIn}))}}]),a}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=a(543);s.a.render(n.a.createElement(ae.a,null,n.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[242,1,2]]]);
//# sourceMappingURL=main.da63dd2e.chunk.js.map