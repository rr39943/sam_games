!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){r(2),e.exports=r(1)},function(e,t,r){},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.r(t);var a=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,c(t).call(this,e))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,React.Component),r=t,(n=[{key:"render",value:function(){return React.createElement("span",null,this.props.hide?"_":this.props.carac.replace(" "," ")," ")}}])&&o(r.prototype,n),a&&o(r,a),t}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,p(t).call(this,e))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,React.Component),r=t,(n=[{key:"componentDidMount",value:function(){document.addEventListener("keypress",this.props.handleKeyPress)}},{key:"render",value:function(){return React.createElement("div",{id:"mot"},React.createElement("p",null,this.props.mot.map(function(e,t){return React.createElement(a,{key:t,carac:e.carac,hide:e.hide})})))}}])&&f(r.prototype,n),o&&f(r,o),t}();function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,_(t).call(this,e))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,React.Component),r=t,(n=[{key:"render",value:function(){return React.createElement("div",{id:"fin"},this.props.message)}}])&&h(r.prototype,n),o&&h(r,o),t}();function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,S(t).call(this,e))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,React.Component),r=t,(n=[{key:"render",value:function(){return React.createElement("div",{id:"dessin"},React.createElement("img",{className:"planete-g planete",src:"/static/samvrombinator/img/Blue_Marble_rotating.gif"}),React.createElement("img",{id:"fusee-b",className:"fusee",src:"/static/samvrombinator/img/rocket-space-blue.png"}),React.createElement("img",{id:"fusee-r",className:"fusee",src:"/static/samvrombinator/img/rocket-space-red.png"}),React.createElement("img",{className:"planete-d planete",src:"/static/samvrombinator/img/mars_r.gif"}))}}])&&O(r.prototype,n),o&&O(r,o),t}();function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var M=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=x(t).call(this,e))||"object"!==k(o)&&"function"!=typeof o?T(n):o).state={mots:[],longueur_partie:1,num_partie:0,mot:r.build_mot("vide"),score_joueur:0,score_ordi:0,score_perdu:5,message:"",color:"",fin:!1},r.creer_jeu=r.creer_jeu.bind(T(r)),r.shuffle_mots=r.shuffle_mots.bind(T(r)),r.build_mot=r.build_mot.bind(T(r)),r.handleKeyPress=r.handleKeyPress.bind(T(r)),r.set_score=r.set_score.bind(T(r)),r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,React.Component),r=t,(n=[{key:"componentDidMount",value:function(){var e=this;function t(e){for(var t=window.location.search.substring(1).split("&"),r=0;r<t.length;r++){var n=t[r].split("=");if(n[0]==e)return n[1]}}var r=t("voc_selected"),n=t("nb_errors")?parseInt(t("nb_errors"))+1:this.state.score_perdu;fetch(r?"./get_words?voc="+r:"./get_words").then(function(e){return e.json()}).then(function(r){var o=e.shuffle_mots(r.words);if(t("nb_words")&&parseInt(t("nb_words"))<o.length)var i=parseInt(t("nb_words"));else i=o.length;e.setState({mots:o,score_perdu:n,longueur_partie:i}),e.creer_jeu()})}},{key:"creer_jeu",value:function(){this.setState({num_partie:this.state.num_partie+1,mot:this.build_mot(this.state.mots[this.state.num_partie]),score_joueur:0,score_ordi:0},this.transform_dessin)}},{key:"check_score_ordi",value:function(){this.transform_dessin(),this.state.score_ordi==this.state.score_perdu&&(this.setState({message:"PERDU !",color:"rose",mot:this.state.mot.map(function(e,t){return{carac:e.carac,hide:!1}}),fin:!0}),this.fin_partie())}},{key:"check_score_joueur",value:function(){var e=this;this.transform_dessin(),this.state.score_joueur===this.state.mot.length&&(this.state.longueur_partie>this.state.num_partie?(this.setState({message:"Bravo !",color:"rose"}),setTimeout(function(){e.setState({message:"",color:"rose"}),e.creer_jeu()},2e3)):(this.setState({message:"GAGNÉ !",color:"rose",fin:!0}),this.fin_partie()))}},{key:"set_score",value:function(){var e=this.state.mot.filter(function(e){return!e.hide}).length;this.state.score_joueur<e?this.setState({score_joueur:e},this.check_score_joueur):this.setState({score_ordi:this.state.score_ordi+1},this.check_score_ordi)}},{key:"transform_dessin",value:function(){var e=jQuery("#dessin").width()-340;jQuery("#fusee-b").animate({left:String(e/this.state.score_perdu*this.state.score_ordi+200)+"px"},1e3),jQuery("#fusee-r").animate({left:String(e/this.state.mot.length*this.state.score_joueur+200)+"px"},1e3)}},{key:"build_mot",value:function(e){return e.split("").map(function(e,t){return{carac:e,hide:!0}})}},{key:"test_key",value:function(e,t){return(t=t.toLowerCase().replace(/[àäâ]/g,"a").replace(/[éèêë]/g,"e").replace(/[öô]/g,"o").replace(/[ùü]/g,"u"))==e.toLowerCase()}},{key:"handleKeyPress",value:function(e){var t=this,r=e.key;this.setState({mot:this.state.mot.map(function(e,n){return{carac:e.carac,hide:!(!e.hide||t.test_key(r,e.carac))}})}),this.set_score()}},{key:"fin_partie",value:function(){document.removeEventListener("keypress",this.handleKeyPress),jQuery("#fin").css("font-size","100px")}},{key:"shuffle_mots",value:function(e){var t=new Array;e.map(function(e){return t.push(e)});for(var r=t.length-1;r>0;r--){var n=Math.floor(Math.random()*(r+1)),o=t[r];t[r]=t[n],t[n]=o}return t}},{key:"render",value:function(){return React.createElement("div",null,React.createElement("div",{className:"container mt-4"},React.createElement("div",{className:"card"},React.createElement(m,{mot:this.state.mot,handleKeyPress:this.handleKeyPress}))),React.createElement(g,{message:this.state.message}),React.createElement(E,null))}}])&&R(r.prototype,n),o&&R(r,o),t}();ReactDOM.render(React.createElement(M,null),document.getElementById("root"))}]);