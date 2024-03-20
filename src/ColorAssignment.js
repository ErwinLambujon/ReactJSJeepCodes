export function assignColors(commonPlaces) {
    const colors = {};
    let colorIndex = 0;
    const colorMap = {};
    for (const place in commonPlaces) {
      if (commonPlaces[place].length > 1) {
        const commonCode = commonPlaces[place].join("-");
        if (!colorMap[commonCode]) {
          colors[place] = [
            "red",
            "blue",
            "green",
            "purple",
            "orange",
            "yellow",
            "cyan",
            "magenta",
            "pink",
          ][colorIndex];
          colorMap[commonCode] = colors[place];
          colorIndex++;
        } else {
          colors[place] = colorMap[commonCode];
        }
      }
    }
    return colors;
  }
  