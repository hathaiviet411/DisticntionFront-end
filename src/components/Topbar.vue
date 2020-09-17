<template>
    <div>
        <!-- New -->
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#" v-on:click.prevent.stop="$emit('toggle')">
                <i class="icofont-gears"></i>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav id="text-educhat">
                    <span>EduManagementSystem - English</span> 
                </b-navbar-nav>

                <div class="right">
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                            <b-button size="sm" class="my-2 my-sm-0 btn btn-warning" type="submit">Search</b-button>
                        </b-nav-form>

                        <b-nav-item-dropdown text="Lang" right>
                            <!-- Using 'button-content' slot -->
                            <template v-slot:button-content>
                                <i class="icofont-earth"></i>                        
                            </template>
                            <b-dropdown-item href="#">EN</b-dropdown-item>
                            <b-dropdown-item href="#">ES</b-dropdown-item>
                            <b-dropdown-item href="#">RU</b-dropdown-item>
                            <b-dropdown-item href="#">FA</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template v-slot:button-content>
                                <i class="icofont-ui-user"></i>
                            </template>
                            <b-dropdown-item class="text"><router-link to='/EduManagementSystem/setting'><i class="icofont-settings-alt" style="color: #000000"></i> Setting</router-link></b-dropdown-item>
                            <b-dropdown-item class="text"><router-link to='/login'><i style="color: #000000" class="icofont-logout"></i> Logout</router-link></b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </div>
            </b-collapse>
        </b-navbar>
        <!-- -------------------------------------------------------------------------------------------------------- -->
    </div>
</template>

<script>
export default {
    name: 'Topbar',

}
</script>

<style>
    
</style>

<style scoped src="../assets/css/Topbar.css"></style>