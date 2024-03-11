<template>
  <div>
    <apexchart type="line" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [
        {
          name: "Series 1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        },
      },
    };
  },
};
</script>
