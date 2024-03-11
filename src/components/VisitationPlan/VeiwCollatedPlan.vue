<template>
  <div>
    <div class="form-main">
      <q-card>
        <q-card-section class="bg-amber-7">
          <div class="text-h6">
            <q-icon name="article" size="sm" />
            <span class="card-header-label">
              View Collated POD Visitation Plan
            </span>
          </div>
        </q-card-section>

        <q-card-section style="padding-top: 0; padding-bottom: 0">
          <!-- <q-separator /> -->
        </q-card-section>

        <!-- <q-separator /> -->
        <q-card-section>
          <div>
            <q-card>
              <q-tabs
                v-model="collatedTab"
                dense
                align="left"
                class="shadow-2"
                :breakpoint="0"
              >
                <!-- <template v-for="(item, index) in collatedData" :key="index"> -->
                  <q-tab name="0" label="Region I" />
                  <q-tab name="1" label="Region II" />
                  <q-tab name="2" label="Region III" />
                <!-- </template> -->
                  
              </q-tabs>
              <q-tab-panels v-model="collatedTab" animated>
                <!-- <template v-for="(item, index) in collatedData" :key="index"> -->
                  <q-tab-panel name="0">
                    <q-table
                      separator="cell"
                      :rows="tblCollatedRows"
                      :columns="tblCollatedCols"
                      row-key="name"
                      :pagination="false"
                      hide-pagination
                      :rows-per-page-options="[0]"
                      :loading="fetchLoading"
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
                            {{ col.value }}
                          </q-td>
                        </q-tr>
                      </template>
                    </q-table>
                  </q-tab-panel>

                  <q-tab-panel name="1">
                    <q-table
                      separator="cell"
                      :rows="tblCollatedRows"
                      :columns="tblCollatedCols"
                      row-key="name"
                      :pagination="false"
                      hide-pagination
                      :rows-per-page-options="[0]"
                      :loading="fetchLoading"
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
                            {{ col.value }}
                          </q-td>
                        </q-tr>
                      </template>
                    </q-table>
                  </q-tab-panel>

                  <q-tab-panel name="2">
                    <q-table
                      separator="cell"
                      :rows="tblCollatedRows"
                      :columns="tblCollatedCols"
                      row-key="name"
                      :pagination="false"
                      hide-pagination
                      :rows-per-page-options="[0]"
                      :loading="fetchLoading"
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
                            {{ col.value }}
                          </q-td>
                        </q-tr>
                      </template>
                    </q-table>
                  </q-tab-panel>
                <!-- </template> -->
              </q-tab-panels>
            </q-card>
          </div>
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
                <div class="q-gutter-sm" v-if="podStatus != 'Endorsed' && podStatus != 'Approved' && podStatus != 'Transmitted'">
                  <template v-if="this.$route.params.status == 'Approved' && ['OIC'].includes(user_role)">
                    <q-btn
                      label="Transmit"
                      icon="send"
                      color="green"
                      @click="onTransmit()"
                    />
                  </template>
                  <template v-else>
                    <template v-if="['OIC', 'PMO', 'ED', 'FOCAL'].includes(user_role)">

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
                    <template v-if="['CHAIRPERSON'].includes(user_role)">
                      <q-btn
                        label="Approve"
                        icon="how_to_reg"
                        color="green"
                        @click="onApprove()"
                      />
                      <q-btn
                        label="Revert"
                        icon="undo"
                        color="red"
                      />
                    </template>
                    <!-- <template v-if="['CHAIRPERSON'].includes(user_role)">
                      <q-btn
                        label="Approved"
                        icon="how_to_reg"
                        color="green"
                        @click="onApprove()"
                      />
                      <q-btn
                        label="Revert"
                        icon="undo"
                        color="red"
                      />
                    </template> -->
                  </template>
                </div>
                <div class="q-gutter-sm" v-else>
                  <span class="text-bold text-h5">{{ podStatus }}</span>
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

      collatedData: [], 
      collatedTab: "0", 
      tblCollatedCols: [
        ...VISITATION_PLAN_VIEW_TABLE_COLUMNS
      ], 
      
      tblCollatedRows: [
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
      ]
    }),

    computed: {
      
    },

    watch: {
      
    },
    
    methods: {
      async initApp() {
        console.log(this.$route.params.status)
      }, 

      onCreatePod(){
        this.showAddPodDialog = true;
      }, 

      onEndorse(){
        Swal.fire({
          title: "Success!",
          text: "Collated POD Plan has been endorsed.",
          icon: "success",
        }).then((result) => {
          this.podStatus = "Endorsed";
        });
      }, 

      onTransmit(){
        Swal.fire({
          title: "Success!",
          text: "Approved Collated POD Plan has been transmitted.",
          icon: "success",
        }).then((result) => {
          this.podStatus = "Transmitted";
        });
      }, 

      onApprove(){
        Swal.fire({
          title: "Success!",
          text: "Collated POD Plan has been approved.",
          icon: "success",
        }).then((result) => {
          this.podStatus = "Approved";
        });
      }, 

      onBack(){
        this.$router.push({
          name: "collated-pod-plan",
        });
      }
    },

    mounted() {
      this.user_role = localStorage.getItem('role');
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