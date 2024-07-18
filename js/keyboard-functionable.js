var keys = document.querySelectorAll('.keys');
var textarea = document.getElementById('textArea');
function keyboardFunctionable (){
    var capsOn = false;
    keys.forEach((key)=>{
        key.addEventListener('click', (e)=>{
            var key = e.target;
            if(key.id !== 'key-caps' && key.id !== 'key-back' && key.id !== 'key-space'){
                var key = key.innerText
                textarea.value = `${textarea.value}${key}`;
            }
            else if(key.id == 'key-caps'){
                if(!capsOn){
                    document.querySelectorAll('.keys').forEach((key) => {
                        if(key.id !== 'key-caps' && key.id !== 'key-back' && key.id !== 'key-space'){
                            key.innerText = key.innerText.toUpperCase();
                        }
                        capsOn = true
                    });
                }
                else{
                    document.querySelectorAll('.keys').forEach((key) => {
                        if(key.id !== 'key-caps' && key.id !== 'key-back' && key.id !== 'key-space'){
                            key.innerText = key.innerText.toLowerCase();
                        }
                        capsOn = false
                    });
                }
            }
            else if(key.id == 'key-back'){
                textarea.value = textarea.value.slice(0, -1);
            }
            else if(key.id == 'key-space'){
                textarea.value = `${textarea.value} `;
            }
        })
    })
}
keyboardFunctionable();