import axios from 'axios'
import store from './store/'
import router from './router'


const instance = axios.create({
    timeout:10000,
    headers:{
        'Content-Type': "application/json;charset=utf-8"
    }
})

//http request拦截器
axios.interceptors.request.use(
    config=>{
        if(localStorage.getItem('Authorization')){
            config.headers.Authorization = localStorage.getItem('Authorization');
        }
        return config;
    },
    error=>{
        return Promise.reject(error);
    }
)
//如果前端拿到状态码为401，就清除token信息并跳转到登录页面
axios.interceptors.response.use(
    response=>{
        return response;
    },
    error=>{
        if(error.response){
            switch(error.response.status){
                case 401:
                    store.commit('logout');
            }
        }
    }
)
/*
//export default axios;
export default {
      userLogin ( data ) {
        return instance.post('/api/test.txt', data);
      },
      allUser () {
        return instance.post('/api/user');
      },
      allProduct () {
       return instance.post('/api/product')
      },
      upload (data) {
        return instance.post('/api/upload',data)
      },
      regist (data){
          return instance.post('/api/createOrUpdateUser',data)
      }
    
};*/
export default axios;
