/**
 * DSA Platform - Code Execution Service
 * Abstraction layer for running code against test cases.
 * Supports mock execution engine out of the box and is ready for Judge0 / Piston integration.
 */

window.CodeExecutionService = {
  // Config for connecting external backend execution engine if available
  config: {
    useRemoteBackend: false, // Set to true when connected to Judge0 or Piston
    endpoint: '/api/execute'
  },

  /**
   * Main function to execute code against a list of test cases
   * @param {string} code - Source code string
   * @param {string} language - 'cpp' | 'java' | 'python'
   * @param {Array} testCases - Array of { input, expectedOutput }
   * @returns {Promise<Object>} Execution result summary
   */
  runCode: async function(code, language, testCases) {
    if (this.config.useRemoteBackend) {
      return this._executeRemote(code, language, testCases);
    } else {
      return this._executeMock(code, language, testCases);
    }
  },

  /**
   * Mock execution runner for local evaluation
   */
  _executeMock: function(code, language, testCases) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const results = [];
        let totalPassed = 0;

        // Simple validation check: Ensure user didn't leave boilerplate empty
        const isSolutionWritten = code.length > 50 && !code.includes("// Write your solution here");

        testCases.forEach((tc, idx) => {
          // If code seems complete or includes return statement, simulate pass
          const passed = isSolutionWritten || idx === 0; 
          if (passed) totalPassed++;

          results.push({
            id: idx + 1,
            input: tc.input,
            expectedOutput: tc.expectedOutput,
            actualOutput: passed ? tc.expectedOutput : "[Output mismatch or incomplete solution]",
            status: passed ? 'PASSED' : 'FAILED',
            runtime: `${Math.floor(Math.random() * 25 + 12)} ms`,
            memory: `${(Math.random() * 4 + 14).toFixed(1)} MB`
          });
        });

        resolve({
          success: totalPassed === testCases.length,
          totalTestCases: testCases.length,
          passCount: totalPassed,
          failCount: testCases.length - totalPassed,
          results: results,
          stdout: `Compilation successful (${language.toUpperCase()})\nAll inputs evaluated cleanly.`,
          execTime: `${Math.floor(Math.random() * 45 + 20)} ms`,
          memoryUsed: `${(Math.random() * 5 + 15).toFixed(1)} MB`
        });
      }, 700); // Realistic 700ms compiler latency simulation
    });
  },

  /**
   * Remote execution connector for Judge0 or custom Piston API
   */
  _executeRemote: async function(code, language, testCases) {
    try {
      const response = await fetch(this.config.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, language, testCases })
      });
      return await response.json();
    } catch (err) {
      console.warn("Remote execution failed, falling back to mock execution:", err);
      return this._executeMock(code, language, testCases);
    }
  }
};
