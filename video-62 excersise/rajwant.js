/*

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub


*/


let a = Math.floor(Math.random() * 3)
let h = Math.floor(Math.random() * 3)
let v = Math.floor(Math.random() * 3)


let b = {
    Engine: "Bros",
    Foods: "Bros",
    Garments: "Bros"
}


let c = {
    Engine: "Limited",
    Foods: "Limited",
    Garments: "Limited"
}

let d = {
    Engine: "Hub",
    Foods: "Hub",
    Garments: "Hub"
}
console.log("value of a is ",a)
console.log("value of h is ",h)
console.log("the value of v is",v)


if(a==0){
    if(v==0){

        if(h==0){
            for(let k in b){
                console.log("Crazy " + k + b[k])
                break;
            }
        }
        if(h==1){
            
            for(let k in b){
                if(k=="Engine"){
                    continue;
                }
                console.log("Crazy " + k + b[k])
                break;
            }
            
            
        }
        if(h==2){
            for(let k in b){
                if(k=="Engine"){
                    continue;
                }
                else if(k=="Food"){
                    continue;
                }
                
                console.log("Crazy"+ k + b[k])
            }
        }
    }
    if(v==1){

        if(h==0){
            for(let k in c){
                console.log("Crazy " + k + c[k])
                break;
            }
        }
        if(h==1){
            
            for(let k in c){
                if(k=="Engine"){
                    continue;
                }
                console.log("Crazy " + k + c[k])
                break;
            }
            
            
        }
        if(h==2){
            for(let k in c){
                if(k=="Engine"){
                    continue;
                }
                else if(k=="Food"){
                    continue;
                }
                
                console.log("Crazy"+ k + c[k])
            }
        }

    }

    if(v==3){

        if(h==0){
            for(let k in d){
                console.log("Crazy " + k + d[k])
                break;
            }
        }
        if(h==1){
            
            for(let k in d){
                if(k=="Engine"){
                    continue;
                }
                console.log("Crazy " + k + d[k])
                break;
            }
            
            
        }
        if(h==2){
            for(let k in d){
                if(k=="Engine"){
                    continue;
                }
                else if(k=="Food"){
                    continue;
                }
                
                console.log("Crazy"+ k + d[k])
            }
        }

    }
}

if(a==1){
    if(v==0){

        if(h==0){
            for(let k in b){
                console.log("Amazing " + k + b[k])
                break;
            }
            
        }
        if(h==1){
            for(let k in b){
                if(k=="Engine"){
                    continue;
                }
                console.log("Amazing " + k + b[k])
                break;
            }
            
        }
        if(h==2){
            for(let k in b){
                if(k=="Engine"){
                    continue;
                }
                else if(k=="Food"){
                    continue;
                }
                
                console.log("Amazing"+ k + b[k])
            }
            
        }
    }
    if(v==1){

        if(h==0){
            for(let k in c){
                console.log("Amazing " + k + c[k])
                break;
            }
            
        }
        if(h==1){
            for(let k in c){
                if(k=="Engine"){
                    continue;
                }
                console.log("Amazing " + k + c[k])
                break;
            }
            
        }
        if(h==2){
            for(let k in c){
                if(k=="Engine"){
                    continue;
                }
                else if(k=="Food"){
                    continue;
                }
                
                console.log("Amazing"+ k + c[k])
            }
            
        }
    }
    if(v==2){

        if(h==0){
            for(let k in d){
                console.log("Amazing " + k + d[k])
                break;
            }
            
        }
        if(h==1){
            for(let k in d){
                if(k=="Engine"){
                    continue;
                }
                console.log("Amazing " + k + d[k])
                break;
            }
            
        }
        if(h==2){
            for(let k in d){
                if(k=="Engine"){
                    continue;
                }
                else if(k=="Food"){
                    continue;
                }
                
                console.log("Amazing"+ k + d[k])
            }
            
        }
    }
}

if(a==2){
    if(v==0){

        if(h==0){
            for(let v in b){
                console.log("Fire" + v + b[v])
                break;
            }
        }
        if(h==1){
            for(let k in b){
                if(k=="Engine"){
                    continue;
                }
                console.log("Fire " + k + b[k])
                break;
            }
            
        }
        if(h==2){
            for(let k in b){
                if(k=="Engine"){
                    continue;
                }
                else if(k=="Food"){
                    continue;
                }
                
                console.log("Fire"+ k + b[k])
            }
        }
    }
    if(v==1){

        if(h==0){
            for(let v in c){
                console.log("Fire" + v + c[v])
                break;
            }
        }
        if(h==1){
            for(let k in c){
                if(k=="Engine"){
                    continue;
                }
                console.log("Fire " + k + c[k])
                break;
            }
            
        }
        if(h==2){
            for(let k in c){
                if(k=="Engine"){
                    continue;
                }
                else if(k=="Food"){
                    continue;
                }
                
                console.log("Fire"+ k + c[k])
            }
        }
    }
    if(v==2){

        if(h==0){
            for(let v in d){
                console.log("Fire" + v + d[v])
                break;
            }
        }
        if(h==1){
            for(let k in c){
                if(k=="Engine"){
                    continue;
                }
                console.log("Fire " + k + d[k])
                break;
            }
            
        }
        if(h==2){
            for(let k in c){
                if(k=="Engine"){
                    continue;
                }
                else if(k=="Food"){
                    continue;
                }
                
                console.log("Fire"+ k + d[k])
            }
        }
    }
}















