<template>
    <div>
      <div class="form-main">
        <ViewVisitationReportForm/>
      </div>
    </div>
  </template>
  
  <script>
  import ViewVisitationReportForm from "src/components/VisitationReport/ViewVisitationReportForm.vue";
  import { defineComponent } from "vue";
  
  export default defineComponent({
    // name: "RecordListPage",
  
    components: {
        ViewVisitationReportForm
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
  
  