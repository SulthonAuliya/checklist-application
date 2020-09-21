<template>
    <div class="login container">
        <div class="card card-login">
            <div class="text-center">
                <h1>Login</h1>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <form @submit.prevent="login">
                        <div class="row">
                            <div class="col-sm-12">
                                <input type="text" class="form-control" required v-model="username" placeholder="Username">
                            </div>
                            <div class="col-sm-12">
                                <input type="password" class="form-control" placeholder="Password" required v-model="password">
                            </div>
                            <div class="col-sm-12">
                                <button type="submit">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login(){
            
        }
    }
}
</script>