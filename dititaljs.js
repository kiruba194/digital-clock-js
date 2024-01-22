const clock=document.querySelector(`.fdss`)
function ramlalla(){
    var ccount=new Date();
    var hrs=ccount.getHours();
    var mine=ccount.getMinutes();
    var sece=ccount.getSeconds();
    var txt="AM"
    if(hrs>12){
        hrs=hrs-12;
        txt="PM"
    }
    else if(hrs==0){
        hrs=12;
        txt="AM"
    }
    hrs=hrs<10?"0"+hrs:hrs;
    mine=mine<10?"0"+mine:mine;
    sece=sece<10?"0"+sece:sece;

    clock.innerHTML=(`${hrs} :${mine} :${sece} ${txt}`)
    
    
    
}
ramlalla()
setInterval(ramlalla,1000)