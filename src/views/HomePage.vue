<template>
  <div class="home">
    <v-form>
      <v-file-input
        label="Select the legends"
        prepend-icon="mdi-message-text"
        append-icon="mdi-send"
        outlined
        multiple
        v-model="files"
        @click:append="processSubtitles"
      ></v-file-input>
    </v-form>

    <div class="pills">
      <PillComponent
        v-for="item in groupedWords"
        :word="item.word"
        :amount="item.amount"
        :key="item.word"
      />
    </div>
  </div>
</template>

<script>
import PillComponent from "@/components/PillComponent.vue";

export default {
  components: {
    PillComponent,
  },
  data: function () {
    return {
      files: [],
      groupedWords: [
        { word: "i", amount: 547 },
        { word: "you", amount: 478 },
        { word: "it", amount: 10 },
      ],
    };
  },
  methods: {
    processSubtitles() {
      console.log(this.files);
    },
  },
};
</script>

<style scoped>
.home {
  margin: 20px;
}
.pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
