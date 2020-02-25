function assertCookies() {
    var pollid = getCookie('pollid')

    if (pollid == null || pollid.length <= 0)
        error('Invalid input', 'Must provide a valid poll id.')
}

$(document).ready(function (){
    assertCookies()

    var uriRanking = "http://localhost:8080/ukahootapi/demo/hello/ranking"

    var pollid = getCookie('pollid')

    //TODO: Llamada a GET /ranking/{pollid}
    $.ajax({
        url:uriAuth,
        type:"GET",
        crossDomain:true,
        success:function (data){
            token = data.apikey
        },
        error:function (xhr, textStatus){
            error('Error '+xhr.status, textStatus)
        }
    })

    var rankData = {
        poll_name:'prueba',
        ranks:[
            {user_name:'nabaso', score:1234},
            {user_name:'nabaso', score:1234},
            {user_name:'nabaso', score:1234},
            {user_name:'nabaso', score:1234},
            {user_name:'nabaso', score:1234}
        ]
    }

    $('#pollNameTitle').text(rankData.poll_name)

    var highScoresList = $('#highScoresList')
    rankData.ranks.forEach(function (rank, index, array){
        highScoresList.append(
            '<ion-row class="parent-row">'+
            '<ion-col size=6><ion-item><ion-text>'+(index+1)+'. '+rank.user_name+'</ion-text></ion-item></ion-col>'+
            '<ion-col size=6><ion-item><ion-text>'+rank.score+'</ion-text></ion-item></ion-col>'+
            '</ion-row>')
    })
})