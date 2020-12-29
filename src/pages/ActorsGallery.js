import Actor from "../model/Actor";

function ActorsGallery(props) {
    const {actorsArr} = props;
    let actorsData = [];
    for (let i of actorsArr) {
        actorsData.push(new Actor(i));
    }
    console.log(actorsData[0].actorAge());
    return(
        <div>
            Test
        </div>
    )
}

export default ActorsGallery;