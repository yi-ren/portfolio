var houston = {
            "type": "Feature",
            "properties": {
				"element":$("#houston"), 
				"score":0,
                "name": "Houston, TX",
                "number_of_job_openings": 4506,
                "medium_annual_income": 58462,
                "household": 45010,
				"my_standing": 77193/53601,
                "population": 2196000,
				"averagerent": 869.59,
				"rent_affordibility": 58462/869.59/12,
				"topemployers": ["Aquent Staffing", "Jobspring Partners", "Wayfair"],
				"tripadvisor_reviews": 17644,
				"museums":48,
				"theaters": 232,
				"libraries": 184,
				"bars":6253,
				"fun_score": 27.95258621,
				"serious_score":1/27.95258621,
				"crimerates": 10.51,
				"safety": 100/10.51,
				"mediumhomevalue": 309990,
				"house_affordibility": 58462/309990,
				"area": 89.63,
				"closeness_to_friends": 10,
				"number_of_trips_home_you_can_afford": 58462/254,
				"meetups": ["The houston Hiking Meetup Group", "houston New Technology Meetup Group", "The houston Spanish Language Meetup Group"],
                "sum": 'Houston is the most populous city in Texas, and the fourth most populous city in the United States. It is the largest city in the Southern United States, the seat of Harris County, and fifth-most populated metropolitan area in the United States.',
                "popupContent": '<h4>Houston, TX</h4><p>4506 job openings</p>'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-95.3698, 29.7604]
            }
};

var phoenix = {
            "type": "Feature",
            "properties": {
				"element":$("#phoenix"), 
				"score":0,
                "name": "Phoenix, AZ",
                "number_of_job_openings": 2896,
                "medium_annual_income": 59404,
                "household": 47139,
				"topemployers": ["Aquent Staffing", "Jobspring Partners", "Wayfair"],
				"averagerent": 719.17,
				"rent_affordibility": 59404/719.17/12,
				"mediumhomevalue": 174600,
				"house_affordibility": 59404/174600,
				"tripadvisor_reviews": 18386,
				"museums":27,
				"theaters": 243,
				"libraries": 145,
				"bars":4727,
				"fun_score":28.89534884,
				"serious_score":1/28.89534884,
				"crimerates": 6.46,
				"safety": 100/6.46,
				"population": 1513000,
				"area": 469,
				"closeness_to_friends": 20,
				"number_of_trips_home_you_can_afford": 59404/266,
				"meetups": ["Hudson Valley Hikers", "NY Tech Meetup", "First Time Upper West Side Moms"],

                "sum": 'Phoenix is the capital, and largest city, of the state of Arizona. With 1,445,632 people (as of the 2010 U.S. Census), Phoenix is the most populous state capital in the United States, as well as the sixth most populous city nationwide.',
                "popupContent": '<h4>Phoenix, AZ</h4><p>2896 job openings</p>'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-112.0667, 33.4500]
			}
};

var sanan = {
            "type": "Feature",
            "properties": {
				"element":$("#sanan"), 
				"score":0,
                "name": "San Antonio, TX",
                "number_of_job_openings": 2525,
                "medium_annual_income": 60148,
                "household": 45722,
				"topemployers": ["Workbridge Associates", "CyberCoders", "Talent Avenue"],
				"averagerent": 761.12,
				"rent_affordibility":60148/761.12/12,
				"mediumhomevalue": 177900,
				"house_affordibility": 60148/177900,
				"tripadvisor_reviews": 35480,
				"museums":62,
				"theaters": 114,
				"libraries": 70,
				"bars":2244,
				"fun_score":17.86363636,
				"serious_score":1/17.86363636,
				"crimerates": 6.48,
				"safety": 100/6.48,
				"population": 1409000,
				"area": 231.9,
				"closeness_to_friends": 10,
				"number_of_trips_home_you_can_afford": 60148/318,
				"meetups": ["Bay Area Hikers (20s & 30s only)", "HTML5", "Norcal Pickup Soccer"],

                "sum": 'San Antonio, officially the City of San Antonio, is the seventh most populous city in the United States of America and the second most populous city in the state of Texas. It was the fastest growing of the top 10 largest cities in the United States from 2000 to 2010, and the second from 1990 to 2000.',
                "popupContent": '<h4>San Antonio, TX</h4><p>2525 job openings</p>'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-98.5000, 29.4167]
			}
};

var seattle = {
            "type": "Feature",
            "properties": {
				"element":$("#seattle"), 
				"score":0,
                "name": "Seattle, WA",
                "number_of_job_openings": 2547,
                "medium_annual_income": 60462,
                "household": 65277,
				"topemployers": ["Amazon Corporate LLC", "Nordstrom", "FILTER"],
				"averagerent": 1183.33,
				"rent_affordibility":60462/1183.33/12,
				"mediumhomevalue": 473500,
				"house_affordibility": 60462/473500,
				"tripadvisor_reviews": 62239,
				"museums":61,
				"theaters": 322,
				"libraries": 218,
				"bars":4362,
				"fun_score":16.78853047,
				"serious_score":1/16.78853047,
				"crimerates": 5.82,
				"safety":17.18213058,
				"population": 652405,
				"area": 142.5,
				"closeness_to_friends": 20,
				"number_of_trips_home_you_can_afford": 60462/436,
				"meetups": ["Pacific Northwest Hiking & Backpacking Group", "New Tech Seattle", "The Seattle Single Parents Meetup Group"],

                "sum": 'Seattle is the largest city in both the State of Washington and the Pacific Northwest region of North America and, as of July 2013, the fastest-growing major city in the United States. A major gateway for trade with Asia, Seattle is the 8th largest port in the United States and 9th largest in North America in terms of container handling.',
                "popupContent": '<h4>Seattle, WA</h4><p>2547 job openings</p></p>'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.3331, 47.6097]
			}
};

var dallas = {
            "type": "Feature",
            "properties": {
				"element":$("#dallas"), 
				"score":0,
                "name": "Dallas, TX",
                "number_of_job_openings": 2501,
                "medium_annual_income": 58823,
                "household": 42846,
				"topemployers": ["Hirewell", "Aquent Staffing", "Punchkick Interactive"],
				"averagerent": 781.67,
				"rent_affordibility":58823/781.67/12,
				"mediumhomevalue": 213343,
				"house_affordibility": 58823/213343,
				"tripadvisor_reviews": 30749,
				"museums":29,
				"theaters": 232,
				"libraries": 120,
				"bars":4820,
				"fun_score": 33.90604027,
				"serious_score": 1/33.90604027,
				"crimerates": 8.05,
				"safety": 100/8.05,
				"population": 1258000,
				"area": 234,
				"closeness_to_friends": 30,
				"number_of_trips_home_you_can_afford": 58823/188,
				"meetups": ["dallas Hiking, Outdoors & Social Group", "dallas Lean Startup Circle", "dallas Moms Network"],

                "sum": "Dallas is a major city in Texas and is the largest urban center of the fourth most populous metropolitan area in the United States. The city's prominence arose from its historical importance as a center for the oil and cotton industries, and its position along numerous railroad lines.",
                "popupContent": '<h4>Dallas, IL</h4><p>209 job openings</p>'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-96.7970, 32.7767]
			}
};

var cities = [phoenix, sanan, seattle, dallas, houston];
