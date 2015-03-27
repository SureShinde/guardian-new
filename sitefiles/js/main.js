window.addEvent('domready', function(){	
	Cufon.replace('.social-networks li strong, .news-row strong', { fontFamily: 'Univers Bold', hover: true });
	Cufon.replace('.gallery-title strong', { textShadow: '#244ba5 3px 3px', color: '-linear-gradient(#f5f6fc, 0.45=#f5f6fc, 0.65=#c8cef1, #c3cbf0)',fontFamily: 'Helvetica Neue Bold'});
	Cufon.replace('.gallery-title span', { textShadow: '#325bb1 2px 2px', color: '-linear-gradient(#5ac143, 0.45=#62d012, 0.65=#65c121, #619d5b)',fontFamily: 'Helvetica Neue'});
	Cufon.replace('.gallery-info p', { textShadow: '#004c81 1px 1px', fontFamily: 'Helvetica'});
	Cufon.replace('.info-holder a, .newsletter-form strong, .slider-holder .slider-title, .sitemap strong', { fontFamily: 'Univers Black'});
});


function initPage() {
	clearFormFields({
		clearInputs: true,
		clearTextareas: true,
		passwordFieldText: true,
		addClassFocus: "focus",
		filterClass: "default"
	});
}

//clear-inputs
function clearFormFields(o)
{
	if (o.clearInputs == null) o.clearInputs = true;
	if (o.clearTextareas == null) o.clearTextareas = true;
	if (o.passwordFieldText == null) o.passwordFieldText = false;
	if (o.addClassFocus == null) o.addClassFocus = false;
	if (!o.filter) o.filter = "default";
	if(o.clearInputs) {
		var inputs = document.getElementsByTagName("input");
		for (var i = 0; i < inputs.length; i++ ) {
			if((inputs[i].type == "text" || inputs[i].type == "password") && inputs[i].className.indexOf(o.filterClass)) {
				inputs[i].valueHtml = inputs[i].value;
				inputs[i].onfocus = function ()	{
					if(this.valueHtml == this.value) this.value = "";
					if(this.fake) {
						inputsSwap(this, this.previousSibling);
						this.previousSibling.focus();
					}
					if(o.addClassFocus && !this.fake) {
						this.className += " " + o.addClassFocus;
						this.parentNode.className += " parent-" + o.addClassFocus;
					}
				}
				inputs[i].onblur = function () {
					if(this.value == "") {
						this.value = this.valueHtml;
						if(o.passwordFieldText && this.type == "password") inputsSwap(this, this.nextSibling);
					}
					if(o.addClassFocus) {
						this.className = this.className.replace(o.addClassFocus, "");
						this.parentNode.className = this.parentNode.className.replace("parent-"+o.addClassFocus, "");
					}
				}
				if(o.passwordFieldText && inputs[i].type == "password") {
					var fakeInput = document.createElement("input");
					fakeInput.type = "text";
					fakeInput.value = inputs[i].value;
					fakeInput.className = inputs[i].className;
					fakeInput.fake = true;
					inputs[i].parentNode.insertBefore(fakeInput, inputs[i].nextSibling);
					inputsSwap(inputs[i], null);
				}
			}
		}
	}
	if(o.clearTextareas) {
		var textareas = document.getElementsByTagName("textarea");
		for(var i=0; i<textareas.length; i++) {
			if(textareas[i].className.indexOf(o.filterClass)) {
				textareas[i].valueHtml = textareas[i].value;
				textareas[i].onfocus = function() {
					if(this.value == this.valueHtml) this.value = "";
					if(o.addClassFocus) {
						this.className += " " + o.addClassFocus;
						this.parentNode.className += " parent-" + o.addClassFocus;
					}
				}
				textareas[i].onblur = function() {
					if(this.value == "") this.value = this.valueHtml;
					if(o.addClassFocus) {
						this.className = this.className.replace(o.addClassFocus, "");
						this.parentNode.className = this.parentNode.className.replace("parent-"+o.addClassFocus, "");
					}
				}
			}
		}
	}
	function inputsSwap(el, el2) {
		if(el) el.style.display = "none";
		if(el2) el2.style.display = "inline";
	}
}
if (window.addEventListener)
	window.addEventListener("load", initPage, false);
else if (window.attachEvent)
	window.attachEvent("onload", initPage);
	
