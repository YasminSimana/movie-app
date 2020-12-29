import { Component } from "react";

class Actor extends Component {
    constructor (props) {
        super(props);
        this.firstName = this.props.firstName;
        this.lastName = this.props.lastName;
        this.birthday = this.props.birthday;
        this.image = this.props.image;
        this.IMDBLink = this.props.IMDBLink;
        this.age = this.calculateAge(this.birthday);

    }

    calculateAge(str) {
        const today_date = new Date();
        const today_year = today_date.getFullYear();
        const today_month = today_date.getMonth();
        const today_day = today_date.getDate();
        const age = today_year - this.birthday.getFullYear();
        console.log(age);
        return age;
        // const ageDif = Date.now() - Date(str);
        // const ageDate = new Date(ageDif);
        // console.log ("test");
        // console.log(this.birthday);
        // console.log(ageDif);
        // console.log(Math.abs(ageDate.getUTCFullYear - 1970));
        // return Math.abs(ageDate.getUTCFullYear - 1970);
    }

    render() {
        return (
            <div></div>
        );
    }    
}

export default Actor;