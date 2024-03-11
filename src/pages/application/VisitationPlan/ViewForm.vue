<template>
    <div>
      <div class="form-main">
        <ViewVisitationPlan/>
      </div>
    </div>
  </template>
  
  <script>
  import ViewVisitationPlan from "../../../components/VisitationPlan/ViewVisitationPlan.vue";
  import { defineComponent } from "vue";
  
  export default defineComponent({
    // name: "RecordListPage",
  
    components: {
        ViewVisitationPlan
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
  
  