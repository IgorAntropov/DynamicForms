import {createRouter, createWebHistory} from 'vue-router';
import ProfileForm from "@/components/profileForm";
import FormsList from "@/components/formsList/forms";

const routes = [
    {
        path: '/list',
        name: 'Forms list',
        component: FormsList,
    },
    {
        path: '/profile-builder',
        name: 'Profile builder',
        component: ProfileForm,
    },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = `Dynamic forms`;
    next();
});

export default router
