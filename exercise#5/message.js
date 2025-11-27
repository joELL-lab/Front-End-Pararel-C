import helloWorld from "./helloWorld.js";

async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}

export { messages };