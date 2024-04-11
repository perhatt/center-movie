<script setup>
  import { ref, onMounted, onBeforeUnmount } from "vue";
  import Button from "./Button.vue";
  const videoSource = ref(
    "https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4",
  );
  const playing = ref(false);
  const currentTime = ref("00:00");
  const duration = ref("00:00");
  const progress = ref(0);
  const isControl = ref(false);

  const videoPlayer = ref(null);

  const dblclick = () => {
    if (playing.value) {
      videoPlayer.value.pause();
      playing.value = false;
    } else {
      videoPlayer.value.play();
      playing.value = true;
    }
  };

  const playPause = () => {
    if (videoPlayer.value.paused) {
      videoPlayer.value.play();
      playing.value = true;
    } else {
      videoPlayer.value.pause();
      playing.value = false;
    }
  };

  const onLoadedMetadata = () => {
    duration.value = videoPlayer.value.duration;
    //把duration 改为 00:00 形式
    var minutes = Math.floor(duration.value / 60);
    var seconds = Math.floor(duration.value % 60);
    duration.value =
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");
  };

  const onPlay = () => {
    playing.value = true;
    updateTime();
  };

  const onPause = () => {
    playing.value = false;
  };

  const onEnded = () => {
    playing.value = false;
    currentTime.value = 0;
    progress.value = 0;
  };

  const updateTime = () => {
    if (playing.value) {
      currentTime.value = videoPlayer.value.currentTime;
      //把currentTime 改为 00:00 形式
      var minutes = Math.floor(currentTime.value / 60);
      var seconds = Math.floor(currentTime.value % 60);
      currentTime.value =
        minutes.toString().padStart(2, "0") +
        ":" +
        seconds.toString().padStart(2, "0");

      // 更新进度条
      progress.value = Math.round(
        (videoPlayer.value.currentTime / videoPlayer.value.duration) * 100,
      );
      requestAnimationFrame(updateTime);
    }
  };

  onMounted(() => {
    updateTime();
  });
  onBeforeUnmount(() => {
    if (playing.value) {
      videoPlayer.value.pause();
    }
  });
  let timeInterval = null;
  const interval = () => {
    timeInterval = setTimeout(() => {
      isControl.value = false;
    }, 3000);
  };
  const mouseInArea = () => {
    isControl.value = true;
    interval();
  };
  const mouseOutArea = () => {
    isControl.value = false;
    clearTimeout(timeInterval);
  };
  const mousemove = () => {
    isControl.value = true;
  };
</script>
<template>
  <div
    class="w-full h-full flex flex-col"
    @mouseenter="mouseInArea"
    @mouseleave="mouseOutArea"
    @mousemove="mousemove"
  >
    <div class="flex flex-1 items-center justify-center relative">
      <video
        ref="videoPlayer"
        :src="videoSource"
        @loadedmetadata="onLoadedMetadata"
        @play="onPlay"
        @pause="onPause"
        @ended="onEnded"
        @dblclick="dblclick"
        class="w-full bg-green-300 -mt-6"
      ></video>
    </div>
    <div
      :class="isControl ? 'bottom-0' : ' -bottom-9'"
      class="absolute left-0 justify-between items-center text-white w-full h-10 flex flex-col duration-75 bg-[var(--bg-color)]"
    >
      <div class="w-full h-1 bg-white/10 cursor-pointer">
        <div :style="{ width: progress + '%' }" class="h-1 bg-red-400"></div>
      </div>
      <div class="w-full h-9">
        <Button :name="X" @click="playPause"></Button>
        {{ currentTime }} - {{ duration }}
      </div>
    </div>
  </div>
</template>
