<template>
    <div class="container-fluid">  
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <!-- Landing page -->
        <div class="landing">
            <div class="landingText" data-aos="fade-down" data-aos-duration="5000">
                <h1> Stay In <span style="color: #ff3300; font-size:3vw"> Stay Safe</span></h1>
                <h3> Lets all work together to put an end o this pandemic. <br> Help stop the spread. </h3>
                <div class="btn">
                    <a href="#">Learn More</a>
                </div>
            </div>
            <div class="landingPage" data-aos="fade-down" data-aos-duration="2000">
                <img src="../assets/social_networking.png">
            </div>
        </div>
        <!-- Carousell -->
        <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="true">
            <slide data-index="0" data-name="MySlide0" @slideclick="handleSlideClick">
                <div class="item">
                    <img src="../assets/5.jpg" alt="Chicago" style="width:100%;height: auto">
                    <div>
                        <h3>New York</h3>
                        <p>Thank you, Chicago!</p>
                    </div>
                </div>
            </slide>
            <slide data-index="1" data-name="MySlide1" @slideclick="handleSlideClick">
                <div class="item">
                    <img src="../assets/6.jpg" alt="Chicago" style="width:100%;height: auto">
                    <div>
                        <h3>Tokyo</h3>
                        <p>Thank you, Chicago!</p>
                    </div>
                </div>
            </slide>
            <slide data-index="2" data-name="MySlide2" @slideclick="handleSlideClick">
                <div class="item">
                    <img src="../assets/7.jpg" alt="Chicago" style="width:100%;height: auto">
                    <div>
                        <h3>Ha Noi</h3>
                        <p>Thank you, Chicago!</p>
                    </div>
                </div>
            </slide>
        </carousel>
    </div>      
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'home-page',
    components: {
        Carousel,
        Slide,
    },
    methods: {
        handleSlideClick (dataset) {
            console.log(dataset.index, dataset.name);
        }
    },
}   
</script>

<style scoped src="../assets/css/HomePage.css"></style>

