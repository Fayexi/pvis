<template>
  <div>
    <div class="form-main">
      <q-card>
        <q-card-section class="bg-amber-7">
          <div class="text-h6">
            <q-icon name="build" size="sm" />
            <span class="card-header-label">
              View Monitoring Tools
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
          <!-- <div class="row q-col-gutter-md">
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <q-select
                dense
                outlined
                input-debounce="0"
                :options="genderMoniToolOptions"
                v-model="genderTools"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-italic text-grey">
                      No data available
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>
            <div class="col-md-7 col-sm-7 col-xs-12 q-pa-md">
              <q-select
                dense
                outlined
                input-debounce="0"
                :options="moniToolsOptions"
                v-model="monitoringTools"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-italic text-grey">
                      No data available
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-12 q-pa-md">
              <q-btn
                round
                color="blue"
                icon="search"
                @click="searchTools()"
              />
            </div>
          </div> -->
          <div>
            <div>
              <iframe src="src/assets/monitoring_tools/male/Annex6.pdf" type="application/pdf" height="500px" :width="'100%'" ></iframe>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
  
</template>

<script>
import { ref } from 'vue'
import { VISITATION_REPORT_TABLE_COLUMNS } from "src/utils/table-columns/visitation-report-table";

export default {
    data: () => ({
      userRole: localStorage.getItem("role"),
      genderTools: null, 
      monitoringTools: null, 
      genderMoniToolOptions: [
        "Male", "Female"
      ], 
      moniToolsOptions: [
        { label: "Monitoring Tool for Jails and Prison Facilities", code: '1'}, 
        { label: "Interview Tool for PDL - Jails and Prison  Facilities", code: '2'}, 
        { label: "Monitoring Tool for PNP, PDEA, and  other  Detention Facilities", code: '3'}, 
        { label: "Interview Tool for PDL - PNP, PDEA  and other Detention  Facilities", code: '4'}, 
        { label: "Monitoring Tool for Child-Caring  Facilities", code: '5'}, 
        { label: "FGD Tool for Children Deprived of  their Liberty (CDL)", code: '6'}, 
        { label: "Monitoring Tool for Mental Health Facility", code: '7'}, 
        { label: "Service User Interview Form", code: '8'}, 
      ], 
      showPdf: false, 
      pdfSrc: '', 
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