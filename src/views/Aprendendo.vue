<template>

    <div>
        <div>
            <h1>Página de Cadastro</h1>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <div class="card">
                        <div class="card-body">
                            <form @submit.prevent="register()">
                                <div class="form-group">
                                    <label>E-mail (Obrigatório)</label>
                                    <input placeholder="nome@hotmail.com" type="email" class="form-control"
                                           v-model="user.email" aria-describedby="emailHelp">
                                </div>
                                <div>
                                    <label>Nome (Obrigatório)</label>
                                    <input placeholder="Inserir nome completo" type="text" class="form-control" v-model="user.name">
                                </div>
                                <div class="form-group">
                                    <label>Senha (Obrigatório)</label>
                                    <input placeholder="Inserir senha" type="password" class="form-control" v-model="user.password" maxlength="10">
                                </div>

                                <div>
                                    <label>Data de nascimento (Obrigatório)</label>
                                    <b-form-datepicker placeholder="Selecione uma data" v-model="user.birthday"
                                                       :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                                       class="mb-2 text-left"></b-form-datepicker>
                                </div>
                                <button type="submit" class="btn btn-primary mt-4">Cadastrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <container class="lista">
                <table>
                    <thead>
                        <tr>
                            <th>indice</th>
                            <th>E-mail</th>
                            <th>Nome</th>
                            <th>Senha</th>
                            <th>Data de nascimento</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in users" v-if="userupdate.indice != index">
                            <th>{{index}}</th>
                            <th>{{item.email}}</th>
                            <th>{{item.name}}</th>
                            <th>{{item.password}}</th>
                            <th>{{item.birthday}}</th>      
                            <th>
                                <button @click="erase(index)">Remover dados</button>
                                <button @click="update(index)">Atualizar dados</button>
                            </th>                      
                        </tr>
                        <tr v-if="userupdate.indice != null">
                            <th></th>
                            <th><input v-model="userupdate.email"></th>
                            <th><input v-model="userupdate.name"></th>
                            <th><input v-model="userupdate.password" maxlength="10"></th>
                            <th><input v-model="userupdate.birthday"></th>
                            <th>
                                <button @click="updatedata()">Atualizar</button>
                            </th>
                        </tr>
                    </tbody>
                </table>

            </container>
        </div>

    </div>


</template>

<script>

    export default {
        data() {
            return {
                value: '',
                users: [],
                user: {
                    email: null,
                    name: null,
                    password: null,
                    birthday: null
                },
                userupdate: {
                    indice: null,
                    email: null,
                    name: null,
                    password: null,
                    birthday: null
                }

            }
        },
        //para utilizar o método data, utilize o this para buscar o valor
        methods: {
            register() {
                if (!this.user.email || !this.user.name || !this.user.password || !this.user.birthday ){
                    return alert('Dados invalidos')
                }
                if (this.users.push(this.user)){
                    this.user = {}
                    return alert('Cadastrado com sucesso')

                }else {
                    return alert('Cadastro não foi efetuado')
                }
           },
            erase(indice) {
                if (this.users[indice]) { 
                    this.users.splice(indice, 1)
                }
            },
            update(indice) {
                this.userupdate = {
                    indice: indice,
                    email: this.users[indice].email,
                    name: this.users[indice].name,
                    password: this.users[indice].password,
                    birthday: this.users[indice].birthday
                }
            },
            updatedata() {
                this.users[this.userupdate.indice] = this.userupdate
                this.userupdate = {}
            }

        }

    }

</script>

<style>


</style>