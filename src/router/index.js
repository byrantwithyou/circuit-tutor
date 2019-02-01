import Vue from "vue";
import Router from "vue-router";
import condition from "@/components/condition";
import instruction from "@/components/instruction";
import notice from "@/components/notice";
import allstudent from "@/components/AllStudent";
import goodstudent from "@/components/GoodStudent";
import poorstudent from "@/components/PoorStudent";

Vue.use(Router);
const routes = [
    {   
        path: "/",
        component: condition
    },
    {
        path: "/instruct",
        component: instruction
    },
    {
        path: "/notice",
        component: notice
    },
    {
        path: "/all",
        component: allstudent
    },
    {
        path: "/good",
        component: goodstudent
    },
    {
        path: "/poor",
        component: poorstudent
    }
];

export default new Router({
    routes
});