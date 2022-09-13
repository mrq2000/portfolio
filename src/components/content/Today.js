export const Today = () => {
    const date = new Date();
    const hour = date.getHours();
    const time = `${
      (hour < 4 && "night") ||
      (hour < 12 && "morning") ||
      (hour < 18 && "afternoon") ||
      (hour < 22 && "evening") ||
      "night"
    }`;
    const days = [
      "weekend",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "weekend",
    ];
    const day = days[date.getDay()];

    return (
          `Have a good {day === "weekend" ? ${day} : ${time}.`
    );
};
