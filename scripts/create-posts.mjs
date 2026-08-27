#!/usr/bin/env node
/**
 * One-time script: creates blog posts 2-9 in Strapi and publishes them.
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
