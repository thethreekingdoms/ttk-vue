<template>
  <div class="app-container">
    <vue-q-art :config="config"></vue-q-art>
  </div>
</template>

<script>
import VueQArt from "vue-qart";
import qrImg from "@/assets/qr_logo/lqr_logo.png";

export default {
  name: "VabQrCode",
  components: {
    VueQArt,
  },
  props: {
    imagePath: {
      type: String,
      default: qrImg,
    },
    url: {
      type: String,
      default: "",
    },
    size: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      config: {
        value: this.url,
        imagePath: this.imagePath,
        filter: "color",
        size: this.size,
      },
    };
  },
  created() { },
  mounted() { },
  methods: {},
};
</script>
