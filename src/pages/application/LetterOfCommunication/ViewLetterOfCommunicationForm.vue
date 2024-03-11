<template>
  <div>
    <div class="form-main">
      <ViewLetterOfCommunicationForm/>
    </div>
  </div>
</template>

<script>
import ViewLetterOfCommunicationForm from "../../../components/LetterOfCommunication/ViewLetterOfCommunicationForm.vue";
import { defineComponent } from "vue";

export default defineComponent({
  // name: "RecordListPage",

  components: {
      ViewLetterOfCommunicationForm
  },

  data: () => ({
    search: "",
  }),

  computed: {

  },

  methods: {
    initApp() {
      //
    },
  },

  mounted() {
    this.initApp();
  },
});
</script>

