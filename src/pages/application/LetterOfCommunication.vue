<template>
  <div>
    <div class="form-main">
      <q-card>
        <q-card-section class="bg-amber-7">
          <div class="text-h6">
            <q-icon name="history_edu" size="sm" />
            <span class="card-header-label">
              Letter of Communication
            </span>
          </div>
          <div
            class="absolute-bottom-right q-pr-md"
            style="transform: translateY(50%); z-index: 100"
          >
            <q-btn fab icon="add" color="green-5" @click="onCreateLetter"/>
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
              :rows="tblLetterRows"
              :columns="tblLetterColumns"
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
                        @click="onViewLetter(props.row.type_code)"
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
  
</template>

<script>
import { ref } from 'vue'
import { LETTER_TABLE_COLUMNS } from "src/utils/table-columns/letter-of-communication-table";

export default {
    data: () => ({
      userRole: localStorage.getItem("role"),
      showAddPodDialog: false, 

      tblLetterColumns: [
        ...LETTER_TABLE_COLUMNS
      ], 
      tblLetterRows: [
        { 
          date_created: 'March 11, 2024', 
          created_by: 'Head of POD', 
          letter_type: 'POD', 
          type_code: 'pod',
        },
        { 
          date_created: 'March 11, 2024', 
          created_by: 'Head of Agency', 
          letter_type: 'Government Agency', 
          type_code: 'gov',
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

      onViewLetter(letterType){
        console.log(letterType)
        this.$router.push({
          path: "letter-communication/view-letter-communication/"+letterType, 
        });
      }, 

      onCreateLetter(){
        this.$router.push({
          name: "create-letter-communication", 
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