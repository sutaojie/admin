<template>
    <el-container>
        <el-aside width="200px"><user-nav-menu></user-nav-menu></el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script>
    import UserNavMenu from '@/components/UserNavMenu'
    export default {
        name: "UserPane",
        components:{
            UserNavMenu
        },
    }
</script>

<style lang='scss' scoped>
    .el-container{
        height: 100vh;
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

</style>