function calculate() {

    var tdph = Number(document.getElementById('tdph').value) ;
  
   
  
    var exph= Number(document.getElementById('exph').value);
  
    var tpph = Number(document.getElementById('tpph').value);
  
   
  
    var fph = document.getElementById('fph').value =  Number((tdph)*0.2+(exph*0.6)+(tpph)*0.2);
  
  
  
  
  
    var tdchime = Number(document.getElementById('tdchime').value) ;
  
  
    var exchime = Number(document.getElementById('exchime').value);
  
    var tpchime = Number(document.getElementById('tpchime').value);
  
    
  
    var fchime = document.getElementById('fchime').value = Number((tdchime)*0.2+(exchime*0.6)+(tpchime*0.2));
  
  
  
  
  
  
    var info = Number(document.getElementById('info').value);
  
    
  
  
  
  
  
      var tdalgebra = Number(document.getElementById('tdalgebra').value) ;
  
     
  
      var exalgebra = Number(document.getElementById('exalgebra').value);
  
      var falgebra = document.getElementById('falgebra').value = Number((((tdalgebra)*4)+(exalgebra*6))/10);
  
  
  
  
  
      var tdcal = Number(document.getElementById('tdcal').value) ;
  
     
  
      var excal = Number(document.getElementById('excal').value);
  
      var fcal = document.getElementById('fcal').value = Number((((tdcal)*4)+(excal*6))/10);
  
  
  
  
  
      var tdps = Number(document.getElementById('tdps').value) ;
  
    
  
      var exps = Number(document.getElementById('exps').value);
  
      var fps= document.getElementById('fps').value = Number((((tdps)*4)+(exps*6))/10);
  
  
  
  
  
  
        var eng = Number(document.getElementById('eng').value);
  
  
  
  
  
        var eth = Number(document.getElementById('eth').value) ;
  
  
  
        document.getElementById("total").innerHTML = ((4*fph)+(4*fchime)+(2*info)+(2*falgebra)+(3*fcal)+(2*fps)+eng+eth)/19;
        var total = ((4*fph)+(4*fchime)+(2*info)+(2*falgebra)+(3*fcal)+(2*fps)+eng+eth)/19;
        document.getElementById("total").innerHTML = total.toFixed(2);

        if (total >= 10) {
            document.getElementById("total").style.color = "green";
            document.getElementById("message").innerHTML = "allowed";
            document.getElementById("message").style.color = "green";
        } 
        else {
            document.getElementById("total").style.color = "red";
            document.getElementById("message").innerHTML = "Not allowed";
            document.getElementById("message").style.color = "red";
        }

  

  
}
  
  

