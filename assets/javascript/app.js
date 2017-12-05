$(document).ready(function () {

    // Set variable to track how many the player got right and wrong

    var rightAnswer = 0;
    var wrongAnswer = 0;
    var blank = 0;

    // Set the counter for the player to have 45 seconds to complete the game

    var number = 45;

    // Hide the game until the player presses start

    $(".bg").hide();



    // Function for showing the game when the player clicks start   

    $("#start").on("click", function () {

        $(".bg").show();
        $("#start").hide();
        $("#hike-ball").hide();






        // The player will have 30 seconds to complete the game
        // When the time runs out the game will end and show the player how they did
        // If the player is done before time is up, they will click the "I'm done button and they will receive their results"

        function run() {
            intervalId = setInterval(decrement, 1000);
        }
        run();

        function decrement() {
            number--;

            $("#show-number").text("00:" + number);

            if (number < 10) {
                $("#show-number").text("00:0" + number);

            }
            if (number === 0) {
                timeUp();
                console.log(rightAnswer);
                console.log(wrongAnswer);




            }

        }
        $("#finished").on("click", function () {
            timeUp();
            console.log(rightAnswer);
            console.log(wrongAnswer);
        });
    });
    // After the time is up or when the player click the "I'm done" button this will calculate their results

    function timeUp() {


        clearInterval(intervalId);

        // Collect the answers that the player has guessed

        var Q1 = $('input:radio[name="q1"]:checked').val();
        var Q2 = $('input:radio[name="q2"]:checked').val();
        var Q3 = $('input:radio[name="q3"]:checked').val();
        var Q4 = $('input:radio[name="q4"]:checked').val();
        var Q5 = $('input:radio[name="q5"]:checked').val();





        // Compare the answers with the questions with if and else statements

        if (Q1 == "Don Shula") {
            rightAnswer++
            console.log(rightAnswer);

        } else if (Q1 == null) {
            wrongAnswer++;
        } else {
            wrongAnswer++;


        }
        if (Q2 == "Los Angeles") {
            rightAnswer++

        } else if (Q2 == null) {
            wrongAnswer++;
        } else {
            wrongAnswer++;

        }

        if (Q3 == "Steelers") {
            rightAnswer++

        } else if (Q3 == null) {
            wrongAnswer++;
        } else {
            wrongAnswer++;

        }

        if (Q4 == "Adrian Peterson") {
            rightAnswer++

        } else if (Q4 == null) {
            wrongAnswer++;
        } else {
            wrongAnswer++;

        }
        if (Q5 == "Matt Cassel") {
            rightAnswer++

        } else if (Q5 == null) {
            wrongAnswer++;
        } else {
            wrongAnswer++;





        } // Display the results to let the player know who many they got right and wrong

        $("#right-answer").html(rightAnswer);
        $("#wrong-answer").html(wrongAnswer);




    }

});