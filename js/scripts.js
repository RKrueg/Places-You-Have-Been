//Business Logic

function Places() {
    this.destinations = {};
    this.currentId = 0;
}


Places.prototype.addDestination = function (destination) {
    destination.id = this.assignId();
    this.destinations[destination.id] = destination;
}

Places.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
}

Places.prototype.findDestination = function(id) {
    if (this.destinations[id] !== undefined) {
        return this.destinations[id];
    }
    return false;
};

Places.prototype.deleteDestination = function(id) {
    if (this.destinations[id] === undefined) {
        return false;
    }
    delete this.destinations[id];
    return true;
};

function Destination(location, landmarks, date) {
    this.location = location;
    this.landmarks = landmarks;
    this.date = date;
}


//UI Logic

let scrapBook = new Places();

window.addEventListener("load", function() {
    let form = this.document.getElementById("form");
    form.addEventListener("submit", handleSubmit);
    let button = document.getElementById("button");
    button.addEventListener("click", handleClick)
});

function handleClick(event) {
    event.preventDefault();
    for (i = 1; i<1000; i++ ) {
        if (!scrapBook.destinations[i.toString()]) {
            return false;
        } else {
            let space = ", "
            let landmarks = scrapBook.destinations[i.toString()].landmarks;
            let date = scrapBook.destinations[i.toString()].date;
            let location = scrapBook.destinations[i.toString()].location;
            document.getElementById("result").append(location, space, landmarks, space, date, space);
        }
    }
}

function handleSubmit(event) {
    event.preventDefault();
    let location = document.getElementById("location").value; 
    let landmarks = document.getElementById("landmarks").value; 
    let date = document.getElementById("date").value; 
    let destinationObj = new Destination(location, landmarks, date); 
    scrapBook.addDestination(destinationObj);
}
