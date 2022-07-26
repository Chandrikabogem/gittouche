import React from 'react'
import './style.css'

function Aboutus() {
  return (
    <div>
       <div className='backgroundImage-about-container pb-5'>

                <div className='container backgroundImage-text-container'>
                    <h1>About Us</h1>  
                </div>
                
               
        </div> 
        <div className='container my-5'>
                <div className='row'>
                    <div className='col-12 col-md-2'>
                        <hr className='line'/>
                        <h6>Take a coffee break or enjoy a meal.</h6>
                    </div>
                    <div className='col-12 col-md-4 '>
                        <img src='https://yevgenysim-turkey.github.io/touche/assets/img/2.jpg' className='image'/>   
                    </div>
                    <div className='col-12 col-md-5 center-text'> 
                        <h4>Always amazing experience</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis nisi, consequatur, laborum libero a neque ducimus. Porro rem illum quo nostrum quisquam asperiores. Possimus facilis velit, voluptatibus!</p>        
                    </div>
                </div>
        </div>    

        <div className='newesletter-container p-5 text-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="orange" class="bi bi-quote" viewBox="0 0 16 16">
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
            </svg>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at veritatis vitae modi ex quis quibusdam error repudiandae adipisci dolore perspiciatis iste, vel fuga a, libero architecto ratione deleniti sequi. </p>
            <p>-LIAM SMITH</p>
           
        </div>

        <div className='map'>
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                <a href="https://www.kokagames.com/fnf-friday-night-funkin-mods/"></a>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Aboutus
