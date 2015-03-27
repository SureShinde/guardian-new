/* IE6 Hover fix module */
var ieHover = {
	lazyMode: true,
	init: function(){
		this.setDefaults();
		return this;
	},
	setDefaults: function() {
		this.fixActive = /MSIE 6/.test(navigator.userAgent);
		if(this.fixActive) {
			this.hoverEvents = []; this.hoverQueue = [];
			this.activators = {
				onhover:{on:'onmouseenter', off:'onmouseleave'},
				onactive:{on:'onmousedown', off:'onmouseup'}
			}
			window.attachEvent('onload', this.bind(this.domReady,this));
			window.attachEvent('onunload', this.bind(this.unhookHoverEvents,this));
		}
	},
	domReady: function() {
		this.pageReady = true;
		if(this.lazyMode) {
			this.processStylesheets();
		}
		if(this.hoverQueue.length) {
			for(var i = 0; i < this.hoverQueue.length; i++) {
				this.doFix(this.hoverQueue[i].s,this.hoverQueue[i].c);
			}
		}
	},
	processStylesheets: function() {
		var sheets = document.styleSheets, len = sheets.length;
		for(var i = 0; i < len; i++) { this.parseStylesheet(sheets[i]); }
	},
	parseStylesheet: function(sheet) {
		if(sheet.imports) {
			try {
				var imports = sheet.imports, l = imports.length;
				for(var i=0; i<l; i++) this.parseStylesheet(sheet.imports[i]);
			} catch(e){}
		}
		try {
			var rules = (this.currentSheet = sheet).rules, l = rules.length;
			for(var j=0; j<l; j++) this.parseCSSRule(rules[j]);
		} catch(e){}
	},
	parseCSSRule: function(rule) {
		var select = rule.selectorText, style = rule.style.cssText;
		if(!/(^|\s)(([^a]([^ ]+)?)|(a([^#.][^ ]+)+)):(hover|active)/i.test(select) || !style) return;
		var pseudo = select.replace(/[^:]+:([a-z-]+).*/i, 'on$1');
		var newSelect = select.replace(/(\.([a-z0-9_-]+):[a-z]+)|(:[a-z]+)/gi, '.$2' + pseudo);
		var className = (/\.([a-z0-9_-]*on(hover|active))/i).exec(newSelect)[1];
		var affected = select.replace(/:(hover|active).*$/, '');
		var elements = this.parseSelector(affected);
		if(!elements.length) return;
		this.currentSheet.addRule(newSelect, style);
		for(var i=0; i < elements.length; i++) {
			this.addHoverElement(elements[i], className, this.activators[pseudo]);
		}
	},
	fix: function(selector, className) {
		if(this.fixActive) {
			if(this.pageReady) {
				this.doFix(selector,className)
			} else {
				this.hoverQueue.push({s:selector,c:className});
			}
		}
	},
	doFix: function(selector, className) {
		if(this.fixActive && typeof selector === 'string') {
			var elements = this.parseSelector(selector);
			for(var i=0; i < elements.length; i++) {
				this.addHoverElement(elements[i], className || 'hover', this.activators['onhover']);
			}
		}
	},
	addHoverElement: function(node, className, events) {
		if(!node.hovers) node.hovers = {};
		if(node.hovers[className]) return;
		node.hovers[className] = true;
		this.hookHoverEvent(node, events.on, function() { node.className += ' ' + className; });
		this.hookHoverEvent(node, events.off, function() { node.className = node.className.replace(new RegExp('\\s+'+className, 'g'),''); });
	},
	hookHoverEvent: function(node, type, handler) {
		node.attachEvent(type, handler);
		this.hoverEvents[this.hoverEvents.length] = {
			node:node, type:type, handler:handler
		};
	},
	unhookHoverEvents: function() {
		for(var e,i=0; i < this.hoverEvents.length; i++) {
			e = this.hoverEvents[i];
			e.node.detachEvent(e.type, e.handler);
		}
	},
	parseSelector: (function () {
		var g = /^([^#.>`]*)(#|\.|\>|\`)(.+)$/;
		function parseSelector(a, b) {
			var c = a.split(/\s*\,\s*/);
			var d = [];
			for (var i = 0; i < c.length; i++) {
				d = d.concat(doParse(c[i], b))
			};
			return d
		};
		function doParse(a, b, c) {
			a = a.replace(" ", "`");
			var d = a.match(g);
			var e, listNodes, listSubNodes, subselector, i, limit;
			var f = [];
			if (d == null) {
				d = [a, a]
			};
			if (d[1] == "") {
				d[1] = "*"
			};
			if (c == null) {
				c = "`"
			};
			if (b == null) {
				b = document
			};
			switch (d[2]) {
			case "#":
				subselector = d[3].match(g);
				if (subselector == null) {
					subselector = [null, d[3]]
				};
				e = document.getElementById(subselector[1]);
				if (e == null || (d[1] != "*" && !matchNodeNames(e, d[1]))) {
					return f
				};
				if (subselector.length == 2) {
					f.push(e);
					return f
				};
				return doParse(subselector[3], e, subselector[2]);
			case ".":
				if (c != ">") {
					listNodes = getElementsByTagName(b, d[1])
				} else {
					listNodes = b.childNodes
				};
				for (i = 0, limit = listNodes.length; i < limit; i++) {
					e = listNodes[i];
					if (e.nodeType != 1) {
						continue
					};
					subselector = d[3].match(g);
					if (subselector != null) {
						if (e.className == null || e.className.match("(\\s|^)" + subselector[1] + "(\\s|$)") == null) {
							continue
						};
						listSubNodes = doParse(subselector[3], e, subselector[2]);
						f = f.concat(listSubNodes)
					} else if (e.className != null && e.className.match("(\\s|^)" + d[3] + "(\\s|$)") != null) {
						f.push(e)
					}
				};
				return f;
			case ">":
				if (c != ">") {
					listNodes = getElementsByTagName(b, d[1])
				} else {
					listNodes = b.childNodes
				};
				for (i = 0, limit = listNodes.length; i < limit; i++) {
					e = listNodes[i];
					if (e.nodeType != 1) {
						continue
					};
					if (!matchNodeNames(e, d[1])) {
						continue
					};
					listSubNodes = doParse(d[3], e, ">");
					f = f.concat(listSubNodes)
				};
				return f;
			case "`":
				listNodes = getElementsByTagName(b, d[1]);
				for (i = 0, limit = listNodes.length; i < limit; i++) {
					e = listNodes[i];
					listSubNodes = doParse(d[3], e, "`");
					f = f.concat(listSubNodes)
				};
				return f;
			default:
				if (c != ">") {
					listNodes = getElementsByTagName(b, d[1])
				} else {
					listNodes = b.childNodes
				};
				for (i = 0, limit = listNodes.length; i < limit; i++) {
					e = listNodes[i];
					if (e.nodeType != 1) {
						continue
					};
					if (!matchNodeNames(e, d[1])) {
						continue
					};
					f.push(e)
				};
				return f
			}
		};
		function getElementsByTagName(a, b) {
			if (b == "*" && a.all != null) {
				return a.all
			};
			return a.getElementsByTagName(b)
		};
		function matchNodeNames(a, b) {
			if (b == "*") {
				return true
			};
			return a.nodeName.toLowerCase().replace("html:", "") == b.toLowerCase()
		};
		return parseSelector
	}()),
	bind: function(fn, scope, args) {
		return function() {
			return fn.apply(scope, args || arguments);
		}
	}
}.init();