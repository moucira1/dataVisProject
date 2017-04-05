<!--load the Google Chart libraries-->
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(pie);
      
    <!-- the function will call --> 
    function pie() {
    
     myplayer = document.getElementById("dropdown").value;
     
     
     team = [{player: "Messi", score: 25, assists: 10, discipline: 20, fairPlay: 9},
     {player: "Ronaldo", score: 19, assists: 50, discipline: 30, fairPlay: 10},
	 {player: "Benzema", score: 5, assists: 2, discipline: 60, fairPlay: 20},
	 {player: "Griezmann", score: 10, assists: 3, discipline: 40, fairPlay: 13}
     ,{player: "Iniesta", score: 1, assists: 15, discipline: 5, fairPlay: 10},
			 
	 {player: "Aspas", score: 15, assists: 10, discipline: 3, fairPlay: 50},
     {player: "Aduriz", score: 12, assists: 1, discipline: 50, fairPlay: 56},
     {player: "Moreno", score: 11, assists: 16, discipline: 45, fairPlay: 66},
     {player: "Castro", score: 10, assists: 20, discipline: 15, fairPlay: 12},
     {player: "Enrich", score: 10, assists: 12, discipline: 15, fairPlay: 12}
     
     ];
    
		
		
    <!-- loop will keep looping until the value become greater then i, and stores on the array -->
		
		
	var sel = document.getElementById("dropdown")
		
    for(i=0; i<team.length; i++) { 
    if(myplayer == team[i].player) {
       score = parseInt(team[i].score);
       assists = parseInt(team[i].assists);
       discipline = parseInt(team[i].discipline);
       fairPlay = parseInt(team[i].fairPlay); 
    }	
    } 
			
		
		
    var data = google.visualization.arrayToDataTable([
          ['Rank', 'Percentage'],
          ['Top score',     score],
          ['Assists',      assists],
          ['Discipline',  discipline],
          ['Fair Play', fairPlay],
          
        ]);
        var options = {
          title: 'La Liga Statistic 2016/2017 For  '+myplayer,
		  slices: {0: {color: '#006EFF'}, 1:{color: '#00FF08'}, 2:{color: '#00FFFF'}, 3: {color: '#FF7F50'}}
	  
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    
        
      } 
      
     