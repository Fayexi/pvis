<template>
    <div>
      <div class="form-main">
        <ViewMhfVisitationReportForm/>
      </div>
    </div>
  </template>
  
  <script>
  import ViewMhfVisitationReportForm from "src/components/VisitationReport/ViewMhfVisitationReportForm.vue";
  import { defineComponent } from "vue";
  
  export default defineComponent({
    // name: "RecordListPage",
  
    components: {
        ViewMhfVisitationReportForm
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
  
  