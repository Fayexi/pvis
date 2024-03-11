<template>
  <div>
    <div class="form-main">
      <q-card>
        <q-card-section class="bg-amber-7">
          <div class="text-h6">
            <q-icon name="build" size="sm" />
            <span class="card-header-label">
              Monitoring Tools Used
            </span>
          </div>
          <!-- <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%); z-index: 100" v-if="['FOCAL'].includes(userRole)">
            <q-btn fab icon="add" color="green-5" @click="onCreatePod"/>
          </div> -->
        </q-card-section>

        <q-card-section style="padding-top: 0; padding-bottom: 0">
          <!-- <q-separator /> -->
        </q-card-section>

        <!-- <q-separator /> -->
        <q-card-section>
          <div class="row q-col-gutter-md">
            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
              <q-input
                bottom-slots
                label="Search"
                v-model="search"
                v-uppercase
                @keypress.enter="onSearch('search')"
                dense
              >
                <template v-slot:append>
                  <q-btn
                    icon="search"
                    color="primary"
                    flat
                    round
                    @click="onSearch('search')"
                  >
                    <q-tooltip>Click to search</q-tooltip>
                  </q-btn>

                  <q-btn
                    icon="autorenew"
                    color="red"
                    flat
                    round
                    @click="onRefresh"
                  >
                    <q-tooltip>Click to refresh</q-tooltip>
                  </q-btn>
                </template>
              </q-input>
            </div>
          </div>
          <div>
            <q-table
              title=""
              :rows="tblToolsUsedRows"
              :columns="tblToolsUsedColumns"
              row-key="name"
              v-model:pagination="pagination"
              :rows-per-page-options="rowPerPageOptions"
              :loading="fetchLoading"
              @request="onFetchData"
            >
              <template v-slot:header="props">
                <q-tr :props="props" style="margin-top: 10px">
                  <q-th v-for="col in props.cols" :key="col.name" :props="props">
                    {{ col.label }}
                  </q-th>
                </q-tr>
              </template>

              <template v-slot:body="props">
                <q-tr :props="props" class="hoverable">
                  <q-td
                    v-for="col in props.cols"
                    :key="col.name"
                    :props="props"
                    class="text-wrap-normal"
                  >
                  
                    {{ col.name === 'action' ? '' : col.value }}

                    <div 
                      style="min-width: 92px;padding: 0;" 
                      v-if="col.name === 'action'"
                    >
                      <q-btn
                        icon="open_in_new"
                        flat
                        color="primary"
                        size="sm"
                        label="View"
                        @click="onView(props.row)"
                      />
                    </div>
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
  
</template>

<script>
import { ref } from 'vue'
import { MONITORING_TOOLS_TABLE_COLUMNS } from "src/utils/table-columns/monitoring-tools-table";

export default {
    data: () => ({
      userRole: localStorage.getItem("role"),
      tblToolsUsedRows: [
        {
          date_visited: "March 3, 2024", 
          created_by: "Juan Santiago",
          tool_used: "Monitoring Tool for Jails and Prison Facilities",
          gender: "Female",
          action: ""
        },
        {
          date_visited: "March 5, 2024", 
          created_by: "Juan Santiago",
          tool_used: "Interview Tool for PDL - Jails and Prison  Facilities",
          gender: "Male",
          action: ""
        },
        {
          date_visited: "March 3, 2024", 
          created_by: "Juan Santiago",
          tool_used: "Interview Tool for PDL - PNP, PDEA  and other Detention  Facilities",
          gender: "Female",
          action: ""
        }
      ], 
      tblToolsUsedColumns: [
        ...MONITORING_TOOLS_TABLE_COLUMNS
      ], 
    }),

    computed: {
      
    },

    watch: {
      
    },
    
    methods: {
      async initApp() {
        
      }, 

      searchTools(){
        console.log(this.monitoringTools.code);
        let toolCode = this.monitoringTools.code;
        this.showPdf = true;
        if(this.genderTools == 'Male'){
          if(toolCode == 1){
            this.pdfSrc = 'src/assets/monitoring_tools/male/Annex6.pdf';
          }else if(toolCode == 2){
            this.pdfSrc = 'src/assets/monitoring_tools/male/Annex8.pdf';
          }else if(toolCode == 3){
            this.pdfSrc = 'src/assets/monitoring_tools/male/Annex7.pdf';
          }else if(toolCode == 4){
            this.pdfSrc = 'src/assets/monitoring_tools/male/Annex9.pdf';
          }else if(toolCode == 5){
            this.pdfSrc = 'src/assets/monitoring_tools/male/Annex2.pdf';
          }else if(toolCode == 6){
            this.pdfSrc = 'src/assets/monitoring_tools/male/Annex3.pdf';
          }else if(toolCode == 7){
            this.pdfSrc = 'src/assets/monitoring_tools/male/Mental Health Facility Monitoring Tool.pdf';
          }else if(toolCode == 8){
            this.pdfSrc = 'src/assets/monitoring_tools/male/Service User Profile Interview Form_Revised.pdf';
          }
        }else{
          if(toolCode == 1){
            this.pdfSrc = 'src/assets/monitoring_tools/female/Annex6.pdf';
          }else if(toolCode == 2){
            this.pdfSrc = 'src/assets/monitoring_tools/female/Annex8.pdf';
          }else if(toolCode == 3){
            this.pdfSrc = 'src/assets/monitoring_tools/female/Annex7.pdf';
          }else if(toolCode == 4){
            this.pdfSrc = 'src/assets/monitoring_tools/female/Annex9.pdf';
          }else if(toolCode == 5){
            this.pdfSrc = 'src/assets/monitoring_tools/female/Annex2.pdf';
          }else if(toolCode == 6){
            this.pdfSrc = 'src/assets/monitoring_tools/female/Annex3.pdf';
          }else if(toolCode == 7){
            this.pdfSrc = 'src/assets/monitoring_tools/female/Mental Health Facility Monitoring Tool.pdf';
          }else if(toolCode == 8){
            this.pdfSrc = 'src/assets/monitoring_tools/female/Service User Profile Interview Form_Revised.pdf';
          }
        }
      }, 

      onView(){
        this.$router.push({
          name: "view-monitoring-tools-used", 
        });
      }
    },

    mounted() {
      this.initApp();
    },
}
</script>
<style>
  .text-wrap-normal {
      white-space: normal;
      word-wrap: break-word;
    }
</style>