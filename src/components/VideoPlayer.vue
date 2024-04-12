<script setup>
  import { ref, onMounted, onBeforeUnmount, onUnmounted } from "vue";
  import Button from "./Button.vue";
  const videoSource = ref(
    "https://svideo.qpic.cn//0bf2tqaaaaaa64apvvzrinpfbhgdacoaaaaa.f10003.mp4?dis_k=80f13dae109e7553932795f834fe21ac&dis_t=1712917493&play_scene=10600&auth_info=BfvqiLgWQmgdsOPyuRArThESMGUcODkzSG0pRGdDT3o7GUZHcSM=&auth_key=cfc0c03572feb8575635ad7610fc3d24",
  );
  const playing = ref(false);
  const currentTime = ref("00:00");
  const duration = ref("00:00");
  const progress = ref(0);
  const isControl = ref(false);

  const videoPlayer = ref(null);

  const playPause = () => {
    if (playing.value) {
      videoPlayer.value.pause();
      playing.value = false;
    } else {
      videoPlayer.value.play();
      playing.value = true;
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
    videoPlayer.value;
  };
  const onEnded = () => {
    playing.value = false;
    currentTime.value = "00:00";
    progress.value = 0;
    console.log("播放结束");
  };

  const updateTime = () => {
    currentTime.value = videoPlayer.value.currentTime;
    var minutes = Math.floor(currentTime.value / 60);
    var seconds = Math.floor(currentTime.value % 60);
    currentTime.value =
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");
    progress.value = Math.round(
      (videoPlayer.value.currentTime / videoPlayer.value.duration) * 100,
    );
    requestAnimationFrame(updateTime);
    document.addEventListener("leavepictureinpicture", handleLeavePiP);
  };

  onMounted(() => {
    updateTime();
  });
  onBeforeUnmount(() => {
    if (playing.value) {
      videoPlayer.value.pause();
    }
    document.removeEventListener("leavepictureinpicture", handleLeavePiP);
  });
  let mouseMoveTimeout = null;
  const handleMouseMove = () => {
    clearTimeout(mouseMoveTimeout);
    mouseMoveTimeout = setTimeout(() => {
      isControl.value = false;
    }, 3000);
    isControl.value = true;
  };
  const handleMouseLeave = () => {
    clearTimeout(mouseMoveTimeout);
    isControl.value = false;
  };

  const fullscreenElement = ref(null);
  const isFullScreen = ref(false);
  const requestFullScreen = () => {
    fullscreenElement.value.requestFullscreen();
    isFullScreen.value = true;
  };

  // 退出全屏
  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    isFullScreen.value = false;
  };
  const toggleFullScreen = () => {
    if (!isFullScreen.value) {
      requestFullScreen();
    } else {
      exitFullScreen();
    }
  };
  const handleFullScreenChange = () => {
    isFullScreen.value = document.fullscreenElement === fullscreenElement.value;
  };

  onMounted(() => {
    document.addEventListener("fullscreenchange", handleFullScreenChange);
  });

  onUnmounted(() => {
    document.removeEventListener("fullscreenchange", handleFullScreenChange);
  });

  //倍速
  const speed = ref(1);
  const handleSpeedVideo = () => {
    //点击时循环spped的值 并赋值给video的playbackRate
    speed.value = speed.value + 0.5;
    if (speed.value > 3) {
      speed.value = 0.5;
    }
    if (speed.value < 0.5) {
      speed.value = 2;
    }

    videoPlayer.value.playbackRate = speed.value;
  };
  const volume = ref(1);
  const handleVolume = (e) => {
    let target = e.target.value;
    videoPlayer.value.volume = target;
    if (target === "0") {
      isSwitching.value = true;
    } else {
      isSwitching.value = false;
    }
  };
  const isSwitching = ref(false);
  const handleMuteSwitching = () => {
    //点击按钮切换音量
    isSwitching.value = !isSwitching.value;
    if (isSwitching.value) {
      videoPlayer.value.volume = 0;
      volume.value = 0;
    } else {
      videoPlayer.value.volume = 0.5;
      volume.value = 0.5;
    }
  };
  //进度条
  const handleProgressChange = (e) => {
    const divWidth = document.getElementById("progressId").offsetWidth;
    const offsetX = e.offsetX;
    const current = offsetX / divWidth;
    videoPlayer.value.currentTime = videoPlayer.value.duration * current;
    currentTime.value = videoPlayer.value.currentTime;
    videoPlayer.value.play();
    playing.value = true;
  };
  import { message } from "ant-design-vue";
  const keydownSpeed = () => {
    videoPlayer.value.currentTime += 20;
    videoPlayer.value.play();
    playing.value = true;
  };
  document.addEventListener("keydown", function (event) {
    let code = event.code;
    switch (code) {
      case "F11":
        toggleFullScreen();
        event.preventDefault();
        event.stopPropagation();
        break;
      case "Space":
        playPause();
        break;
      case "ArrowRight":
        keydownSpeed();
      default:
        break;
    }
  });

  //画中画
  const pictureInPicture = () => {
    videoPlayer.value
      .requestPictureInPicture()
      .then(() => {
        console.log("已成功进入画中画模式");
      })
      .catch((error) => {
        console.error("进入画中画模式失败:", error);
      });
  };
  const handleLeavePiP = (event) => {
    ipcRenderer.send("video-window-show");
  };