//ie
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('9 u=k(){9 g=/^([^#.>`]*)(#|\\.|\\>|\\`)(.+)$/;k u(a,b){9 c=a.J(/\\s*\\,\\s*/);9 d=[];n(9 i=0;i<c.l;i++){d=d.v(o(c[i],b))};6 d};k o(a,b,c){a=a.z(" ","`");9 d=a.r(g);9 e,5,m,7,i,h;9 f=[];4(d==8){d=[a,a]};4(d[1]==""){d[1]="*"};4(c==8){c="`"};4(b==8){b=E};K(d[2]){w"#":7=d[3].r(g);4(7==8){7=[8,d[3]]};e=E.L(7[1]);4(e==8||(d[1]!="*"&&!x(e,d[1]))){6 f};4(7.l==2){f.A(e);6 f};6 o(7[3],e,7[2]);w".":4(c!=">"){5=p(b,d[1])}y{5=b.B};n(i=0,h=5.l;i<h;i++){e=5[i];4(e.C!=1){q};7=d[3].r(g);4(7!=8){4(e.j==8||e.j.r("(\\\\s|^)"+7[1]+"(\\\\s|$)")==8){q};m=o(7[3],e,7[2]);f=f.v(m)}y 4(e.j!=8&&e.j.r("(\\\\s|^)"+d[3]+"(\\\\s|$)")!=8){f.A(e)}};6 f;w">":4(c!=">"){5=p(b,d[1])}y{5=b.B};n(i=0,h=5.l;i<h;i++){e=5[i];4(e.C!=1){q};4(!x(e,d[1])){q};m=o(d[3],e,">");f=f.v(m)};6 f;w"`":5=p(b,d[1]);n(i=0,h=5.l;i<h;i++){e=5[i];m=o(d[3],e,"`");f=f.v(m)};6 f;M:4(c!=">"){5=p(b,d[1])}y{5=b.B};n(i=0,h=5.l;i<h;i++){e=5[i];4(e.C!=1){q};4(!x(e,d[1])){q};f.A(e)};6 f}};k p(a,b){4(b=="*"&&a.F!=8){6 a.F};6 a.p(b)};k x(a,b){4(b=="*"){6 N};6 a.O.G().z("P:","")==b.G()};6 u}();k Q(a,b){9 c=u(a);n(9 i=0;i<c.l;i++){c[i].R=k(){4(t.j.H(b)==-1){t.j+=" "+b}};c[i].S=k(){4(t.j.H(b)!=-1){t.j=t.j.z(b,"")}}}}4(D.I&&!D.T){D.I("U",V)}',58,58,'||||if|listNodes|return|subselector|null|var||||||||limit||className|function|length|listSubNodes|for|doParse|getElementsByTagName|continue|match||this|parseSelector|concat|case|matchNodeNames|else|replace|push|childNodes|nodeType|window|document|all|toLowerCase|indexOf|attachEvent|split|switch|getElementById|default|true|nodeName|html|hoverForIE6|onmouseover|onmouseout|opera|onload|ieHover'.split('|'),0,{}))
/*parametrs [selector, hover_class]*/
function ieHover() {
	hoverForIE6("div#nav ul li", "hover");
}

//gallery
window.addEvent("domready",function(){
	var _e= new GalSliding($$("#gallery")[0],{
		holder:".slides-holder",
		mode:"circle",
		nextItem:".next",
		prevItem:".prev",
		pause:".btn-stop",
		pagingCreate:"gallery-nav",
		paging:".gallery-nav li a",
		speed:500,
		duration:3000
	});
});


