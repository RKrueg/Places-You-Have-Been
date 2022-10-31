```Describe: Places()

Test: "It will create an object"
Code: c
console.log(ryansVacations);
Expected Output: Places = {}

Test: "It will add properties to ryansVacations"
Code: console.log(ryansVacations.destinations, ryansVacations.currentId);
Expected Output: {} 0

Describe: Destination(location, landmarks, date)

Test: "It will create an object with 3 properties"
Code: let lincolnCity = new Destination ("Lincoln City", "Beach", "September 10th, 2022")
console.log(lincolnCity);
Expected Output: Destination {location: 'Lincoln City', landmarks: 'Beach', date: 'September 10th, 2022'}

Describe: Places.prototype.assignId()

Test: "It will increment the ID by 1 and return that value"
Code: ryansVacations.assignId();
console.log(ryansVacations);
Expected Output: 1
{destinations: {…}, currentId: 1}

Describe: Places.prototype.addDestination()

Test: "It will add a Destination object to the destinations property of the Places object"
Code: ryansVacations.addDestination(lincolnCity);
console.log(ryansVacations);
Expected Output: 
Places { 
    destinations: 
        {'1': 
            destination { 
            location: 'Lincoln City', landmarks: 'Beach', date: 'September 10th, 2022', id: 1 }
         },
    currentId: 1
}

Test: "It will add a second Destination object to the destination property of the Places object and update the id by 1"
Code: 
let governmentCamp = new Destination("Government Camp", "Mt. Hood", "September 1st, 2022");
ryansVacations.addDestination(governmentCamp);
console.log(ryansVacations);
Expected Output: 
Places {
  destinations: {
    '1': Destination {
      location: 'Lincoln City',
      landmarks: 'Beach',
      date: 'September 10th, 2022',
      id: 1
    },
    '2': Destination {
      location: 'Government Camp',
      landmarks: 'Mt. Hood',
      date: 'September 1st, 2022',
      id: 2
    }
  },
  currentId: 2
}

Describe: Places.prototype.findDestination(id);

Test: "It will return a specific destination object based on its id key in the destinations object within the Places object" 
Code: console.log(ryansVacations.findDestination("2"));
Expected Output: 
Destination {
  location: 'Government Camp',
  landmarks: 'Mt. Hood',
  date: 'September 1st, 2022',
  id: 2
}

Describe: Places.prototype.deleteDestination(id);

Test: "It will delete a specific destination object based on its id key in the destinations object within the Places object"
Code: ryansVacations.deleteDestination(1);
console.log(ryansVacations.destinations)
Expected Output:
'2': Destination {
    location: 'Government Camp',
    landmarks: 'Mt. Hood',
    date: 'September 1st, 2022',
    id: 2
  }

