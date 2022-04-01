<template>
   <div class="container-fluid ">
            <div class="row header d-flex align-items-center border-primary   pb-end">
                <div class="d-xl-none container-none"><a href="#" @click="vazioCls = !vazioCls"><i class="bi bi-x-lg position-absolute x" ></i></a><ul class="d-flex column "> 
                    <li class="pb-0 mt-2 border-bottom  w-100 p-5 " ><a href="#"></a>
                    <li class="pb-0 border-bottom w-100 " ><a href="#" class="d-flex justify-content-between align-items-between"><span >Lançamentos</span><span><i class="bi bi-chevron-right"></i></span></a></li>
                    <li class="pb-0 border-bottom w-100" ><a href="#" class="d-flex justify-content-between align-items-between"><span >Nike & Jordan</span><span><i class="bi bi-chevron-right"></i></span></a></li>
                    <li class="pb-0 border-bottom w-100" ><a href="#" class="d-flex justify-content-between align-items-between"><span >Adidas</span><span><i class="bi bi-chevron-right"></i></span></a></li>
                    <li class="pb-0 border-bottom w-100" ><a href="#" class="d-flex justify-content-between align-items-between"><span >Puma</span><span><i class="bi bi-chevron-right"></i></span></a></li>
                    <li class="pb-0 border-bottom w-100" ><a href="#" class="d-flex justify-content-between align-items-between"><span >A Fonte</span><span><i class="bi bi-chevron-right"></i></span></a></li>
                    <li class="pb-0 border-bottom w-100" ><a href="#" class="d-flex justify-content-between align-items-between"><span >Ofertas</span><span><i class="bi bi-chevron-right"></i></span></a></li>
                    
                </ul>
            </div>
            </div>
            </div>
</template>

<script>

import '@/Css/global.css'
import '@/Css/style.css'

import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'

Vue.use (BootstrapVue)
Vue.use (BootstrapVueIcons)
export default {
    
}
</script>

<style>

.logo{
    height: 50px;
    width: 70px;
    margin-bottom: 5px;
    margin-left: 25px;
}
.form{
    margin-left: 100px;
}
.nav-bar li a {
    color: #000;
    font-weight:600;
    text-align: center;
}



ul li {
    text-align: center;
    margin-top: 20px;
}

.input{
    height: 35px;
    width: 240px;
    color: #000;
    font-weight: 500;
}
.input:focus{
    border: 0 none;
    box-shadow: 0 0 0 0;
    outline: 0;
}
.bi-search{
    margin-left: 10px;
    margin-top:5px;

}
.pd-style-c span{
    margin-bottom: 50px;
}

ul li:not(.form) {
    margin-bottom: 0px;
    transition: all 2s;
}
ul li .hover-menu{
    margin-bottom: 0;
    height: 80px;
}

ul li:not(.form):hover{
    border-bottom:solid 30px black;
    color: #0001;
transition: all 2s;
}

.none{
    display: none;
}
.form-none{
    width: 100%;
}
.slide-text{
    background-color: rgb(224, 224, 224);
    transition: 1s;
    border:none;
    height: 3.5em;
}
.slide-text a , .slide p , .slide span {
    color: black;

}
.slide-text span{
    font-weight: 800;
    text-transform: uppercase;
    font-size: 14px;
}
.slide-text a {
    font-weight: 1;
    text-decoration: underline;
}
.text-car{
    font-size: 12px;
    letter-spacing: 1px;
    text-align: center;
}
.nav-br{
    position: fixed;
}


</style>