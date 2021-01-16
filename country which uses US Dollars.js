

var request=new XMLHttpRequest()

request.open('GET','https://restcountries.eu/rest/v2/all',true)

request.send()

request.onload=function(){
    var countryData=JSON.parse(this.response)
    // console.log(countryData)

	countries=countryData.filter((ele)=>{
		//console.log(ele.currencies)
		return ele.currencies[0].code=='USD'
		
	})

//for(var i in countryData)
//{
//	console.log(countryData[i].currencies[0].code=='USD')
//}
	
   console.log(countries)
}