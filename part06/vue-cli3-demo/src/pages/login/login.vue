<template lang="html">
    <div class="loginWrap">
            <h1>登录(这么好使)</h1>
            <img src="./images/qipao.jpg" style="width:130px;height:130px;" alt="">
            <div class="">
                <div class="btn">
                    你好-{{home}}
                </div>
            </div>

    </div>
</template>

<script>

import './css/main.scss';
import utils from './js/utils.js'
console.log(name);
export default {
    name:'loginPage',
    data(){
        return {
            home:utils.home
        }
    },
    mounted(){
    }
}
</script>

<style lang="css" scoped>
</style>
