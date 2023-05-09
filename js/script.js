function cop_adam(yanlis_tahmin_sayaci) {
    let canvas = document.getElementById("kutu");
    let ctx = canvas.getContext("2d");

    switch (yanlis_tahmin_sayaci){
        case 5:
            ctx.strokeStyle = 'red';
            ctx.beginPath();
            ctx.arc(150, 50, 30, 0, 2 * Math.PI);
            ctx.stroke();
            break;
        case 4:
            ctx.strokeStyle = 'red';
            ctx.beginPath();
            ctx.moveTo(150, 80);
            ctx.lineTo(150, 200);
            ctx.stroke();
            break;
        case 3:
            ctx.strokeStyle = 'red';
            ctx.beginPath();
            ctx.moveTo(150, 100);
            ctx.lineTo(100, 150);
            ctx.stroke();
            break;
        case 2:
            ctx.strokeStyle = 'red';
            ctx.beginPath();
            ctx.moveTo(150, 100);
            ctx.lineTo(200, 150);
            ctx.stroke();
            break;
        case 1:
            ctx.strokeStyle = 'red';
            ctx.beginPath();
            ctx.moveTo(150, 200);
            ctx.lineTo(100, 250);
            ctx.stroke();
            break;
        case 0:
            ctx.strokeStyle = 'red';
            ctx.beginPath();
            ctx.moveTo(150, 200);
            ctx.lineTo(200, 250);
            ctx.stroke();

            document.querySelectorAll("button").forEach(btn=>{if(btn.className=="my-btn"){btn.setAttribute("disabled","")}})
            break;
        default:
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            break;
    }
}

function oyunu_baslat() {
    document.getElementById("bilinmeyen-kelime").innerHTML = ""
    document.querySelector(".sol").children[1].innerHTML = ""
    cop_adam()

    var puan = 0
    var yanlis_tahmin_sayaci = 6
    const kelimeler = ["elma","karpuz","havuç","tavşan","kelebek","koyun","mehmet","okul","ananas"]
    const belirlenen_kelime = kelimeler[Math.floor(Math.random() * kelimeler.length)]
    
    console.log(belirlenen_kelime)
    
    for (const kelime of belirlenen_kelime) {
        var bilinmeyen_karakter = document.createElement("div")
        bilinmeyen_karakter.innerText = "_"
        bilinmeyen_karakter.className = "bilinmeen-karakterler"
        document.getElementById("bilinmeyen-kelime").appendChild(bilinmeyen_karakter)
    }
// 

    for (let i = 65; i <= 90; i++) {
        const button = document.createElement("button")
        button.innerText = String.fromCharCode(i)
        button.className = "my-btn"
        document.querySelector(".sol").children[1].appendChild(button)

        button.onclick = () => {
            button.setAttribute("disabled","")
            if(belirlenen_kelime.includes(button.innerText.toLowerCase()))
            {
                for(const i in belirlenen_kelime)
                {
                    const harf = belirlenen_kelime[i]
                    if(harf == button.innerText.toLowerCase())
                    {
                        document.querySelectorAll(".bilinmeen-karakterler")[i].innerText = button.innerText
                        puan += 1
                        console.log(puan)
                    }
                }
            }
            else
            {
                if(yanlis_tahmin_sayaci >= 1)
                {
                    yanlis_tahmin_sayaci -= 1
                }
                cop_adam(yanlis_tahmin_sayaci)
            }
            if(document.querySelector("#bilinmeyen-kelime").textContent.toLowerCase() == belirlenen_kelime)
            {
                document.querySelector("#bilinmeyen-kelime").style.color = "green"
            }
        }
    }

        
}
// var tahmin = document.getElementById("tahmin").value
                
oyunu_baslat()



