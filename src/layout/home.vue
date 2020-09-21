<template>
    <div class="home container" :style="{ backgroundColor: backgroundcolor }" id="wrapper">
        <div class="title text-center">
            <h1>Checklist Application</h1>
        </div>
        <div class="card">
            <div class="row">
                <div class="col-sm-12">
                    <div class="list" v-for="(lis) in list.data" :key="lis.id">
                        <button class="btn dropdown-togle" type="button" id="dropdown-title" data-togle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{lis.name}}
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdown-title" v-for="(item) in list.data.items" :key="item.id">
                            <a href="#" class="dropdown-item">{{item.name}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            list : {},
            AuthStr: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W119.i2OVQdxr08dmIqwP7cWOJk5Ye4fySFUqofl-w6FKbm4EwXTStfm0u-sGhDvDVUqNG8Cc7STtUJlawVAP057Jlg'
        }
    },
    mounted(){
        let uri = 'http://18.139.50.74:8080/checklist';
        axios.get(uri, { 'headers': { 'Authorization': this.AuthStr }} ).then(response => {
            this.list = response.data;
        }).catch( function (error){
            console.log(error);
        });

        

        
    }
}
</script>