<template>
    <div class="-mb-20">
        <div id="project" class="m-5 relative z-10 lg:m-20">
            <h2 class="text-center font-bold text-xl lg:text-4xl mb-5 lg:mb-10">
                Project
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="project in projects" :key="project.id" class="mx-auto mb-5 transition ease-in-out delay-10o0 hover:-translate-y-1 hover:scale-110 duration-300">
                    <router-link :to="{ name: 'detail' }">
                        <div class="bg-[#0096D1] rounded-md shadow">
                            <img :src="project.image" class="w-full h-48 lg:h-64 object-contain rounded-md"
                                :alt="project.name" />
                        </div>
                        <p class="text-center m-2 text-base font-medium">
                            {{ project.name }}
                        </p>
                    </router-link>
                </div>
            </div>
            <span class="flex justify-center">
                <button
                    class="inline-flex items-center gap-1 font-semibold rounded-md bg-transparent focus:bg-slate-300 border border-gray-300 hover:border-gray-400 dark:bg-transparent dark:focus:bg-slate-900 dark:border-gray-600 hover:dark:border-gray-400 shadow p-2">
                    Show More
                    <ArrowDownIcon class="w-5" />
                </button>
            </span>
        </div>
    </div>
</template>

<script setup>
    import {
        ArrowDownIcon,
    } from "@heroicons/vue/24/solid";
    const projects = [
        { id: 1, name: "lorem", image: "../../src/assets/img/work-2.png" },
        { id: 2, name: "lorem", image: "../../src/assets/img/work-2.png" },
        { id: 3, name: "lorem", image: "../../src/assets/img/work-2.png" },
        { id: 4, name: "lorem", image: "../../src/assets/img/work-2.png" },
        { id: 5, name: "lorem", image: "../../src/assets/img/work-2.png" },
        { id: 6, name: "lorem", image: "../../src/assets/img/work-2.png" },
    ];
</script>