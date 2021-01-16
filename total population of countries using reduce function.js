

var request=new XMLHttpRequest()

request.open('GET','https://restcountries.eu/rest/v2/all',true)

request.send()

request.onload=function(){
    var countryData=JSON.parse(this.response)
     //console.log(countryData)

//calculating total population by using reduce function
totalPopulation=countryData.reduce((acc,ele)=>{
return acc+ele.population
},0)
console.log(totalPopulation)	
	
    
}