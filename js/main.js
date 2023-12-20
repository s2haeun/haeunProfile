$(function(){

    // today
    setInterval(function(){
        let today = new Date()
        let Month = today.getMonth()+1
        let date = today.getDate()
        let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        let day = week[today.getDay()]
        let hour = today.getHours()
        let minutes = today.getMinutes()
        let Seconds = today.getSeconds()
        $(".Month").html(Month)
        $(".date").html(date)
        $(".day").html(day)
        $(".hour").html(hour<10?"0"+hour:hour)
        $(".min").html(minutes<10?"0"+minutes:minutes)
        $(".sec").html(Seconds<10?"0"+Seconds:Seconds)
        // console.log(today,Month,date,day,hour,minutes,Seconds)
    },1000)

    // colorMode
    $(".moon").click(function(){
        $("html").css(`background`, `#333`)
        $(".scgLi>svg>path").css(`stroke`, `#fff`)
        $(".introScroll").css(`stroke`, `#fff`)
        $(".redesignTxt").css(`color`,`#fff`)
        $(".today").css(`color`,`#fff`)
        $(".do").css(`display`,`none`)
        $(".pro").css(`background`, `#797979`)
        $(".menu").css(`color`,`#fff`)
        $(".bannerTrain").css(`color`,`#fff`)
        $(".li1_scroll").css(`color`,`#fff`)
        $(".li2popuptxt").css(`color`,`#fff`)
        $(".li4popuptxt").css(`color`,`#fff`)
        $(".li5popuptxt").css(`color`,`#fff`)
        $(".li6popuptxt").css(`color`,`#fff`)
        $(".li9popuptxt").css(`color`,`#fff`)
        $(".li11popuptxt").css(`color`,`#fff`)
        $(".li12popuptxt").css(`color`,`#fff`)
        $(".page path").css(`fill`,`#fff`)
        $('.icon').prop('href', "./img/moon.png")
    })
    $(".sun").click(function(){
        $("html").css(`background`, `#fff`)
        $(".scgLi>svg>path").css(`stroke`, `#333`)
        $(".introScroll").css(`stroke`, `#333`)
        $(".redesignTxt").css(`color`,`#000`)
        $(".today").css(`color`,`#000`)
        $(".do").css(`display`,`block`)
        $(".pro").css(`background`, `#E6E7E8`)
        $(".menu").css(`color`,`#000`)
        $(".bannerTrain").css(`color`,`#000`)
        $(".li1_scroll").css(`color`,`#000`)
        $(".li2popuptxt").css(`color`,`#000`)
        $(".li4popuptxt").css(`color`,`#000`)
        $(".li5popuptxt").css(`color`,`#000`)
        $(".li6popuptxt").css(`color`,`#000`)
        $(".li9popuptxt").css(`color`,`#000`)
        $(".li11popuptxt").css(`color`,`#000`)
        $(".li12popuptxt").css(`color`,`#000`)
        $(".page path").css(`fill`,`#333`)
        $('.icon').prop('href', "./img/sun.png")
    })


    // menu
    // console.log($("html,body").scrollTop())
    $(".menuLIIntro").click(function(){
        $("html,body").animate({scrollTop:0},1500)
    })
    $(".menuLI1").click(function(){
        $("html,body").animate({scrollTop:6000},1500)
    })
    $(".menuLI2").click(function(){
        $("html,body").animate({scrollTop:11600},1500)
    })
    $(".menuLI3").click(function(){
        $("html,body").animate({scrollTop:19500},1500)
    })
    $(".menuLI4").click(function(){
        $("html,body").animate({scrollTop:23300},1500)
    })

    // mouse
    $(document).mousemove(function(event){
        let x = event.clientX
        let y = event.clientY

        $(".mouse").css("left",x-20)
        $(".mouse").css("top",y-10)
        $(".clickMouse").css("left",x-20)
        $(".clickMouse").css("top",y-10)

    })
    let state = false

    $(".menu,.con4,.popup,.bannerStation,.colorMode,.popupMore,.direct,.clickDeco").mouseover(function(){
        if(state==false){
        $(".mouse").removeClass("event")
        $(".clickMouse").addClass("event")
        state=true
    }
    })

    $(".menu,.con4,.popup,.bannerStation,.colorMode,.popupMore,.direct,.clickDeco ").mouseout(function(){
        if(state==true){
        $(".mouse").addClass("event")
        $(".clickMouse").removeClass("event")
        state=false
        }
    })

    
    
    //배너슬라이드
    let countB = 0
    $(".next").click(function(){
        countB++
        if(countB>=$(".bannerTrain>li").length){countB=0}
        $(".bannerTrain>li").removeClass("on")
        $(".bannerTrain>li").eq(countB).addClass("on")
        console.log($(".bannerTrain>li").eq(countB))
    })
    $(".prev").click(function(){
        countB--
        if(countB<0){countB=($(".bannerTrain>li").length)-1}
        $(".bannerTrain>li").removeClass("on")
        $(".bannerTrain>li").eq(countB).addClass("on")
        console.log($(".bannerTrain>li").eq(countB))
    })

    // 배너 팝업

    $(".bannerTrain>li").click(function(){
        let idx = $(this).index()
        $(".popupCover").addClass("on")
        $(".popupClose").addClass("on")
        $(".popupB").eq(idx).addClass("on")
    })
    
    $(".popupClose").click(function(){
        $(".popupCover").removeClass("on")
        $(".popupClose").removeClass("on")
        $(".popupB").removeClass("on")
    })

    // 리디자인 기획 오픈
    $(".redesignOpen").click(function(){
        $(".RedesignPopupCover").addClass("on")
        $(".RedesignPopupImg").addClass("on")
        $(".RedesignPopupClose").addClass("on")
    })
    $(".RedesignPopupClose").click(function(){
        $(".RedesignPopupCover").removeClass("on")
        $(".RedesignPopupImg").removeClass("on")
        $(".RedesignPopupClose").removeClass("on")
    })
   
    //reStation
    let reCount = 0
    setInterval(function(){
        reCount++
        if(reCount>5){reCount=0}
        $(".reTrain").css(`transform`,`translateY(-${100/6*reCount}%)`)
    },6000)

    // skill 
    $(".skills>li").each(function(){
        let thisList = $(this)
        let pathLength = thisList.find(".skillPath2").get(0).getTotalLength()
        thisList.find(".skillPath2").css("stroke-dashoffset",pathLength)
        thisList.find(".skillPath2").css("stroke-dasharray",pathLength)
    })
    
    $(".con4 li").click(function(){
        $(".con4 li").removeClass("on")
        $(this).addClass("on")
        skillRotate($(this))
        
    })

    function skillRotate(ele){
        
        let per = Number(ele.find(".skill_per").text())
        let count = 0
        let thisList = ele

        // svg그래프 퍼센트대로 그려지는 소스
        let pathLength = thisList.find(".skillPath2").get(0).getTotalLength()
        // thisList.find(".skillPath2").css("stroke-dashoffset",pathLength)
        // thisList.find(".skillPath2").css("stroke-dasharray",pathLength)
        // console.log(pathLength)
        

        let timer = setInterval(function(){
            count++
            thisList.find(".skill_per").html(count)
            thisList.find(".skillPath2").css("stroke-dashoffset",pathLength-(pathLength*count/100))
            if (count >=per){clearInterval(timer)}
        },10)
        
    }

    // popup
    $(".popup").click(function(){
        $(".popup").removeClass("hidden")
        $(this).addClass("hidden")
    })


})