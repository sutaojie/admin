<template>
    <el-row class="tac">
        <el-col :span="24">
            <h5>Logo</h5>
            <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    >
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1"><router-link :to="{ name: 'home' }">Home</router-link></el-menu-item>
                        <el-menu-item index="1-2"><router-link :to="{name: 'table'}">Table</router-link></el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "UserNavMenu",
    }
</script>

<style lang='scss' scoped>

</style>