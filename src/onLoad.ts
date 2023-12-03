// eslint-disable-next-line @typescript-eslint/ban-types
const onLoadFunctionList: Array<Function> = [];

// instead of a function we call from HTML we'll use JS to run all functions on page load.
window.addEventListener("load", () => {
    for (const loadFunction of onLoadFunctionList) {
        loadFunction();
    }
});

export { onLoadFunctionList };