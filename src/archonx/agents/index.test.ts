/**
 * ArchonX Agents Tests
 */

import { describe, expect, it } from "vitest";
import { createPauliAgent, createSynthiaAgent } from "./index.js";

describe("ArchonX Agents", () => {
  describe("PauliAgent", () => {
    it("should create a Pauli agent with config", () => {
      const agent = createPauliAgent({ name: "Test Pauli" });
      expect(agent).toBeDefined();
      expect(agent.getConfig().name).toBe("Test Pauli");
    });

    it("should initialize agent state", async () => {
      const agent = createPauliAgent({ name: "Test Pauli" });
      const initialState = agent.getState();
      expect(initialState.initialized).toBe(false);

      await agent.initialize();
      const afterInit = agent.getState();
      expect(afterInit.initialized).toBe(true);
      expect(afterInit.lastActivity).toBeDefined();
    });

    it("should process messages", async () => {
      const agent = createPauliAgent({ name: "Test Pauli" });
      const result = await agent.processMessage("Hello");
      expect(result).toContain("Pauli agent processing");
      expect(result).toContain("Hello");
    });
  });

  describe("SynthiaAgent", () => {
    it("should create a Synthia agent with config", () => {
      const agent = createSynthiaAgent({ name: "Test Synthia" });
      expect(agent).toBeDefined();
      expect(agent.getConfig().name).toBe("Test Synthia");
    });

    it("should initialize agent state", async () => {
      const agent = createSynthiaAgent({ name: "Test Synthia" });
      const initialState = agent.getState();
      expect(initialState.initialized).toBe(false);
      expect(initialState.synthesisCount).toBe(0);

      await agent.initialize();
      const afterInit = agent.getState();
      expect(afterInit.initialized).toBe(true);
      expect(afterInit.lastActivity).toBeDefined();
    });

    it("should synthesize data", async () => {
      const agent = createSynthiaAgent({ name: "Test Synthia" });
      const testData = { value: 42 };
      const result = await agent.synthesize(testData);
      
      expect(result).toBeDefined();
      expect(typeof result === "object").toBe(true);
      const resultObj = result as { synthesized: boolean; count: number; data: unknown };
      expect(resultObj.synthesized).toBe(true);
      expect(resultObj.count).toBe(1);
      expect(resultObj.data).toEqual(testData);
    });

    it("should process messages", async () => {
      const agent = createSynthiaAgent({ name: "Test Synthia" });
      const result = await agent.processMessage("Hello");
      expect(result).toContain("Synthia agent processing");
      expect(result).toContain("Hello");
    });

    it("should increment synthesis count", async () => {
      const agent = createSynthiaAgent({ name: "Test Synthia" });
      
      await agent.synthesize({ test: 1 });
      expect(agent.getState().synthesisCount).toBe(1);

      await agent.synthesize({ test: 2 });
      expect(agent.getState().synthesisCount).toBe(2);
    });
  });
});
