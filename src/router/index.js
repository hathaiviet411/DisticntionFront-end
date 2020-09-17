import Vue from 'vue'
import VueRouter from 'vue-router'

import ManagementSystem from '../pages/Dashboard.vue'
import Login from '../pages/Login.vue'
import NotFound from '../pages/NotFound.vue'
import Overall from '../components/Overall.vue'
import Individual from '../components/Individual.vue'
import StaffList from '../components/StaffList.vue'
import TrainerList from '../components/TrainerList.vue'
import TraineeList from '../components/TraineeList.vue'
import HomePage from '../components/HomePage.vue'
import Setting from '../components/Setting.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        alias: '/ManagementSystem',
        redirect: '/Home-page',
        name: 'ManagementSystem',
        component: ManagementSystem,
        meta: {
            title: 'Dashboard - EduManagementSystem'
        },
        children: [{
                path: 'Home-page',
                name: 'HomePage',
                component: HomePage,
                meta: {
                    title: 'HomePage - EduManagementSystem'
                }
            },
            {
                path: 'overall',
                name: 'Overall',
                component: Overall,
                meta: {
                    title: 'Overall - EduManagementSystem'
                }
            },
            {
                path: 'individual',
                name: 'Individual',
                component: Individual,
                meta: {
                    title: 'Individual - EduManagementSystem'
                }
            },
            {
                path: 'Staff-list',
                name: 'StaffList',
                component: StaffList,
                meta: {
                    title: 'StaffList - EduManagementSystem'
                }
            },
            {
                path: 'Trainer-list',
                name: 'TrainerList',
                component: TrainerList,
                meta: {
                    title: 'TrainerList - EduManagementSystem'
                }
            },
            {
                path: 'Trainee-list',
                name: 'TraineeList',
                component: TraineeList,
                meta: {
                    title: 'TraineeList - EduManagementSystem'
                }
            },
            {
                path: 'setting',
                name: 'Setting',
                component: Setting,
                meta: {
                    title: 'Setting - EduManagementSystem'
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Login - EduManagementSystem'
        }
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: '404 - Page Not Found'
        }
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {

    if (to.meta.title) {
        document.title = to.meta.title;
    }

    next();

});

export default router