<template>
  <div>
    <div class="form-main">
      <q-card>
        <q-card-section class="card-header">
          <div class="text-h6">
            <q-icon name="chat" size="sm" />
            <span class="card-header-label">
              CEPA - Activities
            </span>
          </div>
          <div class="buttons">
            
        </div>
        </q-card-section>

        <q-card-section style="padding-top: 0; padding-bottom: 0">
          <q-separator />
        </q-card-section>

        <!-- <q-separator /> -->
        <q-card-section>
          <div class="row q-col-gutter-md">
            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12"></div>
            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
              <q-select 
                v-model="activity_status" 
                :options="statusOptions" 
                label="Status"
                emit-value
                map-options
                dense
                @change="onRefresh"
              />
            </div>
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
              :rows="sortedRows"
              :columns="tableColumns"
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
                    {{ col.name === 'ACTION' ? '' : col.value }}

                    <div 
                      style="min-width: 92px;padding: 0;" 
                      v-if="col.name === 'ACTION'"
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
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>