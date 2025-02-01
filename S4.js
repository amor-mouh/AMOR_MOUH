function calculate() {

    var tdph = Number(document.getElementById('tdph').value) ;
  
    var exph= Number(document.getElementById('exph').value);
  
    var tpph = Number(document.getElementById('tpph').value);
  
    var fph = document.getElementById('fph').value =  Number((tdph)*0.2+(exph*0.6)+(tpph)*0.2);

  
    var tdcal = Number(document.getElementById('tdcal').value) ;
  
    var excal = Number(document.getElementById('excal').value);

    var fcal = document.getElementById('fcal').value = Number((((tdcal)*4)+(excal*6))/10);
  
  
  
    var tdchime = Number(document.getElementById('tdchime').value) ;
  
  
    var exchime = Number(document.getElementById('exchime').value);
  
    var tpchime = Number(document.getElementById('tpchime').value);
  
    var fchime = document.getElementById('fchime').value = Number((tdchime)*0.2+(exchime*0.6)+(tpchime*0.2));



  
    var tdalgebra = Number(document.getElementById('tdalgebra').value) ;
  
    var exalgebra = Number(document.getElementById('exalgebra').value);

    var falgebra = document.getElementById('falgebra').value = Number((((tdalgebra)*4)+(exalgebra*6))/10); 



    var tdm = Number(document.getElementById('tdm').value) ;
  
    var exm = Number(document.getElementById('exm').value);

    var fm = document.getElementById('fm').value = Number((((tdm)*4)+(exm*6))/10);

    var tdst = Number(document.getElementById('tdst').value) ;
  
    var exst = Number(document.getElementById('exst').value);

    var fst = document.getElementById('fst').value = Number((((tdst)*4)+(exst*6))/10); 

    
    var fds = Number(document.getElementById('fds').value);

    var eng = Number(document.getElementById('eng').value);
  
  
    var tdinfo = Number(document.getElementById('tdinfo').value);
  
    var exinfo = Number(document.getElementById('exinfo').value);
  
    var finfo = document.getElementById('finfo').value = Number((((tdinfo)*4)+(exinfo*6))/10);   
  
  
  
      document.getElementById("total").innerHTML = ((3*fph)+(3*fchime)+(2*finfo)+(2*falgebra)+(2*fcal)+(2*fm)+(2*fds)+(2*fst)+eng)/19;

      var total = ((3*fph)+(3*fchime)+(2*finfo)+(2*falgebra)+(2*fcal)+(2*fm)+(2*fds)+(2*fst)+eng)/19;

      document.getElementById("total").innerHTML = total.toFixed(2);

        if (total >= 10) {
            document.getElementById("total").style.color = "green";
            document.getElementById("message").innerHTML = "Allowed";
            document.getElementById("message").style.color = "green";
        } 
        else {
            document.getElementById("total").style.color = "red";
            document.getElementById("message").innerHTML = "Not allowed";
            document.getElementById("message").style.color = "red";
        }
  
}

