let key = "counter";
let value = 3;
document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value);


document.body.addEventListener('click', event => {
    let elem = event.target.id; // на что нажали название id 
    if (elem == 'app') {
        let div = document.createElement('div');
        div.className = 'circle';
        document.body.append(div);
        value += 1;
          
    }
    if (elem == 'del') {
        if (value > 3) {
            value -= 1;
            document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value);
        }
        
        // div.remove();
        
    }
});

