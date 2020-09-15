<template>
       <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-avatar">
                    <div class="avatar">
                        <img src="../assets/avatar1.jpg" alt="">
                    </div>
                    <h3 class="avatar-name">
                        Adminstrator
                    </h3>
                </li>
                <li>
                    <router-link to='/ManagementSystem/home-page'><i class="icofont-notepad"></i>Home Page</router-link>
                </li>
                <li>
                    <a href="#" v-on:click.prevent v-b-toggle.collapse-1><i class="icofont-dashboard-web"></i>System's Info<span class="caret float-right"><i class="icofont-caret-down"></i></span></a>
                    <b-collapse id="collapse-1">
                        <ul id="collapse-1">
                            <li><router-link to='/ManagementSystem/overall'>Overall</router-link></li>
                            <li><router-link to='/ManagementSystem/individual'>Individual</router-link></li>
                        </ul>
                    </b-collapse>
                </li>
                <li>
                    <router-link to='/ManagementSystem/Staff-List'><i class="icofont-notepad"></i> Staff List</router-link>
                </li>
                <li>
                    <router-link to='/ManagementSystem/Trainer-List'><i class="icofont-notepad"></i> Trainer List</router-link>
                </li>
                <li>
                    <router-link to='/ManagementSystem/Trainee-List'><i class="icofont-notepad"></i> Trainee List</router-link>
                </li>
                <li>
                    <router-link to='/ManagementSystem/setting'><i class="icofont-settings-alt"></i> Setting</router-link>
                </li>
                 <li>
                    <router-link to='/login'><i class="icofont-logout"></i> Logout</router-link>
                </li>
            </ul>
        </div>
        <!-- /#sidebar-wrapper -->
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>

<style>
    @import '../assets/css/Sidebar.css';
</style>


