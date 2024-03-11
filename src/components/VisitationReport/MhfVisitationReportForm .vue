<template>
    <div>
      <div class="form-main">
        <q-card>
          <q-card-section class="bg-amber-7">
            <div class="text-h6">
              <q-icon name="edit_square" size="sm" />
              <span class="card-header-label">
                Create MHF Visitation Report
              </span>
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
                  <q-input dense v-model="liberty_in"/>
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
                  <q-input type="date" dense v-model="date_conducted"/>
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
                            />
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <q-input
                              type="text"
                              dense
                              label="Position"
                              v-model="row.member_position"
                            />
                          </div>
                          <div class="col-lg-1 col-md-1 col-sm-12 col-xs-12 text-center">
                              <q-btn round color="green-7" icon="add" size="xs"
                                @click="onAddRow"
                              />
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
                            <q-input dense v-model="pod_address" label="Address of the Facility:"/>
                        </div>
                      </div>

                      <div class="row col-md-12 col-sm-12 col-xs-12">
                        <div class="col-md-1 q-ml-md" style="display: flex; align-items: center;">
                          2.
                        </div>
                        <div class="col-md-10">
                            <q-input dense v-model="pod_address" label="Contact Information:"/>
                        </div>
                      </div>

                      <div class="row col-md-12 col-sm-12 col-xs-12">
                        <div class="col-md-1 q-ml-md" style="display: flex; align-items: center;">
                          3.
                        </div>
                        <div class="col-md-10">
                            <q-input dense v-model="pod_address" label="Name and designation of the Head of Facility:"/>
                        </div>
                      </div>

                      <div class="row col-md-12 col-sm-12 col-xs-12">
                        <div class="col-md-1 q-ml-md" style="display: flex; align-items: center;">
                          4.
                        </div>
                        <div class="col-md-10">
                            <q-input dense v-model="pod_address" label="Ideal Capacity:"/>
                        </div>
                      </div>

                      <div class="row col-md-12 col-sm-12 col-xs-12">
                        <div class="col-md-1 q-ml-md" style="display: flex; align-items: center;">
                          5.
                        </div>
                        <div class="col-md-10">
                            <q-input dense v-model="pod_address" label="Number of Service Users (SU) under Involuntary Confinement:"/>
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
                          <q-input type="number" dense v-model="pod_male" label="Male/Boy:"/>
                        </div>
                        <div class="col-md-2">
                          <q-input type="number" dense v-model="pod_female" label="Female/Girl:"/>
                        </div>
                        <div class="col-md-2">
                          <q-input dense v-model="pod_total" label="TOTAL" disable/>
                        </div>
                      </div>

                      <div class="row col-md-12 col-sm-12 col-xs-12">
                        <div class="col-md-1 q-ml-md" style="display: flex; align-items: center;">
                          7.
                        </div>
                        <div class="col-md-5">
                            <q-input type="number" dense v-model="pod_lgbtq" label="No. of SU who identified themselves as LGBTQ+:"/>
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
                          <q-input type="number" dense v-model="mhf_psych" label="Psychiatrist:"/>
                        </div>
                        <div class="col-md-2">
                          <q-input type="number" dense v-model="mhf_phy" label="Other physicians:"/>
                        </div>
                        <div class="col-md-2">
                          <q-input type="number" dense v-model="mhf_psy" label="Psychologist:"/>
                        </div>
                        <div class="col-md-2">
                          <q-input type="number" dense v-model="mhf_psy" label="Nurse:"/>
                        </div>
                      </div>
                      <div class="row q-gutter-md col-md-12 col-sm-12 col-xs-12">
                        <div class="col-md-1 q-ml-md" style="display: flex; align-items: center;"></div>
                        <div class="col-md-2">
                          <q-input type="number" dense v-model="mhf_psy" label="Social Worker:"/>
                        </div>
                        <div class="col-md-2">
                          <q-input type="number" dense v-model="mhf_psy" label="Nursing Aide:"/>
                        </div>
                        <div class="col-md-2">
                          <q-input type="number" dense v-model="mhf_psy" label="Dorm Manager:"/>
                        </div>
                        <div class="col-md-2">
                          <q-input type="number" dense v-model="mhf_psy" label="Security Personnel:"/>
                        </div>
                      </div>
                      <div class="row q-gutter-md col-md-12 col-sm-12 col-xs-12">
                        <div class="col-md-1 q-ml-md" style="display: flex; align-items: center;"></div>
                        <div class="col-md-2">
                          <q-input type="number" dense v-model="mhf_psy" label="Other (please specify):"/>
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
                                <q-input outlined type="number" v-model="older_person_m" dense min="0"/>
                              </td>
                              <td class="text-right">
                                <q-input outlined type="number" v-model="older_person_f" dense min="0"/>
                              </td>
                              <td class="text-right">
                                <q-input outlined type="number" v-model="older_person_l" dense min="0"/>
                              </td>
                              <td class="text-right">
                                <q-input outlined type="number" v-model="older_person_t" dense min="0"/>
                              </td>
                              <td class="text-right">
                                <q-input outlined v-model="older_person_remarks" dense/>
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
                              <td class="text-right">
                                <q-input outlined v-model="older_person_remarks" dense/>
                              </td>
                              <td class="text-right">
                                <q-input outlined v-model="older_person_remarks" dense/>
                              </td>
                              <td class="text-right">
                                <q-input outlined v-model="older_person_remarks" dense/>
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
                      <q-input type="textarea" outlined v-model="programs_services" dense/>
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
                                <q-input outlined type="number" v-model="older_person_m" dense min="0"/>
                              </td>
                              <td class="text-right">
                                <q-input outlined type="number" v-model="older_person_f" dense min="0"/>
                              </td>
                              <td class="text-right">
                                <q-input outlined v-model="older_person_remarks" dense/>
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
                      <q-input type="textarea" outlined v-model="programs_services" dense/>
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
                      <q-input type="textarea" outlined v-model="programs_services" dense/>
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
                      <q-input type="textarea" outlined v-model="programs_services" dense/>
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
                  <div class="q-gutter-sm">
                    <q-btn
                      label="Save"
                      icon="save"
                      color="green"
                      @click="onSave()"
                    />
                    <q-btn
                      label="Cancel"
                      icon="close"
                      color="red"
                    />
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
        btnRoles: ["PMO", "ED", "CHAIRPERSON", "DIRECTOR", "OIC"],
        userRole: localStorage.getItem("role"),
        teamComposition: [{ member_name: null, member_position: null }, { member_name: null, member_position: null }, { member_name: null, member_position: null }], 

        pod_male: null,
        pod_female: null,
        pod_total: null, 

        mhf_personnel_total: null,
        pod_custodial: null,
        pod_admin: null,
        pod_medical: null, 

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
          this.mhf_personnel_total = parseInt(newVal) + parseInt(pod_admin) + parseInt(pod_medical);
        },
        pod_admin(newVal){
          var pod_custodial = this.pod_custodial != null ? this.pod_custodial : 0;
          var pod_medical = this.pod_medical != null ? this.pod_medical : 0;
          this.mhf_personnel_total = parseInt(newVal) + parseInt(pod_custodial) + parseInt(pod_medical);
        },
        pod_medical(newVal){
          var pod_admin = this.pod_admin != null ? this.pod_admin : 0;
          var pod_custodial = this.pod_custodial != null ? this.pod_custodial : 0;
          this.pod_personnel_total = parseInt(newVal) + parseInt(pod_admin) + parseInt(pod_custodial);
        },
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
            name: "mhf-visitation-report",
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
            text: "MHF Visitation Report has been successfully saved.",
            icon: "success",
          }).then((result) => {
            location.reload();
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