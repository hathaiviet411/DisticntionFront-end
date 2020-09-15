<template>
    <div class="container-fluid">  
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <div class="top-wrapper">
            <img src="../assets/4.jpeg" alt="Snow" style="width:100%;height: 100%">
            <div class="centered">Welcome To EduManagementSystem !</div>
        </div>   
        <hr>
        <!-- Intro and Pic -->
        <div class="row">
            <div class="col-sm-6" style="margin-top: 100px">
                <h3>Conmeongusi</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button class="btn btn-warning">Join With Us !</button>
            </div>

            <div class="col-sm-6">
                <img src="../assets/portrait.png" alt="" width="100%" height="auto">
            </div>
        </div>
        <hr>
        <!-- Card -->
        <div class="row justify-content-center">
            <!-- 1 -->
            <div class="col-sm-3">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="../assets/1.jpeg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <!-- 2 -->
            <div class="col-sm-3">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="../assets/2.jpeg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <!-- 3 -->
            <div class="col-sm-3">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="../assets/4.jpeg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
        <hr>
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
        Slide
    },
    methods: {
        handleSlideClick (dataset) {
            console.log(dataset.index, dataset.name);
        }
    }
}   
</script>

<style scoped src="../assets/css/HomePage.css"></style>

