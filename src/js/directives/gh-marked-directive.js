/**
 * markedown 转化指令,带语法高亮
 * @作者     翁光辉
 *             --->angelwgh
 * @日期     2017-07-04
 *
 * 依赖 angularMarked highlight
 * 		在angularMarked的基础上做了些小修改
 * 使用方法
 *
 * 指令形式
 * =========================================
 *  <gh-marked>
 *	  # Markdown directive
 *	  *It works!*  
 *	</gh-marked>
 * ----------------------------------
 *  <div gh-marked="my_markdown">
 *  <div>
 *  从$scope.my_markdown中读取数据
 * ----------------------------------
 *  <div marked src="'README.md'">
 *  </div>
 *  读取README.md文件中的数据
 * ----------------------------------
 * <script type="text/ng-template" id="tpl.md">
 * ## Markdown
 *
 * **Code blocks**
 *
 *     This is <b>bold</b>
 *
 * **Ampersands**
 *
 * Star Trek & Star Wars
 * </script>
 * 
 * <div marked src="'tpl.md'"></div>
 * 读取tpl.md模版的数据
 * ----------------------------------
 * <script type="text/ng-template" id="tpl.md">
 *   ## Markdown
 *
 *    **This will go through $compile and will be effective**
 *
 *   <button ng-click="doClick()"></button>
 *
 * </script>
 *
 * <div ng-controller="ClickHandler">
 * 		<div marked src="'tpl.md'" compile="true"></div>
 *
 * </div>
 *
 * .controller('ClickHandler', function() {
 * 		this.doClick = function() {
 *   	...
 *    	};
 * })
 *
 * 使用compile属性可以在md内部支持angular指令
 * =========================================
 */
define(['angularMarked','highlight'],function () {


	var ghMarked =angular.module('gh-marked', ['hc.marked'])
	//console.log(ghMarked)
	ghMarked.config(['markedProvider', function (markedProvider) {

	  markedProvider.setOptions({
	  	gfm: true,
	  	tables: true,
	  	highlight: function (code, lang) {
	      if (lang) {
	      	
	        return hljs.highlight(lang, code, true).value;
	      } else {
	      	
	        return hljs.highlightAuto(code).value;
	      }
	    }
	  });
	}]);

	ghMarked.directive('ghMarked', ['$templateRequest','marked','$compile', 
		function($templateRequest,marked,$compile){
		// Runs during compile
		console.log(222)
		function unindent(text) {
			if (!text) {
		    	return text;
			}

			var lines = text
			    .replace(/\t/g, '  ')
			    .split(/\r?\n/);

			var min = null;
			var len = lines.length;
			var i;

			for (i = 0; i < len; i++) {
			    var line = lines[i];
			    var l = line.match(/^(\s*)/)[0].length;
			    if (l === line.length) {
			    	continue;
			    }
			    min = (l < min || min === null) ? l : min;
			}

		  	if (min !== null && min > 0) {
		    	for (i = 0; i < len; i++) {
		    		lines[i] = lines[i].substr(min);
		    	}
			}
			return lines.join('\n');
		};
		
		return {
		    restrict: 'AE',
		    replace: true,
		    scope: {
		    	opts: '=',
		    	ghMarked: '=',
		    	compile: '@',
		    	src: '='
		    },
		    link: function (scope, element, attrs) {
		    	console.log(attrs.ghMarked)
		   		if (attrs.ghMarked) {
			        set(scope.ghMarked);
			        console.log(scope.ghMarked)
			        scope.$watch('ghMarked', set);
		   		} else if (attrs.src) {
			        scope.$watch('src', function (src) {
			        	$templateRequest(src, true).then(function (response) {
			            	set(response);
			        	}, function () {
			            	set('');
			            	scope.$emit('$markedIncludeError', attrs.src);
			        	});
			        });
		   		} else {
		        	set(element.text());
		   		}

		   		function set(text) {
			        text = unindent(String(text || ''));
			        //var html = marked(text, scope.opts || null)
			        var ele = angular.element(marked(text, scope.opts || null));
			        //console.log(ele.find('code').addClass('hljs'))
			        //console.log(html.match(/<code/))
			       	ele.find('code').addClass('hljs');
			       	element.empty().append(ele);
			       	
			        if (scope.$eval(attrs.compile)) {
			        	$compile(element.contents())(scope.$parent);
			        }
		   		}
		    }
		};
	}]);
})