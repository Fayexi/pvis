<template>
  <div>
    <div class="form-main">
      <q-card>
        <q-card-section class="bg-amber-7">
          <div class="text-h6">
            <q-icon name="description" size="sm" />
            <span class="card-header-label"> Mission Order </span>
          </div>
          <div
            class="absolute-bottom-right q-pr-md"
            style="transform: translateY(50%); z-index: 100"
          >
            <q-btn fab icon="add" color="green-5" @click="onCreatePod" />
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
              :rows="tblMoRows"
              :columns="tblMoCols"
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
                        label="View Mission Order"
                        @click="onSelectItem(props.row.id)"
                      />
                      <q-btn
                        v-if="props.row.travelOrder == true"
                        icon="open_in_new"
                        flat
                        color="primary"
                        size="sm"
                        label="View Travel Order"
                        @click="onSelectItemTravel(props.row.id)"
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
    <q-card style="width: 900px; max-width: 100vw">
      <q-form ref="form" @validation-error="onValidationError" greedy>
        <div>
          <q-card-section style="background-color: rgb(0, 183, 255)">
            <div class="row justify-start" style="font-size: 17px">
              <div
                style="
                  border-top-left-radius: 10px;
                  border-bottom-left-radius: 10px;
                "
                :class="{
                  'col-2': true,
                  openedForms: openForm.includes(1),
                  currForms: formPage == 1,
                }"
              >
                Compose VT
              </div>

              <div
                v-if="openForm.includes(2)"
                :class="{
                  'col-3': true,
                  openedForms: openForm.includes(2),
                  currForms: formPage == 2,
                }"
              >
                / Compose Mission Order
              </div>

              <div
                v-if="openForm.includes(3)"
                :class="{
                  'col-3': true,
                  openedForms: openForm.includes(3),
                  currForms: formPage == 3,
                }"
              >
                / Overview
              </div>
            </div>
          </q-card-section>

          <q-separator class="mb-5" style="margin-bottom: 15px" />

          <q-card-section class="q-pt-none">
            <div class="row q-col-gutter-md" v-if="formPage == 1">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-select
                  outlined
                  dense
                  v-model="mission.teamLead.leader"
                  :options="teamLeaderOptions"
                  label="Team Leader"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-input
                  outlined
                  dense
                  v-model="mission.teamLead.leader_position"
                  label="Position"
                />
              </div>
              <div class="col-12">
                <div
                  class="row justify-around"
                  v-for="mem in mission.teamMem"
                  :key="mem.name"
                  style="margin-top: 5px !important"
                >
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <q-select
                      outlined
                      dense
                      v-model="mem.member"
                      :options="teamMemberOptions"
                      label="Member"
                    />
                  </div>
                  <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <q-select
                      outlined
                      dense
                      :options="teamMemberOptions"
                      v-model="mem.member_position"
                      label="Position"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <q-btn @click="addMember" class="bg-blue-3">
                  <q-icon name="add_circle" size="sm" color="green-9"></q-icon>
                  &nbsp; Add Team Member
                </q-btn>
              </div>
            </div>

            <div class="row q-col-gutter-md" v-if="formPage == 2">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-input
                  type="input"
                  v-model="mission.date_visit"
                  dense
                  outlined
                  standout
                  bottom-slots
                  label="Subject"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-input
                  type="date"
                  v-model="mission.date_visit"
                  dense
                  outlined
                  standout
                  bottom-slots
                  label="Date of preparation"
                />
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-input
                  outlined
                  dense
                  v-model="mission.pod"
                  label="Place of Deprivation of Liberty"
                />
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-input outlined dense v-model="mission.pod" label="Address" />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-input
                  type="date"
                  v-model="mission.date_visit"
                  dense
                  outlined
                  standout
                  bottom-slots
                  label="Date of Visit"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-select
                  v-model="mission.officer_name"
                  dense
                  outlined
                  standout
                  bottom-slots
                  :options="officerOptions"
                  label="Name of Officer "
                />
              </div>
              <div>
                <q-checkbox
                  v-model="mission.r_travelOrder"
                  label="Require Travel Order"
                />
              </div>
              <div class="col-12" v-if="mission.r_travelOrder == true">
                <div class="row q-col-gutter-md">
                  <!-- <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      type="date"
                      v-model="mission.date_visit"
                      dense
                      outlined
                      standout
                      bottom-slots
                      label="Date "
                    />
                  </div> -->
                  <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <q-input
                      outlined
                      dense
                      standout
                      bottom-slots
                      v-model="mission.pod"
                      label="TRAVEL ORDER NO."
                    />
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      type="date"
                      v-model="mission.date_visit"
                      dense
                      outlined
                      standout
                      bottom-slots
                      label="DEPARTURE DATE "
                    />
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      type="date"
                      v-model="mission.date_visit"
                      dense
                      outlined
                      standout
                      bottom-slots
                      label="RETURN DATE "
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <q-select
                      v-model="mission.date_visit"
                      dense
                      outlined
                      standout
                      bottom-slots
                      :options="teamMemberOptions"
                      label="RECOMMENDING APPROVAL"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <q-select
                      v-model="mission.date_visit"
                      dense
                      outlined
                      standout
                      bottom-slots
                      :options="teamMemberOptions"
                      label="APPROVED BY"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      dense
                      standout
                      bottom-slots
                      v-model="mission.pod"
                      label="DESTINATION :"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      dense
                      standout
                      bottom-slots
                      v-model="mission.pod"
                      label="PURPOSE :"
                    />
                  </div>
                </div>
                <!-- <div class="row justify-around">
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      type="date"
                      v-model="mission.date_visit"
                      dense
                      outlined
                      standout
                      bottom-slots
                      label="DEPARTURE DATE "
                    />
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      type="date"
                      v-model="mission.date_visit"
                      dense
                      outlined
                      standout
                      bottom-slots
                      label="RETURN DATE "
                    />
                  </div>
                </div> -->
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      dense
                      standout
                      bottom-slots
                      v-model="mission.pod"
                      label="REMARKS OR SPECIAL INSTRUCTIONS"
                    />
                  </div>
                </div>
                <!-- <div class="row justify-around">
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-select
                      v-model="mission.date_visit"
                      dense
                      outlined
                      standout
                      bottom-slots
                      :options="teamMemberOptions"
                      label="RECOMMENDING APPROVAL"
                    />
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-select
                      v-model="mission.date_visit"
                      dense
                      outlined
                      standout
                      bottom-slots
                      :options="teamMemberOptions"
                      label="APPROVED BY"
                    />
                  </div> -->
                <!-- </div> -->
              </div>
            </div>

            <div v-if="formPage == 3">
              <div class="row" style="margin: 10px; border: 1px solid gray">
                <div class="col-12">
                  <div class="row justify-center">
                    <div class="col-4">
                      <q-img
                        shadow-3
                        src="~assets/images/chr_logo.png"
                        spinner-color="white"
                        style="
                          height: 200px;
                          max-width: 200px;
                          margin-left: 40px;
                        "
                      />
                    </div>
                  </div>
                </div>
                <div class="col-12 text-center text-amber-7">
                  REPUBLIC OF THE PHILIPPINES
                </div>
                <div class="col-12 text-h6 text-center text-amber-7">
                  COMMISSION ON HUMAN RIGHTS
                </div>
                <div class="col-12 text-h5 text-center text-amber-7">
                  MiSSION ORDER
                </div>
                <div class="col-12 text-right" style="padding: 20px !important">
                  M.O. No. __________________
                </div>
                <div class="col-12" style="padding: 20px !important">
                  <div class="row justify-center">
                    <div class="col-1 text-start"><strong> To :</strong></div>
                    <div class="col-8">
                      <table style="width: 100%">
                        <tr>
                          <td style="border-bottom: 2px black solid">
                            KIM (Team Leader)
                          </td>
                          <td style="border-bottom: 2px black solid">
                            (Position)
                          </td>
                        </tr>
                        <tr>
                          <td style="border-bottom: 2px black solid">
                            (name of the CHR Personnel)
                          </td>
                          <td style="border-bottom: 2px black solid">
                            (Position)
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
                <div
                  class="col-12"
                  style="
                    padding-left: 20px !important;
                    padding-right: 20px !important;
                    padding-top: 5px !important;
                  "
                >
                  <div class="row justify-center">
                    <div class="col-1 text-start">
                      <strong> Subject :</strong>
                    </div>
                    <div class="col-8">
                      <strong
                        >MONITORING OF THE HUMAN RIGHTS CONDITIONS OF
                        PDLs</strong
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="col-12"
                  style="
                    padding-left: 20px !important;
                    padding-right: 20px !important;
                    padding-top: 5px !important;
                  "
                >
                  <div class="row justify-center">
                    <div class="col-1 text-start">
                      <strong> Date :</strong>
                    </div>
                    <div class="col-8">
                      <strong>(date the Mission Order is being issued)</strong>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <hr />
                </div>
                <div class="col-12" style="padding-top: 10px">
                  <div class="row justify-center">
                    <div class="col-7 text-right">
                      Pursuant to the provision of Section 18, Article XIII of
                      the Philippine
                    </div>
                  </div>
                  <div class="row justify-center">
                    <div class="col-7 text-right">
                      <span>
                        Constitution, and Section 3 of Executive Order No. 163,
                        Series of 1987, by the
                      </span>
                    </div>
                  </div>
                  <div class="row justify-center">
                    <div class="col-7 text-left">
                      &nbsp; &nbsp; &nbsp; President of the Philippines, you are
                      hereby directed to proceed to:
                    </div>
                  </div>
                </div>
                <div
                  class="col-12 text-center"
                  style="
                    border-bottom: 1px solid black;
                    padding-top: 15px !important;
                  "
                >
                  (place of deprivation of liberty)
                </div>
                <div class="col-12 text-center" style="padding-top: 20px">
                  <div class="row justify-center">
                    <div class="col-7 text-left">
                      <span>
                        &nbsp; &nbsp; &nbsp;on (date of visit) to monitor the
                        human rights condition of the PDLs therein.
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-12 text-center" style="padding-top: 15px">
                  <div class="row justify-center">
                    <div class="col-6">
                      <span>
                        Please submit report upon completion of this mission.
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-12" style="padding-top: 30px">
                  <div class="row justify-end">
                    <div class="col-3 text-center">
                      <span style="text-decoration: underline">
                        (Signature over printed name)
                      </span>
                      <br />
                      <strong> Approving Officer </strong>
                    </div>
                  </div>
                </div>
                <div class="col-12 text-center" style="padding-top: 40px">
                  <div class="row justify-center">
                    <div
                      class="col-7 text-center text-amber-7"
                      style="border-bottom: 1px solid"
                    >
                      <span>
                        CHR ng lahat: Naglilingkod maging sino ka man
                      </span>
                    </div>
                  </div>
                  <div class="col-12 text-center" style="padding-top: 5px">
                    <div class="row justify-center">
                      <div class="col-7 text-amber-7">
                        <span>
                          Commonwealth Avenue, U.P. Complex, Diliman, Quezon
                          City, Philippines 1101
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-12 text-center text-amber-7"
                    style="padding-top: 5px"
                  >
                    <div class="row justify-center">
                      <div class="col-8">
                        <span> Tel. NOs. (02) 8294 8704 • (02) 8925 3886 </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" style="margin: 10px; border: 1px solid gray">
                <div style="padding: 10px">
                  <div class="row justify-center">
                    <div class="col-8">
                      <div
                        style="width: 100%"
                        separator="none"
                        class="no-cell-padding"
                      >
                        <tr style="width: 100%">
                          <td rowspan="2" class="tcellTop" style="width: 180px">
                            <div class="small-img-container">
                              <q-img
                                sizes="20px"
                                shadow-3
                                src="~assets/images/chr_logo.png"
                                spinner-color="white"
                              />
                            </div>
                          </td>
                          <td colspan="2" class="tcellTop" style="width: 695px">
                            <div class="text-center text-h5">
                              COMMISSION ON HUMAN RIGHTS TRAVEL ORDER
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2" class="tcellTop text-center text-h6">
                            Prevention Cluster
                          </td>
                        </tr>
                      </div>
                      <div
                        style="width: 100%; margin-top: 30px"
                        separator="none"
                        class="no-cell-padding"
                      >
                        <tr>
                          <td class="tcell" style="width: 500px; padding: 2px">
                            <strong> DATE: </strong> 20-24 November 2023
                          </td>
                          <td class="tcell" style="width: 500px; padding: 2px">
                            <strong> TRAVEL ORDER NO.: </strong>
                            PREV-TO-14K23-013
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2" class="tcell">
                            <strong> DESTINATION:</strong> Gems Hotel and
                            Conference Center, Antipolo Rizal
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2" class="tcell">
                            <strong> DESTINATION:</strong> Gems Hotel and
                            Conference Center, Antipolo Rizal
                          </td>
                        </tr>
                        <tr>
                          <td class="tcell">
                            <strong> DEPARTURE DATE: </strong> 20 November 2023
                          </td>
                          <td class="tcell">
                            <strong> RETURN DATE: </strong> 24 November 2023
                          </td>
                        </tr>
                      </div>
                      <div
                        style="width: 100%"
                        separator="none"
                        class="no-cell-padding"
                      >
                        <tr style="width: 100%">
                          <td class="tcell text-center" style="width: 360px">
                            <strong> NAME </strong>
                          </td>
                          <td class="tcell text-center" style="width: 250px">
                            <strong> DESIGNATION </strong>
                          </td>
                          <td class="tcell text-center" style="width: 250px">
                            <strong> OFFICE </strong>
                          </td>
                        </tr>
                        <tr>
                          <td class="tcell">ATTY. JULIE ANN B. REGALADO</td>
                          <td class="tcell">OFFICER-IN-CHARGE</td>
                          <td class="tcell">PREVENTION CLUSTER</td>
                        </tr>
                        <tr>
                          <td class="tcell">ATTY. JULIE ANN B. REGALADO</td>
                          <td class="tcell">OFFICER-IN-CHARGE</td>
                          <td class="tcell">PREVENTION CLUSTER</td>
                        </tr>
                        <tr>
                          <td class="tcell">ATTY. JULIE ANN B. REGALADO</td>
                          <td class="tcell">OFFICER-IN-CHARGE</td>
                          <td class="tcell">PREVENTION CLUSTER</td>
                        </tr>
                        <tr>
                          <td class="tcell">ATTY. JULIE ANN B. REGALADO</td>
                          <td class="tcell">OFFICER-IN-CHARGE</td>
                          <td class="tcell">PREVENTION CLUSTER</td>
                        </tr>
                        <tr>
                          <td class="tcell">ATTY. JULIE ANN B. REGALADO</td>
                          <td class="tcell">OFFICER-IN-CHARGE</td>
                          <td class="tcell">PREVENTION CLUSTER</td>
                        </tr>
                      </div>
                      <div style="width: 100%" separator="none">
                        <tr style="width: 100%">
                          <td colspan="2" class="tcell" style="width: 1000px">
                            <strong> REMARKS OR SPECIAL INSTRUCTIONS:</strong>
                            <br />
                            <div
                              style="min-height: 40px"
                              class="row justify-center"
                            >
                              <div class="col-8"></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="tcell">
                            <strong> DEPARTURE DATE: </strong> 20 November 2023
                          </td>
                          <td class="tcell">
                            <strong> RETURN DATE: </strong> 24 November 2023
                          </td>
                        </tr>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </div>
      </q-form>

      <q-card-actions align="right" class="bg-white text-teal">
        <div class="q-gutter-sm q-pa-sm">
          <q-btn
            icon="close"
            @click="closeFrom"
            color="red"
            label="Close"
            v-close-popup
          />
          <q-btn
            v-if="formPage > 1"
            icon="send"
            color="blue-7"
            label="BACK"
            @click="prevForm"
          />
          <q-btn
            v-if="formPage == 3"
            icon="send"
            color="green-7"
            label="Submit"
            @click="onConfirmSubmission"
          />
          <q-btn
            v-if="formPage != 3"
            icon="send"
            color="green-7"
            label="Next"
            @click="nextForm"
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import { MISSION_ORDER_TABLE_COLUMNS } from "src/utils/table-columns/mission-order-table";

