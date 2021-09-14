
$(document).ready(function(){
    $(".seemore-m").on('click', function(){
        $(".produtos-2").toggle("slow");
    })
    $('.menu-hb').on('click', function(){
        if($('.m1').hasClass('m1-open')){
            $('.m1').removeClass('m1-open')
            $('.m2').removeClass('m2-open')
            $('.m3').removeClass('m3-open')
            $('.nav-links').removeClass('open')
        }else{
            $('.m1').addClass('m1-open')
            $('.m2').addClass('m2-open')
            $('.m3').addClass('m3-open')
            $('.nav-links').addClass('open')
        }
    })
    $(".mais").on('click', function(){
        var value = parseInt(document.getElementById('qntd').value,10);
      value = isNaN(value) ? 1 : value;
      if(value >= 10) {
        value = 10;
      }else{
        value++;
      }
      document.getElementById('qntd').value = value;
      $('.resultado').html('$ ' + 9.99*$('#qntd').val())
    })

    $(".menos").on('click', function(){
      var value = parseInt(document.getElementById('qntd').value,10);
      value = isNaN(value) ? 1 : value;
      if(value <= 1) {
        value = 1;
      }else{
        value--;
      }
      document.getElementById('qntd').value = value;
      
      $('.resultado').html('$ ' + 9.99*$('#qntd').val())

    })
});