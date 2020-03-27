$(function() {
	var config = {
        type: 'bar',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(0, 188, 212, 0.8)'
            }, {
                    label: "My Second dataset",
                    data: [28, 48, 40, 19, 86, 27, 90],
                    backgroundColor: 'rgba(233, 30, 99, 0.8)'
                }]
        },
        options: {
            responsive: true,
            legend: false
        }
    }

	new Chart(document.getElementById("bar_chart").getContext("2d"), config);
});