export default {
  data: () => ({
    showAddPodDialog: false,
    formPage: 1,
    openForm: [],

    teamLeaderOptions: ["Team Leader 1"],
    officerOptions: ["Officer 1", "Officer 2"],

    teamMemberOptions: [
      "Team Member 1",
      "Team Member 2",
      "Team Member 3",
      "Team Member 4",
    ],
    teamMemPosOptions: [
      " Position 1",
      " Position 2",
      " Position 3",
      " Position 4",
    ],

    mission: {
      r_travelOrder: false,
      travelOrder: {},
      teamLead: {
        leader: "Team Leader 1",
        leader_position: " Position 1",
      },
      teamMem: [
        { member: "Team Member 1", member_position: " Position 1" },
        { member: "Team Member 2", member_position: " Position 2" },
      ],
      pod: null,
      date_issued: null,
      date_visit: null,
    },

    tblMoCols: [...MISSION_ORDER_TABLE_COLUMNS],

    tblMoRows: [
      {
        team_leader: "Sample",
        position: "Sample",
        pod: "Sample",
        date_issued: "Sample",
        date_visit: "Sample",
        travelOrder: true,
        action: "Sample",
      },
      {
        team_leader: "Sample",
        position: "Sample",
        pod: "Sample",
        date_issued: "Sample",
        date_visit: "Sample",
        travelOrder: false,
        action: "Sample",
      },
    ],
  }),

  computed: {},

  watch: {},

  methods: {
    onSelectItem() {
      this.$router.push({ name: "mission-order-view" });
    },
    onSelectItemTravel() {
      this.$router.push({ name: "travel-order-view" });
    },

    addMember() {
      let mem = { member: "Team Member 1", member_position: " Position 1" };
      this.mission.teamMem.push(mem);
    },
    async initApp() {},

    onCreatePod() {
      this.showAddPodDialog = true;
      this.openForm.push(1);
    },
    nextForm() {
      this.formPage++;
      this.openForm.push(this.formPage);
      console.log(this.openForm);
    },
    prevForm() {
      this.formPage--;
      this.openForm.splice(this.formPage, 1);
      console.log(this.openForm);
    },
    closeFrom() {
      this.openForm = [];
      this.formPage = 1;
      // this.mission = {};
    },
  },

  mounted() {
    this.initApp();
  },
};
</script>
<style lang="scss" scoped>
.openedForms {
  background-color: rgb(245, 228, 0);
  padding-left: 5px;
  font-style: italic;
}
.text-wrap-normal {
  white-space: normal;
  word-wrap: break-word;
}
.currForms {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.tcell {
  border: 1px solid black;
  padding: 5px;
}
.tcellTop {
  border: 1px solid black;
  /* height: 50px !important; */
}
.small-img-container {
  margin-left: 35px;
  padding: 5px;
  max-width: 120px; /* Adjust the width here */
}
.no-cell-padding .q-td,
.no-cell-padding .q-th {
  padding: 0; /* Remove padding from table cells */
}
</style>