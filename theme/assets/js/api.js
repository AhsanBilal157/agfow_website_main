/*===============================
        Today tab
=================================*/

let wheather ={
    apikey : "baa5f59cb8e9200af5a54f6e0ed07bb0",
    fetchwheather:function(city){
        fetch(
          "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&appid="+this.apikey
            ).then((response)=>{
                if (!response.ok) {
                  alert("No weather found.");
                  throw new Error("No weather found.");
                }
        return response.json()})
    .then((data)=> this.displaywheather(data));
},
    displaywheather: function(data){
        const {name} = data.city;
        const {description} = data.list[0].weather[0];
        const {temp,temp_min,temp_max} = data.list[0].main;
        console.log(name,temp,temp_max,temp_min,description);
        document.querySelector('.city').innerText = name;
        document.querySelector('.description').innerText = "Desc : "+ description;
        document.querySelector('.temp').innerText = temp + "˚C";
        document.querySelector('.mintemp').innerText = temp_min + "˚C";
        document.querySelector('.maxtemp').innerText = temp_max + "˚C";
    },
    search: function () {
        this.fetchwheather(document.querySelector(".search-bar").value);
      },
};
document.querySelector(".search button").addEventListener("click", function () {
  wheather.search();})

  document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      wheather.search();
    }
  });

  wheather.fetchwheather("Islamabad");

  
/*===============================
        2nd tab first card
=================================*/

  let wheatherfor1 ={
    apikeyfor1 : "baa5f59cb8e9200af5a54f6e0ed07bb0",
    fetchwheatherfor1:function(cityfor1){
        fetch(
          "http://api.openweathermap.org/data/2.5/forecast?q="+cityfor1+"&units=metric&appid="+this.apikeyfor1
            ).then((response)=>{
                if (!response.ok) {
                  alert("No weather found.");
                  throw new Error("No weather found.");
                }
        return response.json()})
    .then((datafor1)=> this.displaywheatherfor1(datafor1));
},
    displaywheatherfor1: function(datafor1){
        const {name} = datafor1.city;
        const {dt_txt} = datafor1.list[0];
        const {description} = datafor1.list[0].weather[0];
        const {temp,temp_min,temp_max} = datafor1.list[0].main;
        console.log(name,temp,temp_max,temp_min,description);
        document.querySelector('.cityfor1').innerText = name;
        document.querySelector('.datefor1').innerText = "Date : "+dt_txt.slice(2,10);
       // document.querySelector('.descriptionfor1').innerText = description;
        document.querySelector('.tempfor1').innerText = temp ;
        document.querySelector('.mintempfor1').innerText = temp_min ;
        document.querySelector('.maxtempfor1').innerText = temp_max ;
    },
    searchfor1: function () {
        this.fetchwheatherfor1(document.querySelector(".search-barfor5").value);
      },
};
document.querySelector(".searchfor5 button").addEventListener("click", function () {
  wheatherfor1.searchfor1();})

  document
  .querySelector(".search-barfor5")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      wheatherfor1.searchfor1();
    }
  });

  wheatherfor1.fetchwheatherfor1("Islamabad");


  
  /*===============================
        2nd tab 2nd card
=================================*/



  let wheatherfor2 ={
    apikeyfor2 : "baa5f59cb8e9200af5a54f6e0ed07bb0",
    fetchwheatherfor2:function(cityfor2){
        fetch(
          "http://api.openweathermap.org/data/2.5/forecast?q="+cityfor2+"&units=metric&appid="+this.apikeyfor2
            ).then((response)=>{
                if (!response.ok) {
                  alert("No weather found.");
                  throw new Error("No weather found.");
                }
        return response.json()})
    .then((datafor2)=> this.displaywheatherfor2(datafor2));
},
    displaywheatherfor2: function(datafor2){
        const {name} = datafor2.city;
        const {dt_txt} = datafor2.list[1];
        const {description} = datafor2.list[1].weather[0];
        const {temp,temp_min,temp_max} = datafor2.list[1].main;
        console.log(name,temp,temp_max,temp_min,description);
        document.querySelector('.cityfor2').innerText = name;
        document.querySelector('.datefor2').innerText = "Date : "+dt_txt.slice(2,10);
        console.log(datafor2);
       // document.querySelector('.descriptionfor1').innerText = description;
        document.querySelector('.tempfor2').innerText = temp ;
        document.querySelector('.mintempfor2').innerText = temp_min ;
        document.querySelector('.maxtempfor2').innerText = temp_max ;
    },
    searchfor2: function () {
        this.fetchwheatherfor2(document.querySelector(".search-barfor5").value);
      },
};
document.querySelector(".searchfor5 button").addEventListener("click", function () {
  wheatherfor2.searchfor2();})

  document
  .querySelector(".search-barfor5")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      wheatherfor2.searchfor2();
    }
  });

  wheatherfor2.fetchwheatherfor2("Islamabad");




