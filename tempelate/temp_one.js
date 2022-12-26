function addLi(){
    let txtVal = document.getElementById('txtVal').value;
       let  listNode = document.getElementById('list');
      let  liNode = document.createElement('textarea');
      liNode.classList.add("regularText");
      liNode.classList.add("weField");
      liNode.classList.add("form-control");
       let  txtNode = document.createTextNode(txtVal);
        liNode.appendChild(txtNode),
        listNode.appendChild(liNode);
        document.querySelector('p').classList.add('list');

};

let ok = ()=>{
    let wes = document.getElementsByClassName("weField");
    let str="";
    for(let e  of wes){
         str = str + `<li> ${e.value}</li>`;
    }
    document.getElementById('LiWorkTemp').innerHTML = str;
  };


function generateCv(){
    document.getElementById('nameT1').innerHTML = document.getElementById('nameField').value;
    document.getElementById('phoneTemp').innerHTML = document.getElementById('contactField').value;
    document.getElementById('addressTemp').innerHTML = document.getElementById('addressField').value;
    document.getElementById('emailTemp').innerHTML = document.getElementById('addressEmail').value; 
    document.getElementById('linkedInTemp').innerHTML = document.getElementById('linkedField').value; 



  
  ok();
    
};

function addNewWEField(){
    var newWorkField = document.getElementsByClassName('newWorkField');

    var neww = document.createElement('div');

   

   


};






