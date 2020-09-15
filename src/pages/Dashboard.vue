<template>
    <div id="wrapper" v-bind:class="toggle">         
        <!-- Sidebar -->
        <Sidebar/>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <!-- /#page-topbar -->
            <Topbar @toggle="toggleMenu()"/>
            <!-- /#page-topbar -->
            <div class="container-fluid dashboard">
                <router-view></router-view>
            </div>
        </div>
        <Footer/>
        <!-- /#page-content-wrapper -->
    </div>  
</template>

<script>

import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer'

export default {
    name: 'home',
    components:{
        Topbar,
        Sidebar,
        Footer
    },
    beforeCreate: function() {
      document.body.className = 'ManagementSystem'
    },
    data(){
        return{
            toggle: '',
            toggleBool: false
        }
    },
    methods:{
        toggleMenu(){
            this.toggleBool = !this.toggleBool;
            if(this.toggleBool == true){
                this.toggle = 'toggled'
            }else{
                this.toggle = ''
            }
        },
        changeColor() {
            var color = ["#32064A", "#E56B1F", "#FCD02C", "E42C6A", "#292930", "#3EB650", "#FCC133", "#E12B38"];
            var i = 0;
                document.querySelector("button").addEventListener("click", 
            function() {
                i = i < color.length ? ++i : 0;
                document.querySelector("body").style.background = color[i];
                });
            console.log(color);
        }
    }
}
</script>

<style>
  body.ManagementSystem {
    background-color: #ffffff;
  }

  @import '../assets/css/ManagementSystem.css';
</style>


