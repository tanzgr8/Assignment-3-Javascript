var get = document.getElementById("get");
get.addEventListener("click",search("Cocktail"));
 function getData(name){
     console.log(typeof(name));
    var url ="https://www.thecocktaildb.com/api/json/v1/1/filter.php?c="+name+"";
     fetch(url).then((response)=>{
         console.log(url);
         return response.json();
        }).then((data)=>{
            return display(data);
        })
 }
 function display(data){
     var obj =data.drinks;
     var disp= document.getElementById("display");
     var i=0;
     var newtag="<div class='row'>";
     for(i=0;i<12;i++){
        newtag+="<div class='col-lg-4 col-sm-6 '><div class='thumbnail'><img src='"+obj[i].strDrinkThumb+"'<div class='caption'><p>"+obj[i].strDrink+ "</p></div></div> "
     }
     newtag+="</div>"
     disp.innerHTML=newtag;

 }
 function search(name){
     console.log(name);
     return getData(name);
 }
