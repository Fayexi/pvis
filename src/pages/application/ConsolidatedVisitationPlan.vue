<template>
  <div>
    <div class="form-main">
      <q-card>
        <q-card-section class="bg-amber-7">
          <div class="text-h6">
            <q-icon name="account_tree" size="sm" />
            <span class="card-header-label">
              Consolidated POD Visitation Plan
            </span>
          </div>
          <!-- <div
            class="absolute-bottom-right q-pr-md"
            style="transform: translateY(50%); z-index: 100"
          >
            <q-btn fab icon="add" color="green-5" @click="onCreatePod" />
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
            <!-- <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12 text-right">
              <q-btn color="green" label="View Collated" @click="onViewCollated()" :disable="vcBtn"/>
            </div> -->
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
                    <!-- {{ col.name === "action" ? "" : col.value }} -->
                    <template v-if="col.name === 'action'">
                      <div
                        style="min-width: 92px; padding: 0"
                      >
                        <q-btn
                          icon="open_in_new"
                          flat
                          color="primary"
                          size="sm"
                          label="View"
                          @click="onSelectItem(props.row)"
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
                    </template>
                    <template v-else-if="col.name === 'status'">
                      <template v-if="col.value === 'For Consolidation'">
                        <template v-if="['OIC', 'ED', 'PMO', 'FOCAL'].includes(userRole)">
                          For Endorse
                        </template>
                        <template v-if="['CHAIRPERSON'].includes(userRole)">
                          For Approval
                        </template>
                      </template>
                      <template v-else>
                        {{ col.value }}
                      </template>
                    </template>
                    <template v-else>
                      {{ col.value }}
                    </template>
                    
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
import { COLLATED_VISITATION_TABLE_COLUMNS, VISITATION_PLAN_VIEW_TABLE_COLUMNS } from "src/utils/table-columns/visitation-plan-table";
import Swal from "sweetalert2";

export default {
  data: () => ({
    btnRoles: ["PMO", "ED", "CHAIRPERSON", "DIRECTOR", "OIC"],
    openHistoryDialog: false,
    regionOptions: ["Region 1", "Region 2", "Region 3", "Region 4"],
    region: "",
    userRole: localStorage.getItem("role"),
    podStatud: "", 
    buttonLabel: "",
    tblPodListCols: [...COLLATED_VISITATION_TABLE_COLUMNS],

    tblPodListRows: [
      {
        id: 1, 
        prepared_by: "Juan Dela Cruz",
        region: "2024",
        date_collated: "October 1, 2024",
        status: "For Consolidation",
      },
      {
        id: 2, 
        prepared_by: "Juan Dela Cruz",
        region: "2023",
        date_collated: "October 1, 2023",
        status: "Approved",
      },
      {
        id: 3, 
        prepared_by: "Juan Dela Cruz",
        region: "2022",
        date_collated: "October 1, 2022",
        status: "Approved",
      },
    ],

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
      if (localStorage.getItem("role") == "OIC") {
        this.buttonLabel = "For Endorsement";
      }
      if (localStorage.getItem("role") == "PMO") {
        this.buttonLabel = "Endorse";
      } else if (localStorage.getItem("role") == "ED") {
        this.buttonLabel = "For Approval";
      } else if (localStorage.getItem("role") == "CHAIRPERSON") {
        this.buttonLabel = "Approve";
      }
    },

    onCreatePod() {
      this.showAddPodDialog = true;
    },

    onSelectItem(data) {
      console.log(data)
      this.$router.push({
        path: "collated-pod-plan/view-collated-pod-plan/"+data.status,
      });
    },
    
    onCollate(data){

      console.log(data);
      console.log(data.id, this.tblPodListRows);

      this.collatedData.push(data);
      this.vcBtn = false;
    }, 

    showHistory(){
      this.openHistoryDialog = true;
      console.log('this.collatedData', this.collatedData)
    }, 

    onEndorse(){
      Swal.fire({
        title: "Success!",
        text: "Collated POD has been endorsed.",
        icon: "success",
      }).then((result) => {
        this.podStatus = "Endorsed";
      });
    }, 
    // async revert() {
    //   let question = "Are you sure you want to REVERT this data?";

    //   const confirmResult = await Swal.fire({
    //     title: "Confirmation Action",
    //     text: question,
    //     // icon: 'question',
    //     showCancelButton: true,
    //     confirmButtonText: "Yes",
    //     cancelButtonText: "No",
    //     customClass: {
    //       title: "con-label",
    //       content: "con-label",
    //     },
    //   });

    //   if (confirmResult.isConfirmed) {
    //     this.loading("Submitting data...");

    //     Swal.close();

    //     await Swal.fire({
    //       title: "Success!",
    //       text: "Your data has been REVERTED.",
    //       icon: "success",
    //       timer: 3000, // Time in milliseconds (2 seconds in this case)
    //       timerProgressBar: true,
    //       showConfirmButton: false,
    //     });
    //   }
    // },
    // async endorse(id, status) {
    //   let question =
    //     "Are you sure you want to move this data to " +
    //     status.toUpperCase() +
    //     " status?";

    //   const confirmResult = await Swal.fire({
    //     title: "Confirmation Action",
    //     text: question,
    //     // icon: 'question',
    //     showCancelButton: true,
    //     confirmButtonText: "Yes",
    //     cancelButtonText: "No",
    //     customClass: {
    //       title: "con-label",
    //       content: "con-label",
    //     },
    //   });

    //   if (confirmResult.isConfirmed) {
    //     this.loading("Submitting data...");

    //     Swal.close();

    //     await Swal.fire({
    //       title: "Success!",
    //       text: "Your data has been move to " + status.toUpperCase() + ".",
    //       icon: "success",
    //       timer: 3000, // Time in milliseconds (2 seconds in this case)
    //       timerProgressBar: true,
    //       showConfirmButton: false,
    //     });
    //   }
    // },
    loading(title) {
      Swal.fire({
        title: title,
        didOpen() {
          Swal.showLoading();
        },
        allowOutsideClick: false,
        showCancelButton: false,
      });
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