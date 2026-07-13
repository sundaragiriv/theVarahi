---
title: "Agentic AI in the Enterprise: Why Most Pilots Stall at the Handoff Problem"
description: "The architecture gap that prevents autonomous agents from graduating to production — and the design patterns that close it."
pubDate: 2026-05-03
author: "Varahi"
tags: ["Varahi", "aiInsights", "Agentic AI", "LLM Ops", "Orchestration", "Enterprise AI", "Human-in-the-Loop"]
draft: false
---

Most enterprise AI pilots succeed at what they were designed to demonstrate: a single agent completing a well-defined task on clean data with a supervisor watching. The same system fails in production for a reason that rarely appears in the pilot evaluation: the handoff problem.

The handoff problem is not a model quality problem. It is an architecture problem. It emerges wherever an agent must pass work, context, or authority to another system, a human, or another agent — and the boundary between them was never designed.

---

## What the research actually shows

The 2025 State of AI in the Enterprise report from Stanford HAI surveyed 1,200 enterprise AI deployments across North America and Europe. Among deployments that described themselves as "agentic" (capable of multi-step autonomous action), 71% had reached some form of production — but only 34% had achieved the automation rates projected at pilot stage.

The most commonly cited failure modes:

1. **Context loss at handoff** (cited by 58% of respondents): the agent cannot pass sufficient context to the next step in a workflow without manual reconstruction
2. **Authority boundary violations** (47%): the agent takes actions outside its sanctioned scope, requiring rollback and human review
3. **Insufficient escalation logic** (44%): the agent cannot recognise when it has reached the limit of its competence and needs human intervention
4. **Brittle tool integration** (39%): downstream API changes or rate limits break agent workflows without graceful degradation

These are not edge cases. They are the normal operating environment of enterprise systems.

---

## The architecture of a production-grade agentic system

A pilot-grade agentic system has a planner, a set of tools, and a loop. A production-grade system has all of that plus four additional layers.

### 1. Context management

Every agent action must carry forward enough context for any subsequent agent, human, or audit system to understand what happened and why. This means:

- **Structured traces**: every tool call, model invocation, and decision point logged with inputs, outputs, timestamps, and the policy context that applied
- **State serialisation**: agent state must be serialisable to a durable store (a database, not RAM) so that workflows can survive infrastructure restarts, rate limit pauses, and human review periods
- **Handoff packets**: when an agent passes work to another agent or to a human, it must construct an explicit handoff document — not just the final output, but the reasoning chain, confidence level, and unresolved questions

The Microsoft AutoGen framework (v0.4+) and LangGraph both provide primitives for persistent state management. Neither does it automatically. The developer must design the state schema for the domain.

### 2. Authority and policy enforcement

Every agent action should be authorised against a policy document before execution. This is not a theoretical control — it is the mechanism that prevents the single most damaging failure mode in agentic systems: an agent that executes a correct action in the wrong context.

Practical implementation:

- Define a **policy manifest** for each agent: a machine-readable document that specifies permitted tool classes, data scopes, maximum transaction values, and escalation triggers
- Enforce the policy manifest at the orchestration layer, not inside the agent's prompt — prompt-based restrictions are bypassed by adversarial inputs
- Log every policy check alongside the action, so that audit trails are complete without post-hoc reconstruction

The emerging standard for enterprise policy enforcement in agentic systems draws on Open Policy Agent (OPA) for policy-as-code and on the emerging A2A (Agent-to-Agent) protocol for cross-agent authority propagation.

### 3. Escalation and uncertainty handling

A production agent must know when it does not know. This is harder than it sounds. Large language models are calibrated to produce output; they are not naturally calibrated to produce accurate uncertainty estimates.

Build escalation triggers that do not depend on the model's self-assessment:

- **Confidence scoring via ensemble**: run the same decision through two model configurations and escalate when outputs diverge beyond a threshold
- **Tool failure escalation**: any tool invocation that fails or returns unexpected output triggers a hold rather than a retry
- **Value threshold escalation**: any action above a defined financial or operational impact ceiling requires human approval regardless of model confidence
- **Time-boxed escalation**: any task that has not reached a terminal state within a defined window triggers human review

The Microsoft GAIA benchmark (2024) showed that the best open-weight models achieve approximately 67% on complex multi-step reasoning tasks. That means roughly one in three complex tasks produces a wrong or incomplete result. Your escalation logic must handle this routinely, not as an exception.

### 4. Graceful degradation

