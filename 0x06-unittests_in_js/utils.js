class Utils {
  static calculateNumber = (type, a, b) => {  
    if (type === 'SUM') {
      const sum = Math.round(a) + Math.round(b);
      return sum;
    } else if (type === 'SUBTRACT') {
      const diff = Math.round(a) - Math.round(b);
      return diff;
    } else if (type === 'DIVIDE') {
      const round_a = Math.round(a);
      const round_b = Math.round(b);
      if (round_b === 0) return ('Error');
      const div = round_a / round_b;
      return div;
    }
  }
}

module.exports = Utils;
