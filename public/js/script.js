$( document ).ready(function() {
	var y = $(window).height();
	var ywrp = $('.wrp').height();
	var ycalc = y - 77;
	if(ywrp < ycalc){
		$('.wrp').css('min-height', ycalc+'px');
	}

	$('#search').multiselect();
});
function myFunction() {
    var x = document.getElementById("search");
    var option = document.createElement("option");
    option.text = $('.inputi').val();
    if($('.inputi').val() == '') {
      alert('Fushë e zbrazur')
    }
    else {
      x.add(option);
    }
    
}
	
  