const menu = document.getElementById('mobile-display');
let memoryMenu = false;

function menu_list(){
    if(memoryMenu == true){
        menu.style.display = 'none';
        memoryMenu = false;
    }else{
        menu.style.display = 'block';
        memoryMenu = true;
    }
}