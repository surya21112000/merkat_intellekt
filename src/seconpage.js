
import React from 'react'
import './secondPage.css'
import 'aos/dist/aos.css';
const Seconpage = () => {
  return (

    <div>
   <div class="main">


<img src='https://i.ibb.co/82bGJLS/Helping-a-partner.gif' data-aos="fade-right" data-aos-duration="1000"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" style={{width:650,height:650,marginLeft:100}} ></img>
<p className='intro' >We help startup organizations right from the development of their prototypes to the entire lifecycle of Product Engineering. We provide smart solutions for Product companies in the Start-up phase and pride ourselves on our unparalleled, dedicated niche service helping our customers build software products better and faster. Our approach to product development is evolved and refined through years of product-building experience.</p>
   </div>

   <p  style={{marginTop:230,fontSize:50,fontWeight:500,color:"#7c7777"}}  data-aos="fade-up" >  Customer satisfaction</p>
   <div class="main" style={{flexDirection:"row-reverse",paddingLeft:50,marginTop:50}}  >
   <img src='https://i.ibb.co/R2YpLRx/Customer-Survey.gif' data-aos="fade-left" data-aos-duration="1000"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" style={{width:650,height:650,marginRight:100}} ></img>
<p className='intro' style={{marginLeft:110,marginTop:275}} >I'm Completely satisfied with work done by Merkat intellekt,as they were able to accomplish what i thought couldn't be done. Looking forward to working with them for next project soon. <br></br> <span style={{fontSize:23,fontWeight:500}} >David smithstein <span style={{fontSize:16,fontWeight:300}} >CEO, Lean & Mean Business Systems,Inc.</span></span></p>
   </div>
   <p style={{fontSize:20,opacity:0.8,marginTop:150}}> Why choose us ? </p>
<h1 style={{fontSize:44,color:"#adbdcb"}} >Why Merkat Intellekt?</h1>
   <div className='cards'style={{marginTop:40}}>
   <main>
   <div class="row"  style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
        <div class="card"  > 

      
        <br></br><br></br>

        <div  data-aos="fade-right">
            <h3 style={{marginRight:35}}  >Research Driven</h3><br></br>
            <p style={{marginRight:35}} >We are research driven consultation firm with niche focus to product engineering</p>
        </div></div>
  <div class="card1"  > 
  <br></br><br></br><br></br> <br></br><br></br><br></br> <br></br><br></br>

  <div data-aos="fade-left" >
            <h3 style={{marginLeft:35}}>Commitment</h3><br></br>
            <p style={{marginLeft:35}}>Commitment towards customers to provide software products better and faster</p></div>
        </div> <br></br><br></br><br></br>
    
    
    </div>
</main>
<main style={{marginTop:-140}}>
   <div class="row"  style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
        <div class="card"  > 
        <br></br><br></br>
        <div  data-aos="fade-right">
            <h3 style={{marginRight:35}} >Milestone driven engagement </h3><br></br>
            <p style={{marginRight:35}} >Milestone driven engagement model, which would help you to take a Go/no-go decision during anytime of the engagement without any contractual obligation</p>
        </div></div>
  <div class="card1"  > 
  <br></br><br></br><br></br> <br></br><br></br><br></br> <br></br><br></br>
  <div data-aos="fade-left">
            <h3 style={{marginLeft:35}}>Extensive Experience</h3><br></br>
            <p style={{marginLeft:35}}>Merkat Intellekt has extensive experience working on Java & Node JS along with Front end technologies.</p>
     </div>   </div> 
    
    
    </div>
</main>
<main style={{marginTop:-140}}>
   <div class="row"  style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
        <div class="card"  > 
        <br></br><br></br>
        <div  data-aos="fade-right">
            <h3 style={{marginRight:35}} >Leverage agile tools </h3><br></br>
            <p style={{marginRight:35}} >We use Agile & Open-source tools to engage customers digitally and stay relevant to project updates regularly</p>
        </div></div>
  <div class="card1"  > 
  <br></br><br></br><br></br> <br></br><br></br><br></br> <br></br><br></br>
  <div data-aos="fade-left">
            <h3 style={{marginLeft:35}}>60 Day Game plan</h3><br></br>
            <p style={{marginLeft:35}}>Software Ideation , Design to development a 60 day game plan to success using I2IP Engagement Model</p>
     </div>   </div> 
    
    
    </div>
</main>

<br></br><br></br><br></br> <br></br><br></br><br></br> <br></br><br></br>

   </div>
    <div class="footer-dark">
        <footer>
            <div class="container"  style={{justifyContent:"center"}}>
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul style={{lineHeight:2}}>
                            <li><a href="#">MVP for startups</a></li>
                            <li><a href="#">Product engineering</a></li>
                            <li><a href="#">UI/UX design</a></li>
                            <li><a href="#">Quality assurance</a></li>
                        </ul>
                    </div><br></br><br></br>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul  style={{lineHeight:2}}>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    {/* <div class="col-md-6 item text">
                        <h3>Company Name</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div> */}
                    <br></br><br></br>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <br></br>
                
            </div>
        </footer>
    </div>
   </div>
  )
}
export default Seconpage