var GalSliding = new Class({
	Implements:[Options],
	options:{
		holder:".holder",
		elementsParent:"ul",
		elements:"li",
		nextItem:".next",
		prevItem:".prev",
		stop:".stop",
		start:".start",
		pause:".btn-stop",
		speed:600,
		duration:4000,
		steps:1,
		current:0,
		transition:Fx.Transitions.linear,
		direction:"horizontal",
		mode:"callback",
		disableClass:"disable",
		currentClass:"active",
		random:false,
		pagingCreate:"gallery-paging",
		paging:".gallery-paging li a",
		autoplay:4000,
		autoplayOpposite:false,
		onStart:function(_1,_2,_3){}
		,onPlay:function(_4,_5,_6){}
	},
	initialize:function(_7,_8){
		if(_7){
			this.gallery=_7;
			this.setOptions(_8);
			this.holder=this.gallery.getElement(this.options.holder);
			this.itemsParent=this.holder.getElement(this.options.elementsParent);
			this.items=this.itemsParent.getElements(this.options.elements);
			this.next=this.gallery.getElement(this.options.nextItem);
			var _9=this.next;
			var _a;
			this.prev=this.gallery.getElement(this.options.prevItem);
			this.stop=this.gallery.getElement(this.options.stop);
			this.start=this.gallery.getElement(this.options.start);
			this.pause=this.gallery.getElement(this.options.pause);
			this.current=this.options.current;
			this.bound={rotate:this.rotate.bind(this)};
			if(this.options.direction=="horizontal"){
				this.direction="margin-left";
				this.size=this.items[0].getWidth()+parseInt(this.items[0].getStyle("margin-right"))+parseInt(this.items[0].getStyle("margin-left"));
				this.visible=Math.round(this.holder.getWidth()/this.size);
			}else{
				this.direction="margin-top";
				this.size=this.items[0].getHeight();
				this.visible=Math.round(this.holder.getHeight()/this.size);
			}
			if(this.next==null){
				this.next=new Element("a").injectInside(this.gallery);
			}
			if(this.prev==null){
				this.prev=new Element("a").injectInside(this.gallery);
			}
			this.next.cl=this.next.className;
			this.prev.cl=this.prev.className;
			if(this.visible<this.items.length){
				if(this.options.random){
					Array.prototype.shuffle=function(b){
						var i=this.length,j,t;
						while(i){
							j=Math.floor((i--)*Math.random());
							t=b&&typeof this[i].shuffle!=="undefined"?this[i].shuffle():this[i];
							this[i]=this[j];
							this[j]=t;
						}
						return this;
					};
					this.items.shuffle(this.items);
					this.hidden=new Element("div");
					this.items.each(function(el,i){
						this.wrap=new Element("div").adopt(el);
						this.hidden.set("html",this.hidden.get("html"),this.wrap.get("html"));
					}.bind(this));
					this.itemsParent.set("html",this.hidden.get("html"));
					this.items=this.itemsParent.getElements(this.options.elements);
				}
				this.options.steps=this.options.steps>this.visible?this.visible:this.options.steps;
				this.options.duration=this.options.duration<1000?1000:this.options.duration;
				this.options.speed=this.options.speed>6000?6000:this.options.speed;
				if(this.options.paging&&!this.options.pagingCreate){
					this.paging=this.gallery.getElements(this.options.paging);
					for(var i=0;i<this.paging.length;i++){
						if(this.paging[i].hasClass(this.options.currentClass)){
							this.current=i;
						}
					}
				}
				if(this.options.mode!="circle"){
					if(this.visible+this.current>=this.items.length){
						this.margin=(this.items.length-this.visible)*this.size;
						this.current=this.items.length-this.visible;
					}else{
						this.margin=this.current*this.size;
					}
					if(this.options.paging){
						for(var i=0;i<this.items.length;i++){
							if(this.items[i].hasClass(this.options.currentClass)){
								this.current=i;
							}
						}
						if(this.options.pagingCreate){
							if(this.gallery.getElements("."+this.options.pagingCreate).length){
								this.paging=this.gallery.getElements("."+this.options.pagingCreate)[0];
								this.paging.innerHTML="";
							}else{
								this.paging=new Element("ul").injectInside(this.gallery).addClass(this.options.pagingCreate);
							}
						}else{
							this.paging=new Element("ul").injectInside(this.gallery).addClass("paging");
						}
						for(var i=0;i<this.items.length;i++){
							this.paging.innerHTML+="<li><a href=\"#\">"+parseInt(i+1)+"</a></li>";
						}
						this.paging=this.paging.getElements("a");
						this.paging[this.current].addClass(this.options.currentClass);
						this.paging.each(function(el,i){
							el.addEvent("click",function(){
								if(i*this.options.steps+this.visible>=this.items.length){
									this.margin=(this.items.length-this.visible)*this.size;
									this.current=this.items.length-this.visible;
								}else{
									this.current=i*this.options.steps;
								}
								this.margin=this.current*this.size;
								this.play(this.options.speed);
								return false;
							}.bind(this));
						}.bind(this));
					}
					this.play(0);
				}else{
					if(this.options.paging){
						for(var i=0;i<this.items.length;i++){
							if(this.items[i].hasClass(this.options.currentClass)){
								this.current=i;
							}
						}
						if(this.options.pagingCreate){
							if(this.gallery.getElements("."+this.options.pagingCreate).length){
								this.paging=this.gallery.getElements("."+this.options.pagingCreate)[0];
								this.paging.innerHTML="";
							}else{
								this.paging=new Element("ul").injectInside(this.gallery).addClass(this.options.pagingCreate);
							}
						}else{
							this.paging=new Element("ul").injectInside(this.gallery).addClass("paging");
						}
						for(var i=0;i<this.items.length;i++){
							this.paging.innerHTML+="<li><a href=\"#\">"+parseInt(i+1)+"</a></li>";
						}
						this.paging=this.paging.getElements("a");
						_a=this.paging;
						this.paging[this.current].addClass(this.options.currentClass);
						this.paging.each(function(el,i){
							el.addEvent("click",function(){
								if(this.current<i){
									for(var _b=this.current;_b<i;_b++){
										_9.fireEvent("click");
									}
									_a.removeClass("active");
									el.addClass("active");
								}else{
									if(this.current>i){
										for(var _b=this.current;_b<i+this.items.length;_b++){
											_9.fireEvent("click");
										}
										_a.removeClass("active");
										el.addClass("active");
									}
								}
								return false;
							}.bind(this));
						}.bind(this));
					}
					for(;this.items.length<this.options.steps+this.visible;){
						this.items.clone().inject(this.itemsParent,"bottom");
						this.items=this.itemsParent.getElements(this.options.elements);
					}
					if(this.current>this.items.length-1){
						this.current=this.items.length-1;
					}
					for(var i=0;i<this.current;i++){
						this.items[i].inject(this.itemsParent,"bottom");
					}
					this.options.paging=false;
				}

				var _c=this;
				var playNext = new Fx.Tween( this.itemsParent ,{
					duration:this.options.speed,
					transition:this.options.transition,
					property:this.direction,
					onComplete:function(){
						for(var i=0;i<_c.options.steps;i++){
							if(_c.current>=_c.items.length){
								_c.current=0;
							}
							_c.current++;
							_c.items[_c.current-1].inject(_c.itemsParent,"bottom");
						}
						this.set(0);
						_c.options.onPlay(_c.current,_c.visible,_c.items.length);
					},
					onCancel:function(){
						//this.onComplete();
					}
				});
				var playBack = new Fx.Tween( this.itemsParent ,{
					duration:this.options.speed,
					transition:this.options.transition,
					property:this.direction,
					onComplete:function(){
						this.set(0);
						_c.options.onPlay(_c.current,_c.visible,_c.items.length);
					},
					onCancel:function(){
						//this.onComplete();
					}
				});

				this.next.addEvent("click",function(){
					if(this.timer) clearTimeout(this.timer);
					if(this.options.mode!="circle"){
						if(this.visible+this.current>=this.items.length){
							if(this.options.mode=="callback"){
								this.margin=0;
								this.current=0;
							}
						}else{
							if(this.visible+this.current+this.options.steps>=this.items.length){
								this.margin=(this.items.length-this.visible)*this.size;
								this.current=this.items.length-this.visible;
							}else{
								this.current=this.current+this.options.steps;
								this.margin=this.current*this.size;
							}
						}
						this.play(this.options.speed);
					}else{
						this.margin=this.size*this.options.steps;

						playNext.start(-this.margin);
						_a.removeClass("active");
						if(this.current+1<_a.length){
							_a[this.current+1].addClass("active");
						}else{
							_a[this.current-_a.length+1].addClass("active");
						}
					}
					return false;
				}.bind(this));

				this.prev.addEvent("click",function(){
					if(this.timer) clearTimeout(this.timer);
					if(this.options.mode!="circle"){
						if(this.current<=0){
							if(this.options.mode=="callback"){
								this.margin=(this.items.length-this.visible)*this.size;
								this.current=this.items.length-this.visible;
							}
						}else{
							if(this.current-this.options.steps<=0){
								this.margin=0;
								this.current=0;
							}else{
								this.current=this.current-this.options.steps;
								this.margin=this.current*this.size;
							}
						}
						this.play(this.options.speed);
					}else{
						for(var i=0;i<this.options.steps;i++){
							if(this.current-1<0){
								this.current=this.items.length;
							}
							--this.current;
							this.items[this.current].inject(this.itemsParent,"top");
						}
						this.itemsParent.setStyle(this.direction,-this.size*this.options.steps+"px");
						this.margin=0;

						playBack.start(this.margin);
						_a.removeClass("active");
						if(this.current<_a.length){
							_a[this.current].addClass("active");
						}else{
							_a[this.current-_a.length+1].addClass("active");
						}
					}
					return false;
				}.bind(this));
				if(this.options.autoplay||this.start||this.stop){
					if(!this.options.autoplay){
						this.gallery.addClass("stopped");
					}
					this.timer=this.bound.rotate.delay(this.options.duration);
					this.gallery.addEvent("mouseenter",function(){
						this.options.autoplay=false;
						$clear(this.timer);
					}.bind(this));
					this.gallery.addEvent("mouseleave",function(){
						if(!this.gallery.hasClass("stopped")){
							$clear(this.timer);
							this.options.autoplay=true;
							this.timer=this.bound.rotate.delay(this.options.duration);
						}
					}.bind(this));
				}
				if(this.stop){
					this.stop.addEvent("click",function(){
						this.gallery.addClass("stopped").fireEvent("mouseenter");
						return false;
					}.bind(this));
				}
				if(this.start){
					this.start.addEvent("click",function(){
						this.gallery.removeClass("stopped").fireEvent("mouseenter");
						return false;
					}.bind(this));
				}
				if(this.pause){
					this.pause.addEvent("click",function(){
						if(this.gallery.hasClass("stopped")){
							this.gallery.removeClass("stopped").fireEvent("mouseenter");
						}else{
							this.gallery.addClass("stopped").fireEvent("mouseenter");
						}
						return false;
					}.bind(this));
				}
			}else{
				this.next.addClass(this.next.cl+"-"+this.options.disableClass);
				this.prev.addClass(this.prev.cl+"-"+this.options.disableClass);
				this.next.addEvent("click",function(){
					return false;
				}.bind(this));
				this.prev.addEvent("click",function(){
					return false;
				}.bind(this));
				if(this.stop){
					this.stop.addEvent("click",function(){
						return false;
					}.bind(this));
				}
				if(this.start){
					this.start.addEvent("click",function(){
						return false;
					}.bind(this));
				}
				this.gallery.addClass("stopped");
			}
			this.options.onStart(this.current,this.visible,this.items.length);
		}
	},
	play:function(_d){
		this.sidesChecking();
		this.itemsParent.set("tween",{duration:_d,transition:this.options.transition});
		this.itemsParent.tween(this.direction,-this.margin);
		if(this.options.paging){
			this.paging.removeClass("active");
			this.paging[Math.ceil(this.current/this.options.steps)].addClass("active");
		}
		this.options.onPlay(this.current,this.visible,this.items.length);
	},
	rotate:function(){
		if(this.options.autoplay){
			if(!this.options.autoplayOpposite){
				this.next.fireEvent("click");
			}else{
				this.prev.fireEvent("click");
			}
			this.timer=this.bound.rotate.delay(this.options.duration);
		}
	},
	sidesChecking:function(){
		if(this.options.mode=="line"){
			this.next.removeClass(this.next.cl+"-"+this.options.disableClass);
			this.prev.removeClass(this.prev.cl+"-"+this.options.disableClass);
			if(this.visible+this.current>=this.items.length){
				this.next.addClass(this.next.cl+"-"+this.options.disableClass);
			}else{
				if(this.current==0){
					this.prev.addClass(this.prev.cl+"-"+this.options.disableClass);
				}
			}
		}
	}
});


