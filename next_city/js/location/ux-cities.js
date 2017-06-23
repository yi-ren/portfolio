var boston = {
            "type": "Feature",
            "properties": {
				"element":$("#boston"), 
				"score":0,
                "name": "Boston, MA",
                "number_of_job_openings": 187,
                "medium_annual_income": 77193,
                "household": 53601,
				"my_standing": 77193/53601,
                "population": 645966,
				"averagerent": 1393.60,
				"rent_affordibility": 77193/1393.60/12,
				"topemployers": ["Aquent Staffing", "Jobspring Partners", "Wayfair"],
				"tripadvisor_reviews": 65201,
				"museums":44,
				"theaters": 243,
				"libraries": 207,
				"bars":3433,
				"fun_score": 14.64541833,
				"serious_score":1/14.64541833,
				"crimerates": 8.4,
				"safety": 11.9047619,
				"mediumhomevalue": 452100,
				"house_affordibility": 77193/452100,
				"area": 89.63,
				"closeness_to_friends": 100,
				"number_of_trips_home_you_can_afford": 82008/294,
				"meetups": ["The Boston Hiking Meetup Group", "Boston New Technology Meetup Group", "The Boston Spanish Language Meetup Group"],
                "sum": 'Boston is the capital and largest city of the Commonwealth of Massachusetts in the United States. It is the largest city in New England and the 24th largest city in the United States. The city is the anchor of a substantially larger metropolitan area called Greater Boston, home to 4.5 million people and the tenth-largest metropolitan area in the country. Greater Boston as a commuting region is home to 7.6 million people, making it the sixth-largest Combined Statistical Area in the United States.',
                "popupContent": '<h4>Boston, MA</h4><p>187 job openings</p>'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-71.0636, 42.3581]
            }
};

var newyork = {
            "type": "Feature",
            "properties": {
				"element":$("#newyork"), 
				"score":0,
                "name": "New York, NY",
                "number_of_job_openings": 725,
                "medium_annual_income": 79631,
                "household": 52259,
				"topemployers": ["Aquent Staffing", "Jobspring Partners", "Wayfair"],
				"averagerent": 1704,
				"rent_affordibility": 79631/1704/12,
				"mediumhomevalue": 553900,
				"house_affordibility": 79631/553900,
				"tripadvisor_reviews": 410808,
				"museums":225,
				"theaters": 1581,
				"libraries": 1123,
				"bars":25580,
				"fun_score":20.14910979,
				"serious_score":1/20.14910979,
				"crimerates": 6.53,
				"safety": 15.31393568,
				"population": 8405837,
				"area": 469,
				"closeness_to_friends": 80,
				"number_of_trips_home_you_can_afford": 82008/277,
				"meetups": ["Hudson Valley Hikers", "NY Tech Meetup", "First Time Upper West Side Moms"],

                "sum": 'New York is the most populous city in the United States and the center of the New York metropolitan area, the premier gateway for legal immigration to the United States and one of the most populous urban agglomerations in the world. A global power city, New York exerts a significant impact upon commerce, finance, media, art, fashion, research, technology, education, and entertainment. Home to the headquarters of the United Nations, New York is an important center for international diplomacy and has been described as the cultural and financial capital of the world.',
                "popupContent": '<h4>New York, NY</h4><p>725 job openings</p>'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-74.0059, 40.7127]
			}
};

var sf = {
            "type": "Feature",
            "properties": {
				"element":$("#sf"), 
				"score":0,
                "name": "San Francisco, CA",
                "number_of_job_openings": 678,
                "medium_annual_income": 92236,
                "household": 75604,
				"topemployers": ["Workbridge Associates", "CyberCoders", "Talent Avenue"],
				"averagerent": 2026.67,
				"rent_affordibility":92236/2026.67/12,
				"mediumhomevalue": 984500,
				"house_affordibility": 92236/984500,
				"tripadvisor_reviews": 126133,
				"museums":79,
				"theaters": 708,
				"libraries": 395,
				"bars":6811,
				"fun_score":15.8628692,
				"serious_score":1/15.8628692,
				"crimerates": 8.64,
				"safety": 11.57407407,
				"population": 837442,
				"area": 231.9,
				"closeness_to_friends": 10,
				"number_of_trips_home_you_can_afford": 92236/301,
				"meetups": ["Bay Area Hikers (20s & 30s only)", "HTML5", "Norcal Pickup Soccer"],

                "sum": 'San Francisco, officially the City and County of San Francisco, is the cultural, commercial and financial center of Northern California.',
                "popupContent": '<h4>San Francisco, CA</h4><p>678 job openings</p>'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.4167, 37.7833]
			}
};

var seattle = {
            "type": "Feature",
            "properties": {
				"element":$("#seattle"), 
				"score":0,
                "name": "Seattle, WA",
                "number_of_job_openings": 281,
                "medium_annual_income": 82008,
                "household": 65277,
				"topemployers": ["Amazon Corporate LLC", "Nordstrom", "FILTER"],
				"averagerent": 1183.33,
				"rent_affordibility":82008/1183.33/12,
				"mediumhomevalue": 473500,
				"house_affordibility": 82008/473500,
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
				"number_of_trips_home_you_can_afford": 82008/436,
				"meetups": ["Pacific Northwest Hiking & Backpacking Group", "New Tech Seattle", "The Seattle Single Parents Meetup Group"],

                "sum": 'Seattle is the largest city in both the State of Washington and the Pacific Northwest region of North America and, as of July 2013, the fastest-growing major city in the United States. The city is situated on a narrow isthmus between Puget Sound (an inlet of the Pacific Ocean) and Lake Washington, about 100 miles (160 km) south of the Canada–United States border. A major gateway for trade with Asia, Seattle is the 8th largest port in the United States and 9th largest in North America in terms of container handling.',
                "popupContent": '<h4>Seattle, WA</h4><p>281 job openings</p></p>'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.3331, 47.6097]
			}
};

var chicago = {
            "type": "Feature",
            "properties": {
				"element":$("#chicago"), 
				"score":0,
                "name": "Chicago, IL",
                "number_of_job_openings": 209,
                "medium_annual_income": 66288,
                "household": 47270,
				"topemployers": ["Hirewell", "Aquent Staffing", "Punchkick Interactive"],
				"averagerent": 996.82,
				"rent_affordibility":66288/996.82/12,
				"mediumhomevalue": 183100,
				"house_affordibility": 66288/183100,
				"tripadvisor_reviews": 91811,
				"museums":85,
				"theaters": 740,
				"libraries": 544,
				"bars":11536,
				"fun_score": 19.51669316,
				"serious_score": 1/19.51669316,
				"crimerates": 9,
				"safety": 11.11111111,
				"population": 2719000,
				"area": 234,
				"closeness_to_friends": 50,
				"number_of_trips_home_you_can_afford": 66288/155,
				"meetups": ["Chicago Hiking, Outdoors & Social Group", "Chicago Lean Startup Circle", "Chicago Moms Network"],

                "sum": 'Chicago is the third most populous city in the United States, after New York City and Los Angeles. With 2.7 million residents, it is the most populous city in both the U.S. state of Illinois and the Midwestern United States. Its metropolitan area, sometimes called Chicagoland, is home to 9.5 million people and is the third-largest in the United States. Chicago is the seat of Cook County.',
                "popupContent": '<h4>Chicago, IL</h4><p>209 job openings</p>'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-87.6847, 41.8369]
			}
};

var cities = [newyork, sf, seattle, chicago, boston];
