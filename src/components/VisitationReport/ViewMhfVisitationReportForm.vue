<template>
  <div>
    <div class="form-main">
      <q-card>
        <q-card-section class="bg-amber-7">
          <div class="text-h6 row">
            <div class="col-md-5 col-sm-5 col-xs-12">
              <q-icon name="psychology" size="sm" />
              <span class="card-header-label">
                MHF Visitation Report
              </span>
            </div>
            <div class="col-md-7 col-sm-7 col-xs-12 text-right">
              <q-btn color="green" icon="print" size="sm" label="Print"/>
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <div class="row text-bold">
            <div class="col-md-12 col-sm-12 col-xs-12">
              MONITORING OF THE HUMAN RIGHTS
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12">
              SITUATION OF SERVICE USERS IN
            </div>
            <div class="row col-md-12 col-sm-12 col-xs-12">
              <div class="col-md-5">
                <q-input dense v-model="liberty_in" readonly/>
              </div>
              <div class="col-md-1">
                ,
              </div>
            </div>
            <div class="row col-md-12 col-sm-12 col-xs-12">
              <div class="col-md-2" style="display: flex; align-items: center;">
                CONDUCTED ON
              </div>
              <div class="col-md-4">
                <q-input dense v-model="date_conducted" readonly/>
              </div>
            </div>
            <div class="row col-md-12 col-sm-12 col-xs-12">
              x--------------------------------------------------------------x
            </div>
          </div>
          <div class="row text-bold">
            <div class="col-md-12 col-sm-12 col-xs-12 text-center q-mb-md" style="text-decoration: underline">
              MHF VISITATION REPORT
            </div>
            
            <div class="col-md-12 col-sm-12 col-xs-12">

              <q-list bordered class="rounded-borders">
                <!-- POD COMPOSITION -->
                <q-expansion-item
                  expand-separator
                  label="I.    Composition of the CHR Visiting Team: (Name and designation)"
                >
                  <q-separator></q-separator>
                    <div class="col-md-12 col-sm-12 col-xs-12 q-pa-md">
                      <div class="row q-col-gutter-sm" v-for="(row, index) in teamComposition" :key="index">
                        <div class="col-md-1  q-ml-md" style="display: flex; align-items: center;">
                          {{ index + 1 }}.
                        </div>
                        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 q-ml-none">
                          <q-input
                            type="text"
                            dense
                            label="Member Name"
                            v-model="row.member_name"
                            readonly
                          />
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                          <q-input
                            type="text"
                            dense
                            label="Position"
                            v-model="row.member_position"
                            readonly
                          />
                        </div>
                        <div class="col-lg-1 col-md-1 col-sm-12 col-xs-12 text-center">
                            <!-- <q-btn round color="green-7" icon="add" size="xs"
                              @click="onAddRow"
                            /> -->
                        </div>
                      </div>
                    </div>
                </q-expansion-item>

                <q-separator />
                  <!-- POD PROFILE -->
                  <q-expansion-item
                    expand-separator
                    label="II.     Profile of the Mental Health Facility (MHF):"
                  >
                    <q-separator></q-separator>
                    <div class="col-md-12 col-sm-12 col-xs-12 q-pa-md">
                      <div class="row col-md-12 col-sm-12 col-xs-12">
                        <div class="col-md-1 q-ml-md" style="display: flex; align-items: center;">
                          1.
                        </div>
                        <div class="col-md-10">
                            <q-input dense v-model="mhf_address" label="Address of the Facility:" readonly/>
                        </div>
                      </div>

                      <div class="row col-md-12 col-sm-12 col-xs-12">
                        <div class="col-md-1 q-ml-md" style="display: flex; align-items: center;">
                          2.
                        </div>
                        <div class="col-md-10">
                            <q-input dense v-model="mhf_contact" label="Contact Information:" readonly/>
                        </div>
                      </div>

                      <div class="row col-md-12 col-sm-12 col-xs-12">
                        <div class="col-md-1 q-ml-md" style="display: flex; align-items: center;">
                          3.
                        </div>
                        <div class="col-md-10">
                            <q-input dense v-model="mhf_head" label="Name and designation of the Head of Facility:" readonly/>
                        </div>
                      </div>

                      <div class="row col-md-12 col-sm-12 col-xs-12">
                        <div class="col-md-1 q-ml-md" style="display: flex; align-items: center;">
                          4.
                        </div>
                        <div class="col-md-10">
                            <q-input dense v-model="mhf_capacity" label="Ideal Capacity:" readonly/>
                        </div>
                      </div>

                      <div class="row col-md-12 col-sm-12 col-xs-12">
                        <div class="col-md-1 q-ml-md" style="display: flex; align-items: center;">
                          5.
                        </div>
                        <div class="col-md-10">
                            <q-input dense v-model="mhf_involuntary" label="Number of Service Users (SU) under Involuntary Confinement:" readonly/>
                        </div>
                      </div>

                      <div class="row col-md-12 col-sm-12 col-xs-12 q-mt-sm">
                        <div class="col-md-1 q-ml-md" style="display: flex; align-items: center;">
                          6.
                        </div>
                        <div class="col-md-10">
                          Breakdown of total Number of SU 
                        </div>
                      </div>
                      <div class="row q-gutter-md col-md-12 col-sm-12 col-xs-12">
                        <div class="col-md-1 q-ml-md" style="display: flex; align-items: center;"></div>
                        <div class="col-md-2">
                          <q-input type="number" dense v-model="mhf_male" label="Male/Boy:" readonly/>
                        </div>
                        <div class="col-md-2">
                          <q-input type="number" dense v-model="mhf_female" label="Female/Girl:" readonly/>
                        </div>
                        <div class="col-md-2">
                          <q-input dense v-model="mhf_total" label="TOTAL" disable/>
                        </div>
                      </div>

                      <div class="row col-md-12 col-sm-12 col-xs-12">
                        <div class="col-md-1 q-ml-md" style="display: flex; align-items: center;">
                          7.
                        </div>
                        <div class="col-md-5">
                            <q-input type="number" dense v-model="mhf_lgbtq" label="No. of SU who identified themselves as LGBTQ+:" readonly/>
                        </div>
                      </div>

                      <div class="row col-md-12 col-sm-12 col-xs-12 q-mt-sm">
                        <div class="col-md-1 q-ml-md" style="display: flex; align-items: center;">
                          8.
                        </div>
                        <div class="col-md-5">
                          <q-input type="number" dense v-model="mhf_personnel_total" label="Total number of facility personnel:" disable/>
                        </div>
                      </div>
                      <div class="row q-gutter-md col-md-12 col-sm-12 col-xs-12">
                        <div class="col-md-1 q-ml-md" style="display: flex; align-items: center;"></div>
                        <div class="col-md-2">
                          <q-input type="number" dense v-model="mhf_psych" label="Psychiatrist:" readonly/>
                        </div>
                        <div class="col-md-2">
                          <q-input type="number" dense v-model="mhf_phy" label="Other physicians:" readonly/>
                        </div>
                        <div class="col-md-2">
                          <q-input type="number" dense v-model="mhf_psy" label="Psychologist:" readonly/>
                        </div>
                        <div class="col-md-2">
                          <q-input type="number" dense v-model="mhf_nurse" label="Nurse:" readonly/>
                        </div>
                      </div>
                      <div class="row q-gutter-md col-md-12 col-sm-12 col-xs-12">
                        <div class="col-md-1 q-ml-md" style="display: flex; align-items: center;"></div>
                        <div class="col-md-2">
                          <q-input type="number" dense v-model="mhf_social" label="Social Worker:" readonly/>
                        </div>
                        <div class="col-md-2">
                          <q-input type="number" dense v-model="mhf_na" label="Nursing Aide:" readonly/>
                        </div>
                        <div class="col-md-2">
                          <q-input type="number" dense v-model="mhf_dorm" label="Dorm Manager:" readonly/>
                        </div>
                        <div class="col-md-2">
                          <q-input type="number" dense v-model="mhf_security" label="Security Personnel:" readonly/>
                        </div>
                      </div>
                      <div class="row q-gutter-md col-md-12 col-sm-12 col-xs-12">
                        <div class="col-md-1 q-ml-md" style="display: flex; align-items: center;"></div>
                        <div class="col-md-2">
                          <q-input type="number" dense v-model="mhf_others" label="Other (please specify):" readonly/>
                        </div>
                      </div>
                    </div>
                  </q-expansion-item>

                <q-separator />
                <!-- SPECIAL CATEGS -->
                <q-expansion-item
                  expand-separator
                  label="III.     Special Categories of the Persons Deprived of Liberty:"
                >
                  <q-separator/>
                  <div class="col-md-12 col-sm-12 col-xs-12 q-pa-md">
                    <q-markup-table separator="cell" wrap-cells>
                      <thead>
                        <tr>
                          <th class="text-center" rowspan="2">CATEGORY</th>
                          <th class="text-center" colspan="4">NUMBER OF PDL</th>
                          <th class="text-center" rowspan="2">
                            REMARKS<br>
                            <span class="text-caption">
                              (also state incident/s of discrimination or different treatment by facility personnel / co-PDLs, if any)
                            </span>
                          </th>
                        </tr>
                        <tr>
                          <th class="text-center">MALE / BOY</th>
                          <th class="text-center">FEMALE / GIRL</th>
                          <th class="text-center">LGBTQ+</th>
                          <th class="text-center">TOTAL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <template v-for="(row, index) in special_categories_pdl" :key="index">

                          <tr>
                            <td class="text-left">{{ row.categ }}</td>
                            <td class="text-right">
                              <q-input outlined type="number" v-model="older_person_m" dense min="0" readonly/>
                            </td>
                            <td class="text-right">
                              <q-input outlined type="number" v-model="older_person_f" dense min="0" readonly/>
                            </td>
                            <td class="text-right">
                              <q-input outlined type="number" v-model="older_person_l" dense min="0" readonly/>
                            </td>
                            <td class="text-right">
                              <q-input outlined type="number" v-model="older_person_t" dense min="0" readonly/>
                            </td>
                            <td>
                              Sample Remarks
                            </td>
                          </tr>
                        </template>
                      </tbody>
                    </q-markup-table>
                  </div>
                </q-expansion-item>

                <q-separator />
                <!-- FINDINGS / OBSERVATION -->
                <q-expansion-item
                  expand-separator
                  label="IV.     Findings/Observations:"
                  caption="(Organize categories based on Situation Report / Mandela Rules)
