
for (let i = 0; i < 5 ; i++) {
   
    let p = document.createElement('p');
    document.body.appendChild(p);
    
    p.innerText = 'Rad ' + (i+1);
    p.style.textAlign = 'center';
    p.style.paddingTop = '0.15em';
    
    p.style.color = 'hsl(240, 90%, 70%)';
    
    p.style.fontSize = (10+i*10) + 'px'
    p.style.fontWeight = 'bold'
    p.style.fontFamily = 'Nimbus Roman'

    p.style.margin = '0.5em 0em';
    
    //Go from light green hsl(120, 90%, 85%) to ligh blue hsl( 	hsl(200, 90%, 85%)
    //Difference in color hue is 80, to do it in four steps each step needs to be 20
    let hue = 120 + (i*20);
    p.style.backgroundColor = `hsl(${hue},90%,85%)`;
    
}

//Create a box with black border to contain number containers
const box = document.createElement('div');
document.body.appendChild(box);

box.style.borderColor = 'black';
box.style.borderStyle = 'solid'
box.style.borderWidth = '1px'

box.style.display = 'flex';
box.style.justifyContent = 'space-around'
box.style.padding = '60px'



for (let i = 0; i < 3; i++) {

    let div = document.createElement('div');
    box.appendChild(div);
        
    div.style.backgroundColor = 'hsl(240, 71%, 80%)'; //Lavender
    div.style.padding = '8px';

    const numberArray = ['ett', 'två', 'tre', 'fyra','fem', 'sex', 'sju', 'åtta', 'nio', 'tio']

    for (let j = 0; j < 10; j++) {

        const p = document.createElement('p');
        div.appendChild(p);

        p.style.margin = '0px';
        p.style.paddingTop = '0.25em';
        p.style.width = '40px';
        
        p.style.fontSize = '13px';
        p.style.fontFamily = 'Nimbus Roman';

        let setBackground;
        let setColor;
        
        //Left div
        if (i===0) {

            p.innerText =j; 
            
            if (j%2) {
                setBackground= 'white';
                setColor = 'black';
                
            } else {
                setBackground = 'black';
                setColor = 'white';
            }

            if (j===4) {
                setBackground = 'none'
                setColor = 'white';
            }
            
         //Center div   
        } else if (i===1) {

            p.innerText = 9-j;
            p.style.textAlign = 'center';

            if (j%2) {
                setBackground = 'black';
                setColor = 'white'
            } else {
                setBackground = 'white';
                setColor = 'black';
            }
            
            if (10-j===9) {
                setBackground = 'none'
                setColor = 'white';
            }
        
        //Right div
        } else {

            p.innerText = numberArray[j];
            p.style.textAlign = 'end'

            if (j%2) {
                setBackground= 'white';
                setColor = 'black';
                
            } else {
                setBackground = 'black';
                setColor = 'white'
            }
            
            if (j===5) {
                setBackground = 'none'
                 setColor = 'black';
            }

        }
        p.style.color = setColor;
        p.style.backgroundColor = setBackground;
    }

}

