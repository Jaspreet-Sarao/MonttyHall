document.addEventListener('DOMContentLoaded', function() {
    var switchCount = 0;
    var stayCount = 0;
    var output = '';

    for (var i = 0; i < 1000; i++) {
        var carPosition = Math.floor(Math.random() * 3) + 1; // 1 to 3
        var playerChoice = Math.floor(Math.random() * 3) + 1;
        
        output += "The Car is in position: " + carPosition + "<br>";
        output += "The contestant chose door: " + playerChoice + "<br>";

        var hostOpens = Math.floor(Math.random() * 3) + 1;
        while (hostOpens === playerChoice || hostOpens === carPosition) {
            hostOpens = Math.floor(Math.random() * 3) + 1;
        }
        output += "The host opened door: " + hostOpens + "<br>";

        if (playerChoice === carPosition) {
            stayCount++;
            output += "<p style='color:red;'>The contestant should stay!</p>";
        } else {
            switchCount++;
            output += "<p style='color:green;'>The contestant should switch!</p>";
        }

        output += "<br>";
    }

    var switchPercentage = ((switchCount / 1000) * 100).toFixed(2);
    var stayPercentage = ((stayCount / 1000) * 100).toFixed(2);

    output += "<h3>Summary:</h3>";
    output += "Contestant should switch " + switchPercentage + "% of the time.<br>";
    output += "Contestant should stay " + stayPercentage + "% of the time.<br>";

    document.getElementById('result').innerHTML = output;
});