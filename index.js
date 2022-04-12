let button=document.getElementById('btn');
button.addEventListener('click', function(){
    let txt=document.getElementById('txt').value;
     let count=txt.length;
     let output=document.getElementById('output');
      output.innerHTML= count;
                        
});