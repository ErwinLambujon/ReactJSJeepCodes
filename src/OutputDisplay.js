export function formatOutput(codes, routes, commonPlaces, colors) {
    let result = "";
    for (const code of codes) {
      const places = routes[code];
      if (places) {
        let output = `${code} => `;
        for (const place of places) {
          if (commonPlaces[place] && commonPlaces[place].length > 1) {
            output += `<span style="color: ${colors[place]}">${place}</span> <-> `;
          } else {
            output += `<span style="color: black">${place}</span> <-> `;
          }
        }
        result += output.slice(0, -5) + "<br>"; // Add line break after each code
      }
    }
    return result;
  }
  