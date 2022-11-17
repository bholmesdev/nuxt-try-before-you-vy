const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, ms);
  });

export default defineEventHandler(async (event) => {
  await sleep(2000);
  return {
    api: "works",
  };
});
