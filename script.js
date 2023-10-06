
const header=document.getElementById("header");
//ascaii code for create A,B,C..
const body=document.getElementById("body")
for(let i=65;i<=90;i++){
   let char=String.fromCharCode(i);
   let bold=document.createElement("b");
   bold.innerText= char;
   header.appendChild(bold)
}


function createAndAppendRow(rowNumber){
    const row=document.createElement("div");

    row.className="row";
//inside each row 1(sr no)+26 rows need 
    for(let i=64;i<=90;i++){
        if(i===64){
            //for sr no
            const b=document.createElement("b")
            b.innerText=rowNumber;
            row.appendChild(b)
        }else{
            //empty cell
            const cell=document.createElement("div")
            div.contentEditable="true"
            div.style.overflow="hidden"
            cell.id=`${String.fromCharCode(i)}${rowNumber}`;
            cell.contentEditable="true"
            cell.addEventListener("focus", onCellFocus)
            row.appendChild(cell);
    
        }
    }
    body.appendChild(row);
}
//so we need call above function 100 times to create 1 to 100 rows
for(let i=1;i<=100;i++){
    createAndAppendRow(i);
}

function onCellFocus(e){

}
