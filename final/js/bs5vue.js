const {createApp,ref}  = Vue;

var myService = createApp({
    data() {
        return{
            Services:[
                
            ]
        }
    }
    
}).mount("#img");


//myService.Services.push({icon: "fa-lock", heading:"Web Security", text:"asdf adf adf"})


$.ajax({
    url:"/final",
    method: "get",
    dataType: "json",
    success: results=>{
        myService.Services = results.sort((a, b) => {return a.id - b.id}); //綁定資料
    }

})