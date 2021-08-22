const getBtn = document.getElementById("get-data");
const getconfirmed = document.getElementById("confirmed");
const getrecover = document.getElementById("recover");
const getdeaths = document.getElementById("deaths");
const getupdatedate = document.getElementById("updatedate");
const getdata = () => {
  axios
    .get("https://static.easysunday.com/covid-19/getTodayCases.json")
    .then((response) => {
      console.log(response);
      getconfirmed.innerHTML = response.data.todayCases;
      getrecover.innerHTML = response.data.recovered;
      getdeaths.innerHTML = response.data.todayDeaths;
      getupdatedate.innerHTML = response.data.UpdateDate;
    });
};
getBtn.addEventListener("click", getdata);
