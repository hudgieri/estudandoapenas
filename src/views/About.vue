<template>
    <div>
        <span>Conversor de Dolar para Real.</span>
        <form class="form-inline">
            <div class="form-group mx-sm-3 mb-2">
                <label class="mr-2">USD</label>
                <input class="form-control" v-model="value" placeholder="Insira o valor">
            </div>
            <button type="submit" class="btn btn-primary mb-2" @click.prevent="converter()">Converter</button>
        </form>
        <form class="form-inline">
            <div class="form-group mx-sm-3 mb-2">
                O valor convertido em real é : R$ {{result}}.
            </div>
        </form>
    </div>
</template>
<script>




    import axios from 'axios'

    export default {
        data() {
            return {
                info: null,
                value: 0,
                value_to: '0',
                result: '0',
                url: '',
                key: 'a7294ef1bb74ffa30ccd',
                type: 'USD_BRL'
            }
        },
        mounted() {
            axios
                .get(`https://free.currconv.com/api/v7/convert?q=${this.type}&compact=ultra&apiKey=${this.key}`)
                .then(response => console.log(response))
                .catch(error => {
                    console.log()
                })
        },
        methods: {


            converter() {
                debugger
                var result = this.value * this.value_to

                var result = result.toString()
                console.log(result)

                var split = result.split(".");

                console.log(split)
                // this.result = result.substring(0, this.validValue(split[0]))

                this.result = split[0] + '.' + split[1].substring(0, this.validValue(split[0]))
            },

            validValue(value) {
                console.log(value.length)
                debugger
                if (value.length == 1) {
                    console.log(value.length)
                    return 2
                }
                if (value.length == 2) {
                    console.log(5)
                    return 2
                }
                if (value.length >= 3) {
                    return 3
                }
            }
        }
    }
</script>
