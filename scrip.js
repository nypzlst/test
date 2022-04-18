
//let requestUrl = 'https://alarmmap.online/assets/alerts.json'
/*
//console.log(requestUrl);
fetch('https://alarmmap.online/assets/alerts.json',{
    mode:'no-cors'
})
    .then(res => res.json())
    

/*
*/
/*fetch('https://alarmmap.online/assets/alerts.json',{ 
    mode: 'no-cors' // 'cors' by default
}).then(response => response.json) {
    
}).then(function(data){
  
});
*//*
fetch('https://alarmmap.online/assets/alerts.json',{ 
    mode: 'no-cors' // 'cors' by default
}).then(res => console.log(Response.json))
  .then(data=> console.log(data))


let data;

fetch('https://alarmmap.online/assets/alerts.json',{mode:'no-cors'})
.then(response => {
   data = response.json();
});

console.log(data);

*/
async function getResponse(){
    let response = await fetch('https://alarmmap.online/assets/alerts.json',{mode:'no-cors'})
    let content  = await response.json()
    console.log(content)
}
getResponse()

