import {createRouter, createWebHistory} from 'vue-router';
import FormBuilder from "@/components/formBuilder";
import FormsList from "@/components/forms";

const routes = [
    {
        path: '/list',
        name: 'Forms list',
        component: FormsList,
    },
    {
        path: '/builder',
        name: 'Forms builder',
        component: FormBuilder,
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
