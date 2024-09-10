let count=0;
let array = document.getElementsByClassName('xo');
let still_playing =true;

function fun(id){
    if(still_playing){
        let box = document.getElementById(id);
        let turn = document.getElementById('turn');
        if( count%2 == 0 && box.innerHTML == ''){
            // Player X Turn
            box.innerHTML = 'X';
            box.value = 'X';
            turn.innerHTML = 'Player O';
            count++;
        }else if( count%2 == 1 && box.innerHTML == '')
        {
            // Player O Turn
            box.innerHTML = 'O';
            box.value = 'O';
            turn.innerHTML = 'Player X';
            count++;
        }
       still_playing = who_win();
    }
}

function check(){
    
    let x=0,o=0,c=0,arr=[];
    for(let i=0;i<9;i++){
            arr[i]=array[i].innerHTML;
    }
    // Checking The Horizontal Rows .

    for(let i=0;i<9;i+=3){
        for(let j=i;j<i+3;j++){
            if(arr[j]=='') c++;
            else if(arr[j]=='X') x++;
            else if(arr[j]=='O') o++;
        }
        if(x==3) { return 'X';}
        else if(o==3) { return 'O';}
        x=0; o=0;
    }
    // Checking The Vertical Columns .

    for(let i=0;i<3;i++){
        for(let j=i;j<=i+6;j+=3){
            if(arr[j]=='') c++;
            else if(arr[j]=='X') x++;
            else if(arr[j]=='O') o++;
        }
        if(x==3) { return 'X';}
        else if(o==3) { return 'O';}
        x=0; o=0;
    }
    // Checking The Main Diagonal .

    for(let j=0;j<3;j++){
        if(arr[j*4]=='') c++;
        else if(arr[j*4]=='X') x++;
        else if(arr[j*4]=='O') o++;
    }
    if(x==3) { return 'X';}
    else if(o==3) { return 'O';}
    x=0; o=0;
    // Checking The Secondary Diagonal .

    for(let j=1;j<=3;j++){
        if(arr[j*2]=='') c++;
        else if(arr[j*2]=='X') x++;
        else if(arr[j*2]=='O') o++;
    }
    if(x==3) { return 'X';}
    else if(o==3) { return 'O';}
    x=0; o=0;

    if(c==0) return 'E';

}

function who_win(){
    let str = check();
    let res = document.getElementById('result');

    if(str == 'X'){ 
        res.innerHTML='Player X Is The Winner..!'; 
        document.getElementById('btn').style.visibility='visible';
        return false;}
    else if(str == 'O'){ 
        res.innerHTML='Player O Is The Winner..!'; 
        document.getElementById('btn').style.visibility='visible';
        return false;}
    else if(str == 'E'){ 
        res.innerHTML='No one won';
        document.getElementById('btn').style.visibility='visible';
        return false;}
    else return true;
}

function reset(){
    for(let i=1;i<=9;i++){
        document.getElementById('b'+i).innerHTML='';
    }
    document.getElementById('turn').innerHTML = 'Player X';
    document.getElementById('result').innerHTML = '';
    count=0;
    still_playing=true;
    document.getElementById('btn').style.visibility='hidden';
}