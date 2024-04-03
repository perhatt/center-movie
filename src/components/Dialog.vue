<script setup>
import Button from '@/components/Button.vue';
import {useMovieDetails} from '@/store/dialog.js'
const DetailsDialog = useMovieDetails()
</script>
<template>
    <div class="w-full h-full z-50 fixed top-0 left-0 flex flex-col justify-center items-center bg-[#1c1814]/60 duration-100 origin-center"
    :class="DetailsDialog.isDetailsDialog?'scale-100':'scale-0  rounded-full'">
        <div class=" w-2/3 h-2/3 bg-red-200 rounded-xl "></div>
        <div class="w-2/3 h-14  flex items-center justify-center">
            <div class="size-12 rounded-full bg-[var(--main-color)] flex items-center justify-center cursor-pointer" @click="DetailsDialog.isDetailsDialog=false">
                <Icon name="X" stroke-width="2.5" class=" text-white"></Icon>
            </div>
        </div>
    </div>
</template>