</script>
<template>
  <div
    class="w-full h-full flex flex-col relative"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    id="video"
    ref="fullscreenElement"
  >
    <div class="flex flex-1 items-center justify-center relative">
      <video
        ref="videoPlayer"
        :src="videoSource"
        @loadedmetadata="onLoadedMetadata"
        @ended="onEnded"
        class="-mt-6 h-full w-full object-contain"
      ></video>
    </div>
    <div
      :class="isControl ? '-bottom-0' : ' -bottom-11'"
      class="absolute left-0 justify-between items-center text-white w-full h-12 flex flex-col duration-75 bg-[var(--bg-color)] select-none"
    >
      <div
        id="progressId"
        @click="handleProgressChange"
        class="w-full h-2 bg-white/10 cursor-pointer"
      >
        <div
          :style="{ width: progress + '%' }"
          :class="isControl ? 'rounded-xl ' : ''"
          class="h-2 bg-red-400 duration-75"
        ></div>
      </div>
      <div class="w-full h-10 flex items-center px-2">
        <div class="size-7 flex items-center justify-center" @click="playPause">
          <Icon
            :name="playing ? 'Pause' : 'Play'"
            class="hover:text-red-600 cursor-pointer"
            :stroke-width="3"
            :size="20"
          ></Icon>
        </div>
        <div class="size-7 ml-2 flex items-center justify-center">
          <Icon
            name="SkipForward"
            class="hover:text-red-600 cursor-pointer"
            :stroke-width="3"
            :size="20"
          ></Icon>
        </div>
        <div class="h-7 flex items-center text-sm ml-2">
          {{ currentTime }}
          -
          {{ duration }}
        </div>
        <div class="flex-1 flex items-center flex-row-reverse">
          <div
            class="size-7 flex items-center justify-center"
            @click="toggleFullScreen"
          >
            <Icon
              :name="isFullScreen ? 'Shrink' : 'Expand'"
              class="hover:text-red-600 cursor-pointer"
              :stroke-width="3"
              :size="20"
            ></Icon>
          </div>
          <!-- 画中画 -->
          <div
            class="size-7 flex items-center justify-center mr-2"
            @click="pictureInPicture"
          >
            <Icon
              name="PictureInPicture2"
              class="hover:text-red-600 cursor-pointer"
              :stroke-width="3"
              :size="20"
            ></Icon>
          </div>
          <div
            class="text-sm rounded-xl cursor-pointer w-12 flex justify-center"
            @click="handleSpeedVideo"
          >
            {{ speed }}X
          </div>
          <div class="size-7 flex items-center justify-center relative group">
            <Icon
              @click="handleMuteSwitching"
              :name="isSwitching ? 'VolumeX' : 'Volume2'"
              class="cursor-pointer"
              :stroke-width="3"
              :size="20"
            ></Icon>
            <div
              class="absolute bottom-7 -left-2 w-11 h-32 bg-black/40 rounded-md scale-0 group-hover:scale-100 transition-all duration-300 origin-bottom py-1"
            >
              <input
                @change="handleVolume"
                v-model="volume"
                type="range"
                max="1"
                min="0"
                step="0.1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  input[type="range"] {
    -webkit-appearance: slider-vertical;
    width: 100%;
    height: 100%;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    cursor: pointer;
  }
</style>