A production agentic system must have a defined fallback for every failure mode. This is standard software engineering applied to a new class of system.

Map every tool and every agent capability to a degraded alternative:

| Primary capability | Degraded fallback |
|---|---|
| Real-time data retrieval | Cached data with staleness warning |
| Autonomous decision | Recommendation presented to human |
| Automated action | Action queued for human approval |
| Multi-agent orchestration | Single-agent with reduced scope |

The fallback map is not a feature for v2. It is a deployment gate. A system without explicit fallbacks is a system that fails opaquely.

---

## The handoff problem in SAP environments specifically

Enterprise AI agents operating on SAP systems face a specific version of the handoff problem: the gap between the agent's context and SAP's authorisation model.

SAP's role-based access control is granular and audited. An agent that has been granted a technical service user with broad access — a common shortcut in pilots — will pass penetration tests but fail security audits and SOX reviews. The agent's actions will not be traceable to a business user's authorisation.

The production pattern:
- The agent inherits the authorisation context of the human user who initiated the workflow
- Every SAP action taken by the agent is logged under that user's principal, with the agent identified as the executing mechanism
- Escalation to human approval passes the authorisation context to the approving user, not back to a generic service account

SAP BTP's principal propagation capability supports this pattern natively for BTP-hosted extensions. For agents running outside BTP, OAuth 2.0 token exchange with SAP Identity Authentication Service (IAS) provides the same capability with additional integration work.

---

## What "agent-ready" looks like in practice

Before deploying an agentic system to production, evaluate it against these five questions:

1. **Can a human reconstruct every decision the agent made, from logs alone, without access to the agent itself?** If not, the trace architecture is insufficient.
2. **Can the system complete its primary workflow if any single tool is unavailable?** If not, the fallback architecture is incomplete.
3. **Does every agent action check a policy before executing?** If the policy lives in the prompt, the answer is no.
4. **Is escalation triggered by system state, not by model self-assessment?** If the agent decides when to escalate, it will escalate too rarely.
5. **Can the system be audited by your security and compliance team without a developer explaining it?** If not, it is not production-ready.

These are not aspirational standards. They are the minimum bar for a system that operates autonomously on enterprise data and affects business outcomes.

---

## A note on speed versus governance

The common objection to production-grade agentic architecture is that it slows down deployment. This is true for the first system. It is not true for the portfolio.

The patterns described above — policy manifests, structured traces, escalation triggers, fallback maps — are reusable. Once built and validated for one agentic workflow, they become the template for the next. The governance overhead is front-loaded. The deployment cadence accelerates.

Organisations that skip the architecture because the first system is "just a pilot" typically rebuild it expensively when the pilot proves the business case and the business asks for production. The cost of retrofitting governance into a running agentic system is significantly higher than the cost of building it in from the start.

---

## References and further reading

- Stanford HAI. *AI Index Report 2025.* Stanford University Human-Centered Artificial Intelligence, 2025.
- Microsoft Research. *GAIA: A Benchmark for General AI Assistants.* Microsoft Research, 2024. [arxiv.org/abs/2311.12983](https://arxiv.org/abs/2311.12983)
- Mitra, A. et al. *AutoGen: Enabling Next-Generation Multi-Agent Applications.* Microsoft Research, 2024. [arxiv.org/abs/2308.08155](https://arxiv.org/abs/2308.08155)
- LangChain. *LangGraph: Stateful, Multi-Actor Applications with LLMs.* LangChain Documentation, 2025. [langchain-ai.github.io/langgraph](https://langchain-ai.github.io/langgraph)
- Open Policy Agent. *OPA Documentation: Policy-as-Code for Cloud-Native Systems.* CNCF Project, 2025. [openpolicyagent.org](https://www.openpolicyagent.org)
- Google. *Agent-to-Agent (A2A) Protocol Specification.* Google AI, 2025. [developers.google.com/a2a](https://developers.google.com/a2a)
- SAP SE. *Principal Propagation in SAP BTP.* SAP Help Portal, 2025. [help.sap.com](https://help.sap.com)
- Anthropic. *Designing Trustworthy AI Systems.* Anthropic Research, 2025. [anthropic.com](https://www.anthropic.com)
- McKinsey Global Institute. *The State of AI in 2025.* McKinsey & Company, 2025.
- NIST. *AI Risk Management Framework (AI RMF 1.0).* National Institute of Standards and Technology, 2023. [nist.gov/system/files/documents/2023/01/26/AI RMF 1.0.pdf](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10)
