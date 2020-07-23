<template>

    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <div class="card">
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp">
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with
                                        anyone else.</small>
                                </div>
                                <div>
                                    <label>Name</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>
                            </form>

                            <form>
                                <div>
                                    <label>Data de nascimento</label>
                                    <b-form-datepicker placeholder="Selecione uma data"
                                                       v-model="value"
                                                       :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                                       class="mb-2"></b-form-datepicker>
                                </div>
                            </form>
                            <button type="submit" class="btn btn-primary mt-4">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>


</template>

<script>
    export default {
        data() {
            return {
                value: ''
            }
        }

    }

</script>

<style>


</style>