//Actor model get an object with strings for the actor details
//firstName as the actors first name
//lastName as the actors last name
//birthday as the actors birthday
//image of the actor from IMDB page
//IMDBLink as a link to his/her IMBD page
//actorAge is a method that calculate the actor age from the birthday and return a number

class Actor {
    constructor (data) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.birthday = new Date(data.birthday);
        this.image = data.image;
        this.IMDBLink = data.IMDBLink;
    }

    actorAge() {
        const ageDiff = new Date().getTime() - this.birthday.getTime();
        const ageDate = new Date(ageDiff);
        const age = Math.abs(ageDate.getFullYear() - 1970);
        
        return age;
    }   
}

export default Actor;