window.addEventListener("load",() => {
    let long;
    let lat;
    let temperaturedescription = document.querySelector(".tempeture-description");
    let temperaturedegree = document.querySelector(".tempetured-degree");
}
    if (navigator.geolocation) { 
    navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;

    const proxy ="https;cors-anywhere.herokuapp.com/";
    const api =

    fetch(api)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        const { tempeture,summary } =data.currently;
    });
});
}
});