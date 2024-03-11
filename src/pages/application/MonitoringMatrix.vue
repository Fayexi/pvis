<template>
  <div>
    <div class="form-main">
      <q-card>
        <q-card-section class="bg-amber-7">
          <div class="text-h6">
            <q-icon name="blur_on" size="sm" />
            <span class="card-header-label">
              Monitoring Matrix
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
              :rows="tblPodRows"
              :columns="tblPodColumns"
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

                      <q-btn
                        icon="history"
                        flat
                        color="red"
                        size="sm"
                        label="History"
                        @click="showHistory(props.row)"
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
  <q-dialog v-model="openHistoryDialog">
    <q-card style="width: 800px; max-width: 80vw">
      <q-form ref="form" @validation-error="onValidationError" greedy>
        <div>
          <q-card-section>
            <div class="text-h6 flex">
              <!-- <q-icon name="folder_shared" size="sm" /> -->
              History Logs
            </div>
          </q-card-section>

          <q-separator class="mb-5" style="margin-bottom: 15px" />

          <q-card-section class="q-pt-none">
            <div class="row q-col-gutter-md">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <q-card>
                    <q-markup-table separator="cell" wrap-cells>
                      <thead>
                        <tr>
                          <th class="text-center text-bold">Processed By</th>
                          <th class="text-center text-bold">Status</th>
                          <th class="text-center text-bold">Processed On</th>
                        </tr>
                      </thead>
                      <tbody>
                          <tr class="bg-green-3">
                            <td class="text-left">Regional Director</td>
                            <td class="text-center">
                              Approved by POD Visitation Report
                            </td>
                            <td class="text-center">
                              March 15, 2024
                            </td>
                          </tr>
                          <tr class="bg-blue-3">
                            <td class="text-left">Chief Investigator</td>
                            <td class="text-center">
                              Re-Endorsed by POD Visitation Report
                            </td>
                            <td class="text-center">
                              March 15, 2024
                            </td>
                          </tr>
                          <tr class="bg-red-3">
                            <td class="text-left">Regional Director</td>
                            <td class="text-center">
                              Rejected by POD Visitation Report
                            </td>
                            <td class="text-center">
                              March 15, 2024
                            </td>
                          </tr>
                          <tr class="bg-green-3">
                            <td class="text-left">Chief Investigator</td>
                            <td class="text-center">
                              Endorsed by POD Visitation Report
                            </td>
                            <td class="text-center">
                              March 15, 2024
                            </td>
                          </tr>
                          <tr class="bg-green-3">
                            <td class="text-left">VT Leader</td>
                            <td class="text-center">
                              Approved POD Visitation Report
                            </td>
                            <td class="text-center">
                              March 13, 2024
                            </td>
                          </tr>
                          <tr class="bg-green-3">
                            <td class="text-left">VT Member</td>
                            <td class="text-center">
                              Created POD Visitation Report
                            </td>
                            <td class="text-center">
                              March 11, 2024
                            </td>
                          </tr>
                      </tbody>
                    </q-markup-table>
                  </q-card>
              </div>
            </div>
          </q-card-section>
        </div>
      </q-form>

      <q-card-actions align="right" class="bg-white text-teal">
        <div class="q-gutter-sm q-pa-sm">
            <q-btn
              flat
              label="Close"
              icon="close"
              color="red"
              v-close-popup
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
      openHistoryDialog: false,
      regionOptions: [
        "Region 1", 
        "Region 2", 
        "Region 3", 
        "Region 4", 
      ], 
      region: "", 

      tblPodColumns: [
        ...VISITATION_REPORT_TABLE_COLUMNS
      ], 
      tblPodRows: [
        { 
          report_id: 'POD0003', 
          date_conducted: 'April 14, 2024', 
          actual_capacity: 200, 
          total_pod_personnel: 100, 
          status: 'Approved'
        },
        { 
          report_id: 'POD0002', 
          date_conducted: 'March 9, 2024', 
          actual_capacity: 150, 
          total_pod_personnel: 30, 
          status: 'Approved'
        },
        { 
          report_id: 'POD0001', 
          date_conducted: 'May 24, 2024', 
          actual_capacity: 100, 
          total_pod_personnel: 50, 
          status: 'Approved'
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
          name: "create-pod-visitation-report", 
        });
      }, 

      onViewReport(){
        this.$router.push({
          name: "view-pod-visitation-report", 
        });
      }, 

      showHistory(){
        this.openHistoryDialog = true;
        console.log('this.collatedData', this.collatedData)
      },
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