<template>
    <div>
      <div class="form-main">
        <VisitationReportForm/>
      </div>
    </div>
  </template>
  
  <script>
  import VisitationReportForm from "src/components/VisitationReport/VisitationReportForm.vue";
  import { defineComponent } from "vue";
  
  export default defineComponent({
    // name: "RecordListPage",
  
    components: {
        VisitationReportForm
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
  
  