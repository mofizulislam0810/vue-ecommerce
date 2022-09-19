<template lang="">
    <div class="alert" v-show="isActive">
        {{text}}
    </div>
</template>
<script>
export default {
    name: "Toast",
    props: ["show", "text"],
    data() {
        return {
            isActive: !!this.show,
            activeTimeout: {}
        };
    },
    mounted() {
        this.setTimeout();
    },
    watch: {
        show(newVal) {
            this.isActive = !!newVal;
        },
        isActive(newVal) {
            if (this.show !== !!newVal) {
                this.$emit("hide-toast", newVal);
            }
            this.setTimeout();
        }
    },
    methods: {
        setTimeout() {
            clearTimeout(this.activeTimeout);
            if (this.isActive) {
                this.activeTimeout = setTimeout(() => {
                    this.isActive = false
                }, 2000)
            }
        }
    }
}
</script>
<style scoped>
.alert {
    width: 20%;
    font-size: "12px";
    background-color: rgba(0, 0, 0, 0.7);
    text-align: center;
    color: white;
    position: fixed;
    bottom: 0;
    left: 100%;
    transform: translateX(-100%);

}
</style>