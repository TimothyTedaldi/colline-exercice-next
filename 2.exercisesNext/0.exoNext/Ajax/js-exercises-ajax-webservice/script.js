 //fetch function
/*
function aBeautifulFetchFunction(){
    fetch('https://thatsthespir.it/api')
    .then(res => res.json())//response type
    .then(data => {
        document.getElementById('quote').innerHTML=data.quote
        if (data.photo != ''){
            document.getElementById('img-from-quote').src=data.photo
        }
        else{
            document.getElementById('img-from-quote').src='./img/inc.jpg'
        }
        document.getElementById('name-from-quote').innerHTML='- ' + data.author
    });
}

aBeautifulFetchFunction();

document.getElementById('aButton').addEventListener('click', () =>{
    aBeautifulFetchFunction();
})
*/

function aBeautifulAjaxFunction(){
    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://thatsthespir.it/api', true)

    xhr.onload = function() 
        {
            if (this.status === 200) 
                {
                    myObjJson=JSON.parse(this.responseText);
                    document.getElementById('quote').innerHTML=myObjJson.quote
                    if (myObjJson.photo != '' && myObjJson != null){
                        document.getElementById('img-from-quote').src=myObjJson.photo
                    }
                    else{
                        document.getElementById('img-from-quote').src='./img/inc.jpg'
                    }
                    document.getElementById('name-from-quote').innerHTML= '- ' + myObjJson.author
                    console.log(document.getElementById('img-from-quote').src)    
            }
        }
    xhr.send();
}
aBeautifulAjaxFunction();
document.getElementById('aButton').addEventListener('click', () =>{
    aBeautifulAjaxFunction();
})
//Common Types of HTTP Statuses
// 200: OK
// 404: ERROR
// 403: FORBIDDEN