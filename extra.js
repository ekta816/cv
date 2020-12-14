/**
 *  <!-- Container for the image gallery -->
                <div class="container-image">

                    <!-- Full-width images with number text -->
                    <div class="mySlides">
                    <div class="numbertext">1 / 12</div>
                        <img src="images/projects/attire1.png" style="width:100%">
                    </div>
                
                    <div class="mySlides">
                    <div class="numbertext">2 / 12</div>
                        <img src="images/projects/attire2.png" style="width:100%">
                    </div>
                
                    <div class="mySlides">
                    <div class="numbertext">3 / 12</div>
                        <img src="images/projects/cuebit.png" style="width:100%">
                    </div>
                
                    <div class="mySlides">
                    <div class="numbertext">4 / 12</div>
                        <img src="images/projects/professional1.png" style="width:100%">
                    </div>
                
                    <div class="mySlides">
                    <div class="numbertext">5 / 12</div>
                        <img src="images/projects/professional2.png" style="width:100%">
                    </div>
                
                    <div class="mySlides">
                    <div class="numbertext">6 / 12</div>
                        <img src="images/projects/professional3.png" style="width:100%">
                    </div>
                    <div class="mySlides">
                    <div class="numbertext">7 / 12</div>
                        <img src="images/projects/attire1.png" style="width:100%">
                    </div>
                
                    <div class="mySlides">
                    <div class="numbertext">8 / 12</div>
                        <img src="images/projects/attire2.png" style="width:100%">
                    </div>
                
                    <div class="mySlides">
                    <div class="numbertext">9 / 12</div>
                        <img src="images/projects/cuebit.png" style="width:100%">
                    </div>
                
                    <div class="mySlides">
                    <div class="numbertext">10 / 12</div>
                        <img src="images/projects/professional1.png" style="width:100%">
                    </div>
                
                    <div class="mySlides">
                    <div class="numbertext">11/ 12</div>
                        <img src="images/projects/professional2.png" style="width:100%">
                    </div>
                
                    <div class="mySlides">
                    <div class="numbertext">12 / 12</div>
                        <img src="images/projects/professional3.png" style="width:100%">
                    </div>
                    <!-- Next and previous buttons -->
                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>
                
                    <!-- Image text -->
                    <div class="caption-container">
                    <p id="caption"></p>
                    </div>
                
                    <!-- Thumbnail images -->
                    <div class="row">
                        <div class="column">
                            <img class="demo cursor" src="images/projects/attire1.png" style="width:100%" onclick="currentSlide(1)" alt="Attire">
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="images/projects/attire2.png" style="width:100%" onclick="currentSlide(2)" alt="Attire">
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="images/projects/cuebit.png" style="width:100%" onclick="currentSlide(3)" alt="Cuebit (React Native App)">
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="images/projects/professional1.png" style="width:100%" onclick="currentSlide(4)" alt="(Professional Website)">
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="images/projects/professional2.png" style="width:100%" onclick="currentSlide(5)" alt="(Professional Website)">
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="images/projects/professional3.png" style="width:100%" onclick="currentSlide(6)" alt="(Professional Website)">
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="images/projects/registration.png" style="width:100%" onclick="currentSlide(7)" alt="Registration Form">
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="images/projects/rocknroll1.png" style="width:100%" onclick="currentSlide(8)" alt="Rock N' Roll Multiplayer Video Game">
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="images/projects/rocknroll2.png" style="width:100%" onclick="currentSlide(9)" alt="Rock N' Roll Multiplayer Video Game">
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="images/projects/rocknroll3.png" style="width:100%" onclick="currentSlide(10)" alt="Rock N' Roll Multiplayer Video Game">
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="images/projects/rocknroll4.png" style="width:100%" onclick="currentSlide(11)" alt="Rock N' Roll Multiplayer Video Game">
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="images/projects/professional3.png" style="width:100%" onclick="currentSlide(12)" alt="(Professional Website)">
                        </div>
                    </div>
                </div>



//                 * {
//     box-sizing: border-box;
//   }
  
//   /* Position the image container (needed to position the left and right arrows) */
//   .container-image {
//     position: relative;
//     width: 800px;
//     margin: auto;
//     text-align: center;
//     padding-top: 100px;
    