/*===============================
        3rd tab 3rd card
=================================*/




  let wheatherfor3 ={
    apikeyfor3 : "baa5f59cb8e9200af5a54f6e0ed07bb0",
    fetchwheatherfor3:function(cityfor3){
        fetch(
          "http://api.openweathermap.org/data/2.5/forecast?q="+cityfor3+"&units=metric&appid="+this.apikeyfor3
            ).then((response)=>{
                if (!response.ok) {
                  alert("No weather found.");
                  throw new Error("No weather found.");
                }
        return response.json()})
    .then((datafor3)=> this.displaywheatherfor3(datafor3));
},
    displaywheatherfor3: function(datafor3){
        const {name} = datafor3.city;
        const {dt_txt} = datafor3.list[9];
        const {description} = datafor3.list[2].weather[0];
        const {temp,temp_min,temp_max} = datafor3.list[2].main;
        console.log(name,temp,temp_max,temp_min,description);
        document.querySelector('.cityfor3').innerText = name;
        document.querySelector('.datefor3').innerText = "Date : "+dt_txt.slice(2,10);
        console.log(datafor3);
       // document.querySelector('.descriptionfor1').innerText = description;
        document.querySelector('.tempfor3').innerText = temp ;
        document.querySelector('.mintempfor3').innerText = temp_min ;
        document.querySelector('.maxtempfor3').innerText = temp_max ;
    },
    searchfor3: function () {
        this.fetchwheatherfor3(document.querySelector(".search-barfor5").value);
      },
};
document.querySelector(".searchfor5 button").addEventListener("click", function () {
  wheatherfor3.searchfor3();})

  document
  .querySelector(".search-barfor5")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      wheatherfor3.searchfor3();
    }
  });

  wheatherfor3.fetchwheatherfor3("Islamabad");



/*===============================
        4th tab 4th card
=================================*/




  let wheatherfor4 ={
    apikeyfor4 : "baa5f59cb8e9200af5a54f6e0ed07bb0",
    fetchwheatherfor4:function(cityfor4){
        fetch(
          "http://api.openweathermap.org/data/2.5/forecast?q="+cityfor4+"&units=metric&appid="+this.apikeyfor4
            ).then((response)=>{
                if (!response.ok) {
                  alert("No weather found.");
                  throw new Error("No weather found.");
                }
        return response.json()})
    .then((datafor4)=> this.displaywheatherfor4(datafor4));
},
    displaywheatherfor4: function(datafor4){
        const {name} = datafor4.city;
        const {dt_txt} = datafor4.list[17];
        const {description} = datafor4.list[3].weather[0];
        const {temp,temp_min,temp_max} = datafor4.list[3].main;
        console.log(name,temp,temp_max,temp_min,description);
        document.querySelector('.cityfor4').innerText = name;
        document.querySelector('.datefor4').innerText = "Date : "+dt_txt.slice(2,10);
        console.log(datafor4);
       // document.querySelector('.descriptionfor1').innerText = description;
        document.querySelector('.tempfor4').innerText = temp ;
        document.querySelector('.mintempfor4').innerText = temp_min ;
        document.querySelector('.maxtempfor4').innerText = temp_max ;
    },
    searchfor4: function () {
        this.fetchwheatherfor4(document.querySelector(".search-barfor5").value);
      },
};
document.querySelector(".searchfor5 button").addEventListener("click", function () {
  wheatherfor4.searchfor4();})

  document
  .querySelector(".search-barfor5")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      wheatherfor4.searchfor4();
    }
  });

  wheatherfor4.fetchwheatherfor4("Islamabad");








