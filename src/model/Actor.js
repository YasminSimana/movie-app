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