
$.ajax({

    async: true,
	crossDomain: true,
    method: "GET",
    contentType: "application/json; charset=utf-8",
    url: "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
    headers: {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "88e8626ed3msha214459b297f3adp19ea59jsnc0458ee19fea"
	},
    dataType: "json",
    success: function (response) {
       //console.log(response);
       //$('#results').append('<a class="waves-effect waves-light btn"></a>');
       for (i in response.countries_stat) {
       // console.log(response.countries_stat[i].country_name);
       // console.log(response.countries_stat[i].cases);
        $("#results").append(`<div class="col s12 m6">
        <div class="card-panel teal">
          <span class="card-title">${response.countries_stat[i].country_name}</span>
          <div class="card-content">
            <p class="g ">Cases:${response.countries_stat[i].cases} | Deaths:${response.countries_stat[i].deaths} | Recovered:${response.countries_stat[i].total_recovered}</p>
            <p class="g ">New-Deaths:${response.countries_stat[i].new_deaths} | New-Cases:${response.countries_stat[i].new_cases} | Critical-Cases:${response.countries_stat[i].serious_critical}</p>
            <p class="g ">Active-Cases: ${response.countries_stat[i].active_cases} </p>
            <p class="g ">Total-Cases-per-1 million_population: ${response.countries_stat[i].total_cases_per_1m_population} </p>
  
          </div>
        </div>
      </div>`);
        //for (j in response.countries_stat[i].country_name[i]) {
        //  console.log( response.countries_stat[i].country_name);
        //}
      }
      
     

    },
    error: function (result) {
        alert("Error");
    }
});