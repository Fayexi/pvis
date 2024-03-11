<template>
  <div>
    <div class="form-main">
      <q-card>
        <q-card-section class="bg-amber-7">
          <div class="text-h6">
            <q-icon name="menu_book" size="sm" />
            <span class="card-header-label">
              Regional POD Visitation Plan
            </span>
          </div>
          <div
            class="absolute-bottom-right q-pr-md"
            style="transform: translateY(50%); z-index: 100"
          >
            <q-btn fab icon="add" color="green-5" @click="onCreatePod" v-if="userRole == 'FOCAL'"/>
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
            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12 text-right" v-if="userRole == 'OIC'">
              <q-btn color="green" label="View Collated" @click="onViewCollated()" :disable="vcBtn"/>
            </div>
          </div>
          <div>
            <q-table
              title=""
              :rows="tblPodListRows"
              :columns="tblPodListCols"
              row-key="name"
              v-model:pagination="pagination"
              :rows-per-page-options="rowPerPageOptions"
              :loading="fetchLoading"
              @request="onFetchData"
            >
              <template v-slot:header="props">
                <q-tr :props="props" style="margin-top: 10px">
                  <q-th
                    v-for="col in props.cols"
                    :key="col.name"
                    :props="props"
                    @click="toggleSort(col.name)"
                    :class="{ sortable: col.sortable }"
                  >
                    {{ col.label }}
                    <q-icon
                      :name="
                        col.name === sortKey && sortOrder === 1
                          ? 'arrow_upward'
                          : 'arrow_downward'
                      "
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
                    {{ col.name === "action" ? "" : col.value }}

                    <div
                      style="min-width: 92px; padding: 0"
                      v-if="col.name === 'action'"
                    >
                      <q-btn
                        icon="open_in_new"
                        flat
                        color="primary"
                        size="sm"
                        label="View"
                        @click="onSelectItem()"
                      />
                      <q-btn
                        icon="list"
                        flat
                        color="green"
                        size="sm"
                        label="Collate"
                        @click="onCollate(props.row)"
                        v-if="userRole == 'OIC'"
                      />

                      <q-btn
                          icon="history"
                          flat
                          color="red"
                          size="sm"
                          label="History"
                          @click="showHistory(props.row)"
                        />
                      <!-- <q-btn
                        icon="open_in_new"
                        flat
                        color="error"
                        size="sm"
                        label="Revert"
                        @click="revert(props.row.id)"
                      />
                      <q-btn
                        icon="open_in_new"
                        flat
                        color="primary"
                        size="sm"
                        :label="buttonLabel"
                        @click="endorse(props.row.id, buttonLabel)"
                      /> -->
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
  <!-- ADD POD -->
  <q-dialog v-model="showAddPodDialog">
    <q-card style="width: 900px; max-width: 80vw">
      <q-form ref="form" @validation-error="onValidationError" greedy>
        <div>
          <q-card-section>
            <div class="text-h6 flex">
              <!-- <q-icon name="folder_shared" size="sm" /> -->
              Create Regional Visitation Plan
            </div>
          </q-card-section>

          <q-separator class="mb-5" style="margin-bottom: 15px" />

          <q-card-section class="q-pt-none">
            <div class="row q-col-gutter-md">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-select
                  v-model="region"
                  :options="regionOptions"
                  label="Region"
                />
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-table
                  :rows="tblPodRows"
                  :columns="tblPodColumns"
                  row-key="name"
                >
                  <template v-slot:header="props">
                    <q-tr :props="props" style="margin-top: 10px">
                      <q-th
                        v-for="col in props.cols"
                        :key="col.name"
                        :props="props"
                        class="text-wrap-normal"
                      >
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
                      >
                        <template v-if="col.name === 'action'">
                          <q-btn round color="green" icon="add" size="sm" @click="addRow()"/>
                        </template>
                        <template v-else-if="col.name === 'target_date'">
                          <q-input 
                            type="date" 
                            outlined 
                            v-model="props.row.target_date" 
                            dense
                            mask="MMM W"
                            :format24h="true"
                            :no-calendar-button="true"
                          />
                        </template>
                        <template v-else-if="col.name === 'pod_type'">
                          <q-select
                            dense
                            outlined
                            input-debounce="0"
                            :options="podTypeOptions"
                            v-model="props.row.pod_type"
                          >
                            <template v-slot:no-option>
                              <q-item>
                                <q-item-section class="text-italic text-grey">
                                  No data available
                                </q-item-section>
                              </q-item>
                            </template>
                          </q-select>
                        </template>
                        <template v-else-if="col.name === 'agency'">
                          <q-select
                            dense
                            outlined
                            input-debounce="0"
                            :options="agencyOptions"
                            v-model="props.row.agency"
                          >
                            <template v-slot:no-option>
                              <q-item>
                                <q-item-section class="text-italic text-grey">
                                  No data available
                                </q-item-section>
                              </q-item>
                            </template>
                          </q-select>
                        </template>
                        <template v-else>
                          <q-input outlined v-model="props.row.pod" dense />
                        </template>
                      </q-td>
                    </q-tr>
                  </template>
                </q-table>
              </div>
            </div>
          </q-card-section>
        </div>
      </q-form>

      <q-card-actions align="right" class="bg-white text-teal">
        <div class="q-gutter-sm q-pa-sm">
          <q-btn
            icon="send"
            color="green-7"
            label="Submit"
            @click="onSubmit()"
          />
          <q-btn icon="close" color="red" label="Close" v-close-popup />

        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>

  <!-- COLLATED POD -->
  <q-dialog v-model="showCollatedDialog">
    <q-card style="width: 800px; max-width: 80vw">
      <q-form ref="form" @validation-error="onValidationError" greedy>
        <div>
          <q-card-section>
            <div class="text-h6 flex">
              <!-- <q-icon name="folder_shared" size="sm" /> -->
              Collated POD
            </div>
          </q-card-section>

          <q-separator class="mb-5" style="margin-bottom: 15px" />

          <q-card-section class="q-pt-none">
            <div class="row q-col-gutter-md">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <q-card>
                    <q-tabs
                      v-model="collatedTab"
                      dense
                      align="left"
                      class="shadow-2"
                      :breakpoint="0"
                    >
                      <template v-for="(item, index) in collatedData" :key="index">
                        <q-tab :name="String(index)" :label="item.region" />
                      </template>
                        
                    </q-tabs>
                    <q-tab-panels v-model="collatedTab" animated>
                      <template v-for="(item, index) in collatedData" :key="index">
                        <q-tab-panel :name="String(index)">
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
                      </template>
                    </q-tab-panels>
                  </q-card>
              </div>
            </div>
          </q-card-section>
        </div>
      </q-form>

      <q-card-actions align="right" class="bg-white text-teal">
        <div class="q-gutter-sm q-pa-sm" v-if="podStatus != 'Endorsed'">
          <template v-if="btnRoles.includes(userRole)">
            <q-btn
              label="Save"
              icon="save"
              color="green"
              @click="onSaveCollated()"
              v-close-popup
            />
            <!-- <q-btn
              label="Revert"
              icon="undo"
              color="red"
            /> -->
            </template>
        </div>
        <!-- <div class="q-gutter-sm" v-else>
          <span class="text-bold text-h5">Endorsed</span>
        </div> -->
      </q-card-actions>
    </q-card>
  </q-dialog>

  <!-- HISTORY -->
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
                            <td class="text-left">OIC - Visitation Division</td>
                            <td class="text-center">
                              Transmitted by OIC
                            </td>
                            <td class="text-center">
                              March 19, 2024
                            </td>
                          </tr>
                          <tr class="bg-green-3">
                            <td class="text-left">Chairperson</td>
                            <td class="text-center">
                              Approved by Chairperson
                            </td>
                            <td class="text-center">
                              March 18, 2024
                            </td>
                          </tr>
                          <tr class="bg-green-3">
                            <td class="text-left">Executive Director</td>
                            <td class="text-center">
                              Approved by ED
                            </td>
                            <td class="text-center">
                              March 18, 2024
                            </td>
                          </tr>
                          <tr class="bg-green-3">
                            <td class="text-left">PMO</td>
                            <td class="text-center">
                              Approved by PMO
                            </td>
                            <td class="text-center">
                              March 18, 2024
                            </td>
                          </tr>
                          <tr class="bg-green-3">
                            <td class="text-left">OIC - Visitation Division</td>
                            <td class="text-center">
                              Endorsed by OIC
                            </td>
                            <td class="text-center">
                              March 16, 2024
                            </td>
                          </tr>
                          <tr class="bg-green-3">
                            <td class="text-left">OIC - Visitation Division</td>
                            <td class="text-center">
                              Collated by OIC
                            </td>
                            <td class="text-center">
                              March 16, 2024
                            </td>
                          </tr>
                          <tr class="bg-blue-3">
                            <td class="text-left">Director</td>
                            <td class="text-center">
                              Updated and Endorsed by Director
                            </td>
                            <td class="text-center">
                              March 15, 2024
                            </td>
                          </tr>
                          <tr class="bg-red-3">
                            <td class="text-left">OIC - Visitation Division</td>
                            <td class="text-center">
                              Reverted by OIC
                            </td>
                            <td class="text-center">
                              March 15, 2024
                            </td>
                          </tr>
                          <tr class="bg-green-3">
                            <td class="text-left">Director</td>
                            <td class="text-center">
                              Endorsed by Director
                            </td>
                            <td class="text-center">
                              March 15, 2024
                            </td>
                          </tr>
                          <tr class="bg-green-3">
                            <td class="text-left">Regional Director</td>
                            <td class="text-center">
                              Reviewed POD Plan
                            </td>
                            <td class="text-center">
                              March 13, 2024
                            </td>
                          </tr>
                          <tr class="bg-green-3">
                            <td class="text-left">Focal Person</td>
                            <td class="text-center">
                              Created POD Plan
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
import { ref } from "vue";
import { VISITATION_PLAN_TABLE_COLUMNS, VISITATION_PLAN_VIEW_TABLE_COLUMNS } from "src/utils/table-columns/visitation-plan-table";
import Swal from "sweetalert2";

