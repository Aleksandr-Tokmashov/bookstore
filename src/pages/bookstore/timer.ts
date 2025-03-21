export function startCountdown(durationInMinutes: number) {
  let timeRemaining = durationInMinutes * 60;

  const intervalId = setInterval(() => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    console.log(
      `Осталось времени: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    );
    timeRemaining--;

    if (timeRemaining < 0) {
      clearInterval(intervalId);
      console.log("Акция завершена!");
    }
  }, 1000);
}
