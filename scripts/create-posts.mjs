#!/usr/bin/env node
/**
 * Creates blog posts in Strapi and publishes them.
 * Idempotent: posts that already exist (matched on slug) are skipped.
 * Run via .github/workflows/create-strapi-posts.yml
 */

const STRAPI_URL = process.env.STRAPI_URL || "https://nexgenio.com/cms";
const TOKEN = process.env.STRAPI_WRITE_TOKEN;
if (!TOKEN) { console.error("STRAPI_WRITE_TOKEN not set"); process.exit(1); }

const ASSETS = "https://assets.nexgenio.com/blog/headers";

const posts = [
  {
    title: "\u20ac300,000 for 200 pages. Still sitting on a shelf. What was actually missing?",
    slug: "300k-shelf-what-was-missing",
    publishedDate: "2026-08-28",
    excerpt: "An organisation spent \u20ac300,000 on external consultants for ISO 27001 certification. Twelve months later, nobody inside knows how to operate the management system. The gap between documents and culture is where governance fails.",
    metaTitle: "\u20ac300,000 for 200 pages. Still sitting on a shelf. What was actually missing?",
    metaDescription: "Why expensive ISO 27001 certification projects fail when the organisation cannot operate the management system the consultants built.",
    featuredImageUrl: `${ASSETS}/post-2-300k-shelf-article-og.png`,

    body: `A mid-sized organisation spends \u20ac300,000 on external consultants to achieve ISO 27001 certification. Six months later, the auditors sign off. The deliverable is impressive: 200 pages of policies, procedures, risk registers, and statements of applicability. The certificate goes on the wall. The documents go into a SharePoint folder. And there they stay.

Twelve months on, the information security manager leaves. The risk register has not been updated since the audit. Incident response procedures exist on paper, but nobody has rehearsed them. Internal audits are overdue. When a client asks for evidence of continuous improvement, the team scrambles to reconstruct what the consultants built, because nobody inside the organisation truly understands how to operate it.

This is the default outcome when certification is treated as a project with a finish line rather than an operating system with a daily rhythm.

## The gap between documents and culture

The consultants delivered exactly what they were paid to deliver: documentation that satisfies the standard. The problem is that documentation is only one layer. Beneath it sits something harder to purchase. The knowledge to interpret the policies. The habits that turn procedures into reflexes. The ownership that makes a risk register a living tool rather than a static spreadsheet.

This is the culture and adoption gap. It sits between what an organisation possesses on paper and what it can actually execute on a Tuesday morning when something goes wrong. Closing that gap requires people inside the organisation who understand the management system deeply enough to run it, challenge it, and improve it. It requires competence, and competence is built through structured development like the [ISO 27001 Lead Implementer](/self/iso-27001-lead-implementer.html) pathway, where practitioners learn to design, build, and sustain an ISMS from the inside.

## Documentation is a starting point

A policy document answers the question "what should we do?" Operating rhythm answers the harder questions: who reviews this, how often, what triggers an update, and how do we know it is working? Without that rhythm, the management system decays quietly. Compliance becomes a point-in-time snapshot rather than a continuous state.

The organisations that get lasting value from certification are the ones that invest in internal capability alongside external expertise. They build teams who own the system, who can adapt it when the business changes, and who treat governance as something they live inside rather than something they reference occasionally.

## What NexGenio delivers

NexGenio builds governance architecture that organisations can operate themselves. That means designing management systems with clear ownership, embedded review cycles, and practical operating rhythms that fit the way the business actually works. It means developing the internal competence to sustain, challenge, and evolve the system long after the consultants have left.

The result is compliance as a living discipline. A daily operating reality where policies, risk decisions, and continuous improvement are woven into how the organisation functions. The certificate on the wall reflects something real: a culture that owns its governance and knows how to keep it running.

That is what \u20ac300,000 should buy. The question is whether it did.`
  },
  {
    title: "Third redesign. Same deadline, six months gone. What actually needed fixing was the translation.",
    slug: "third-redesign-translation-gap",
    publishedDate: "2026-08-29",
    excerpt: "An organisation redesigns its ISMS for the third time as new regulations arrive. Each redesign takes months. The problem is the translation layer between regulatory text and technical implementation.",
    metaTitle: "Third redesign. Same deadline, six months gone. What actually needed fixing was the translation.",
    metaDescription: "Why governance architectures break with every new regulation and how building the translation layer once eliminates the cycle of perpetual redesign.",
    featuredImageUrl: `${ASSETS}/post-3-third-redesign-article-og.png`,

    body: `An organisation builds its ISMS around ISO 27001. It works. Controls map to assets, audits pass, the board signs off. Then NIS2 arrives. The security team retrofits the existing architecture, bolting on incident reporting timelines, supply chain obligations, and sector-specific requirements. It takes four months. The structure holds, barely.

Then DORA lands. Financial services oversight, ICT risk management frameworks, third-party concentration risk. The architecture bends again. Another redesign, another five months. Controls overlap in some places and contradict in others. Mapping documents multiply. The team spends more time maintaining cross-references than managing actual risk.

Now the AI Act is on the horizon. The organisation looks at its governance architecture and sees the same pattern about to repeat. A third redesign. The same deadline pressure. Six months already gone across the first two iterations, and the fundamental problem remains untouched.

The architecture keeps breaking because it was built for one framework and extended sideways for each new one.

This is where most organisations focus on the wrong layer. They treat each new regulation as a structural problem, something that requires rebuilding the management system. They reorganise control libraries, rewrite policy hierarchies, and redraw process maps. Each time, the work feels productive. Each time, it produces a system that works for the current set of requirements and fractures the moment a new one appears.

The actual problem sits one level deeper: the translation layer between regulatory obligations and technical implementation.

Every regulation, regardless of its sector or scope, requires the same fundamental translation. Legal language must become operational requirements. Operational requirements must become infrastructure specifications. Infrastructure specifications must become auditable evidence. This translation happens whether the source is NIS2, DORA, ISO 27001, or the AI Act. The steps are structurally identical. What changes is the vocabulary, the reporting cadence, and the scope boundaries.

When governance architecture is built around a single framework's vocabulary, every new framework forces a vocabulary migration. That migration is the redesign. It consumes months, introduces inconsistencies, and leaves the organisation perpetually one regulation behind.

NexGenio builds governance architecture around the translation layer itself. The structure is designed to accept any regulatory obligation as input and produce infrastructure specifications as output, regardless of which framework generated the requirement. New regulations become configuration. The mapping between legal text and technical control exists once, in a form that absorbs additional frameworks without architectural change.

This is what distinguishes a governance system that survives regulatory change from one that requires periodic demolition. The translation competence is the architecture.

Building that competence across frameworks requires specific, structured training. NexGenio's programmes in [NIS2 Lead Implementer](/self/nis2-lead-implementer.html), [DORA Lead Manager](/self/dora-lead-manager.html), [ISO 27001 Lead Implementer](/self/iso-27001-lead-implementer.html), and [ISO 42001 Lead Implementer](/self/iso-42001-lead-implementer.html) develop practitioners who can operate across regulatory boundaries, translating obligations into implementation regardless of the source framework.

The organisation that stops redesigning is the one that built the translation right the first time.`
  },
  {
    title: "DORA compliant? Four people, four different answers.",
    slug: "dora-compliant-four-different-answers",
    publishedDate: "2026-08-30",
    excerpt: "A CISO, a DPO, IT, and a board member each give a different answer to the same DORA compliance question. The problem is language, not knowledge.",
    metaTitle: "DORA compliant? Four people, four different answers.",
    metaDescription: "When four departments define DORA compliance differently, the organisation has a language barrier. Here is how governance architecture creates one shared answer.",
    featuredImageUrl: `${ASSETS}/post-4-four-answers-article-og.png`,

    body: `A CISO, a DPO, a head of IT, and a board member sit in the same room. Someone asks: "Are we DORA compliant?" Four answers come back. The CISO talks about incident reporting timelines. The DPO raises third-party processor contracts. IT points to the disaster recovery test they ran last quarter. The board member recalls a slide deck from an external auditor six months ago. Every answer is partially correct. None of them align.

This scene plays out across financial services firms every week. The assumption is that the organisation has a knowledge problem, that someone needs to read the regulation more carefully or attend one more workshop. But knowledge is already in the room. The real problem is language. Four competent professionals are describing the same obligations using four different vocabularies, shaped by four different operational contexts. DORA does not fail at the point of understanding. It fails at the point of translation.

The regulation itself is precise. It defines ICT risk management frameworks, incident classification taxonomies, third-party oversight requirements, and resilience testing protocols. The text is clear. What is missing is the connective tissue between regulatory text and the infrastructure, processes, and evidence that prove conformance. Each function interprets the requirements through its own lens, builds its own tracking mechanisms, and produces its own version of "proof." The result is fragmented compliance: multiple efforts, overlapping costs, and no single source of truth.

This is where the language barrier becomes expensive. Auditors arrive and ask for evidence. The organisation scrambles to assemble artefacts from five different systems, reconcile conflicting terminology, and construct a narrative that looks coherent. The preparation alone consumes weeks. Gaps appear that were invisible when each team assessed itself in isolation. Remediation becomes urgent rather than planned.

Closing this gap requires more than regulatory awareness. It requires the ability to architect governance structures that connect policy to operations to evidence in one continuous thread. Professionals who hold a [NIS2 Lead Implementer](/self/nis2-lead-implementer.html) credential bring exactly this competence: the ability to decompose regulatory frameworks into implementable specifications and map them to organisational infrastructure. That skill transfers directly to DORA, where the challenge is the same. Turn legal obligations into operational controls, and make compliance observable.

NexGenio builds governance architecture that does precisely this. Regulatory text becomes infrastructure specification. Controls produce evidence continuously, as a byproduct of normal operations. Every stakeholder, from the CISO to the board, works from the same structured language. Compliance status is visible in real time, across every domain DORA touches: ICT risk, incident management, third-party oversight, resilience testing.

When four people answer the same question four different ways, the organisation does not need more expertise. It needs a shared architecture. One language, one evidence base, one answer.`
  },
  {
    title: "DORA compliant since January 2025. Eighteen months later, maintaining it costs more than building it did.",
    slug: "dora-maintaining-costs-more-than-building",
    publishedDate: "2026-08-31",
    excerpt: "A financial services firm hit its DORA deadline on time. Eighteen months later, maintaining compliance consumes 35% of the risk team's capacity. The architecture was optimised for the deadline, not the decade after it.",
    metaTitle: "DORA compliant since January 2025. Eighteen months later, maintaining it costs more than building it did.",
    metaDescription: "Why DORA compliance maintenance costs more than initial implementation and how governance architecture designed for continuous operation changes the equation.",
    featuredImageUrl: `${ASSETS}/post-5-maintaining-costs-article-og.png`,

    body: `A mid-sized financial services firm hits its DORA compliance deadline in January 2025. The programme runs for fourteen months, costs six figures, and finishes on time. Six months later, the CISO reports that maintaining compliance is consuming 35% of the operational risk team's capacity. Evidence gathering alone takes eleven hours per week. Every ICT incident triggers a manual scramble to reconstruct audit trails, map third-party dependencies, and produce documentation that satisfies the regulator. The team built for BAU is now running a permanent compliance operation on the side.

This pattern is remarkably common. According to a 2025 Gartner survey, 62% of organisations that achieved regulatory compliance on schedule reported higher ongoing costs than their initial implementation. For DORA specifically, the numbers are worse. The regulation's five pillars demand continuous proof: live risk registers, tested resilience scenarios, up-to-date third-party oversight, and incident reporting within tight timeframes. Compliance is a present-tense obligation, and the evidence burden compounds quarter by quarter.

The instinct is to throw more people at it. Hire another GRC analyst. Add a reporting layer. Build more dashboards. But the real problem is architectural. Most DORA implementations treat compliance as a project with a delivery date. The governance structures, evidence pipelines, and escalation frameworks are designed to pass an assessment, then bolted onto existing operations afterwards. The result is a parallel workstream that duplicates effort, fragments accountability, and degrades over time as staff rotate and institutional memory fades.

The cost curve only bends when evidence generation becomes a byproduct of normal operations. When ICT risk management, incident classification, and third-party monitoring produce their own audit trails as part of daily workflow, the overhead collapses. A well-architected governance framework reduces evidence gathering from hours per week to minutes, because the evidence already exists in the format the regulator expects.

This is where competence becomes the critical variable. Tools and templates can automate collection, but someone has to design the operating rhythm, calibrate the thresholds, and maintain alignment as the regulatory landscape shifts. Organisations that invest in a [DORA Lead Manager](/self/dora-lead-manager.html) with the authority and skill to own the governance architecture see measurably different outcomes: 40% to 60% reduction in recurring compliance effort within the first operating cycle.

NexGenio builds governance architecture where compliance is an operating condition, sustained through a rhythm that teams can maintain indefinitely. Evidence pipelines are embedded into existing processes. Accountability structures map to real roles, with clear escalation paths that survive staff changes. Resilience testing follows a cadence that keeps the organisation perpetually audit-ready, with no surge effort required when the regulator calls.

The firms that struggle with post-compliance fatigue share one trait. They optimised for the deadline. The firms that operate smoothly share a different one. They optimised for the decade after it.`
  },
  {
    title: "NIS2. DORA. ISO 27001. ISO 42001. EU AI Act. All tracked in one person\u2019s spreadsheet.",
    slug: "five-regulations-one-spreadsheet",
    publishedDate: "2026-09-01",
    excerpt: "Five regulatory frameworks, three departments, one compliance manager holding it all together in a spreadsheet. The problem is architectural: each obligation was implemented independently with no shared control layer underneath.",
    metaTitle: "NIS2. DORA. ISO 27001. ISO 42001. EU AI Act. All tracked in one person\u2019s spreadsheet.",
    metaDescription: "How a unified governance architecture eliminates the spreadsheet that holds five regulatory frameworks together and replaces it with one coherent compliance structure.",
    featuredImageUrl: `${ASSETS}/post-6-one-spreadsheet-article-og.png`,

    body: `A compliance manager opens her laptop on Monday morning. She has fourteen tabs open. One for the NIS2 gap analysis. One for the DORA register of ICT third-party providers. One for the ISO 27001 Statement of Applicability. One for the AI risk assessment the board requested last quarter. One for the spreadsheet that tries to tie it all together.

That spreadsheet is the actual governance architecture. Everything depends on it. And it lives on one person's machine.

This is more common than any executive wants to admit.

Here is what the situation looks like in practice:

- Five regulatory and standards frameworks, each with its own control set, its own evidence requirements, its own audit cycle.
- Controls that overlap across frameworks but are documented separately, creating duplicate work and conflicting records.
- Evidence collected three or four times for the same underlying process, stored in different folders, described in different language.
- A single point of failure: one person who understands how the pieces connect, carrying the mapping in her head and her spreadsheet.
- Every new regulation added to the pile multiplies the workload instead of fitting into an existing structure.

Most organisations diagnose this as a resourcing problem. They hire another analyst, buy another GRC tool, add another tab to the spreadsheet. The backlog shrinks for a month, then grows again.

The real problem is architectural. These frameworks were never designed to be managed in isolation. NIS2 and DORA share incident reporting obligations. ISO 27001 and ISO 42001 share risk methodology and management system structure. The EU AI Act introduces requirements that sit on top of information security controls already mapped elsewhere. When each framework gets its own silo, the organisation does the same work repeatedly and still has gaps between the silos where obligations fall through.

The fix is a single governance architecture that treats all frameworks as parallel views of the same operational reality. Shared controls get mapped once. Evidence gets collected once and tagged to every framework it satisfies. Audit preparation draws from one source of truth, filtered by framework, instead of five separate binders assembled under pressure.

NexGenio builds exactly this. A unified compliance architecture where NIS2, DORA, ISO 27001, ISO 42001, and the EU AI Act sit inside one coherent structure. Obligations are cross-mapped at the control level. Evidence pipelines feed every framework simultaneously. The spreadsheet becomes unnecessary because the architecture itself holds the logic.

This requires people who understand each framework deeply enough to see where they converge. That cross-framework competence is the foundation: professionals trained as [NIS2 Lead Implementer](/self/nis2-lead-implementer.html), [DORA Lead Manager](/self/dora-lead-manager.html), [ISO 27001 Lead Implementer](/self/iso-27001-lead-implementer.html), and [ISO 42001 Lead Implementer](/self/iso-42001-lead-implementer.html), with the operational AI literacy a [Certified AI Manager](/self/caim.html) brings to the table. That combination is what turns five separate compliance projects into one governed system.

One structure. One evidence base. All frameworks. No spreadsheet required.`
  },
  {
    title: "The system was built correctly. The audit found the evidence wasn\u2019t there.",
    slug: "system-built-correctly-evidence-missing",
    publishedDate: "2026-09-02",
    excerpt: "An ISO 27001 surveillance audit finds a well-designed ISMS with a critical gap: controls exist but evidence of their operation does not. Building a system and operating it are different disciplines.",
    metaTitle: "The system was built correctly. The audit found the evidence wasn\u2019t there.",
    metaDescription: "Why well-designed management systems still fail surveillance audits and how evidence-producing infrastructure closes the gap between built and operating.",
    featuredImageUrl: `${ASSETS}/post-7-evidence-missing-article-og.png`,

    body: `A mid-sized services firm passes its ISO 27001 Stage 2 certification. The ISMS is well designed. Policies are thorough, risk treatments are mapped, and the Statement of Applicability covers every relevant control. Twelve months later, the surveillance auditor asks a simple question: "Show me evidence that access reviews were performed quarterly as your policy states." The room goes quiet. The reviews happened. The evidence was never captured.

The nonconformity lands. Leadership is frustrated. They invested heavily in building the system. They hired consultants, trained staff, purchased tooling. The system itself is sound. But the audit outcome tells a different story, because the question was never whether the system was designed correctly. The question was whether anyone could prove it was operating.

This is a pattern that repeats across organisations of every size. The energy goes into architecture. Policies get drafted, controls get selected, frameworks get mapped. That work matters. But it addresses only half the problem. The other half is operational: generating, collecting, and retaining the artefacts that demonstrate each control is functioning as specified, continuously, across every review cycle.

The gap between "built" and "operating" is a discipline gap. Building a management system requires design thinking, risk analysis, and standards expertise. Operating one requires process engineering, automation, and a relentless focus on evidence lifecycles. These are complementary skill sets, and most organisations staff for the first while assuming the second will take care of itself.

It rarely does. Evidence production depends on repeatable, instrumented processes. Access review logs need timestamps, approver identities, and scope records. Business continuity tests need structured outputs that map back to recovery objectives. Incident response exercises need documented timelines and decision trails. When these artefacts are produced manually, they drift. When they drift, surveillance audits surface the gap.

The cost of that gap compounds. A minor nonconformity triggers corrective action, follow-up evidence, and auditor re-review. A major nonconformity can suspend certification. Either way, the organisation spends more time remediating than it would have spent building the evidence infrastructure in the first place.

NexGenio closes this gap by translating compliance specifications into operational infrastructure that produces evidence continuously. Every control requirement becomes a process with defined inputs, outputs, and retention rules. Evidence generation is embedded into daily operations, so the artefacts exist as a byproduct of the work itself. When the auditor asks for proof, the proof is already there.

This approach draws on deep fluency in the standards themselves. NexGenio's [ISO 27001 Lead Implementer](/self/iso-27001-lead-implementer.html) expertise ensures that information security controls are mapped precisely to evidence requirements, while [ISO 22301 Lead Implementer](/self/iso-22301-lead-implementer.html) capability brings the same rigour to business continuity, where exercise records and recovery test outputs must demonstrate readiness across every planning cycle.

The system was built correctly. The next step is making sure the evidence proves it, every single time.`
  },
  {
    title: "Certified. Audited. Passed. Still no governance.",
    slug: "certified-audited-passed-no-governance",
    publishedDate: "2026-09-03",
    excerpt: "A fully ISO 27001 certified organisation passes every audit but has no governance. The CISO runs the ISMS and reports on its effectiveness. The board nods. There is no separation between operation and oversight.",
    metaTitle: "Certified. Audited. Passed. Still no governance.",
    metaDescription: "Why ISO 27001 certification and successful audits do not equal governance, and what real board-level oversight looks like.",
    featuredImageUrl: `${ASSETS}/post-8-no-governance-article-og.png`,

    body: `A mid-sized financial services firm. ISO 27001 certified for three years running. External audits passed every cycle. Surveillance visits completed on schedule. The ISMS is maintained, the risk register updated, the statement of applicability current.

The board receives a quarterly slide deck. Ten minutes. Green across the board. Nods. Next agenda item.

No one asks who prepared the slides. No one notices that the same team operating the ISMS is also reporting on its effectiveness. No one questions whether the controls are delivering value or simply existing.

Certified. Audited. Passed. And still, governance is absent.

This is the gap. Compliance confirms that controls exist. Governance asks whether those controls serve the business. Compliance is a system. Governance is a discipline. They overlap, but they are different things, and one does not produce the other automatically.

The pattern repeats across industries. The information security team builds the management system, runs internal audits, manages corrective actions, and then presents its own scorecard to leadership. There is no separation between operation and oversight. The people doing the work are the same people evaluating the work. The board has visibility, technically. It has independence, never.

Governance requires three structural commitments.

First, separation. The function that operates the ISMS cannot be the sole function that evaluates its performance. Oversight needs a distinct line of sight, free from the incentives of the operating team.

Second, board-level independent visibility. Leadership needs direct access to performance data, risk trends, and control effectiveness. Filtered through the operating team, that data arrives pre-interpreted. Governance means the board can see for itself.

Third, accountability for value delivery. Controls cost money. They consume time. They impose constraints on how teams work. Governance holds the organisation accountable for ensuring those costs produce outcomes: reduced exposure, faster incident response, measurable resilience. A certificate confirms the system exists. Governance confirms the system works toward something.

This is where structured capability matters. Professionals trained through an [ISO 27001 Lead Implementer](/self/iso-27001-lead-implementer.html) programme understand how to build a management system. They also understand where the management system ends and governance begins. That boundary is where most organisations stall.

They pass the audit. They renew the certificate. They never build the oversight layer that turns compliance activity into business steering.

NexGenio delivers governance as the discipline that connects compliance to business outcomes. Real separation between operation and oversight. Real board visibility, independent of the operating team. Real accountability for whether controls deliver value or simply persist.

The certificate says the system is in place. Governance makes sure it is going somewhere.`
  },
  {
    title: "Your board is now personally liable. Nobody gave them a way to see the risk.",
    slug: "board-personally-liable-risk-invisible",
    publishedDate: "2026-09-04",
    excerpt: "NIS2 Article 20(2) makes management bodies personally liable for cybersecurity oversight. Most boards approve risk reports they cannot meaningfully evaluate. Oversight becomes a signature.",
    metaTitle: "Your board is now personally liable. Nobody gave them a way to see the risk.",
    metaDescription: "How NIS2 Article 20(2) personal liability exposes the translation gap between technical cybersecurity risk and board-level governance.",
    featuredImageUrl: `${ASSETS}/post-9-board-liable-article-og.png`,

    body: `NIS2 Article 20(2) is unambiguous. Management bodies are personally liable for overseeing cybersecurity risk management. The directive does not assign this duty to the CISO, the IT department, or a compliance team. It assigns it to the board.

So the board asks to see the risk.

The CISO prepares a 47-slide deck. It covers threat vectors, vulnerability scan results, patching cadence, SIEM alert volumes, and a colour-coded heat map. The presentation is thorough, technically sound, and entirely opaque to anyone whose expertise sits outside information security. The board listens, asks a few clarifying questions, and approves the report. The item moves to the next agenda slot.

Oversight just became a signature on a page.

This pattern repeats in organisations across every sector now falling under NIS2 scope. The board carries personal liability for a domain it was never equipped to evaluate. Directors are expected to oversee risk they cannot interpret, challenge assumptions they lack the framework to test, and make informed decisions using material designed for a different audience entirely. The gap is structural. It sits between the technical reality of cybersecurity posture and the decision language a board uses to govern.

That gap is where liability accumulates.

When a regulator investigates after an incident, the question will be straightforward: did the management body exercise effective oversight? Approving a slide deck the board could not meaningfully interrogate does not meet that threshold. Personal liability under Article 20(2) demands demonstrable competence and genuine engagement with the risk landscape. A [NIS2 Lead Implementer](/self/nis2-lead-implementer.html) programme builds exactly this competence, equipping leaders to bridge the distance between technical controls and governance accountability.

The missing piece in most organisations is a translation layer. Technical teams understand the risk in granular detail. The board understands strategic consequence, financial exposure, and operational continuity. These two languages describe the same reality from different positions. Without architecture that connects them, the board governs blind, and the CISO presents into a vacuum.

NexGenio builds the governance architecture that closes this gap. Risk is restructured into board-level decision language: strategic exposure mapped to business objectives, quantified impact scenarios tied to financial thresholds, and clear escalation criteria the board can act on with confidence. Every reporting cycle gives directors the means to evaluate, challenge, and direct. Oversight becomes a functioning control, grounded in material the board is equipped to use.

The result is a leadership team that meets its Article 20(2) obligations with substance. Directors see cybersecurity risk in terms they can govern. CISOs present to an audience that engages with the content. And the organisation replaces ceremonial approval with informed decision-making at the highest level.

Personal liability demands personal understanding. NexGenio delivers the structure that makes both possible.`
  },
  {
    title: "The Cyberbeveiligingswet is live. We are opening the Netherlands.",
    slug: "opening-the-netherlands-cyberbeveiligingswet",
    publishedDate: "2026-09-16",
    excerpt: "The Dutch NIS2 implementation entered into force on 15 August 2026. More than 8,000 organisations are now in scope, each with a register entry to maintain and a management body that signs for it. NexGenio is now serving the Dutch market.",
    metaTitle: "The Cyberbeveiligingswet is live. We are opening the Netherlands.",
    metaDescription: "The Cyberbeveiligingswet entered into force on 15 August 2026, bringing 8,000+ Dutch organisations into NIS2 scope. NexGenio is now serving the Netherlands with governance architecture and a technical partner bench.",

    body: `On 15 August 2026 the Cyberbeveiligingswet entered into force, and the Netherlands moved NIS2 from a directive discussed in advisory notes to national law with a supervisor attached. More than 8,000 Dutch organisations are now in scope.

NexGenio is opening the Netherlands. This post sets out what the law asks for, how we work, and where an organisation can usefully start.

## What the Cyberbeveiligingswet puts in place

The Dutch implementation gives NIS2 a concrete operating shape:

- **A mandatory entity register.** In-scope organisations register through MijnNCSC. The entry is a living record: material changes are reportable within 14 days.
- **A named CSIRT.** NCSC-NL receives incident notifications and provides assistance.
- **A named supervisor.** RDI supervises the majority of sectors. Financial entities answer to DNB and AFM, and personal data obligations remain with the Autoriteit Persoonsgegevens.
- **Board accountability.** Management bodies approve the risk measures, keep themselves trained, and answer for the outcome.

The register entry is the visible part. The substance sits in Article 21, which names ten categories of risk-management measure, and Article 20, which puts the management body's signature on them.

## What we see in the Dutch market

Dutch organisations already run good security engineering. Amsterdam, Rotterdam and Eindhoven have deep benches in pentesting, threat intelligence, OT security and managed detection. The work is strong and the market knows it.

What the Cyberbeveiligingswet adds is a governance question on top of that engineering: who decided this was enough, on what basis, and can the board explain the reasoning to RDI. That is a translation exercise between technical reality and the language a supervisor and a management body use. It is the layer NexGenio builds.

## How we work here

We work as an orchestrator, not a single-vendor stack.

1. **NexGenio provides the governance read.** A structured intake against Article 21 and Article 20, producing a position the board can hold and defend.
2. **A specialist partner provides the technical read.** An independent external assessment from a firm that does that work every day.
3. **Both reads are delivered co-branded.** The client sees two named organisations and two lines of reasoning, which is exactly what makes the conclusion worth something.
4. **Scope is fixed before we start.** The organisation knows the boundary, the deliverable and the fee in advance.

Three independent reads carry more weight with a supervisor than one vendor assessing its own recommendations.

Our delivery model is built around this. Under the EU Services Directive and the Dutch Dienstenwet, advisory services are delivered across the internal market without a separate Netherlands establishment, so a Dutch client works with the same team and the same partner bench from day one. Our scope is governance, NIS2 and DORA: we advise on regulatory obligations and the management systems that satisfy them, which sits outside the licensed perimeter of the Wft.

## Where to start

The **NIS2 Baseline Check** is the entry point. It is a fixed-scope discovery engagement: a governance intake session, an independent technical read from the partner bench, and a written position covering scope determination, the Article 21 measures, the register obligation, and what the board needs to be able to say.

Full detail on scope, the ten measures and the Dutch specifics is on the [NIS2 page](/nis2.html).

To talk it through, [book a scoping call](https://calendly.com/toby-nexgenio/scope_check). Thirty minutes, and you leave it knowing which side of the scope line you sit on.

For teams building the competence in-house, the [NIS2 Lead Implementer](/self/nis2-lead-implementer.html) and [NIS2 Foundation](/self/nis2-foundation.html) pathways develop exactly this capability, and the [DORA Lead Manager](/self/dora-lead-manager.html) programme covers the financial-sector obligations that run alongside it.

The law is in force and the register is open. The organisations that move first get to set their own scope position rather than have one set for them.`
  },
  {
    title: "Your patch policy says 30 days. The turbine says no.",
    slug: "patch-policy-30-days-turbine-says-no",
    publishedDate: "2026-09-16",
    excerpt: "The IT security playbook assumes systems can be patched, rebooted, and restored. Industrial control systems run physical processes where none of those assumptions hold. ISA/IEC 62443 is the standards series built for that difference.",
    metaTitle: "Your patch policy says 30 days. The turbine says no.",
    metaDescription: "Why IT security controls do not transfer to industrial automation and control systems, and how ISA/IEC 62443 closes the gap between corporate policy and the plant floor.",
    featuredImageUrl: `${ASSETS}/post-10-patch-policy-turbine-article-og.png`,

    body: `A security team finishes a strong year. The ISMS is certified, the corporate estate is patched inside thirty days, MFA is everywhere, and the board is satisfied. Then the same policy is extended to the operational side of the business, and it meets a turbine.

The turbine runs a control system from 2011. The vendor will void the support contract if anything is patched outside their validated release. The maintenance window is one weekend in March. A reboot takes the line down, and taking the line down costs more per hour than the entire security budget for the quarter.

The security team is not wrong. The policy is not wrong. It was simply written for a world where systems can be restarted.

## Why the IT playbook does not transfer

Corporate IT optimises for confidentiality first. A compromised laptop gets isolated, wiped, and rebuilt, and the cost is one person's afternoon.

Industrial automation and control systems invert that order. Availability and safety come first, because the system is not processing records, it is holding pressure, moving current, or keeping something at temperature. An automated isolation response that would be prudent on a laptop can trip a process on a plant floor. The safety instrumented system exists precisely so that nothing else gets to make that call.

This produces a set of constraints that most security policies never anticipate:

- **Equipment lifecycles measured in decades.** A control system commissioned in 2011 has another fifteen years to run. "Upgrade to a supported version" is a capital project, not a change ticket.
- **Vendor validation.** Patching outside a vendor's tested release can void support on equipment the business cannot operate without.
- **Protocols without security primitives.** Much of the industrial estate speaks protocols designed when the network was assumed to be physically isolated. They carry no authentication to enable.
- **Change windows measured in hours per year.** Not per month.

None of this makes the estate unsecurable. It makes it unsecurable *by that method*.

## What ISA/IEC 62443 does differently

ISA/IEC 62443 is the international series of standards for the cybersecurity of industrial automation and control systems, developed jointly by the ISA99 committee and IEC Technical Committee 65. It was written from the plant outward rather than from the data centre inward, and three ideas do most of the work.

**Zones and conduits.** Rather than treating the industrial network as one flat thing to be hardened uniformly, the estate is divided into zones of assets with a shared security requirement, connected by defined conduits. The question stops being "is the plant secure" and becomes "what crosses this boundary, and what is allowed to."

**Security levels.** Each zone is assigned a target security level according to the capability of the adversary it needs to withstand, from casual misuse through to a well-resourced attacker with specific knowledge of industrial systems. That allows a safety zone to carry heavy protection while a zone with no safety consequence does not, instead of applying one standard everywhere and failing to fund it.

**Foundational requirements.** Seven of them, covering identification and authentication, use control, system integrity, data confidentiality, restricted data flow, timely response to events, and resource availability. Controls are derived from these rather than borrowed from an IT framework and reinterpreted.

The result is a defensible answer to the turbine. Not "patch it in thirty days," but "this asset sits in a zone at a defined security level, the compensating controls on its conduit are these, and here is the reasoning."

## Where this meets NIS2

The sectors NIS2 covers are not abstract. Energy, drinking water, waste water, transport and manufacturing all sit in scope, and all of them run physical processes. A scope determination that quietly covers only the corporate network has not covered the entity.

That matters for the management body specifically. Under Article 20 the board approves the risk-management measures and answers for them. If the industrial estate was assessed with a framework that assumes systems can be rebooted, the approval rests on an assessment that does not describe the asset. The gap does not show up until a supervisor or an incident asks the question.

This is the same translation problem NexGenio works on everywhere else, with a shorter fuse. Regulatory obligation has to become an operational specification, and on the industrial side the specification has to survive contact with equipment that was commissioned before the obligation existed.

## Where to start

We have added the [ISA/IEC 62443 Lead Implementer](/self/isa-iec-62443-lead-implementer.html) programme to the self-paced catalogue. It covers the series end to end: terminology and IACS networks, system security requirements, maturity models and security levels, risk assessment, supply chain, patching strategy, monitoring, security testing, and incident response for industrial environments.

One thing worth knowing before you enrol. PECB awards the credential tier your evidenced experience supports, so the Lead Implementer credential asks for five years of professional experience with two of them specifically in industrial automation and control management, plus 300 project hours. Coming from IT security with no plant time yet, you qualify for Provisional Implementer on passing and move up as the industrial experience accumulates. Same exam, same course, no retake.

For the regulatory side that sits above it, the [NIS2 Lead Implementer](/self/nis2-lead-implementer.html) pathway covers the directive itself, and the [NIS2 page](/nis2.html) sets out the scope question and the ten Article 21 measures.

If the question is which side of the scope line your industrial estate sits on, [book a scoping call](https://calendly.com/toby-nexgenio/scope_check). Thirty minutes.

The policy was written for machines that can be restarted. The next one needs to be written for the ones that cannot.`
  },

  {
    title: "Your DORA scope may include four obligations you do not have.",
    slug: "dora-article-16-four-obligations-you-may-not-have",
    publishedDate: "2026-09-16",
    excerpt: "DORA contains a simplified regime in Article 16 under which four of the framework obligations fall away entirely. Whether a firm sits inside it is decided by figures that appear on no public register, which is why almost every proposal quotes the full regime by default.",
    metaTitle: "Your DORA scope may include four obligations you do not have.",
    metaDescription: "DORA Article 16 removes four ICT risk management obligations for small and non-interconnected financial entities. The eligibility tests are internal figures, not public data, so the only way to establish the answer is to check.",
    featuredImageUrl: `${ASSETS}/post-11-dora-art16-article-og.png`,

    body: `A twelve-person investment firm receives a DORA proposal. It is a good proposal. It is thorough, it is well structured, and it prices out a full ICT risk management framework: governance, an internal audit cycle over the framework, business continuity testing that includes cyber-attack scenarios, a recurring risk analysis on legacy systems, and a named role monitoring ICT third-party arrangements.

Every line is a genuine DORA obligation. Four of them may not be this firm's obligations.

## Article 16 is a different regime, not a discount

DORA sets out its full ICT risk management framework in Articles 5 to 15. Article 16 then sets out a simplified framework, written into the regulation itself and confirmed in supervisory guidance, that applies to a defined set of smaller entities.

It is worth being precise about what it does. It is not a lighter interpretation of the same duties, and it is not a grace period. It is a narrower set of obligations, and four things drop out of scope entirely:

- **Internal audit of the ICT framework.** No requirement for a regular internal audit cycle over the ICT risk management framework.
- **Cyber-attack scenario testing.** No mandatory inclusion of cyber-attack scenarios in business continuity and recovery testing.
- **Legacy system risk analysis.** No requirement for regular risk analysis on legacy ICT systems.
- **A dedicated third-party role.** No requirement to staff a role specifically monitoring ICT third-party arrangements.

For a firm of twelve people, those four are not marginal. The internal audit requirement alone usually means bringing in a second party, because auditing your own framework does not produce the independence the obligation is asking for.

Everything else still applies. Article 16 entities still need a proportionate framework, still identify and document their ICT assets and dependencies, still run continuity and recovery arrangements, still report major ICT-related incidents on the regulatory timelines, and still manage third-party risk. The simplified regime shortens the list. It does not end the conversation.

## Six categories can fall inside it

The regulation names them: small and non-interconnected investment firms, exempted payment institutions, exempted electronic money institutions, institutions exempted under the Capital Requirements Directive, small institutions for occupational retirement provision, and microenterprises.

Reading that list, a lot of firms recognise themselves. Recognising yourself in the category is not the same as meeting the test.

## The reason nobody has told you either way

Here is the structural problem, and it is worth understanding because it explains almost everything about how this market behaves.

The tests that decide Article 16 eligibility are built from figures only the firm holds. Assets under management. Assets held and administered. Client money held. Daily trading flow. Balance sheet total. Annual revenue. None of it appears on a public register, and several of the tests are not asking whether a figure is small. They are asking whether it is **zero**. A single exercised permission, used once, can change the answer.

Group membership adds a second layer. Belonging to a group does not remove Article 16 on its own, but it changes the basis of calculation, because several tests are assessed on a combined basis across the group. A subsidiary can still qualify. It simply takes a closer look to establish.

So no list can tell you. No register can tell you. Your regulator will not proactively write to you and confirm it. And an adviser pricing a proposal without that information has one safe assumption available, which is the full regime.

That assumption is reasonable. It is also worth testing before it becomes the scope of a programme.

## What this is worth establishing before, not after

The pattern we see is that the question gets asked late. A firm scopes to the full framework, builds it, and only when a supervisor or an auditor asks a proportionality question does anyone go back to Article 16.

Asking first is cheaper and it produces a better artefact. A firm that has run the tests and documented the outcome holds a written, reasoned scope determination. If it qualifies, the programme is scoped correctly from the start. If it does not, it has a defensible record of why the full regime applies, which is exactly what a supervisor wants to see at the front of a framework anyway.

Either answer is useful. Only the unasked question costs anything.

## How to find out

We built a page setting out [the Article 16 simplified regime](/dora-article-16.html) in full, including what falls away, who it can cover, and why the tests are harder to apply than they look.

If you want the answer for your own firm, [book a scoping call](https://calendly.com/toby-nexgenio/scope_check). Thirty minutes, no preparation needed, and you leave with a clear view of which side of the line you are on and what the resulting obligations actually are.

For teams building the capability in-house, the [DORA Lead Manager](/self/dora-lead-manager.html) programme covers the regulation end to end, and the [DORA Foundation](/self/dora-foundation.html) course covers the structure and the terminology for people who need to follow the work rather than lead it.

Four obligations is a meaningful difference for a small firm. It takes one conversation to find out whether they are yours.`  },
  {
    title: "DORA gates 22 of its 41 articles on criticality. It never says how to measure it.",
    slug: "dora-criticality-the-measurement-nobody-defines",
    publishedDate: "2026-09-17",
    excerpt: "Twenty-two of the forty-one substantive articles of the DORA technical standard change depending on whether a function is critical or important. The regulation specifies no method for deciding that, and the same is true of the risk tolerance level two further articles are built on.",
    metaTitle: "DORA gates 22 of its 41 articles on criticality. It never says how to measure it.",
    metaDescription: "More than half the DORA ICT risk management technical standard is scoped by criticality, and the regulation gives no method for determining it. Nor for the risk tolerance level Articles 3 and 31 require. Both are business measurements, not technical ones.",
    featuredImageUrl: `${ASSETS}/post-12-dora-criticality-article-og.png`,

    body: `A DORA gap assessment lands on the desk. It is forty-one rows long, one per article of the regulatory technical standard, each with a status and an owner. Somewhere in the middle is a list headed *critical or important functions*.

Ask where that list came from and the answer is usually one of two things. Either the IT function drew it up from the systems it considers important, or someone took the activities the firm is authorised to carry out and assumed those were the answer.

Neither is a measurement. And the list is doing more work than almost anything else in the document.

## Twenty-two of forty-one articles change depending on that list

Commission Delegated Regulation (EU) 2024/1774 is the technical standard sitting under DORA's ICT risk management requirements. It has forty-two articles, forty-one of which impose substantive obligations.

We ran the regulation's own wording against itself. Twenty-two of those forty-one articles condition what they require on whether something is *critical or important*, or on its *criticality*. Not as background colour — as the thing that decides the obligation. The scope of your vulnerability scanning, how you segment your networks, which systems get tested and how often, what your recovery arrangements have to achieve, which third-party arrangements carry which contractual terms, what your logging retains, which changes need which approvals.

More than half the standard is configured by one input.

## The standard never says how to produce it

Here is the part that catches people. Having made criticality the hinge, the regulation declines to say how it is determined. There is no method, no test, no threshold, no worked example.

The phrase *business impact analysis* appears in four of the forty-one articles. It is present in the continuity articles, where you would expect it. It is absent from the twenty-two articles that depend on its output.

So the regulation asks for a measurement in half its provisions, names the instrument that produces it in a tenth of them, and never joins the two together. Firms fill that gap however they can, which is why the same twelve-person firm can be shown two gap assessments a fortnight apart with materially different scope.

## It is a different question from the one security teams are trained to ask

This is not a drafting oversight so much as a difference in discipline, and it is worth naming precisely.

An information security risk assessment reasons **from cause**. It starts with a threat, asks how likely it is and what it could do, and works forward to a control. It is a good instrument and DORA requires it — Article 3 sets out exactly that process, down to the indicators used to measure impact and likelihood.

A business impact analysis reasons **from consequence**. It asks what happens to this organisation if this activity stops, how that worsens over time, and at what point the damage becomes unacceptable. It is deliberately indifferent to cause. Whether the outage came from ransomware, a failed change, a provider going under or a digger through a duct does not alter the answer.

Criticality is a consequence question. It is not asking what might go wrong. It is asking what it costs when it does, and to whom.

ISO 22301:2019 puts that in clause 8.2. The analysis defines the impact types relevant to the organisation, assesses impact over time, identifies the point at which not resuming becomes unacceptable, sets recovery time objectives inside that point, and — clause 8.2.2(h) — determines the dependencies, *including partners and suppliers*, of the activities it has prioritised.

That last sub-clause is the reason procurement belongs in this conversation. The standard makes supplier dependency a mandated output of the analysis, and clause 8.3.4 then makes *partners and suppliers* a resource category the continuity strategy has to account for alongside people, premises and technology. Clause 8.1 carries its own sentence on the point: the organisation shall ensure that outsourced processes and the supply chain are controlled.

## There is a second measurement the standard also leaves open, and this one is the board's

Criticality is not the only undefined number. Article 3 builds an entire accountability loop on a second one, and it is worth reading in order, because very few DORA programmes have all of it.

The ICT risk management policy must record **an indication of the approval of the risk tolerance level** for ICT risk. Risk treatment must be determined so as to bring ICT risk **within that tolerance level**. Where risk remains above it, a named role must be assigned to **accept** it. Those accepted risks go into an inventory, each with a justification. The inventory is reviewed at least annually, and the review asks specifically whether the reasons that justified acceptance are **still valid at the date of the review**. And the policy must contain provisions on a process ensuring that any changes to the **business strategy** are taken into account.

Article 31, the simplified-framework counterpart, states the origin of the threshold plainly: a determination of risk tolerance levels **in accordance with the risk appetite of the financial entity**.

So the standard requires the number to be approved, to gate treatment decisions, to be exceeded only by a named person on the record, to be re-justified every year, and to move when the business strategy moves. It defines no method for setting it.

This is not a technical control. A risk appetite is a statement by the governing body about how much of what kind of risk the organisation will carry in pursuit of its objectives, and it is the board's to make — which is precisely why the regulation puts approval, acceptance and annual re-justification where it does. Treated as a security artefact it becomes a heat map nobody signed. Treated as a governance artefact it becomes the thing that makes every downstream treatment decision defensible, because the person who accepted the residual risk is named and the reasoning is written down.

There is a wrinkle worth knowing if you go looking for help with the number. ISO 31000:2018 is the principal risk management standard, and it does not define *risk appetite* either. Its terms and definitions clause carries eight entries — risk, risk management, stakeholder, risk source, event, consequence, likelihood and control — and risk appetite is not one of them. The standard uses **risk criteria** instead, and gives the subject its own clause, 6.3.4 *Defining risk criteria*, sitting inside clause 6.3 *Scope, context and criteria* — that is, criteria are set as part of establishing what you are doing and why, before any risk is identified in clause 6.4.

That placement is the answer to the question. Risk criteria come from objectives and context. They are not an output of the risk process; they are an input to it, settled first, by the people who own the objectives.

Two practical notes. ISO 31000 is written as guidance rather than as auditable requirements — it is *should* throughout, with no conformity assessment clause — so it informs the determination rather than certifying it. And the companion document for technique selection is **IEC 31010:2019**, *Risk management — Risk assessment techniques*, which is where the methods live once the criteria exist.

Whatever framework a firm uses, the point holds: risk tolerance is derived from what the business is trying to achieve. It cannot be read off the state of the estate, and it cannot be delegated to the people running it.

## The direction of travel is downward, and the regulation says so

Both measurements share a property. They are measurements of the business, not of the technology.

An asset inventory can tell you what you run. Only the business can tell you what it costs when it stops. So criticality is derived downward — from strategy and risk appetite, through a consequence analysis, into a criticality determination, out into recovery objectives, and from there into controls and contract terms. It is not read upward off a list of servers.

The regulation assumes this sequence in its own text. Article 28(2)(a) makes the management body responsible for ensuring the framework allows for the achievement of the firm's business strategy *in accordance with the risk appetite of that financial entity*. Four points later, the same body has to approve the business impact analysis and related policies. And DORA itself, at Article 5(2), places ultimate responsibility for ICT risk on the management body rather than on a technology function.

None of that is novel as governance goes. It has been the settled position for years that ICT risk is a category of enterprise risk rather than a technical domain beside it, and that it aggregates upward into business risk and board oversight. What is new is that DORA codifies it, which means a supervisor can now ask to see the aggregation and expect it to be demonstrable.

## Which is why this is an integration problem

A firm can hold an ISO 27001 certificate, run a competent security function, and still not be able to answer the question the regulation actually asks — because the answer does not live in the security function. It lives in the space between business strategy, continuity, risk and technology, and the work is joining them up.

The same logic reappears wherever consequence drives a security decision. In operational technology, ISA/IEC 62443-3-2 sets its target security levels from a consequence analysis whose definition of consequence explicitly includes business interruption cost — and then stops there, because it produces a security level and never a recovery time. The continuity discipline is what carries the answer the rest of the way, into a recovery objective and into a contract.

## Where to see the working

We publish the full article-by-article table free, with no signup. The [DORA framework mapping](/dora-mapping.html) sets all forty-one articles against ISO/IEC 27001, ISO 22301 and PCI DSS, shows both the full and the simplified regime side by side, and marks every article whose obligation is scoped by criticality so you can see which parts of your programme move when the list changes.

For NIS2 entities the equivalent is the [NIS2 framework mapping](/nis2-iso-27001-mapping.html), which adds a continuity column and an operational technology column that no regulator has published.

If you want the answer for your own firm rather than the general shape of it, [book a scoping call](https://calendly.com/toby-nexgenio/scope_check). Thirty minutes, no preparation needed.

For teams building the capability in-house, [ISO 22301 Lead Implementer](/self/iso-22301-lead-implementer.html) covers the continuity management system and the business impact analysis inside it, [ISO 31000 Risk Manager](/self/iso-31000-risk-manager.html) covers risk criteria and the wider risk management process, and [DORA Lead Manager](/self/dora-lead-manager.html) covers the regulation end to end.

Twenty-two articles are waiting on a number. It is worth knowing where yours came from.`
  }
];

