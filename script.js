var display=document.createElement('div');
setTimeout(()=>{
    setTimeout(()=>{
        setTimeout(()=>{
            setTimeout(()=>{
                setTimeout(()=>{
                    setTimeout(()=>{
                        setTimeout(()=>{
                            setTimeout(()=>{
                                setTimeout(()=>{
                                    setTimeout(()=>{
                                        setTimeout(()=>{
                                            foo("Happy Independence Day");
                                    },1000);
                                    foo(1);
                                },1000);
                                foo(2);
                            },1000);
                            foo(3);
                        },1000);
                        foo(4);
                    },1000);
                    foo(5);
                },1000);
                    foo(6);
                },1000);
                foo(7);
        },1000);
        foo(8);
    },1000);
        foo(9);
    },1000);
    foo(10);
},1000);


function foo(x)
{
    
    display.setAttribute('style',"display:flex");
    display.style.height="700px";
    display.style.fontWeight="900";
    display.style.justifyContent="center";
    display.style.alignItems="center";
    display.style.fontSize="40px";
    display.innerHTML=x;
    document.body.append(display);
}
