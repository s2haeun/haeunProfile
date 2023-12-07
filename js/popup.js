$(function(){

    console.log(popupArray)

    function insertPopup(index){
        let colorPaletteResult = ""
        for(let i=0 ; i<popupArray[index].colors.length ; i++){
            colorPaletteResult+=`<li>
                <span class="colorP1" style="background:${popupArray[index].colors[i]}"></span>
                ${popupArray[index].colors[i]}
            </li>`
        }
        console.log(colorPaletteResult)
        let fontsResult = ""
        for(let i=0 ; i<popupArray[index].fonts.length ; i++){
            fontsResult+=`<b id="${popupArray[index].fontsID[i]}">${popupArray[index].fonts[i]}</b><br>`
        }
        

        $(".txtframePopup").html(`<section class="popDes">
        <h4>${popupArray[index].title}</h4>
        <p>${popupArray[index].desc}
        </p>
        <h5>Color Palette</h5>
        <ul>
            ${colorPaletteResult}
        </ul>
        <h5>Font</h5>
        ${fontsResult}
    </section>`) 
    
}
// popupMore
$(".clickDeco").click(function(){
    $(".popupMore").addClass("on")
})
$(".popupMoreDeco").click(function(){
    $(".popupMore").removeClass("on")
})
$(".popupMoreGallery>li").click(function(){
    let galleryIdx = $(this).index()
    $(".popupMoreTrain>li").removeClass("on")
    $(".popupMoreTrain>li").eq(galleryIdx).addClass("on")
    insertPopup(galleryIdx)
    $(".txtframePopup").css(`border`,`2px solid ${popupArray[galleryIdx].colors[0]}`)
})


    



})