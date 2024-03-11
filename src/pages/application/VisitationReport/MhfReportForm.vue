<template>
    <div>
      <div class="form-main">
        <MhfVisitationReportForm/>
      </div>
    </div>
  </template>
  
  <script>
  import MhfVisitationReportForm from "src/components/VisitationReport/MhfVisitationReportForm .vue";
  import { defineComponent } from "vue";
  
  export default defineComponent({
    // name: "RecordListPage",
  
    components: {
        MhfVisitationReportForm
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
  
  