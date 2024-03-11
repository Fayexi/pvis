<template>
  <div>
    <div class="form-main">
      <q-card>
        <q-card-section class="bg-amber-7">
          <div class="text-h6">
            <q-icon name="psychology" size="sm" />
            <span class="card-header-label">
              MHF Visitation Report
            </span>
          </div>
          <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%); z-index: 100" v-if="['FOCAL'].includes(userRole)">
            <q-btn fab icon="add" color="green-5" @click="onCreatePod"/>
          </div>
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
              :rows="tblMhfRows"
              :columns="tblMhfColumns"
              row-key="name"
              v-model:pagination="pagination"
              :rows-per-page-options="rowPerPageOptions"
              :loading="fetchLoading"
              @request="onFetchData"
            >
              <template v-slot:header="props">
                <q-tr :props="props" style="margin-top: 10px">
                  <q-th v-for="col in props.cols" :key="col.name" :props="props" @click="toggleSort(col.name)" :class="{ 'sortable': col.sortable }">
                    {{ col.label }}
                    <q-icon
                      
                      :name="col.name === sortKey && sortOrder === 1 ? 'arrow_upward' : 'arrow_downward'"
                      class="q-ml-md"
                    />
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
                        @click="onViewReport(props.row.id)"
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
  <q-dialog v-model="showAddPodDialog">
    <q-card style="width: 700px; max-width: 80vw;">
      <q-form ref="form" @validation-error="onValidationError" greedy>
        <div>
          <q-card-section>
            <div class="text-h6 flex">
              <!-- <q-icon name="folder_shared" size="sm" /> -->
              Create Visitation Report
            </div>
          </q-card-section>

          <q-separator class="mb-5" style="margin-bottom: 15px" />

          <q-card-section class="q-pt-none">
            <div class="row q-col-gutter-md">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-input outlined dense v-model="liberty_in" label="Liberty In"/>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-input type="date" outlined dense v-model="conducted_on" label="Conducted on"/>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-bold">
                Profile of the Place of Deprivation of Liberty
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-input outlined dense v-model="pod_address" label="Addres of POD"/>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-input outlined dense v-model="contact_info" label="Contact Information"/>
              </div>

              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-bold">
                Total Number of persons deproved of liberty (PDL) / Actual Capacity
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <q-input outlined dense v-model="male" label="Male/Boy"/>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <q-input outlined dense v-model="female" label="Female/Girl"/>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <q-input outlined dense v-model="lgbtq" label="Identified as LGBTQ+"/>
              </div>
              
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-bold">
                Total Number of POD Peronnel
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <q-input outlined dense v-model="custodial" label="Custodial Personnel"/>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <q-input outlined dense v-model="administrative" label="Administrative Personnel"/>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <q-input outlined dense v-model="medical" label="Medical/Health Personnel"/>
              </div>
              
            </div>
          </q-card-section>
        </div>
      </q-form>

      <q-card-actions align="right" class="bg-white text-teal">
        <div class="q-gutter-sm q-pa-sm">
          <q-btn icon="close" color="red" label="Close" v-close-popup />

          <q-btn
            icon="send"
            color="green-7"
            label="Submit"
            @click="onConfirmSubmission"
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from 'vue'
import { VISITATION_REPORT_TABLE_COLUMNS } from "src/utils/table-columns/visitation-report-table";

export default {
    data: () => ({
      userRole: localStorage.getItem("role"),
      showAddPodDialog: false, 
      regionOptions: [
        "Region 1", 
        "Region 2", 
        "Region 3", 
        "Region 4", 
      ], 
      region: "", 

      tblMhfColumns: [
        ...VISITATION_REPORT_TABLE_COLUMNS
      ], 
      tblMhfRows: [
      { 
          report_id: 'MHF0003', 
          date_conducted: 'April 14, 2024', 
          actual_capacity: 200, 
          total_pod_personnel: 100, 
          status: 'Approved',
        },
        { 
          report_id: 'MHF0002', 
          date_conducted: 'March 9, 2024', 
          actual_capacity: 150, 
          total_pod_personnel: 30, 
          status: 'Approved',
        },
        { 
          report_id: 'MHF0001', 
          date_conducted: 'May 24, 2024', 
          actual_capacity: 100, 
          total_pod_personnel: 50, 
          status: 'Approved',
        },
      ], 
    }),

    computed: {
      
    },

    watch: {
      
    },
    
    methods: {
      async initApp() {
        
      }, 

      onCreatePod(){
        this.$router.push({
          name: "create-mhf-visitation-report", 
        });
      }, 

      onViewReport(){
        this.$router.push({
          name: "view-mhf-visitation-report", 
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