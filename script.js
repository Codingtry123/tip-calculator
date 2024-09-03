let input1 = document.querySelector('.input1 input');
let input2 = document.querySelector('.input2 input');
let i1 = document.getElementsByClassName('i1')[0];
let i2 = document.getElementsByClassName('i2')[0];
let i3 = document.getElementsByClassName('i3')[0];
let i4 = document.getElementsByClassName('i4')[0];
let i5 = document.getElementsByClassName('i5')[0];
let i6 = document.getElementsByClassName('i6')[0];
let tex = document.querySelector('.i6 input');
let arr = [i1, i2, i3, i4, i5, i6];
let amount = document.getElementsByClassName('amount')[0];
let total = document.getElementsByClassName('total1')[0];
let reset = document.querySelector('.button button');
let billnum, people, per, totalbill, ind, cus;
function calcula(){
  if(people && people > 0 && billnum && per){

    console.log(people);
    totalbill = parseFloat(billnum * per).toFixed(2);
    total.textContent = `$${totalbill}`;
    ind = parseFloat(totalbill / people).toFixed(2);
    amount.textContent = `$${ind}`;
  
  }
}
arr.forEach((item)=>{item.addEventListener('click', ()=>{
  if (arr.indexOf(item) <= 2){
  per = (arr.indexOf(item) + 1) * 5 / 100;}
  else if(arr.indexOf(item) == 3){
    per = 0.25;
  }
  else if(arr.indexOf(item) == 4){
    per = 0.5;
  }
  else if(cus){
    per = cus / 100;
  }
  else{
  }
arr.forEach((item1)=>{item1.classList.remove('selected')})
  item.classList.add('selected');
  calcula();
 })}
)
tex.addEventListener('input', function(e) {
  let value = this.value;
  let cursorPosition = this.selectionStart;

  // Check if the input ends with a "%" and remove it temporarily for number validation
  if (value.endsWith("%")) {
      value = value.slice(0, -1); // Remove the last character ("%")
  }

  // Validate if the value is a number
  if (value && !isNaN(value)) {
      cus = value; // Store the valid number
      per = cus / 100;
      this.value = value + "%"; // Add "%" back
      
      console.log(this.value);
      calcula();
      if (cursorPosition > this.value.length - 1) {
        cursorPosition = this.value.length - 1;
    }
    this.setSelectionRange(cursorPosition, cursorPosition);
  } else if (isNaN(value)) {
      console.log(value + " is not a valid number");
      per = cus / 100;
      this.value = cus + "%"; // Reset to the last valid number
     
      calcula();
      cursorPosition = this.value.length - 1;
        this.setSelectionRange(cursorPosition, cursorPosition);
  }
});

input1.addEventListener('input', function(e){
  billnum = this.value;
  calcula();
})
input2.addEventListener('input', function(e){
  people = this.value;
  calcula();
})
reset.addEventListener('click', function(){
  input1.value = 0;
  input2.value = 0;
  arr.forEach((item1)=>{item1.classList.remove('selected')})
  total.textContent = '$';
  amount.textContent = '$';
  billnum = null;
  people = null;
   per = null;
   totalbill = null;
   ind = null;
   cus = null;
   tex.value = null;

})