//   }
  
//   /* Hide the images by default */
//   .mySlides {
//     display: none;

//   }
  
//   /* Add a pointer when hovering over the thumbnail images */
//   .cursor {
//     cursor: pointer;
//   }
  
//   /* Next & previous buttons */
//   .prev,
//   .next {
//     cursor: pointer;
//     position: absolute;
//     top: 40%;
//     width: auto;
//     padding: 16px;
//     /* margin-top: px; */
//     color: white;
//     font-weight: bold;
//     font-size: 20px;
//     border-radius: 0 3px 3px 0;
//     user-select: none;
//     -webkit-user-select: none;
//   }
  
//   /* Position the "next button" to the right */
//   .next {
//     right: 0;
//     border-radius: 3px 0 0 3px;
//   }
  

//   .prev {
//     left: 0;
//     border-radius: 3px 0 0 3px;
//   }
//   /* On hover, add a black background color with a little bit see-through */
//   .prev:hover,
//   .next:hover {
//     background-color: rgba(0, 0, 0, 0.8);
//   }
  
//   /* Number text (1/3 etc) */
//   .numbertext {
//     color: #3370AE;
//     bottom:125px;
//     font-weight: bold;
//     font-size: 16px;
//     padding: 16px 12px;
//     position: absolute;
//   }
  
  
//   /* Container for image text */
//   .caption-container {
//     text-align: center;
//     background-color: #222;
//     padding: 2px 12px;
//     color: white;
//   }
  
//   .row:after {
//     content: "";
//     display: table;
//     clear: both;
//   }
  
//   /* Six columns side by side */
//   .column {
//     float: left;
//     width: 16.66%;
//   }
  
//   /* Add a transparency effect for thumnbail images */
//   .demo {
//     opacity: 0.6;
//   }
  
//   .active,
//   .demo:hover {
//     opacity: 1;
//   }





{/* <h1>Projects</h1>
                <div class = "projects">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="titleSlide1">
                                    <span>
                                        <h2 class="text">Rock N' Roll</h2>
                                        <p class="projectText">Multiplayer 3D video Game</p>
                                    </span>
                            </div>
                                </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="images/projects/rocknroll1.png" alt="First slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="images/projects/rocknroll2.png" alt="Second slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="images/projects/rocknroll3.png" alt="Third slide">
                                    </div>
                                    <div class="carousel-item">
                                        <div class="titleSlide2"><span>
                                            <h2 class="text">Attire.ai</h2>
                                            <p class="projectText">Website for Indian Clothing</p></span>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="images/projects/attire1.png" alt="First slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="images/projects/attire2.png" alt="Second slide">
                                    </div>

                                    <div class="carousel-item">
                                        <div class="titleSlide3"><span>
                                            <h2 class="text">React Native App Development</h2>
                                            <p class="projectText">Cuebit</p></span>
                                        </div>
                                      </div>
                                      <div class="carousel-item">
                                        <img class="d-block w-100" src="images/projects/cuebit.png" alt="First slide">
                                      </div>
                                    </div>
                    
                            </div>
                            
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                            </a>
                      </div> */}




                    /*****
                     * 

.projects {
    position: relative;
    width: 90%;
    margin: 100px;
    height: 550px;
    width: 50%; 
  }
  
  .image {
    display: block;
    width: 100%;
    height: auto;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;  
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #008CBA;
  }
  
  .container:hover .overlay {
    opacity: 1;
  } 
  
  .text {
    color: white;
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }


  .projectText{
        color: white;
        font-size: 14px;
        position: absolute;
        top: 70%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
  }


 .titleSlide1 {
     width: 100%;
     height: 650px;
     text-align: center;
     background-color: #3370AE;
 }

 .titleSlide2 {
    width: 100%;
    height: 650px;
    text-align: center;
    background-color: #7A82AC;
}

.titleSlide3 {
    width: 100%;
    height: 650px;
    text-align: center;
    background-color: #40B1E7;
}


.titleSlide4 {
    width: 100%;
    height: 650px;
    text-align: center;
    background-color: #40B1E7;
}


.titleSlide5 {
    width: 100%;
    height: 650px;
    text-align: center;
    background-color: #40B1E7;
}
                     */