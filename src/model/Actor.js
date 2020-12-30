//Actor model get an object with strings for the actor details
//firstName as the actors first name
//lastName as the actors last name
//birthday as the actors birthday
//image of the actor from IMDB page
//IMDBLink as a link to his/her IMBD page
//actorAge is a method that calculate the actor age from the birthday and return a number

class Actor {
    constructor (firstName, lastName, birthday, image, IMDBLink) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(birthday);
        this.image = image;
        this.IMDBLink = IMDBLink;
    }

    getAge() {
        const ageDiff = new Date().getTime() - this.birthday.getTime();
        const ageDate = new Date(ageDiff);
        const age = Math.abs(ageDate.getFullYear() - 1970);
        
        return age;
    }
    
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

export default Actor;