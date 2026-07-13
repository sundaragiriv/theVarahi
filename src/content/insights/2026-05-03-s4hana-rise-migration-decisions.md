---
title: "RISE with SAP in 2026: The Seven Migration Decisions That Will Define Your Next Decade"
description: "A practitioner's breakdown of the choices that determine whether your RISE migration delivers a modern ERP or just moves technical debt to the cloud."
pubDate: 2026-05-03
author: "Varahi"
tags: ["Varahi", "sapInsights", "RISE with SAP", "S/4HANA", "Migration", "Clean Core", "ERP"]
draft: false
---

SAP has made the cloud transition unavoidable. Extended maintenance for ECC ends in 2027. RISE with SAP is the go-to vehicle for most enterprise moves. But the programme name has made the conversation too easy: organisations are choosing RISE before they have resolved the decisions that will determine whether the migration is a platform reset or an expensive lift-and-shift.

These are the seven decisions that matter most. Get them right early and you gain options. Defer them and the system integrator will make them for you — usually in whatever way keeps the programme on schedule.

---

## Decision 1: Clean core or extended core?

This is the master decision from which everything else flows.

**Clean core** means running SAP Best Practices processes inside the S/4HANA kernel without modification, with all extensions built as side-by-side applications on BTP using standard APIs. The resulting system is upgradeable, cloud-compatible, and eligible for every AI and automation feature SAP ships post go-live.

**Extended core** means carrying custom code — ABAP modifications, user exits, legacy enhancements — into S/4HANA. The system works at go-live. Upgrades become negotiation events. Every AI feature that depends on standard data structures has to be re-scoped for your modified tables.

SAP's own 2025 data shows that customers with clean-core architectures complete quarterly upgrades in under three weeks. Customers with significant custom code average eleven weeks, and many defer upgrades entirely — recreating the same maintenance debt that drove the migration in the first place.

The decision is not binary, but the default posture should be clean core unless the business can articulate a specific, quantified reason why a process cannot run on Best Practices.

---

## Decision 2: Business process transformation or system replacement?

RISE migrations that treat the programme as a technology project consistently underdeliver. The ERP change is the forcing function for process change — if you do not take that opportunity, you have paid migration cost without capturing migration value.

Before scoping the technical migration, map every process that will move to S/4HANA against SAP Best Practices equivalents. For each gap between your current process and the standard:

- Is the gap a genuine competitive differentiator?
- Does a third-party product on the SAP ecosystem solve it better?
- Is the gap a legacy of a previous implementation decision that nobody has questioned since?

The Gartner ERP Market Guide (2025) found that organisations that conducted structured process redesign before migration achieved 30% faster post-go-live adoption and 22% lower support costs in year one compared to those that migrated existing processes as-is.

Most gaps fall into the third category. That is not a criticism — it is the normal result of systems that were configured in 2008 and never revisited.

---

## Decision 3: What stays in SAP, what moves to best-of-breed?

S/4HANA is not the right platform for every process. Before scoping the migration, decide where the ERP boundary sits.

Strong candidates to remain in S/4HANA: financial accounting and controlling, procurement, order management, plant maintenance, and production planning. These are SAP's core competencies. Best Practices coverage is deep. AI features (Joule, embedded analytics, predictive accounting) add genuine value at the core.

Strong candidates for best-of-breed: CRM and field service management (Salesforce, ServiceNow, and Microsoft Dynamics have built deeper CX tooling than SAP CX), advanced planning optimisation (Blue Yonder and Kinaxis outperform IBP for complex multi-echelon networks), and HR (SuccessFactors is part of the SAP portfolio but is a separate purchasing and implementation decision).

The integration cost between SAP and best-of-breed grows with the number of boundary crossings. Keep the integration map visible and attach a real cost number to each interface. Complexity always looks cheap at design time.

---

## Decision 4: Data migration scope and data quality ownership

Bad data migrated into S/4HANA is bad data in S/4HANA, now with an expensive new host. The migration is the last natural moment to address master data quality before it becomes an AI problem.

Structure the data migration in four phases:

1. **Discovery**: Extract current master data (material masters, customer and vendor masters, asset registers, open items). Profile completeness, accuracy, and uniqueness.
2. **Remediation**: Assign business ownership for each data domain. Data quality is a business problem, not an IT problem.
3. **Transformation**: Map legacy structures to S/4HANA data models. Document every mapping decision and its business rationale.
4. **Validation**: Load to a quality system and run business validation cycles — not technical checks. A technically valid material master that no one can find in production is a failure.

SAP's recommended data migration toolset is the SAP S/4HANA Migration Cockpit, supplemented by LSMW or BODS for complex transformations. Third-party tools (Syniti, Precisely) add value for large, complex datasets with significant legacy structure. The tool matters less than the governance model.

One rule applies everywhere: **never migrate data that the business will not validate**. If a business owner will not sign off on a data domain, it is not ready to move.

