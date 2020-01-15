<template>
  <main class="w-full p-10 bg-teal-200">
    <h4 class="text-4xl font-bold uppercase text-teal-600">
      Tailwind
    </h4>
    <section class="flex flex-wrap pb-4">
      <h6 class="text-xl uppercase border-b-2 border-teal-600 w-full">
        Rem Calc
      </h6>
      <div class="flex flex-col w-1/4 m-4">
        <label for="tw-num">Tailwind Number</label>
        <input
          v-model="tw_num"
          type="text"
          name="tw-num"
          class="bg-transparent border-b border-teal-400 focus:border-teal-600 px-2 outline-none"
        />
      </div>
      <div class="flex flex-col w-1/4 m-4">
        <label for="tw-px">Pixels</label>
        <input
          v-model="tw_px"
          type="text"
          name="tw-px"
          class="bg-transparent border-b border-teal-400 focus:border-teal-600 px-2 outline-none"
        />
      </div>
      <div class="flex flex-col w-1/4 m-4">
        <label for="tw-rem">Rems</label>
        <input
          v-model="tw_rem"
          type="text"
          name="tw-rem"
          class="bg-transparent border-b border-teal-400 focus:border-teal-600 px-2 outline-none"
        />
      </div>
    </section>
    <section class="flex flex-wrap pb-4">
      <h6 class="text-xl uppercase border-b-2 border-teal-600 w-full">
        Tailwind list generator
      </h6>
      <div class="flex flex-col w-full">
        <button
          @click="show_table = !show_table"
          class="w-24 py-2 m-4 rounded border-b-2 border-r-2 border-gray-800 outline-none bg-teal-300 hover:bg-teal-400"
        >
          show table
        </button>
        <div v-show="show_table">
          <small>Put the numbers separated by ", "</small>
          <input v-model="tw_list" type="text" />
          <ul>
            <li v-for="(num, index) in num_list" :key="index">
              '{{ numToPx(num) }}'
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      show_table: false,
      tw_list: ''
    }
  },
  computed: {
    tw_num() {
      return 4 // this.tw_px / 4
      // 4
    },
    tw_px() {
      return this.tw_rem * 16
      // 16
    },
    tw_rem() {
      return this.tw_num / 4
      // 1
    },
    num_list() {
      return this.tw_list ? this.tw_list.split(', ') : []
    }
  },
  methods: {
    numToPx(num) {
      return num * 4
    }
  }
}
</script>
