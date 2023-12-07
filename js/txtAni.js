function textAnimation(selecter,option){
    let txt = $(selecter).text()
    let result = ""
    for(let i = 0 ; i < txt.length ; i++){
        result+= "<i style='animation: "+(option.aniName)+" 1s ease "+(option.delay*i)+"s forwards;opacity:0;display:inline-block'>"+txt[i]+"</i>"
    }
    // console.log(result)
    $(selecter).html(result)
    
}

$(function(){
    // 스크롤을 하여 웹사이트를 구경해보세요.
    textAnimation(".li1_scroll",{
        delay:0.07,
        aniName:"slideLtoR"
    })
    setInterval(function(){
        textAnimation(".li1_scroll",{
            delay:0.07,
            aniName:"slideLtoR"
        })
    },4000)
    // 
    // textAnimation(".li6popuptxt>p",{
    //     delay:0.2,
    //     aniName:"slideLtoR"
    // })
    








})