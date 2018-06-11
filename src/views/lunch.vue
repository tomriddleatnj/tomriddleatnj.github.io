<template>
    <div>
        <div class="container text-center">
            <img class="img-fluid img-thumbnail" src="/assets/images/lunch/shit.jpg" v-show="hasShit">
            <h1>&nbsp;{{ food }}</h1>
            <button type="button" @click="randomFood" class="btn btn-outline-success" :disabled="btnDisabled">中午吃什么?</button>
        </div>
    </div>
</template>

<script>
    const FOODS = [
        '黄焖鸡', '螺狮粉', '炒饭', '便当饭', '镇江锅盖面', '沙拉', '粥', '屎'
    ]
    export default {
        data() {
            return {
                food: ' ',
                btnDisabled: false
            }
        },
        computed: {
            hasShit() {
                return this.food.indexOf('屎') >= 0 || this.food.indexOf('螺狮粉') >= 0
            }
        },
        methods: {
            async randomFood() {
                this.btnDisabled = true
                try {
                    // let {data} = await axios({
                    //     method: 'get',
                    //     url: BACKEND_URL + 'services/v1/randomfood'
                    // })
                    const index = Math.floor(Math.random() * FOODS.length)
                    this.food = FOODS[index]
                } catch (e) {
                    console.log(e)
                } finally {
                    this.btnDisabled = false
                }
            }
        }
    }
</script>