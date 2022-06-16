<template>
  <body>
    <!--Row Start-->
    <div class="row mt-5" id="app">
      <!--Col Image-->
      <div class="col-12 col-md-6">
        <div class="left-column text-center d-flex justify-content-center pe-0">
          <img id="img-fluid" class="h-auto mw-100" src="https://i.postimg.cc/sXHMtKP9/Online-Doctor-rafiki.png" alt="" />
        </div>
      </div>
      <!--Col Form-->
      <div class="col-12 col-md-6">
        <div class="container p-5">
          <h4 class="text-secondary"><strong>Selamat Datang Kembali</strong></h4>
          <h6 class="text-secondary">Silakan masuk meggunakan akun Anda.</h6>
          <form class="mt-5" @submit.prevent="submit">
            <div class="mb-3">
              <label class="form-label">Alamat Email</label>
              <input type="email" class="form-control" v-model="login.email" aria-describedby="emailHelp" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Kata Sandi</label>
              <input type="password" class="form-control" v-model="login.password" >
            </div>
            <button type="submit" class="btn btn-info text-white w-100">Submit</button>
             <div v-if="showError" id="error" class="mt-3">
                <b-alert variant="danger" show>Email atau Kata Sandi Salah</b-alert>
              </div>
          </form>
        </div>
      </div>
    </div>
    <!--Row End-->
  </body>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginPage',
    data() {
      return {
       login:{
        email: "",
        password: "",
       },
        showError: false
      };
    },
    methods:{
      async submit() {
        try {
          let response = await axios.post('https://reqres.in/api/login',this.login);
          console.log(response);
          if (response.status==200){
            localStorage.setItem("userLogin",JSON.stringify(response.data))
            this.$router.push({name:"user"})
            this.showError = false
          } 
        } catch (error) {
          console.error(error);
          this.showError = true
        }
      }
    },
    mounted(){
      let user=localStorage.getItem('userLogin');
      if(user){
        this.$router.push({name:"user"})
      }
    }
}
</script>
