

$.ajax({

    async: true,
	crossDomain: true,
    method: "GET",
    contentType: "application/json; charset=utf-8",
    url: "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
    headers: {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "88e8626ed3msha214459b297f3adp19ea59jsnc0458ee19fea"
	},
    dataType: "json",
    success: function (response) {
      // console.log(response);
      // console.log(response.total_cases);
       //$('#results').append('<a class="waves-effect waves-light btn"></a>');
       $('#results').append('<div class="col s12 "><div class="card-panel teal"><span class="card-title span-t">Global</span><h6 class="txt">Recovered</h6><span class="card-title span-t">'+response.total_cases+'</span></div></div>');
       $('#results').append('<div class="col s12 "><div class="card-panel teal"><span class="card-title span-t">Global</span><h6 class="txt">Deaths</h6><span class="card-title span-t">'+response.total_deaths+'</span></div></div>');
       $('#results').append('<div class="col s12 "><div class="card-panel teal"><span class="card-title span-t">Global</span><h6 class="txt">Recovered</h6><span class="card-title span-t">'+response.total_recovered+'</span></div></div>');
       $('#results').append(`<div class="row">
       <div class="col s12">
         <div class="card blue-grey darken-1">
           <div class="card-content white-text">
             <span class="card-title ">Coronavirus Current Statistics..</span>
             <p class="pt-1">Total Cases : ${response['total_cases']}</p>                  
             <p class="pt-1">Total Deaths : ${response['total_deaths']}</p>
             <p class="pt-1">Total Recovered : ${response['total_recovered']}</p>
             <p class="pt-1">New Cases Of Coronavirus : ${response['new_cases']}</p>
             <p class="pt-1">New Deaths of Coronavirus : ${response['new_deaths']}</p>
             <p class="pt-1">Last Update at : ${response['statistic_taken_at']}</p>

           </div>
         </div>
       </div>
     </div>`);



    },
    error: function (result) {
        alert("Error");
    }
});