import Vue from "vue";
import Router from "vue-router";
import tutor from "@/components/tutor";

Vue.use(Router);
const routes = [{
    path: "/",
    component: tutor
}]

export default new Router({
    routes
});