async function createPost(post) {
  const url = `${STRAPI_URL}/api/articles`;
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${TOKEN}`
  };

  // Check if post already exists by slug
  const checkUrl = `${STRAPI_URL}/api/articles?filters[slug][$eq]=${encodeURIComponent(post.slug)}&status=draft`;
  const checkRes = await fetch(checkUrl, { headers });
  if (checkRes.ok) {
    const checkJson = await checkRes.json();
    if (checkJson.data && checkJson.data.length > 0) {
      console.log(`  SKIP (exists): ${post.slug}`);
      return checkJson.data[0].documentId || checkJson.data[0].id;
    }
  }

  const body = JSON.stringify({ data: post });
  const res = await fetch(url, { method: "POST", headers, body });
  if (!res.ok) {
    const text = await res.text();
    console.error(`  FAIL creating ${post.slug}: HTTP ${res.status} ${text.substring(0, 300)}`);
    return null;
  }
  const json = await res.json();
  const id = json.data?.documentId || json.data?.id;
  console.log(`  CREATED: ${post.slug} (id=${id})`);
  return id;
}

async function publishPost(id) {
  if (!id) return;
  // Strapi v5 publish endpoint
  const url = `${STRAPI_URL}/api/articles/${id}`;
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${TOKEN}`
  };
  // Try Strapi v5 publish action first
  const pubUrl = `${STRAPI_URL}/api/articles/${id}/actions/publish`;
  let res = await fetch(pubUrl, { method: "POST", headers, body: "{}" });
  if (res.ok) {
    console.log(`  PUBLISHED: id=${id}`);
    return;
  }
  // Fallback: Strapi v4 style — set publishedAt via PUT
  res = await fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify({ data: { publishedAt: new Date().toISOString() } })
  });
  if (res.ok) {
    console.log(`  PUBLISHED (v4): id=${id}`);
  } else {
    const text = await res.text();
    console.error(`  FAIL publishing id=${id}: HTTP ${res.status} ${text.substring(0, 200)}`);
  }
}

async function main() {
  console.log(`Creating ${posts.length} posts in Strapi at ${STRAPI_URL}...`);
  for (const post of posts) {
    const id = await createPost(post);
    await publishPost(id);
  }
  console.log("Done.");
}

main().catch(err => { console.error(err); process.exit(1); });
