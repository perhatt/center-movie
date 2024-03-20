<template>
  <div class="w-56 h-72 rounded-xl relative overflow-hidden group">
    <img
      src="https://picsum.photos/196/252"
      class="w-full h-full rounded-xl"
      alt=""
    />
    <div
      class="absolute top-72 lef-0 w-full h-40 bg-black/50 backdrop-blur-sm z-50 group-hover:top-32 duration-100 ease-out text-white flex flex-col px-2"
    >
      <p
        class="w-full truncate flex-wrap text-md leading-8 hover:underline cursor-pointer"
      >
        TItle namewfweffwfwefe fwefewf
      </p>
      <div class="w-full h-10 flex items-center gap-1">
        <div
          v-for="i in 3"
          :key="i"
          class="w-fit px-2 h-6 bg-white/10 rounded-xl text-xs flex items-center justify-center"
        >
          121221
        </div>
      </div>
      <p class="w-full line-clamp-4 overflow-hidden text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. dolorum?
      </p>
    </div>
    <div
      class="absolute top-0 right-0 w-fit bg-red-500 px-2 py-1 text-xs text-white rounded-bl"
    >
      高清电影
    </div>
  </div>
</template>