//tabs
function initTabs()
{
	var sets = document.getElementsByTagName("ul");
	for (var i = 0; i < sets.length; i++)
	{
		if (sets[i].className.indexOf("tabset") != -1)
		{
			var tabs = [];
			var links = sets[i].getElementsByTagName("a");
			for (var j = 0; j < links.length; j++)
			{
				if (links[j].className.indexOf("tab") != -1)
				{
					tabs.push(links[j]);
					links[j].tabs = tabs;
					var c = document.getElementById(links[j].href.substr(links[j].href.indexOf("#") + 1));

					if(c) if (links[j].className.indexOf("active") != -1){
						c.style.position = "relative";
						c.style.left = "0px";
					}
					else {
						c.style.position = "absolute";
						c.style.left = "-9999px";
					}

					links[j].onclick = function ()
					{
						var c = document.getElementById(this.href.substr(this.href.indexOf("#") + 1));
						if (c)
						{
							for (var i = 0; i < this.tabs.length; i++)
							{
								var tab = document.getElementById(this.tabs[i].href.substr(this.tabs[i].href.indexOf("#") + 1));
								if (tab)
								{
									tab.style.position = "absolute";
									tab.style.left = "-9999px";
								}
								this.tabs[i].className = this.tabs[i].className.replace("active", "");
							}
							this.className += " active";
							c.style.position = "relative";
							c.style.left = "0px";
							return false;
						}
					}
				}
			}
		}
	}
}
if (window.addEventListener)
	window.addEventListener("load", initTabs, false);
else if (window.attachEvent && !window.opera)
	window.attachEvent("onload", initTabs);