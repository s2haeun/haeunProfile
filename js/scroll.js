$(function(){
    // let introPathLength = $(".introScroll").get(0).getTotalLength()
    // $(".introScroll").css("stroke-dasharray",introPathLength)
    // $(".introScroll").css("stroke-dashoffset",introPathLength)
    // alert(introPathLength)
    // 선을 없애는 소스
    let pathArray = []
    $(".train>li").each(function(){
        let pathLength = $(this).children().children("path").get(0).getTotalLength()
        console.log(pathLength)
        pathArray.push(pathLength)
        $(this).children().children("path").css("stroke-dasharray",pathLength)
        $(this).children().children("path").css("stroke-dashoffset",pathLength)
    })
    // console.log(pathArray)

    
    // 스크롤이벤트

    $(window).scroll(function(){
        let sct = $(window).scrollTop()
        let scrollBoxTop = $(".scrollBox").offset().top
        let distance = sct - scrollBoxTop
        let scrollBoxHeight = $(".scrollBox").height()
        let elvHeight = $(".elv").height()
        let aniEnd = scrollBoxHeight-elvHeight
        let per = distance/aniEnd*100
        let perTrain = per*0.94
        let num = perTrain/(100/16)
        let idx = Math.floor(num)
        let sPer = (num-idx)
        let pathMove = Math.round((sPer) * 10) / 10
        // let lastPathMove = pathMove*90

        // console.log(`전체 기차가 ${perTrain}% 이동중`)
        // console.log(`현재 ${idx}번째 슬라이드가 ${pathMove}% 이동중이다`)
        // console.log(bg1pathLength-(bg1pathLength*sPer))
        console.log(`전체 스크롤이 ${perTrain}이동`)
        
        //기차가 이동하는 소스
        $(".train").css("transform",`translateX(${-perTrain}%)`)

        
        // svg가 채워지는 소스
        $(".train>li").eq(idx).children().children("path").css("stroke-dashoffset",pathArray[idx]-(pathArray[idx]*pathMove))

        // header 배경이 채워지는 소스
        $(".pro").css("width",`${per}%`)

        
        
        // 동그라미가 커지는 소스
        function animationScroll(start,end,tag,per){
            if(per>start && per<end){
                // console.log((perTrain-start)/(end-start),"음음")
                $(tag).css("transform",`scale(${(perTrain-start)/(end-start)})`)
            }
        }
        // 동그라미가 커지는 동작
        animationScroll(6,9,".redCircle",perTrain)
        animationScroll(9,12,".yellowCircle_2",perTrain)
        animationScroll(16,19,".blueCircle_3",perTrain)
        animationScroll(19,22,".greenCircle_4",perTrain)
        animationScroll(26,29,".redCircle_5",perTrain)
        animationScroll(33,36,".yellowCircle_6",perTrain)
        animationScroll(58,61,".yellowCircle_9",perTrain)
        animationScroll(72,75,".yellowCircle_11",perTrain)
        animationScroll(92,93.5,".redCircle_14",perTrain)
    
        // 컨텐츠가 보이는 동작
        contentsOpa(".con3",19,perTrain)
        contentsOpa(".con4",23,perTrain)
        contentsOpa(".con5",30,perTrain)
        contentsOpa(".pop1",40,perTrain)
        contentsOpa(".pop2",42,perTrain)
        contentsOpa(".pop3",43,perTrain)
        contentsOpa(".pop3_1",45,perTrain)
        contentsOpa(".pop3_2",47,perTrain)
        contentsOpa(".pop3_3",49,perTrain)
        contentsOpa(".pop4",51,perTrain)
        contentsOpa(".pop5",53,perTrain)
        contentsOpa(".pop6",55,perTrain)
        contentsOpa(".bannerStation",68,perTrain)
        contentsOpa(".tab",79,perTrain)
        contentsOpa(".phone",82,perTrain)
        contentsOpa(".redesignBox",86,perTrain)
        contentsOpa(".clickDeco",57,perTrain)
        contentsOpa(".li2popuptxt",12,perTrain)
        contentsOpa(".li4popuptxt",23,perTrain)
        contentsOpa(".li5popuptxt",29,perTrain)
        contentsOpa(".li6popuptxt",37,perTrain)
        contentsOpa(".li9popuptxt",62,perTrain)
        contentsOpa(".li11popuptxt",74.5,perTrain)
        contentsOpa(".li12popuptxt",81,perTrain)
    })
    

    

    // 컨텐츠가 보이는 함수
    function contentsOpa(tag,i,perTrain){
        if(perTrain>i){
            $(tag).addClass("on")
        }else{
            $(tag).removeClass("on")
        }
    }
    
    
})

