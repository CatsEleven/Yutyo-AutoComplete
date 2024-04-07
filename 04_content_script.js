let value_data_first;
let value_data_second; 
let value_data_third;
let value_data_password; 

async  function getData(){
    await chrome.storage.sync.get(['first', 'second', 'third', 'password'], function(items) {
        value_data_first = items.first;
        value_data_second = items.second;
        value_data_third = items.third;
        value_data_password = items.password;

    if(document.getElementById('focus1') !== null){
        document.getElementById('focus1').value = value_data_first;
    }

    if(document.getElementById('focus2') !== null){
        document.getElementById('focus2').value = value_data_second;
    }
    

    if(document.getElementById('focus3') !== null){
        document.getElementById('focus3').value = value_data_third;
    }

    if(document.querySelector('[name="loginPassword"]') !== null){
        document.querySelector('[name="loginPassword"]').value = value_data_password;
    }
    })
} 

addEventListener('load', getData)
    
    //document.getElementById('focus1').value = value_data_first;
    //document.getElementById('focus2').value = value_data_second;
    //document.getElementById('focus3').value = value_data_third;







