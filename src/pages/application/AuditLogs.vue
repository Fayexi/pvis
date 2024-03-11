<template>
  <div>
    <div class="form-main">
      <q-card>
        <q-card-section class="bg-amber-7">
          <div class="text-h6">
            <q-icon name="content_paste_search" size="sm" />
            <span class="card-header-label">
              Audit Logs
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
              :rows="tblAlRows"
              :columns="tblAlCols"
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
                        @click="onSelectItem(props.row.id)"
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
              Create Mission Order
            </div>
          </q-card-section>

          <q-separator class="mb-5" style="margin-bottom: 15px" />

          <q-card-section class="q-pt-none">
            <div class="row q-col-gutter-md">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-select outlined dense v-model="mission.leader" :options="teamLeaderOptions" label="Team Leader" />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-input outlined dense v-model="mission.leader_position" label="Position"/>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-select outlined dense v-model="mission.member" :options="teamMemberOptions" label="Member" />
              </div>
              <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                <q-input outlined dense v-model="mission.member_position" label="Position"/>
              </div>
              <div class="col-lg-1 col-md-1 col-sm-12 col-xs-12">
                <q-icon name="add_circle" size="sm" color="green"></q-icon>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-input outlined dense v-model="mission.pod" label="Place of Deprivation of Liberty"/>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-input
                  type="date"
                  v-model="mission.date_issued"
                  dense
                  outlined
                  standout
                  bottom-slots
                  label="Date Issued"
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
                  label="Date of Visit"
                />
              </div>
              <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-table
                  :rows="tblPodRows"
                  :columns="tblPodColumns"
                  row-key="name"
                >
                  <template v-slot:header="props">
                    <q-tr :props="props" style="margin-top: 10px">
                      <q-th v-for="col in props.cols" :key="col.name" :props="props" 
                        class="text-wrap-normal">
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
                          <q-icon name="add_circle" size="sm" color="green"></q-icon>
                        </template>
                        <template v-else>
                          <q-input outlined v-model="text" dense />
                        </template>
                        
                      </q-td>
                    </q-tr>
                  </template>
                </q-table>
              </div> -->
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
import { AUDIT_LOGS_TABLE_COLUMNS } from "src/utils/table-columns/audit-logs-table";

export default {
    data: () => ({
      showAddPodDialog: false, 

      teamLeaderOptions: [
        "Team Leader 1", 
        "Team Leader 2", 
        "Team Leader 3", 
        "Team Leader 4", 
      ], 

      teamMemberOptions: [
        "Team Member 1", 
        "Team Member 2", 
        "Team Member 3", 
        "Team Member 4", 
      ], 
      
      mission: {
        leader: null,
        leader_position: null,
        member: null,
        member_position: null,
        pod: null,
        date_issued: null,
        date_visit: null,
      },
      
      tblAlCols: [
        ...AUDIT_LOGS_TABLE_COLUMNS,
      ], 

      tblAlRows: [
        {
          date_conducted: '2024-02-08',
          time: '01:52:14 PM', 
          employee_name: 'JUAN DELA CRUZ', 
          module: 'UAM', 
          activity: 'User Login', 
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
        this.showAddPodDialog = true;
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