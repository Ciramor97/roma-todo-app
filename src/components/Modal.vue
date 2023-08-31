<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper" @click.self="onBgClose">
        <div class="modal-container" :style="styleModal">
          <div class="modal-header relative">
            <div class="flex justify-between">
              <div v-if="title" class="text-black font-semibold text-2xl">
                {{ title }}
              </div>
              <div
                v-if="showCloseIcon"
                class="w-5 cursor-pointer"
                @click="$emit('close')"
              >
                <Icon name="CloseOutline" />
              </div>
            </div>
          </div>

          <slot>
            <div class="modal-body">
              <slot>Default body</slot>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "BaseModal",
  props: {
    show: {
      type: Boolean,
    },
    title: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "500px",
    },
    padding: {
      type: String,
      default: "32px",
    },

    bgClose: {
      type: Boolean,
      default: true,
    },

    showCloseIcon: {
      type: Boolean,
      default: true,
    },
  },

  emits: ["close"],
  setup(props, ctx) {
    // const isMobile = ref(false);

    function onBgClose() {
      if (props.bgClose) {
        ctx.emit("close");
      }
    }

    const styleModal = computed(() => ({
      padding: props.padding,
    }));

    // Écoute les changements de taille de fenêtre et met à jour isMobile si nécessaire
    // window.addEventListener("resize", () => {
    //   isMobile.value = window.innerWidth <= 468;
    // });

    return {
      onBgClose,
      styleModal,
    };
  },
});
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

@media screen and (min-width: 520px) {
  .modal-container {
    margin: 0px auto;
    margin-top: 5%;
    /* margin-bottom: 15%; */
    /* padding: 32px; */
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    width: 500px;
  }
}
.modal-wrapper {
  display: block;
  /* vertical-align: middle; */
  height: 100%;
  /* overflow-y: scroll; */
}

.modal-container {
  margin: 0px auto;
  margin-top: 5%;
  /* margin-bottom: 15%; */
  /* padding: 32px; */
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
