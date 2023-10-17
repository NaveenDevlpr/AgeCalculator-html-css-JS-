let input=document.getElementById("Date");
input.max=new Date().toISOString().split("T")[0];

let res=document.getElementById("result");



function calcAge(){
    let dob=new Date(input.value);
     
    
    let date_one=dob.getDate();
    let month_one=dob.getMonth()+1;
    let year_one=dob.getFullYear();


    let today=new Date();

       
    let date_two=today.getDate();
    let month_two=today.getMonth()+1;
    let year_two=today.getFullYear();

    let d3,m3,y3;

    y3=year_two-year_one;
    if(month_two>=month_one)
    {
        m3=month_two-month_one
    }
    else{
        y3--;
        m3=12+month_two-month_one;
    }


    if(date_two>=date_one)
    {
        d3=date_two=date_one;

    }
    else{
        m3--;
        d3=getDaysInMonth(year_one,month_one) + date_two-date_one;
    }

    if(m3<0){
        m3=11;
        y3--;
    }

    res.innerHTML=  `You are  <span>${y3}</span> years,  <span>${m3}</span> months and  <span>${d3}</span> days old`;

}   


function getDaysInMonth(year,month)
{
    return new Date(year,month,0).getDate();
}