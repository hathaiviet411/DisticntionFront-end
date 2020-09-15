<template>
    <b-navbar toggleable="lg" type="dark">
        
        <b-navbar-brand href="#" v-on:click.prevent.stop="$emit('toggle')">
            <i class="icofont-navigation-menu"></i>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        
        <b-collapse id="nav-collapse" is-nav class="d-none d-lg-block">
            <b-navbar-nav id="text-educhat">
               <span style="color: #000000">EduManagementSystem - English</span> 
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                    <template v-slot:button-content>
                        <i class="icofont-ui-user"></i>
                    </template>
                    <b-dropdown-item class="text"><router-link to='/EduManagementSystem/setting'><i class="icofont-settings-alt" style="color: #000000"></i> Setting</router-link></b-dropdown-item>
                    <b-dropdown-item class="text"><router-link to='/login'><i style="color: #000000" class="icofont-logout"></i> Logout</router-link></b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>

    </b-navbar>
</template>

<script>
export default {
    name: 'Topbar',

}
</script>

<style>
    
</style>

<style scoped src="../assets/css/Topbar.css"></style>