---

## Decision 5: BTP architecture and integration strategy

The Business Technology Platform is the extension and integration layer for RISE. How you architect BTP determines how much of SAP's AI, automation, and analytics roadmap you can actually use.

Key BTP architectural decisions:

**Integration Suite vs. point-to-point**: SAP Integration Suite (CPI) is the recommended integration backbone for RISE environments. Point-to-point integrations between S/4HANA and third-party systems create maintenance overhead that compounds over time. Every interface that bypasses Integration Suite is a future migration cost.

**Extension model**: Side-by-side extensions built on CAP (Cloud Application Programming Model) with standard OData APIs are upgradeable. Key user extensibility (in-app extensibility) covers simpler adaptations without custom code. Classic ABAP extensions should be the last resort, not the default.

**Event architecture**: SAP Event Mesh enables loose coupling between S/4HANA and downstream systems. Designing for event-driven architecture from day one — rather than retrofitting it later — dramatically simplifies the AI integration work that will follow go-live.

**Analytics and AI**: Datasphere is the data fabric that connects S/4HANA transactional data to SAP Analytics Cloud and to AI models. Scoping Datasphere as part of the RISE programme, rather than as a follow-on project, halves the integration work.

---

## Decision 6: Hyperscaler alignment

RISE with SAP runs on AWS, Azure, or GCP. The hyperscaler selection is not just a price negotiation — it has technical consequences for adjacent workloads.

If your organisation's data warehouse, AI platform, and analytics tooling are AWS-native (Redshift, SageMaker, Bedrock), placing RISE on Azure creates a cross-cloud data movement cost and latency that accumulates with every workload. The same logic applies in reverse.

The practical rule: align RISE to the hyperscaler where your non-SAP AI and analytics workloads already run. The egress cost and architectural complexity of cross-cloud data movement eliminate much of the cost case for optimising the RISE contract alone.

Private pricing arrangements between SAP and hyperscalers change annually. Involve procurement early and negotiate the RISE contract, hyperscaler commitment, and any BTP consumption bundling as a single transaction.

---

## Decision 7: Organisational model for post-go-live

The migration programme ends. The SAP organisation does not.

S/4HANA on RISE operates on a continuous upgrade model. SAP ships quarterly feature packs. The customer organisation needs a team that can evaluate each release, test impacts on extensions and integrations, and deploy within a reasonable window. This is not a hypercare team — it is a permanent capability.

Define the post-go-live model before go-live:

- **Platform owner**: accountable for the S/4HANA and BTP estate, upgrade cycle, and clean-core compliance
- **Process owners**: business leads accountable for process configuration in each domain
- **Integration owner**: accountable for Integration Suite pipelines, event architecture, and API governance
- **AI capability lead**: accountable for Joule configuration, embedded AI features, and the roadmap for agentic workloads built on BTP

Organisations that do not establish these roles before go-live spend the first eighteen months after migration in reactive support mode. The competitive advantage that justified the migration cost does not materialise.

---

## What good looks like

A well-scoped RISE migration produces five outcomes that a lift-and-shift cannot:

1. Quarterly upgrades completed in under four weeks, without programme-level mobilisation
2. AI features deployable on standard data structures without custom integration work
3. Extensions that survive upgrades without regression testing cycles measured in months
4. A data estate clean enough to serve as a training and inference substrate for enterprise AI
5. An organisation that can say yes to new SAP features instead of calculating the cost of taking them

The decisions above are not the only ones you will face. But they are the ones where the wrong choice in month two becomes the constraint in year five.

---

## References and further reading

- SAP SE. *RISE with SAP: Solution Overview.* SAP Help Portal, 2025. [help.sap.com](https://help.sap.com)
- SAP SE. *Clean Core for SAP S/4HANA Cloud.* SAP Community Whitepaper, 2024.
- Gartner. *Magic Quadrant for Cloud ERP for Product-Centric Enterprises.* Gartner Research, October 2025.
- Gartner. *ERP Market Guide: S/4HANA Migration Patterns.* Gartner Research, 2025.
- SAP SE. *SAP S/4HANA Migration Cockpit — Best Practices Guide.* SAP Help Portal, 2025.
- Syniti. *Enterprise Data Migration: The Definitive Guide.* Syniti Knowledge Base, 2025.
- SAP SE. *SAP Business Technology Platform — Architecture Reference.* SAP BTP Documentation, 2025.
- Forrester Research. *The Total Economic Impact of RISE with SAP.* Forrester Consulting, commissioned by SAP, 2024.
- ASUG (Americas' SAP Users' Group). *State of SAP S/4HANA Migrations: 2025 Member Survey.* ASUG Research, 2025.
- Bluefin Solutions. *Clean Core Adoption Patterns in European Enterprise Migrations.* Bluefin Whitepaper, 2025.
