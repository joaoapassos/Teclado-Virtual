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
                keyCaps();
            }
            else if(key.id == 'key-back'){
                var start = textarea.selectionStart;
                var end = textarea.selectionEnd;

                if (start === end) {
                    if (start > 0) {
                        textarea.value = textarea.value.slice(0, start - 1) + textarea.value.slice(end);
                        textarea.selectionStart = textarea.selectionEnd = start - 1;
                    }
                } else {
                    textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end);
                    textarea.selectionStart = textarea.selectionEnd = start;
                }
            }
            else if(key.id == 'key-space'){
                textarea.value = `${textarea.value} `;
            }
            textarea.focus();
            })
    })
    document.addEventListener('keydown', (e)=>{
        keys.forEach((key)=>{
            if(e.key == key.name && e.key !== 'CapsLock'){ 
                textarea.focus();
                key.classList.add('keys-on')
                setTimeout(
                    ()=>{
                        key.classList.remove('keys-on')
                    }, 500
                )
            }
            else if(e.key == 'CapsLock'){
                textarea.focus();
                keyCaps();
            }
        })
    })
    function keyCaps(){
        if(!capsOn){
            document.querySelectorAll('.keys').forEach((key) => {
                if(key.id !== 'key-caps' && key.id !== 'key-back' && key.id !== 'key-space'){
                    key.innerText = key.innerText.toUpperCase();
                };
                if(key.id == 'key-caps'){
                    key.classList.add('keys-on');
                }
                
                capsOn = true
            });
        }
        else{
            document.querySelectorAll('.keys').forEach((key) => {
                if(key.id !== 'key-caps' && key.id !== 'key-back' && key.id !== 'key-space'){
                    key.innerText = key.innerText.toLowerCase();
                };
                if(key.id == 'key-caps'){
                    key.classList.remove('keys-on');
                }
                capsOn = false
            });
        }
    }
}
function load(){
    keyboardFunctionable();
    textarea.focus();
    document.getElementById('svg-key-back').addEventListener('click', ()=>{
        console.log(this)
    });
}