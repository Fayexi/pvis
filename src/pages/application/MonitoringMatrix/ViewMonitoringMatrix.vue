<template>
  <div>
    <div class="form-main">
      <q-card>
        <q-card-section class="bg-amber-7">
          <div class="text-h6 row">
            <div class="col-md-5 col-sm-5 col-xs-12">
              <q-icon name="blur_on" size="sm" />
              <span class="card-header-label">
                View Monitoring Matrix
              </span>
              
            </div>
            <div class="col-md-7 col-sm-7 col-xs-12 text-right">
              <q-btn color="green" icon="add" size="sm" label="Follow Up Visit" @click="addFollowUp"/>
            </div>
          </div>
        </q-card-section>

        <q-card-section style="padding-top: 0; padding-bottom: 0">
          <!-- <q-separator /> -->
        </q-card-section>

        <!-- <q-separator /> -->
        <q-card-section>
          <!-- <div class="row q-col-gutter-md">
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
          </div> -->
          <div>
            <q-table
              title="Region I"
              :rows="tblMatrixRows"
              :columns="tblMatrixColumns"
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
                        @click="onViewMatrix(props.row.id)"
                      />

                      <!-- <q-btn
                        icon="history"
                        flat
                        color="red"
                        size="sm"
                        label="History"
                        @click="showHistory(props.row)"
                      /> -->
                    </div>
                  </q-td>
                </q-tr>
              </template>
            </q-table>
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
            </div>
          </q-card-actions>
        </q-card-section>
      </q-card>
    </div>
  </div>
  <q-dialog v-model="openMatrixDialog">
    <q-card style="width: 1000px; max-width: 80vw">
      <q-form ref="form" @validation-error="onValidationError" greedy>
        <div>
          <q-card-section>
            <!-- <div class="text-h6 flex">
              History Logs
            </div> -->
          </q-card-section>

          <q-separator class="mb-5" style="margin-bottom: 15px" />

          <q-card-section class="q-pt-none">
            <div class="row q-col-gutter-md">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <q-card>
                    <q-markup-table separator="cell" wrap-cells>
                      <thead>
                        <tr>
                          <th class="text-left text-bold" colspan="6">
                            Instructions:
                            <ul>
                              <li>
                                Regional Office shall use this form in consolidating the Recommendations/Referrals by the Regional Jail Visiting Team.
                              </li>
                              <li>
                                This report shall be regularly updated and submitted within ten  (10) working days from the end of every quarter to the Visitorial Division .
                              </li>
                            </ul>
                          </th>
                        </tr>
                        <tr>
                          <th class="text-center" rowspan="2">
                            Place of deprivation of liberty to be visited
                          </th>
                          <th class="text-center" rowspan="2">
                            Date Visited
                          </th>
                          <th class="text-center" rowspan="2">
                            Recommendations
                          </th>
                          <th class="text-center" colspan="3">
                            Action Taken by the Regional Office
                          </th>
                        </tr>
                        <tr>
                          <th class="text-center" rowspan="2">
                            <span>Recommendation/s was sent to</span><br>
                            <span class="text-caption">(Name and Agency)</span>
                          </th>
                          <th class="text-center" rowspan="2">
                            Date
                          </th>
                          <th class="text-center" rowspan="2">
                            Status of Implementation of Recommendations
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                          <tr>
                            <td class="text-left">Clinic of the Holy Spirit, Quezon City</td>
                            <td class="text-left">March 1, 2024</td>
                            <td class="text-left">
                              <q-input 
                                type="textarea"
                                outlined
                                dense
                                rows="2"
                              />
                            </td>
                            <td class="text-left">
                              <q-input 
                                type="textarea"
                                outlined
                                dense
                                rows="2"
                              />
                            </td>
                            <td class="text-left">
                              <q-input 
                                type="date"
                                outlined
                                dense
                                rows="2"
                              />
                            </td>
                            <td class="text-left">
                              <q-select
                                dense
                                outlined
                                input-debounce="0"
                                :options="implementStatusOptions"
                              >
                                <template v-slot:no-option>
                                  <q-item>
                                    <q-item-section class="text-italic text-grey">
                                      No data available
                                    </q-item-section>
                                  </q-item>
                                </template>
                              </q-select>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">Plainview Custodial Home, Mandaluyong City</td>
                            <td class="text-left">March 1, 2024</td>
                            <td class="text-left">
                              <q-input 
                                type="textarea"
                                outlined
                                dense
                                rows="2"
                              />
                            </td>
                            <td class="text-left">
                              <q-input 
                                type="textarea"
                                outlined
                                dense
                                rows="2"
                              />
                            </td>
                            <td class="text-left">
                              <q-input 
                                type="date"
                                outlined
                                dense
                                rows="2"
                              />
                            </td>
                            <td class="text-left">
                              <q-select
                                dense
                                outlined
                                input-debounce="0"
                                :options="implementStatusOptions"
                              >
                                <template v-slot:no-option>
                                  <q-item>
                                    <q-item-section class="text-italic text-grey">
                                      No data available
                                    </q-item-section>
                                  </q-item>
                                </template>
                              </q-select>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">Divine Mercy Facility, Boni</td>
                            <td class="text-left">March 1, 2024</td>
                            <td class="text-left">
                              <q-input 
                                type="textarea"
                                outlined
                                dense
                                rows="2"
                              />
                            </td>
                            <td class="text-left">
                              <q-input 
                                type="textarea"
                                outlined
                                dense
                                rows="2"
                              />
                            </td>
                            <td class="text-left">
                              <q-input 
                                type="date"
                                outlined
                                dense
                                rows="2"
                              />
                            </td>
                            <td class="text-left">
                              <q-select
                                dense
                                outlined
                                input-debounce="0"
                                :options="implementStatusOptions"
                              >
                                <template v-slot:no-option>
                                  <q-item>
                                    <q-item-section class="text-italic text-grey">
                                      No data available
                                    </q-item-section>
                                  </q-item>
                                </template>
                              </q-select>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">JM Home Care Clinic, Taguig City</td>
                            <td class="text-left">March 1, 2024</td>
                            <td class="text-left">
                              <q-input 
                                type="textarea"
                                outlined
                                dense
                                rows="2"
                              />
                            </td>
                            <td class="text-left">
                              <q-input 
                                type="textarea"
                                outlined
                                dense
                                rows="2"
                              />
                            </td>
                            <td class="text-left">
                              <q-input 
                                type="date"
                                outlined
                                dense
                                rows="2"
                              />
                            </td>
                            <td class="text-left">
                              <q-select
                                dense
                                outlined
                                input-debounce="0"
                                :options="implementStatusOptions"
                              >
                                <template v-slot:no-option>
                                  <q-item>
                                    <q-item-section class="text-italic text-grey">
                                      No data available
                                    </q-item-section>
                                  </q-item>
                                </template>
                              </q-select>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">Holy Spirit Psychiatric and Custodial Care, Marikina City</td>
                            <td class="text-left">March 1, 2024</td>
                            <td class="text-left">
                              <q-input 
                                type="textarea"
                                outlined
                                dense
                                rows="2"
                              />
                            </td>
                            <td class="text-left">
                              <q-input 
                                type="textarea"
                                outlined
                                dense
                                rows="2"
                              />
                            </td>
                            <td class="text-left">
                              <q-input 
                                type="date"
                                outlined
                                dense
                                rows="2"
                              />
                            </td>
                            <td class="text-left">
                              <q-select
                                dense
                                outlined
                                input-debounce="0"
                                :options="implementStatusOptions"
                              >
                                <template v-slot:no-option>
                                  <q-item>
                                    <q-item-section class="text-italic text-grey">
                                      No data available
                                    </q-item-section>
                                  </q-item>
                                </template>
                              </q-select>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">National Center for Mental Health</td>
                            <td class="text-left">March 1, 2024</td>
                            <td class="text-left">
                              <q-input 
                                type="textarea"
                                outlined
                                dense
                                rows="2"
                              />
                            </td>
                            <td class="text-left">
                              <q-input 
                                type="textarea"
                                outlined
                                dense
                                rows="2"
                              />
                            </td>
                            <td class="text-left">
                              <q-input 
                                type="date"
                                outlined
                                dense
                                rows="2"
                              />
                            </td>
                            <td class="text-left">
                              <q-select
                                dense
                                outlined
                                input-debounce="0"
                                :options="implementStatusOptions"
                              >
                                <template v-slot:no-option>
                                  <q-item>
                                    <q-item-section class="text-italic text-grey">
                                      No data available
                                    </q-item-section>
                                  </q-item>
                                </template>
                              </q-select>
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
              label="Save"
              icon="save"
              color="green"
              v-close-popup
              @click="onSave"
            />
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
import { MONITORING_MATRIX_TABLE_COLUMNS } from "src/utils/table-columns/monitoring-matrix-table";
import Swal from "sweetalert2";

export default {
    data: () => ({
      userRole: localStorage.getItem("role"),
      showAddPodDialog: false, 
      openMatrixDialog: false,
      implementStatusOptions: [
        "Implemented",  "Not Implemented"
      ],
      region: "", 

      tblMatrixColumns: [
        ...MONITORING_MATRIX_TABLE_COLUMNS
      ], 
      tblMatrixRows: [
        {
          region: 'Region I', 
          date_visited: 'April 9, 2024',
          created_by: 'Juan Dela Cruz', 
        },
        {
          region: 'Region I', 
          date_visited: 'March 8, 2024',
          created_by: 'Juan Dela Cruz', 
        }
      ], 
    }),

    computed: {
      
    },

    watch: {
      
    },
    
    methods: {
      async initApp() {
        
      }, 
      
      onSave(){
        Swal.fire({
          title: "Success!",
          text: "Monitoring Matrix has been successfully saved.",
          icon: "success",
        }).then((result) => {
          location.reload();
        });
      },

      onViewMatrix(){
        this.openMatrixDialog = true;
      }, 

      addFollowUp(){
        this.openMatrixDialog = true;
      },

      onBack(){
        this.$router.push({
          name: "monitoring-matrix", 
        });
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