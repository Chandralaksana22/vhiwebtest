<template>
  <div class="mt-5">
    <div class="d-flex justify-content-between mt-5">
      <h4>Daftar User</h4>
      <b-button size="sm" v-on:click="logout" type="logout" class="btn btn-warning text-white">Logout</b-button>
    </div>
    <div class="table-responsive mt-5">
      <table class="table table-borderless table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nama Depan</th>
            <th scope="col">Nama Belakang</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user, index in users" :key="user.id" >
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name}}</td>
            <td><button class="btn btn-outline-primary" @click="redirect(user.id)">Detail</button></td>
          </tr>
        </tbody>
      </table>
  </div>
  </div>
</template>
<script>
import axios from 'axios'
export default{
  name: 'LoginPage',
    data() {
      return {
       users:[]
      };
    },
    mounted() {
    axios.get('https://reqres.in/api/users?')
    .then(response => {
        this.users = response.data.data;
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
    
    methods : {
    redirect(id) {
      this.$router.push(`/user/${id}`);
      
    },
    logout()
    {
      localStorage.clear();
      this.$router.push({name:"LoginPage"})
    }
  }
}
</script>