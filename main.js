//queryselectors

let theToggle = document.querySelector('.toggle-btn'),
    monthlyBilling=document.querySelector('.month')
    pricing=document.querySelector('.price .itemprice')
    toggleBtn=document.querySelector('.toggle-btn')
    slider = document.querySelector('.slider')

toggleBtn.addEventListener('click',()=>{
    if(theToggle.checked==true){
        
        let priceInt = parseInt(pricing.textContent)
        pricing.textContent=`${(priceInt - (priceInt * .255)) * 12}`
        monthlyBilling.textContent=`/year`;

    }
    else{

        monthlyBilling.textContent= `/month`

    }
})


//add selector to page-view 
let pageViews=document.querySelector('.followers span')

//add event listener to input
slider.addEventListener('input',()=>{
    if(slider.value==1){
        if(theToggle.checked==true){

            pricing.textContent=`${(8 - (8* .25)) * 12}`

        }else{

            pricing.textContent=8

        }

        pageViews.textContent='10K'
    }

    if(slider.value==2){
        if(theToggle.checked==true){

            pricing.textContent=108
        }
        else{

            pricing.textContent=12

        }

        pageViews.textContent='50K'
    }

    if(slider.value==3){
        if(theToggle.checked==true){

            pricing.textContent=144

        }
        else{

            pricing.textContent=16

        }

        pageViews.textContent='100K'

    }
    if(slider.value==4){
        if(theToggle.checked==true){

            pricing.textContent=216

        }
        else{

            pricing.textContent=24

        }

        pageViews.textContent='500K'

    }

    if(slider.value==5){
        if(theToggle.checked==true){

            pricing.textContent=324

        }
        else{

            pricing.textContent=36

        }

        pageViews.textContent='1M'

    }
})
