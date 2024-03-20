export function checkInput(input) {
    const codes = input.split(",");
    for (const code of codes) {
      if (
        code.length !== 3 ||
        isNaN(code.slice(0, 2)) ||
        !isNaN(code.slice(2))
      ) {
        return false;
      }
    }
    return true;
  }
  
  export function findCommonPlaces(codes, routes) {
    const commonPlaces = {};
    for (const code of codes) {
      const places = routes[code];
      if (places) {
        for (const place of places) {
          if (commonPlaces[place]) {
            commonPlaces[place].push(code);
          } else {
            commonPlaces[place] = [code];
          }
        }
      }
    }
    return commonPlaces;
  }
  