function generatecodecode(){

    var userdata = document.querySelector("textarea").value
    // Implemment some parametr to the api "cht=qr&chs=500x500"
    var api = "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=H&chl=?"
    // convert the userdata into normla url with encodeURIComponent
    var Qrcontent = api + encodeURIComponent(userdata);
    document.querySelector("#qrcodeimg").src = Qrcontent;

}