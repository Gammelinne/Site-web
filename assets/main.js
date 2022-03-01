const url = (postal) => `https://geo.api.gouv.fr/communes?codePostal=${postal}&fields=nom,code,codesPostaux,codeDepartement,region&format=json&geometry=centre`

$(document).ready(()=>{
    $("#previous").click(() => {
        if ($("#img2").hasClass("img2")) {
            $("#img1").removeClass("img1").addClass("img2");
            $("#img2").removeClass("img2").addClass("img3");
            $("#img3").removeClass("img3").addClass("img1");
        } else if ($("#img2").hasClass("img3")) {
            $("#img1").removeClass("img2").addClass("img3");
            $("#img2").removeClass("img3").addClass("img1");
            $("#img3").removeClass("img1").addClass("img2");
        } else {
            $("#img1").removeClass("img3").addClass("img1");
            $("#img2").removeClass("img1").addClass("img2");
            $("#img3").removeClass("img2").addClass("img3");
        }
    });
    
    $("#next").click(() => {
        if ($("#img2").hasClass("img2")) {
            $("#img1").removeClass("img1").addClass("img3");
            $("#img2").removeClass("img2").addClass("img1");
            $("#img3").removeClass("img3").addClass("img2");
        } else if ($("#img2").hasClass("img3")) {
            $("#img1").removeClass("img2").addClass("img1");
            $("#img2").removeClass("img3").addClass("img2");
            $("#img3").removeClass("img1").addClass("img3");
        } else {
            $("#img1").removeClass("img3").addClass("img2");
            $("#img2").removeClass("img1").addClass("img3");
            $("#img3").removeClass("img2").addClass("img1");
        }
    });
    $("#inputZip").on("input",(event)=>{
        if(event.target.value.length == 5){
            $.get(url(event.target.value), (data) =>{
                data.map((val) =>{
                    $("#inputState").append(`<option>${val.nom}</option>`)
                    $("#reg").val(val.region.nom)
                })
            })
        }
        else if(event.target.value.length == 0){
            $("#inputState").append(`<option selected>...</option>`)
            $("#reg").val(`...`)
        }
        else{
            $("#inputState").empty()
            $("#reg").val("...")
        }
    })
});
