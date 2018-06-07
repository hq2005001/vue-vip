<template>
    <section class="first_list">
        <div class="wrap">
            <ul class="con">
                <li class="on">
                    <a href="javascript:void(0);">{{title}}</a>
                </li>
                <li class="on" v-for="item, index in items" :key="index" >
                    <router-link to="{name}"></router-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        name: "nav-bar.vue",
        props: [
            items,
            title,
        ]
    }
</script>
