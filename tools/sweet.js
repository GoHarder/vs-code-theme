import chroma from 'chroma-js';

const scale = chroma.scale(['#27ae60', '#edb20a', '#c54133']);

const step = 1 / 7;

const output = [
  `gradient_color_1 = '${scale(step * 0).hex()}'`,
  `gradient_color_2 = '${scale(step * 1).hex()}'`,
  `gradient_color_3 = '${scale(step * 2).hex()}'`,
  `gradient_color_4 = '${scale(step * 3).hex()}'`,
  `gradient_color_5 = '${scale(step * 4).hex()}'`,
  `gradient_color_6 = '${scale(step * 5).hex()}'`,
  `gradient_color_7 = '${scale(step * 6).hex()}'`,
  `gradient_color_8 = '${scale(step * 7).hex()}'`,
];

console.log(output);
