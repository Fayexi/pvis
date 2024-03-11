<template>
  <div>
    <div class="form-main">
      <q-card>
        <q-card-section class="bg-amber-7">
          <div class="text-h6">
            <q-icon name="history_edu" size="sm" />
            <span class="card-header-label">
              Create Letter of Communication
            </span>
          </div>
          <!-- <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%); z-index: 100">
            <q-btn fab icon="add" color="green-5" @click="onCreatePod"/>
          </div> -->
        </q-card-section>

        <q-card-section style="padding-top: 0; padding-bottom: 0">
          <!-- <q-separator /> -->
        </q-card-section>

        <!-- <q-separator /> -->
        <q-card-section>
          <q-card>
            <q-tabs
              v-model="letterTab"
              dense
              align="left"
              class="shadow-2"
              :breakpoint="0"
            >
              <q-tab name="pod" label="Letter of Communication - POD" />
              <q-tab name="gov" label="Letter of Communication - Govertment Agencies" />
            </q-tabs>
            <q-tab-panels v-model="letterTab" animated>
              <q-tab-panel name="pod">
                <div class="row q-col-gutter-md">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <q-img
                      shadow-3
                      src="~assets/images/chr_logo.png"
                      spinner-color="white"
                      style="width: 100px"
                    />
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <span class="text-bold text-center text-amber-7 text-caption">REPUBLIC OF THE PHILIPPINES</span><br>
                    <span class="text-bold text-center text-amber-7 text-body1">COMMISSION ON HUMAN RIGHTS</span>
                  </div>
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                      <q-input type="date" dense v-model="date_conducted"/>
                    </div>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-lg">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      <q-input type="input" dense v-model="letter_name_head" label="[NAME OF HEAD OF POD/WARDEN/OIC]"/>
                    </div>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pt-none">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      <q-input type="input" dense v-model="letter_name_designation" label="[Official Designation]"/>
                    </div>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pt-none">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      <q-input type="input" dense v-model="letter_name_pod" label="[Name of POD]"/>
                    </div>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pt-none">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      <q-input type="input" dense v-model="letter_pod_address" label="[Postal Address of POD]"/>
                    </div>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pt-none">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      <q-input type="input" dense v-model="letter_email_add" label="[email address/es of POD]"/>
                    </div>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-lg">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      Dear {{ letter_name_head }}, 
                    </div>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      Greetings of peace! 
                    </div>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p>
                      The Commission on Human Rights is mandated under the 1987 Philippine Constitution to conduct visits to places of deprivation of liberty (POD) in the country. In the month of 
                      <q-input type="input" dense v-model="letter_email_add" label="[month of visit to the POD]" style="width: 200px; display: inline-block"/>
                      , the Commission visited numerous POD to monitor the conditions of these facilities and the situation of persons deprived of liberty (PDL) therein.
                    </p>
                  </div>

                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p>
                      Part of our monitoring activity is to document our observations and recommend to various relevant stakeholders how POD in the Philippines can be improved and made more humane and compliant with international standards such as the United Nations Standard Minimum Rules for the Treatment of Prisoners (also known as the Mandela Rules).
                    </p>
                  </div>

                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p>
                      As such, the Commission has the honor to furnish your good office with a copy of our POD Visit Report for the visit conducted at your facility last 
                      <q-input type="date" dense v-model="letter_email_add" label="[date of visit]" style="width: 200px; display: inline-block"/>. 
                      With due respect, permit the undersigned to highlight the following recommendations that can be properly addressed by your office:
                    </p>
                  </div>

                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      Recommendations: 
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div class="row q-col-gutter-sm" v-for="(row, index) in recommendations" :key="index">
                        <div class="col-md-4 col-sm-4 col-xs-12 q-pa-md">
                          <q-select
                            dense
                            outlined
                            input-debounce="0"
                            :options="recoCategOptions"
                            v-model="row.recoCateg"
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
                        <div class="col-md-6 col-sm-6 col-xs-12 q-pa-md">
                          <q-select
                            dense
                            outlined
                            input-debounce="0"
                            :options="recoOptions"
                            v-model="row.recos"
                            multiple
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
                        <div class="col-lg-1 col-md-1 col-sm-12 col-xs-12 text-center" style="display: flex; align-items: center;">
                            <q-btn round color="green-7" icon="add" size="xs"
                              @click="onAddRow"
                            />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p>
                      An update to our office on your plans and/or actions on these recommendations will be greatly appreciated. You may send such update/s via email at
                      <q-input dense v-model="letter_email_cchr" label="[official CHR email of the regional office concerned]" style="width: 200px; display: inline-block"/>.
                      Should your office also need any assistance from the Commission on this matter, you may contact us via the same email. 
                    </p>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p>
                      Thank you very much and stay safe.
                    </p>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p>
                      Very Truly Yours,
                    </p>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-lg">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      <q-input type="input" dense v-model="letter_regional_director" label="[NAME OF REGIONAL DIRECTOR/OIC]"/>
                    </div>
                  </div>
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pt-none">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      <q-input type="input" dense v-model="letter_regional_director" label="[Official Designation]"/>
                    </div>
                  </div>

                </div>
                
              </q-tab-panel>
                
              <q-tab-panel name="gov">
                <div class="row q-col-gutter-md">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <q-img
                      shadow-3
                      src="~assets/images/chr_logo.png"
                      spinner-color="white"
                      style="width: 100px"
                    />
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <span class="text-bold text-center text-amber-7 text-caption">REPUBLIC OF THE PHILIPPINES</span><br>
                    <span class="text-bold text-center text-amber-7 text-body1">COMMISSION ON HUMAN RIGHTS</span>
                  </div>
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                      <q-input type="date" dense v-model="date_conducted"/>
                    </div>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-lg">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      <q-input type="input" dense v-model="letter_name_head_gov" label="[NAME OF HEAD OF AGENCY]"/>
                    </div>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pt-none">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      <q-input type="input" dense v-model="letter_name_designation_gov" label="[Official Designation]"/>
                    </div>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pt-none">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      <q-input type="input" dense v-model="letter_name_mother_gov" label="[Name of Head/Mother Agency of POD]"/>
                    </div>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pt-none">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      <q-input type="input" dense v-model="letter_address_gov" label="[Postal Address of Head/Mother Agency]"/>
                    </div>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pt-none">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      <q-input type="input" dense v-model="letter_email_add_gov" label="[email address/es of Head/Mother Agency]"/>
                    </div>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-lg">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      Dear {{ letter_name_head }}, 
                    </div>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      Greetings of peace! 
                    </div>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p>
                      The Commission on Human Rights is mandated under the 1987 Philippine Constitution to conduct visits to places of deprivation of liberty (POD) in the country. In the 
                      <q-input type="input" dense v-model="letter_quarter_gov" label="[quarter/semester of visit and year]" style="width: 200px; display: inline-block"/>
                      , the Commission visited numerous POD to monitor the conditions of these facilities and the situation of persons deprived of liberty (PDL) therein.
                    </p>
                  </div>

                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p>
                      Part of our monitoring activity is to document our observations and recommend to various relevant stakeholders how POD in the Philippines can be improved and made more humane and compliant with international standards such as the United Nations Standard Minimum Rules for the Treatment of Prisoners (also known as the Mandela Rules).
                    </p>
                  </div>

                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p>
                      As such, the Commission has the honor to furnish your good office with a copy of our
                      <q-input dense v-model="letter_email_add" label="[Semestral/Annual]" style="width: 200px; display: inline-block"/>. 
                      Human Rights Situationer on PDL for [Situationer Year] for the visit conducted in your facilities all over the country for the same period. With due respect, permit the undersigned to highlight the following recommendations that can be properly addressed by your office:
                    </p>
                  </div>

                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      Recommendations: 
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div class="row q-col-gutter-sm" v-for="(row, index) in recommendations" :key="index">
                        <div class="col-md-4 col-sm-4 col-xs-12 q-pa-md">
                          <q-select
                            dense
                            outlined
                            input-debounce="0"
                            :options="recoCategOptions"
                            v-model="row.recoCateg"
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
                        <div class="col-md-6 col-sm-6 col-xs-12 q-pa-md">
                          <q-select
                            dense
                            outlined
                            input-debounce="0"
                            :options="recoOptions"
                            v-model="row.recos"
                            multiple
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
                        <div class="col-lg-1 col-md-1 col-sm-12 col-xs-12 text-center" style="display: flex; align-items: center;">
                            <q-btn round color="green-7" icon="add" size="xs"
                              @click="onAddRow"
                            />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p>
                      An update to our office on your plans and/or actions on these recommendations will be greatly appreciated. You may send such update/s via email at visitorial@chr.gov.ph. Should your office also need any assistance from the Commission on this matter, you may contact us via the same email. 
                    </p>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p>
                      Thank you very much and stay safe.
                    </p>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p>
                      Very Truly Yours,
                    </p>
                  </div>
                  
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-lg">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      <q-input type="input" dense v-model="letter_regional_director" label="[[NAME OF DIRECTOR/OIC OF THE PREVENTION CLUSTER]"/>
                    </div>
                  </div>
                  <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pt-none">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      <q-input type="input" dense v-model="letter_regional_director" label="[Official Designation]"/>
                    </div>
                  </div>

                </div>
              </q-tab-panel>
            </q-tab-panels>
            
          </q-card>
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
import { VISITATION_REPORT_TABLE_COLUMNS } from "src/utils/table-columns/visitation-report-table";
import Swal from "sweetalert2";
export default {
    data: () => ({
      letterTab: 'pod', 
      recommendations: [{ recoCateg: null, recos: null }], 
      recoCategOptions: [
        "File Management", 
        "Separation of Categories",
        "Accommodation",
        "Personal Hygiene",
        "Clothing and Bedding",
        // "Food and Drinking Water",
        // "Exercise, Sport and Recreation",
        // "Health-care Services",
        // "Restrictions, discipline and sanctions",
        // "Searches of PDL and cells",
        // "Information to and complaints by PDL",
        // "Contact with the outside world",
        // "Torture, and Cruel, Inhuman or Degrading Treatment or Punishment",
        // "Work and Livelihood ",
        // "Education/Books",
        // "Religion",
      ], 
      recoOptions: [

      ], 
      showAddPodDialog: false, 
      letter_name_head: "Head of POD Name", 
      letter_name_head_gov: "head of Agency Name", 
    }),

    computed: {
      
    },

    watch: {
      'recommendations': {
        deep: true,
        handler(newVal, oldVal) {
          // Iterate through each row in recommendations and check for changes in recoCateg
          for (let i = 0; i < newVal.length; i++) {
            const newRow = newVal[i];
            const oldRow = oldVal[i];
            console.log('newRow.recoCateg', newRow.recoCateg)
            this.recoOptions = [];
            if(newRow.recoCateg == 'File Management'){
              this.recoOptions = [
                "Maintain an official register of PDL and ensure that the same is kept accurate and regularly updated, in compliance with Section 10 of RA No. 10353.", 
                "For jails, ensure that every PDL received in the facility has a valid commitment order. ", 
                "Allow relatives, lawyers, judges, official bodies and all persons who have legitimate interest in the whereabouts and condition of the persons deprived of liberty to have free access to the register. ", 
                "Regularly report the information contained in the register to the CHR."
              ];
            }else if(newRow.recoCateg == 'Separation of Categories'){
              this.recoOptions = [
                "Separate female PDL from male PDL.", 
                "Separate PDL undergoing trial from convicted PDL.",
                "Separate minor PDL from adult PDL.",
                "Separate young adults (18-21 y/o) from adult PDL.",
                "Facilitate the immediate transfer of the minor PDL to the appropriate institution.",
                "Allocate facilities for the exclusive use of each category.",
                "Facilities available to each category must"
              ];
            }else if(newRow.recoCateg == 'Accommodation'){
              this.recoOptions = [
                "Provide sleeping accommodation to all PDL.", 
                "If practicable, enlarge the existing window/s, or install new window/s to allow the entry of natural light and fresh air.",
                "Install artificial light fixtures, and/or repair/replace faulty light fixtures.",
                "Provide/install portable fans, exhaust fans and other devices for mechanical ventilation.",
                "Provide an adequate number of sanitary facilities or installations.",
                "Repair/replace faulty sanitary installations.",
                "Ensure that all areas of the facility are properly maintained and kept clean at all times.",
              ];
            }else if(newRow.recoCateg == 'Personal Hygiene'){
              this.recoOptions = [
                "Ensure continuous supply of clean water.", 
                "Provide toiletries, free of charge.",
                "Provide sanitary napkins to female PDL, free of charge."
              ];
            }else if(newRow.recoCateg == 'Clothing and Bedding'){
              this.recoOptions = [
                "Provide every PDL with breakfast, lunch and dinner every day.",
                "Ensure that the food served has nutritional value, of wholesome quality, and is well-prepared.",
                "Accommodate dietary needs or restrictions on account of health, religion or culture of PDL.",
                "Accommodate the dietary needs of pregnant and breastfeeding PDL.",
                "Ensure that every PDL has access to potable water at all times, free of charge.",
                "Conduct periodic water testing to ensure water potability.",
              ];
            }
          }
        }
      }
    },
    
    methods: {
      async initApp() {
        
      }, 
      
      onAddRow(){
        this.recommendations.push({ recoCateg: null, recos: null });
      }, 

      onSave(){
        Swal.fire({
          title: "Success!",
          text: "Letter of Communication has been successfully saved.",
          icon: "success",
        }).then((result) => {
          this.$router.push({
            name: 'letter-communication', 
          });
        });
      }, 


      onBack(){
        this.$router.push({
          name: 'letter-communication', 
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