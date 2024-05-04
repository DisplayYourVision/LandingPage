window.addEventListener('load', () => {
    //document.body.style.backgroundColor = "white"
    //document.body.style.backgroundImage = "url('../style/Textures/DYV_black.png')"

    //document.body.style.backgroundColor = white





    if(localStorage.getItem("TYPE") == 'SpaceShip_Transporter_1')
    {
        document.getElementById('TXT').innerHTML = "Transporter"
        //document.getElementById('IntroTitel').innerHTML = "Plan your website"
        //document.getElementById('BasePrice').innerHTML = "- Baseprice ~ 250$"
        //document.getElementById('Design').style.opacity = 1;
        //document.getElementById('Logo').style.display = "none";
        //document.getElementById('Video').style.opacity = 1;
    }
})

function SaveParams(Type)
{
    localStorage.setItem("TYPE", Type)
}