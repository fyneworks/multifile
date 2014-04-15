if(false){
	$(function(){
		$('.tabs').addClass('Clear').tabs();
	});
};

if(false){
	hljs.configure({tabReplace: '<span class="indent">\t</span>'});
	$(function(){
		$('pre code').each(function(i, e){
			hljs.highlightBlock(e);
		})
	});
};
