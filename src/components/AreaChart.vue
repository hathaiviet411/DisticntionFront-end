<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data() {
    return {
      gradient: null,
      gradient2: null
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

    this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");

    this.renderChart(
      {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "Number of The Trainers",
            borderColor: "#FC2525",
            pointBackgroundColor: "black",
            borderWidth: 2,
            pointBorderColor: "black",
            backgroundColor: this.gradient,
            data: [45, 35, 40, 50, 39, 50, 40, 58, 78, 65, 24, 99]
          },
          {
            label: "Number of The Trainee",
            borderColor: "#05CBE1",
            pointBackgroundColor: "black",
            pointBorderColor: "black",
            borderWidth: 2,
            backgroundColor: this.gradient2,
            data: [5, 15, 10, 0, 11, 0, 10, 57, 68, 10, 25, 45]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>