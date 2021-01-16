

var request=new XMLHttpRequest()

request.open('GET','https://restcountries.eu/rest/v2/all',true)

request.send()

request.onload=function(){
    var countryData=JSON.parse(this.response)
     //console.log(countryData)

	countries=countryData.filter((ele)=>{
		return ele.population<200000
	})
	
    console.log(countries)
}