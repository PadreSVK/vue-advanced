<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
    <AppLayout>
        <router-view />
    </AppLayout>
    <button @click="click">Log Warn</button>
    <button @click="clickException">Exception call</button>
</template>

<script setup>
import { AppLayout } from "@/layouts";
import logger from "@/utils/logger";
import { MyAwesomeClient } from "@/utils/decorators";

const myClient = new MyAwesomeClient()

function click() {
    logger.logWarn("asdasd")
}
function clickException() {
    myClient.exceptionCall()
}

</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
