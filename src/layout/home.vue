<template>
    <div class="home container" >
        <div class="title text-center">
            <h1>Checklist Application</h1>
        </div>
        <div class="card">
            <div class="row">
                <!-- form add list -->
                <div class="col-sm-12">
                    <form @submit.prevent="createList">
                        <div class="row">
                            <div class="form-group col-sm-12 col-md-8">
                                <input type="text" placeholder="List Name" class="form-control" id="name" v-model="listAdd.name">
                            </div>
                            <div class=" col-sm-12 col-md-4">
                                <button type="submit" class="btn btn-success">Add List</button>
                            </div>
                        </div>
                    </form>
                </div>
                <!-- end of form add list -->
                <!-- list section -->
                <div class="col-sm-12">
                    <div class="list" v-for="(lis) in list.data" :key="lis.id">
                        <div class="title-item">
                            <div class="row">
                                <div class="col-sm-6">
                                    <h4><b>{{lis.name}}</b></h4>
                                </div>
                                <div class="col-sm-6 action">
                                    <button class="btn btn-info add-item">+</button>
                                    <button class="btn btn-danger ml-3"  @click="deleteList(lis.id)">-</button>
                                </div>
                            </div>
                        </div>
                        <div class="list-item container" v-for="(item) in lis.items" :key="item.id">
                            <h5 href="#">{{item.name}}</h5>
                        </div>
                    </div>
                </div>
                <!-- end of list section -->
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            list : [],
            listAdd: {},
            listTampung: {},
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
    },
    methods: {
        // fungsi add list
        createList(e){
            if (this.$data.listAdd.name != null ) {
                    this.$swal.fire({
                        title: 'Success',
                        text: "List created successfully",
                        icon: 'success',
                        timer: 1000
                    })
                    let uri = 'http://18.139.50.74:8080/checklist';
                    axios.post(uri, this.listAdd,{ 
                        'headers': {
                            'Content-Type': 'application/json',
                             'Authorization': this.AuthStr 
                             }
                        }).then((response) => {
                        this.$router.go({name: 'home'});
                        console.log(response)
                    });
                    return true;
                }
 
                e.preventDefault();
        },

        // fungsi delete list
        deleteList(id){
            this.$swal.fire({
                title               : 'Apakah kamu yakin?',
                text                : 'Jika kamu menghapus List ini, maka data tidak dapat dikembalikan.',
                icon                : 'warning',
                showCancelButton    :  true,
                confirmButtonText   : 'Hapus sekarang',
                cancelButtonText    : 'nggak jadi deh'
            }).then((result) => {
                if (result.value){
                    this.$swal.fire({
                        title   : 'Success',
                        text    : 'List berhasil dihapus!',
                        icon    : 'success',
                        timer   :  5000
                    });
                    let uri = 'http://18.139.50.74:8080/checklist/'+id;
                    axios.delete(uri,  { 'headers': { 'Authorization': this.AuthStr }}).then(response => {
                        this.$router.go({name: 'home'});
                        console.log(response)
                    });
                    console.log('Deleted List with id  ' +id);
                }
            })
        }
    }
}
</script>