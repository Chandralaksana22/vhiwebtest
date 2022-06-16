<template>
    <div class="mt-5">
    <div class="d-flex justify-content-between mt-5">
      <h4>Detail User</h4>
      <b-button size="sm" v-on:click="logout" type="logout" class="btn btn-warning text-white">Logout</b-button>
    </div>
    <div class="d-flex justify-content-center">
    <div class="card shadow" style="width: 18rem;">
        <img :src="users.data.avatar" class="card-img-top" alt="data.avatar">
        <div class="card-body">
            <h5 class="card-title">{{users.data.first_name}} {{users.data.last_name}}</h5>
            <p class="card-text">{{users.support.text}}</p>
            <p class="card-text"><small class="text-muted">{{users.data.email}}</small></p>
            <div class=" d-flex justify-content-center"><router-link to="/user"><button type="button" class="btn btn-danger">Kembali</button></router-link></div>
        </div>
    </div>
    </div>
    </div>
</template>
<script>
import axios from "axios"

export default{
    name: 'UserDetailPage',
    data() {
      return {
       users:[]
      };
    },
    mounted() {
    axios.get('https://reqres.in/api/users/'+ this.$route.params.id)
    .then(response => {
        this.users = response.data;
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
      let user= localStorage.getItem('userLogin');
      if(!user){
        this.$router.push({name:"LoginPage"})
      }
    },
    methods: {
    logout()
    {
      localStorage.clear();
      this.$router.push({name:"LoginPage"})
    }
    }
}
</script>

