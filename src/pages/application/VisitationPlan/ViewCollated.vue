<template>
    <div>
      <div class="form-main">
        <VeiwCollatedPlan/>
      </div>
    </div>
  </template>
  
  <script>
  import VeiwCollatedPlan from "../../../components/VisitationPlan/VeiwCollatedPlan.vue";
  import { defineComponent } from "vue";
  
  export default defineComponent({
    // name: "RecordListPage",
  
    components: {
        VeiwCollatedPlan
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
  
  