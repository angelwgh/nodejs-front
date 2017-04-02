!function () {
	$.get('/e/templates/150703/htmltemplates/lx.html',function(data){
		sucess(data)
	})

	function sucess (html){
		var $html = $(html);
		$('body').prepend($html)
	}
	
}()

//