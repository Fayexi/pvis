<template>
    <div>
      <div class="form-main">
        <q-card>
          <q-card-section class="bg-amber-7">
            <div class="text-h6">
              <q-icon name="article" size="sm" />
              <span class="card-header-label">
                View Regional POD Visitation Plan
              </span>
            </div>
          </q-card-section>
  
          <q-card-section>
            <div
              class="text-h6 text-center text-bold"
            >
              <q-stepper
                v-model="step"
                color="primary"
                animated
                alternative-labels
                horizontal
                flat
              >
                <q-step
                  :name="1"
                  title="POD Submission"
                  caption="October 1, 2024"
                  icon="check"
                  :done="step > 1"
                >
                </q-step>

                <q-step
                  :name="2"
                  title="POD Review"
                  caption="October 7, 2024"
                  icon="rate_review"
                  :done="step > 2"
                >
                </q-step>

                <q-step
                  :name="3"
                  title="POD Endorse"
                  caption="October 14, 2024"
                  icon="how_to_reg"
                  :done="step > 3"
                >
                </q-step>

                <q-step
                  :name="4"
                  title="POD Collate"
                  caption="October 21, 2024"
                  icon="list"
                  :done="step > 4"
                >
                </q-step>


                <q-step
                  :name="5"
                  title="POD Endorse by PMO"
                  caption="November 4, 2024"
                  icon="how_to_reg"
                  :done="step > 5"
                >
                </q-step>

                <q-step
                  :name="6"
                  title="POD Review by ED"
                  caption="November 11, 2024"
                  icon="rate_review"
                  :done="step > 6"
                >
                </q-step>

                <q-step
                  :name="7"
                  title="POD Approve by CHAIRPERSON"
                  caption="November 12, 2024"
                  icon="verified"
                  :done="step > 7"
                >
                </q-step>

                <q-step
                  :name="8"
                  title="Transmit by Visitation Division"
                  caption="November 14, 2024"
                  icon="send"
                  :done="step > 8"
                >
                </q-step>
              </q-stepper>
            </div>
          </q-card-section>

          <q-card-section>
            <q-table
              separator="cell"
              :title="podRegion"
              :rows="tblPodListRows"
              :columns="tblPodListCols"
              row-key="name"
              :pagination="false"
              hide-pagination
              :rows-per-page-options="[0]"
              :loading="fetchLoading"
            >
              <template v-slot:header="props">
                <q-tr :props="props" style="margin-top: 10px">
                  <q-th v-for="col in props.cols" :key="col.name" :props="props" @click="toggleSort(col.name)" :class="{ 'sortable': col.sortable }">
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
                    {{ col.value }}
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </q-card-section>
          
          <q-card-section>
            <q-card-actions>
              <div class="row col-md-12">
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <q-btn
                    label="Back"
                    icon="arrow_back"
                    color="red"
                    flat
                    @click="onBack()"
                  />
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12 text-right">
                  <div class="q-gutter-sm" v-if="podStatus != 'Endorsed'">
                    <template v-if="!['OIC', 'CHAIRPERSON', 'FOCAL'].includes(user_role)">

                      <q-btn
                        label="Endorse"
                        icon="how_to_reg"
                        color="green"
                        @click="onEndorse()"
                      />
                      <q-btn
                        label="Revert"
                        icon="undo"
                        color="red"
                      />
                    </template>
                  </div>
                  <div class="q-gutter-sm" v-else>
                    <span class="text-bold text-h5">Endorsed</span>
                  </div>
                </div>
              </div>
              
            </q-card-actions>
          </q-card-section>

        </q-card>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { VISITATION_PLAN_VIEW_TABLE_COLUMNS } from "src/utils/table-columns/visitation-plan-table";
  import Swal from "sweetalert2";
  
  export default {
      data: () => ({
        user_role: '', 
        step: 9, 
        showAddPodDialog: false, 
        podRegion: "Region I", 
  
        tblPodListCols: [
          ...VISITATION_PLAN_VIEW_TABLE_COLUMNS
        ], 
  
        tblPodListRows: [
          {
            no: 1, 
            pod: 'Clinic of the Holy Spirit, Quezon City', 
            pod_address: 'Sample', 
            pod_type: 'Mental Health Institution', 
            agency: 'DOH', 
            target_date: 'March, 1st Week', 
          }, 
          {
            no: 2, 
            pod: 'Plainview Custodial Home, Mandaluyong City', 
            pod_address: 'Sample', 
            pod_type: 'Mental Health Institution', 
            agency: 'DOH', 
            target_date: 'March, 1st Week', 
          }, 
          {
            no: 3, 
            pod: 'Divine Mercy Facility, Boni', 
            pod_address: 'Sample', 
            pod_type: 'Mental Health Institution', 
            agency: 'DOH', 
            target_date: 'March, 1st Week', 
          }, 
          {
            no: 4, 
            pod: 'JM Home Care Clinic, Taguig City', 
            pod_address: 'Sample', 
            pod_type: 'Mental Health Institution', 
            agency: 'DOH', 
            target_date: 'March, 1st Week', 
          }, 
          {
            no: 5, 
            pod: 'Holy Spirit Psychiatric and Custodial Care, Marikina City', 
            pod_address: 'Sample', 
            pod_type: 'Mental Health Institution', 
            agency: 'DOH', 
            target_date: 'March, 1st Week', 
          }, 
          {
            no: 6, 
            pod: 'National Center for Mental Health', 
            pod_address: 'Sample', 
            pod_type: 'Mental Health Institution', 
            agency: 'DOH', 
            target_date: 'March, 1st Week', 
          }
        ], 

        podStatus: "",
      }),
  
      computed: {
        
      },
  
      watch: {
        
      },
      
      methods: {
        async initApp() {
          
        }, 
  
        onCreatePod(){
          this.showAddPodDialog = true;
        }, 

        onEndorse(){
          Swal.fire({
            title: "Success!",
            text: "POD Plan has been endorsed.",
            icon: "success",
          }).then((result) => {
            this.podStatus = "Endorsed";
          });
        }, 

        onBack(){
          let checkUrl = window.location.href;
          console.log('checkUrl',checkUrl)
          if(checkUrl.includes('approved-pod-plan')){
            this.$router.push({
              name: "approved-pod-plan",
            });
          }else if(checkUrl.includes('visitation-plan')){
            this.$router.push({
              name: "visitation-plan",
            });
          }
        }
      },
  
      mounted() {
        this.user_role = localStorage.getItem('role');
        this.initApp();
      },
  }
  </script>
 
<style scoped>
/* Custom CSS to adjust padding */
</style>