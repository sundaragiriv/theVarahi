---
title: "Architecting the service backbone for an autonomous robotaxi fleet"
description: "SAP FSM, EAM and S/4HANA Service wired into 35+ in-house diagnostic and telemetry systems — governing high-consequence physical assets from depot deployment to engineering teardown."
client: "Zoox (Amazon)"
role: "Senior SAP Solution Architect — Autonomous Fleet Asset & Service"
industry: "Autonomous Fleets"
year: 2026
pubDate: 2026-01-15
tags: ["FSM", "EAM", "S/4HANA", "Clean Core", "Telemetry"]
metrics:
  - label: "In-house telemetry systems integrated"
    value: "35+"
  - label: "Value stream owned"
    value: "Install → Decommission"
  - label: "Core modifications"
    value: "0 · clean core"
  - label: "Dispatch"
    value: "Fault-code matched"
draft: false
---

## The problem worth solving

An autonomous-vehicle company runs a purpose-built, driverless robotaxi fleet across multiple US cities. These are high-consequence physical assets — a service miss is not a late repair, it is a safety event. The service estate had to govern every vehicle from depot deployment through complex engineering teardown, while staying in lockstep with 35 bespoke, home-grown diagnostic and telemetry systems that had grown up alongside the vehicles.

## What was built

Serving as the chief architectural authority for the global service transformation, Venkata tailored an end-to-end **Install-to-Decommission** value stream on SAP FSM, EAM and S/4HANA Service, and engineered a resilient integration framework connecting it to the 35 in-house diagnostic and telemetry systems over SAP BTP and Cloud Integration (CPI) — high-throughput API patterns keeping asset-health data in sync with the enterprise core.

A **Clean Core** discipline kept the specialised vehicle-telemetry logic *out* of the S/4HANA digital core: decoupled, cloud-native extension apps on BTP with custom Fiori frameworks handled the complex fleet configurations without touching standard objects. Real-time scheduling and dispatch dashboards in FSM matched automated fault codes directly to technician skill, tooling and safety-clearance level — with offline capability so service never stopped in subterranean or shielded test environments.

## Why it matters

This is what "asset-intensive service, done right" looks like: the platform is clean, the telemetry is integrated rather than bolted on, and the dispatch decision is driven by the machine's own fault codes. It is the reference architecture behind Varahi's Platform and Cognition layers.
