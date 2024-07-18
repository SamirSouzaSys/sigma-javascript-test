/*
Script Number Three:

The browser has a method called document.currentScript. If you try to access this property inside a script, it returns a reference to the currently executing script.

<script> console.log(document.currentScript); </script> // returns a reference to the current script

The problem is that this property is not supported in older browsers.

Task: Implement your own version of the currentScript property as a function, without using the default API. This function should work for both inline scripts and external script files (i.e., scripts with a src property).

Example:

<script> console.log("Some script"); </script>
<script> console.log(getCurrentScript()); </script> // should return a reference to the current script
<script> console.log("Some other script"); </script>

*/

(function () {
    let currentScript: HTMLScriptElement | null = null;
    const scriptStack: HTMLScriptElement[] = [];

    window.getCurrentScript = function (): HTMLScriptElement | null {
        return currentScript;
    };

    const attachListeners = (script: HTMLScriptElement) => {
        currentScript = script;
    };

    const existingScripts = document.getElementsByTagName('script');
    for (let i = 0; i < existingScripts.length; i++) {
        attachListeners(existingScripts[i]);
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    const script1 = document.createElement('script');
    script1.textContent = `console.log(getCurrentScript());`;
    document.body.appendChild(script1);
});
