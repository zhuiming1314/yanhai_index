import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        //存储token
        Authorization: localStorage.getItem('Authorization')? localStorage.getItem('Authorization'):''
    },
    mutations:{
        //修改token，并将token存入localstorage
        changeLogin(state, user){
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization', user.Authorization);
        },
        logout(state){
            localStorage.removeItem('Authorization');
            state.Authorization = null;
            //this.$router.push('/');
        }
    }
});

export default store;
