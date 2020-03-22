<template>
    <div id="app" class="flex-center position-ref full-height">
        <router-view/>
    </div>
</template>

<style>
    html, body {
        background-color: #F7F6F3;
        color: #636b6f;
        font-family: 'Nunito', sans-serif;
        font-weight: 200;
        height: 100vh;
        margin: 0;
    }

    h2 {
        font-size: 32px;
    }

    .full-height {
        height: 100vh;
    }

    .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .position-ref {
        position: relative;
    }

    .content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .orange {
        background-color: #FF6B01;
    }

    .m-b-md {
        margin-bottom: 30px;
    }

    p {
        color: #FF6B01;
        font-weight: 600;
    }
</style>
