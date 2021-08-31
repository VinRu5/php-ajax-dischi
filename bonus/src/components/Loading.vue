<template>
    <div class="loading">Loading...</div>
</template>

<script>
export default {
    name: 'Loading',

}
</script>

<style lang="scss" scoped>
@import '../style/_colors.scss';

.loading {
    color: #fff;
    font-size: 28px;
    font-weight: bold;
    background-color: $back-color;
    text-align: center;
}

</style>