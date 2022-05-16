// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
window.$fxhashFeatures = {
  "colorChoice": colorChoice,
  // "wireframe": wireframe
  // "speed": speed,
  // "tailSize": tailSize,
  // "colorScheme": fxcolorScheme,
  // "colorHue": colorHue,
  // "movement":movement,
  // "pausechance": pausechance
}

// this code writes the values to the DOM as an example
const container = document.createElement("div")
container.id="container"
container.innerText = `
  random hash: ${fxhash}\n
  colorChoice: ${$fxhashFeatures["colorChoice"]}\n
  some pseudo random values: [ ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()},... ]\n
`

// particle size: ${$fxhashFeatures["partSize"]}\n
document.body.prepend(container)