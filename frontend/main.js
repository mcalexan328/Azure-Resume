window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionAPIUrl = 'https://azureresume813.azurewebsites.net/api/GetResumeCounter?code=rH8l6ihTsFdMZIpHXdpqFkcuv9yAWBp6ubx6FAaFxYdVAzFuq0ovDg%3D%3D';
const localfunctionAPI= "http://localhost:7071/api/GetResumeCounter";

const getVisitCount = () => {
    let count = 30;
    fetch(functionAPIUrl).then(response =>{
        return response.json()
}).then(response =>{
    console .log("Website called Function API");
    count = response.count;
    document.getElementById("counter").innerText = count;
}).catch(function(error){
    console.log(error);
});
return count;
}