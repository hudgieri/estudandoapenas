<template>
    <div>
        <div>
            <h1>Cadastro</h1>
            <h1>numero de usuarios: {{users.length}}</h1>
        </div>

        <div>

            <container class="caixa">
                <form>
                    <label>Nome</label>
                    <input style="min-width: 30px" v-model="user.name" type="text">
                    <br>

                    <label>Senha</label>
                    <input style="min-width: 30px" v-model="user.password" type="password">
                    <br>

                    <label>Idade</label>
                    <input style="min-width: 30px" v-model="user.age" type="text" maxlength="3">
                    <br>

                    <button class="oi" @click.prevent="cadastrar">Cadastrar usuario</button>
                </form>
            </container>

        </div>
        <div class="preencher"><br>
            <container class="lista">
                <button @click.prevent="gerarfalsousuario">Gerar Usuario</button>
                <table>
                    <thead>
                    <tr>
                        <th>indice</th>
                        <th>Nome</th>
                        <th>Senha</th>
                        <th>Idade</th>
                        <th>Ação</th>
                    </tr>

                    </thead>
                    <tbody>
                    <tr v-for="item, index in users" v-if="userupdate.indice != index">
                        <th>{{index}}</th>
                        <th>{{item.name}}</th>
                        <th>{{item.password}}</th>
                        <th>{{item.age}}</th>
                        <th>
                            <button @click="deletanca(index)">Removança</button>
                            <button @click="atualizar(index)">atualizanca</button>
                        </th>
                    </tr>

                    <tr v-if="userupdate.indice != null">
                        <th></th>
                        <th><input v-model="userupdate.name"></th>
                        <th><input v-model="userupdate.password"></th>
                        <th><input v-model="userupdate.age" maxlength="3"></th>
                        <th>
                            <button @click="atualizanca()">atualizanca</button>
                        </th>
                    </tr>
                    </tbody>
                </table>
            </container>
        </div>


    </div>
</template>

<script>

    const usuarios = []

    export default {
        data() {
            return {
                user: {
                    name: null,
                    password: null,
                    age: null

                },
                userupdate: {
                    indice: null,
                    name: null,
                    password: null,
                    age: null
                },

                users: usuarios,
            }
        },
        methods: {
            cadastrar() {
                //! diferente
                if (!this.user.name || !this.user.password || !this.user.age) {
                    return alert(`dados invalidos`)
                }
                //push serve para inserir um objeto no array
                if (this.users.push(this.user)) {

                    this.user = {}
                    return alert(`Cadastro efetuado com sucesso`)

                } else {
                    return alert(`O cadastro nao foi efetuado`)
                }
            },
            deletanca(indice) {
                if (this.users[indice]) {
                    this.users.splice(indice, 1)
                }
            },
            atualizar(indice) {
                this.userupdate = {
                    indice: indice,
                    name: this.users[indice].name,
                    password: this.users[indice].password,
                    age: this.users[indice].age
                }
            },
            atualizanca() {
                this.users[this.userupdate.indice] = this.userupdate
                this.userupdate = {}
            },
            gerarfalsousuario() {

                var i = 10

                for (var b = 0; b < i; b++) {
                    var user = {
                        name: 'gabriel',
                        password: '123424',
                        age: b
                    }
                    this.users.push(user)
                }

            }
        }
    }

</script>

<style>

    .caixa input {
        margin-bottom: 10px;
    }

    .caixa button {
        margin-top: 8px;
        margin-left: 30px;
    }

    .lista table {
        margin: auto;
        width: 100%;
    }

    table, th, td {
        border: 1px;
    }

</style>