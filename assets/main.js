const url = (postal) => `https://geo.api.gouv.fr/communes?codePostal=${postal}&fields=nom,code,codesPostaux,codeDepartement,region&format=json&geometry=centre`

$(document).ready(()=>{
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
            $("#inputState").empty() 
            $("#reg").empty()
            $("#inputState").append(`<option selected>...</option>`)
            $("#reg").val(`...`)
        }
        else{
            $("#inputState").empty()
            $("#reg").val("...")
        }
    })
});