"
                >
                  <q-separator/>
                  <div class="col-md-12 col-sm-12 col-xs-12 q-pa-md">
                    <q-markup-table separator="cell" wrap-cells>
                      <thead>
                        <tr>
                          <th class="text-center">CATEGORY</th>
                          <th class="text-center">Findings / Observations</th>
                          <th class="text-center">Recommendations</th>
                        </tr>
                      </thead>
                      <tbody>
                        <template v-for="(row, index) in findings_observation" :key="index">

                          <tr>
                            <td class="text-left">{{ row.categ }}</td>
                            <td class="">
                              Sample Findings
                            </td>
                            <td class="">
                              Sample Recos
                            </td>
                          </tr>
                        </template>
                      </tbody>
                    </q-markup-table>
                  </div>
                </q-expansion-item>

                <q-separator />
                <!-- PROGRAMS AND SERVICES -->
                <q-expansion-item
                  expand-separator
                  label="V.  Good Practices, if any"
                >
                  <q-separator/>
                  <div class="col-md-12 col-sm-12 col-xs-12 q-pa-md">
                    <q-input type="textarea" outlined v-model="programs_services" dense readonly/>
                  </div>
                </q-expansion-item>

                <q-separator />
                <!-- INCIDENCES REPORTED -->
                <q-expansion-item
                  expand-separator
                  label="VI.      Incidences reported / monitored, if any"
                  caption="(perpetrated by POD personnel or other PDL)"
                >
                  <q-separator/>
                  <div class="col-md-12 col-sm-12 col-xs-12 q-pa-md">
                    <q-markup-table separator="cell" wrap-cells>
                      <thead>
                        <tr>
                          <th class="text-center" rowspan="2"></th>
                          <th class="text-center" colspan="2">Number of cases reported</th>
                          <th class="text-center" rowspan="2">
                            REMARKS<br>
                            <span class="text-caption">
                              (causes/updates)
                            </span>
                          </th>
                        </tr>
                        <tr>
                          <th class="text-center">During the year of visit</th>
                          <th class="text-center">During previous year</th>
                        </tr>
                      </thead>
                      <tbody>
                        <template v-for="(row, index) in incidences_reported" :key="index">

                          <tr>
                            <td class="text-left">{{ row.categ }}</td>
                            <td class="text-right">
                              10
                            </td>
                            <td class="text-right">
                              10
                            </td>
                            <td>
                              Sample Remarks
                            </td>
                          </tr>
                        </template>
                      </tbody>
                    </q-markup-table>
                  </div>
                </q-expansion-item>

                <q-separator />
                <!-- ACTIONS TAKEN BY POD -->
                <q-expansion-item
                  expand-separator
                  label="VII. Actions taken by the MHF personnel"
                >
                  <q-separator/>
                  <div class="col-md-12 col-sm-12 col-xs-12 q-pa-md">
                    <q-input type="textarea" outlined v-model="action_taken_pod" dense readonly/>
                  </div>
                </q-expansion-item>

                <q-separator />
                <!-- ACTIONS TAKEN BY TEAM -->
                <q-expansion-item
                  expand-separator
                  label="VIII. Actions taken by the CHR visiting team"
                >
                  <q-separator/>
                  <div class="col-md-12 col-sm-12 col-xs-12 q-pa-md">
                    <q-input type="textarea" outlined v-model="action_taken_chr" dense readonly/>
                  </div>
                </q-expansion-item>

                <q-separator />
                <!-- RECOMMENDATIONS / ACTIONS -->
                <q-expansion-item
                  expand-separator
                  label="IX.   Recommendations / Actions to be taken"
                >
                  <q-separator/>
                  <div class="col-md-12 col-sm-12 col-xs-12 q-pa-md">
                    <q-input type="textarea" outlined v-model="action_to_be_taken" dense readonly/>
                  </div>
                </q-expansion-item>

                <q-separator />
                <!-- CHOOSE MONITORING TOOLS -->
                <q-expansion-item
                  expand-separator
                  label="Monitoring Tools Used"
                >
                  <q-separator/>
                  <div class="col-md-12 col-sm-12 col-xs-12 q-pa-md">
                    <div class="row q-col-gutter-sm" v-for="(row, index) in monitotingToolsUsed" :key="index">
                      <div class="col-md-4 col-sm-4 col-xs-12 q-pa-md">
                        <q-select
                          dense
                          outlined
                          input-debounce="0"
                          :options="genderMoniToolOptions"
                          v-model="row.genderTools"
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
                          v-model="row.monitoringTools"
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
                      <div class="col-lg-1 col-md-1 col-sm-12 col-xs-12 text-center">
                          <q-btn round color="green-7" icon="add" size="xs"
                            @click="onAddMonitoringTool"
                          />
                      </div>
                    </div>
                  </div>
                  <!-- <div class="row col-md-12 col-sm-12 col-xs-12">
                    <div class="col-md-4 col-sm-4 col-xs-12 q-pa-md">
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
                  </div> -->
                  
                </q-expansion-item>
              </q-list>
              
            </div>

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
                <template v-if="!showStatus">

                  <div class="q-gutter-sm" v-if="userRole == 'VT_LEADER' || userRole == 'RD' || userRole == 'OIC_PC'">

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
                  </div>
                  <div class="q-gutter-sm" v-if="userRole == 'CI' || userRole == 'DC'">

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
                  </div>
                  <div class="q-gutter-sm" v-if="['PMO', 'OIC', 'ED'].includes(userRole)">
                    <span class="text-bold text-h5">Approved</span>
                  </div>

                </template>
                <template v-else>
                  <div class="q-gutter-sm">
                    <span class="text-bold text-h5">{{ pvr_status }}</span>
                  </div>
                </template>
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
      btnRoles: ["PMO", "ED", "CHAIRPERSON", "DIRECTOR", "OIC"],
      userRole: localStorage.getItem("role"),
      pvr_status: "", 
      showStatus: false, 

      liberty_in: "Clinic of the Holy Spirit, Quezon City", 
      date_conducted: "May 24, 2024", 
      teamComposition: [{ member_name: "VT Leader Name", member_position: "Leader" }, { member_name: "VT Memeber Name", member_position: "Member" }, { member_name: "VT Member Two", member_position: "Member" }], 

      mhf_address: "Quezon City", 
      mhf_contact: "09123456798", 
      mhf_head: "SPO2 Juana Dela Cruz", 
      mhf_capacity: "600", 
      mhf_involuntary: "10", 
      mhf_male: "350", 
      mhf_female: "219", 
      mhf_total: "569", 
      mhf_lgbtq: "53", 
      mhf_personnel_total: "80", 
      mhf_psych: "10", 
      mhf_phy: "10", 
      mhf_psy: "10", 
      mhf_nurse: "10", 
      mhf_social: "10", 
      mhf_na: "10", 
      mhf_dorm: "10", 
      mhf_security: "10", 
      mhf_others: "", 

      special_categories_pdl: [
        {
          categ: "Older Persons (60 years old and above)", 
          vmodel: "older_person_"
        }, 
        {
          categ: "Minors (below 18 years of age)", 
          vmodel: "minor_person_"
        }, 
        {
          categ: "Terminally Ill", 
          vmodel: "ill_person_"
        }, 
        {
          categ: "Persons with Disability", 
          vmodel: "pwd_person_"
        }, 
        {
          categ: "Persons Deprived of Liberty", 
          vmodel: "mental_person_"
        }, 
        {
          categ: "Pregnant Women", 
          vmodel: "pregnant_person_"
        }, 
        {
          categ: "SU with substance abuse problems", 
          vmodel: "victim_person_"
        }, 
        {
          categ: "Indigenous People", 
          vmodel: "indigenous_person_"
        }, 
        {
          categ: "Other (please specify)", 
          vmodel: "political_person_"
        }, 
      ], 

      findings_observation: [
        {
          categ: "1. Register, Information, and Records", 
          vmodel: "vmodel"
        }, 
        {
          categ: "2. Facility Standards", 
          vmodel: "vmodel"
        }, 
        {
          categ: "3. Sleeping Conditions", 
          vmodel: "vmodel"
        }, 
        {
          categ: "4. Hygiene and Sanitary Requirements", 
          vmodel: "vmodel"
        }, 
        {
          categ: "5. Food and Drinking Water", 
          vmodel: "vmodel"
        }, 
        {
          categ: "6. Exercise, Sport, Recreation, and Spiritual Activities", 
          vmodel: "vmodel"
        }, 
        {
          categ: "7. Treatment and Other Services", 
          vmodel: "vmodel"
        }, 
        {
          categ: "8. Restrictions, discipline, and sanctions", 
          vmodel: "vmodel"
        }, 
        {
          categ: "9. Conduct of searches", 
          vmodel: "vmodel"
        }, 
        {
          categ: "10. Information on facility regulation, and SU rights and obligations", 
          vmodel: "vmodel"
        }, 
        {
          categ: "11. Complaints", 
          vmodel: "vmodel"
        }, 
        {
          categ: "12. Communication and Visits", 
          vmodel: "vmodel"
        }, 
        {
          categ: "13. Notification of Death, Illness and Transfer", 
          vmodel: "vmodel"
        }, 
        {
          categ: "14. Investigation on Deaths, Disappearances, Torture or other Cruel, Inhuman or Degrading Treatment or Punishment (CIDTP) ", 
          vmodel: "vmodel"
        }, 
        {
          categ: "15. MHF Personnel", 
          vmodel: "vmodel"
        }, 
        {
          categ: "16. Others", 
          vmodel: "vmodel"
        }
      ], 

      incidences_reported:[
        {
          categ: "Death/s", 
          vmodel: "vmodel"
        }, 
        {
          categ: "Torture incident/s", 
          vmodel: "vmodel"
        }, 
        {
          categ: "Escape", 
          vmodel: "vmodel"
        }, 
        {
          categ: "Suicide", 
          vmodel: "vmodel"
        }, 
        {
          categ: "Gender-based violence", 
          vmodel: "vmodel"
        }, 
      ],

      programs_services: "Remarks on Programs and Services for PDLs", 
      action_taken_pod: "Remarks on Action Taken by the POD Personnel", 
      action_taken_chr: "Remarks on Action Taken by the CHR Visiting Team", 
      action_to_be_taken: "Remarks on Action to be taken", 

      genderMoniToolOptions: [
        "Male", "Female"
      ], 
      moniToolsOptions: [
        "Monitoring Tool for Jails and Prison Facilities", 
        "Interview Tool for PDL - Jails and Prison  Facilities", 
        "Monitoring Tool for PNP, PDEA, and  other  Detention Facilities", 
        "Interview Tool for PDL - PNP, PDEA  and other Detention  Facilities", 
        "Monitoring Tool for Child-Caring  Facilities", 
        "FGD Tool for Children Deprived of  their Liberty (CDL)", 
        "Monitoring Tool for Mental Health Facility", 
        "Service User Interview Form"
      ], 
      genderTools: null, 
      monitoringTools: null, 
      monitotingToolsUsed: [{ genderTools: null, monitoringTools: null }], 
    }),

    computed: {
      
    },

    watch: {
      pod_male(newVal){
        console.log(newVal)
        var female = this.pod_female != null ? this.pod_female : 0;
        this.pod_total = parseInt(newVal) + parseInt(female);
      },
      pod_female(newVal){
        console.log(newVal)
        var male = this.pod_male != null ? this.pod_male : 0;
        this.pod_total = parseInt(newVal) + parseInt(male);
      }, 

      pod_custodial(newVal){
        var pod_admin = this.pod_admin != null ? this.pod_admin : 0;
        var pod_medical = this.pod_medical != null ? this.pod_medical : 0;
        this.pod_personnel_total = parseInt(newVal) + parseInt(pod_admin) + parseInt(pod_medical);
      },
      pod_admin(newVal){
        var pod_custodial = this.pod_custodial != null ? this.pod_custodial : 0;
        var pod_medical = this.pod_medical != null ? this.pod_medical : 0;
        this.pod_personnel_total = parseInt(newVal) + parseInt(pod_custodial) + parseInt(pod_medical);
      },
      pod_medical(newVal){
        var pod_admin = this.pod_admin != null ? this.pod_admin : 0;
        var pod_custodial = this.pod_custodial != null ? this.pod_custodial : 0;
        this.pod_personnel_total = parseInt(newVal) + parseInt(pod_admin) + parseInt(pod_custodial);
      },
      // "row.genderTools"(newVal){
      //   console.log(newVal)
      //   this.monitoringTools = [];
      //   if(newVal == 'Male'){
      //     this.moniToolsOptions = [
      //       "Monitoring Tool for Jails and Prison Facilities", 
      //       "Interview Tool for PDL - Jails and Prison  Facilities", 
      //       "Monitoring Tool for PNP, PDEA, and  other  Detention Facilities", 
      //       "Interview Tool for PDL - PNP, PDEA  and other Detention  Facilities", 
      //       "Monitoring Tool for Child-Caring  Facilities", 
      //       "FGD Tool for Children Deprived of  their Liberty (CDL)", 
      //       "Monitoring Tool for Mental Health Facility", 
      //       "Service User Interview Form"
      //     ];
      //   }else{
      //     this.moniToolsOptions = [
      //       "Monitoring Tool for Jails and Prison Facilities", 
      //       "Interview Tool for PDL - Jails and Prison  Facilities",
      //       "Monitoring Tool for PNP, PDEA, and  other  Detention Facilities",
      //       "Interview Tool for PDL - PNP, PDEA  and other Detention  Facilities",
      //       "Monitoring Tool for Child-Caring  Facilities",
      //       "FGD Tool for Children Deprived of  their Liberty (CDL)",
      //       "Monitoring Tool for Mental Health Facility (MHF)",
      //       "Service User Interview Form",
      //     ];
      //   }
      // }
    },
    
    methods: {
      async initApp() {

      }, 

      onAddRow(){
        this.teamComposition.push({ member_name: null, member_position: null });
      }, 

      onAddMonitoringTool(){
        this.monitotingToolsUsed.push({ genderTools: null, monitoringTools: null }); 
      }, 

      onBack(){
        let checkUrl = window.location.href;
        console.log('checkUrl',checkUrl)
        

        this.$router.push({
          name: "pod-visitation-report",
        });
      // if(checkUrl.includes('approved-pod-plan')){
        //   this.$router.push({
        //     name: "approved-pod-plan",
        //   });
        // }else if(checkUrl.includes('visitation-plan')){
        //   this.$router.push({
        //     name: "visitation-plan",
        //   });
        // }
      }, 

      onSave(){
        Swal.fire({
          title: "Success!",
          text: "POD Visitation Report has been successfully approved.",
          icon: "success",
        }).then((result) => {
          location.reload();
        });
      },

      onApprove(){
        Swal.fire({
          title: "Success!",
          text: "POD Visitation Report has been successfully approved.",
          icon: "success",
        }).then((result) => {
          this.pvr_status = "Approved";
          this.showStatus = true;
        });
      }, 

      onEndorse(){
        Swal.fire({
          title: "Success!",
          text: "POD Visitation Report has been successfully endorsed.",
          icon: "success",
        }).then((result) => {
          this.pvr_status = "Endorsed";
          this.showStatus = true;
        });
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