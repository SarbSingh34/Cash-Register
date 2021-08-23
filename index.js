const bill = document.querySelector("#bill-amount");
const cash = document.querySelector("#cash-given");
const checkbtn  = document.querySelector("#check-btn");
const message = document.querySelector("#error-message");
const datatofill = document.querySelectorAll(".data-insert");

const notescount = [2000,500,100,50,20,5,1]

checkbtn.addEventListener("click",function new1()
{
     hidemessage();
    if(bill.value > 0)
    {
       if(bill.value > cash.value)
       {
         const difference = cash.value - bill.value ;
         calculatechange(difference) 
         showmessage(" Give me more money Sir ");
       }
       else
       {
        showmessage("  Return Money ");
       }
    }
    else
    {
        showmessage(" The value is less then zero ");
    }

}) ; 

 function hidemessage()
{
 message.style.display = "none";
}
 function showmessage(msg12)
{
  message.style.display = "block";
  message.innerText = msg12;
  
}
 function calculatechange(difference)
{
    for( let i = 0; i<notescount.length ; i++)
    {

        //  with function trunc divide the difference with first value of notescount 1 by 1
      const trunc11 = Math.trunc(difference / notescount[i]);

        //  Now with Modulu Apply and updated the answer   
      difference = difference % notescount[i];

        //   now at above free  column is filled with data recieved  
        datatofill[i].innerText = trunc11;

    }

}