export default {
  data: () => ({
    btnRoles: ["PMO", "ED", "CHAIRPERSON", "DIRECTOR", "OIC"],
    userRole: localStorage.getItem("role"),
    openHistoryDialog: false,
    podTypeOptions: [
      "City Jail",
      "District Jail",
      "Municipal Jail ",
      "Sub-Provincial Jail",
      "Provincial Jail",
      "National Penitentiary",
      "PNP Custodial Facility",
      "NBI Detention Center",
      "PDEA Detention Center",
      "Bureau of Immigration Detention Center",
      "Military Camp",
      "Mental Health Institution",
      "Bahay Pag-Asa Facility",
      "Regional Rehabilitation Center for the Youth",
      "Other Facilities"
    ], 
    agencyOptions: [
      "AFP",
      "BI",
      "BJMP",
      "BUCOR",
      "DOH",
      "DSWD",
      "LGU",
      "NBI",
      "PDEA",
      "PNP",
      "PRIVATE"
    ], 
    showAddPodDialog: false,
    showCollatedDialog: false,
    regionOptions: ["Region 1", "Region 2", "Region 3", "Region 4"],
    region: "",

    tblPodColumns: [
      {
        name: "pod",
        label: "Place of Deprivation to be visited",
        align: "left",
        sortable: false,
      },
      {
        name: "pod_type",
        label: "Type of POD",
        align: "left",
        sortable: false,
      },
      {
        name: "agency",
        label: "Agency",
        align: "left",
        sortable: false,
      },
      {
        name: "target_date",
        label: "Target Date of visit (Week and Month)",
        align: "left",
        sortable: false,
      },
      {
        name: "action",
        label: "Action",
        align: "center",
        sortable: false,
      },
    ],
    tblPodRows: [{ pod: null, pod_type: null, agency: null, target_date: null }],

    tblPodListCols: [...VISITATION_PLAN_TABLE_COLUMNS],

    tblPodListRows: [
      {
        region: "Region 3",
        pod_address: "Sample",
        pod_type: "Sample",
        agency: "Sample",
        date_created: "February 29, 2024",
        status: "Endorse",
      },
      {
        region: "Region 2",
        pod_address: "Sample",
        pod_type: "Sample",
        agency: "Sample",
        date_created: "February 29, 2024",
        status: "Endorse",
      },
      {
        region: "Region 1",
        pod_address: "Sample",
        pod_type: "Sample",
        agency: "Sample",
        date_created: "February 29, 2024",
        status: "Endorse",
      },
    ],
    buttonLabel: "",

    collatedData: [], 
    collatedTab: "0", 
    vcBtn: true, 

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

  computed: {},

  watch: {},

  methods: {
    async initApp() {
      if (localStorage.getItem("role") == "FOCAL") {
        this.buttonLabel = "Submit";
        console.log("BUTTON => ", this.buttonLabel);
      } else if (localStorage.getItem("role") == "RD") {
        this.buttonLabel = "For Endoresement";
      } else if (localStorage.getItem("role") == "DIRECTOR") {
        this.buttonLabel = "Endorese";
      } else if (localStorage.getItem("role") == "OIC") {
        this.buttonLabel = "Collate";
      }
      // else if (localStorage.getItem("role") == "PMO") {
      //   this.buttonLabel = "Endorese Collated data";
      // } else if (localStorage.getItem("role") == "ED") {
      //   this.buttonLabel = "Approve";
      // }
      else if (localStorage.getItem("role") == "CHAIRPERSON") {
        this.buttonLabel = "Approve";
      }
    },

    addRow(){
      const newRow = { pod: null, pod_type: null, agency: null, target_date: null };
      this.tblPodRows.push({...newRow});
    }, 

    onCreatePod() {
      this.showAddPodDialog = true;
    },

    onSubmit(){
      console.log(this.tblPodRows)
      
      this.tblPodRows.forEach(element => {
        
      });

      // this.tblPodRows.push({...newRow});
      // this.tblPodRows: [{ pod: null, pod_type: null, agency: null, target_date: null }],
      Swal.fire({
        title: "Success!",
        text: "POD Plan has been added.",
        icon: "success",
      }).then((result) => {
        this.podStatus = "Endorsed";
      });
    }, 

    onSelectItem() {
      this.$router.push({
        name: "view-visitation-plan",
      });
    },

    showHistory(){
      this.openHistoryDialog = true;
      console.log('this.collatedData', this.collatedData)
    }, 

    onCollate(data){
      console.log(data);
      console.log(data.id, this.tblPodListRows);

      this.collatedData.push(data);
      this.vcBtn = false;
    }, 

    onViewCollated(){
      this.showCollatedDialog = true;
      console.log('this.collatedData', this.collatedData)
    }, 

    onSaveCollated(){


    }, 

    async revert() {
      let question = "Are you sure you want to REVERT this data?";

      const confirmResult = await Swal.fire({
        title: "Confirmation Action",
        text: question,
        // icon: 'question',
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        customClass: {
          title: "con-label",
          content: "con-label",
        },
      });

      if (confirmResult.isConfirmed) {
        this.loading("Submitting data...");

        Swal.close();

        await Swal.fire({
          title: "Success!",
          text: "Your data has been REVERTED.",
          icon: "success",
          timer: 3000, // Time in milliseconds (2 seconds in this case)
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    },
    async endorse(id, status) {
      let question =
        "Are you sure you want to move this data to " +
        status.toUpperCase() +
        " status?";

      const confirmResult = await Swal.fire({
        title: "Confirmation Action",
        text: question,
        // icon: 'question',
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        customClass: {
          title: "con-label",
          content: "con-label",
        },
      });

      if (confirmResult.isConfirmed) {
        this.loading("Submitting data...");

        Swal.close();

        await Swal.fire({
          title: "Success!",
          text: "Your data has been move to " + status.toUpperCase() + ".",
          icon: "success",
          timer: 3000, // Time in milliseconds (2 seconds in this case)
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    },
  },

  mounted() {
    this.initApp();
  },
};
</script>
<style>
.text-wrap-normal {
  white-space: normal;
  word-wrap: break-word;
}
</style>