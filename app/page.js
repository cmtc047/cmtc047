// fsdfdsfsfdstesttest
import Navbar from '../app/component/nav';
import Footer from '../app/component/footer';
export default function Home() {
  return (
   <>
      <Navbar />

      <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
         
        </div>
      </div>
      </div>
      <br></br><br></br>  
      <div class="container">
        <div class="row">
            <div class="col">
                <img src="N1.jpg" class="img-fluid" alt="Image 1"></img>
            </div>
            <div class="col">
                <img src="N2.jpg" class="img-fluid" alt="Image 2"></img>
            </div>
            <div class="col">
                <img src="N3.jpg" class="img-fluid" alt="Image 3"></img>
            </div>
        </div>
    </div>
    <br></br><br></br><br></br><br></br>
    <Footer />
   </>
  );
}
