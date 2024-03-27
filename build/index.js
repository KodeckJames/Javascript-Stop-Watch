let totalSecondsElapsed = 0; // Track total elapsed time in seconds (including hundredths)
    let interval = null;
    const time = document.getElementById("time");

    function padStart(value) {
      return String(value).padStart(2, "0");
    }

    function updateTime() {
      // Calculate minutes, seconds, and hundredths of a second
      const minutes = Math.floor(totalSecondsElapsed / 60);
      const seconds = Math.floor(totalSecondsElapsed % 60);
      const hundredths = Math.floor((totalSecondsElapsed * 100) % 100);

      // Display formatted time with hundredths
      time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}.${padStart(hundredths)}`;
    }

    function timer() {
      totalSecondsElapsed += 0.01; // Increment by 0.01 seconds (hundredth of a second)
      updateTime();
    }

    function startStop() {
      if (interval) {
        stopClock();
      } else {
        startClock();
      }
    }

    function startClock() {
      interval = setInterval(timer, 10); // Update every 10 milliseconds for smoother display
      document.addEventListener("keydown", handleSpacebar);
    }

    function stopClock() {
      clearInterval(interval);
      document.removeEventListener("keydown", handleSpacebar);
    }

    function resetClock() {
      stopClock();
      totalSecondsElapsed = 0;
      updateTime();
    }

    function handleSpacebar(event) {
      if (event.code === "Space") {
        startStop();
        event.preventDefault(); // Prevent scrolling when spacebar is pressed
      }
    }