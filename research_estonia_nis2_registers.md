# Estonia — Public Registers for Enumerating NIS2 In-Scope Entities
Research for NexGenio outbound target list. Compiled 2026-10-13. Sources inline; all findings traced to Perplexity (`pplx`) pulls against primary/official sources where available.

**Caveat on dates:** Perplexity's results indicate Estonia's NIS2 transposition is very recent/forward-dated relative to other EU states — the amended Cybersecurity Act (Küberturvalisuse seadus, KüTS) is reported to enter into force **1 January 2026**, with a self-registration deadline around **1 April 2026** (three months after). These dates sit right around "today" (2026-10-13 per system context), so they should be **independently verified against Riigi Teataja** before being used in client-facing material, since Estonia originally missed the October 2024 EU deadline and the amendment timeline looks unusually late. See §5 for full detail and source conflict notes.

---

## 1. Official NIS2 essential/important entity register (competent authority)

- **Authority:** Riigi Infosüsteemi Amet (RIA) — Estonian Information System Authority. Acts as the single national competent authority and SPOC for NIS2/cybersecurity matters.
  - RIA cyber-defence/critical-infrastructure page: https://www.ria.ee/en/cyber-security/cyber-defence-critical-infrastructure
  - EU Commission's NIS2-per-country page confirms RIA as Estonia's SPOC, contact `nis_spoc@ria.ee`: https://digital-strategy.ec.europa.eu/en/policies/nis2-directive-estonia
- **Is the list public?** **No.** Entities self-register/notify RIA under KüTS with name, registry code, EU address, contacts, sector/subsector, countries served, and (for digital-service providers) IP ranges. RIA is required to compile and periodically update this list, but **no publicly searchable register of named essential/important entities exists**. RIA's public document register only surfaces documents without access restrictions.
  - Legal basis / consolidated act text: https://www.riigiteataja.ee/en/eli/528012026003/consolide
  - RIA document register: https://www.ria.ee/en/authority-news-and-contact/document-register
  - Confirms no public per-entity list, only periodic internal list compiled by RIA: https://www.nis-2-directive.com/NIS_2_Directive_Article_3.html (secondary source, treat as explanatory, not primary)
- **Practical implication:** This register cannot be used for outbound list-building. Entity-level scoping must be done bottom-up via sectoral/business registers (below), not top-down from RIA's confidential list.

## 2. National business register

- **Register:** e-Business Register (e-Äriregister), operated by **RIK** (Centre of Registers and Information Systems).
  - Portal: https://ariregister.rik.ee/eng/ebr and search: https://ariregister.rik.ee/eng/company_search
  - Open data portal: https://avaandmed.ariregister.rik.ee/en/downloading-open-data
  - API/XML services (contract required): https://avaandmed.ariregister.rik.ee/en/open-data-api/introduction-api-services and https://ariregister.rik.ee/eng/xml_queries
- **Activity codes:** Uses **EMTAK** (Estonian national activity classification), which is NACE-aligned at the top 4 digits (EMTAK = NACE Rev.2 class + 1 extra national digit), per Statistics Estonia: https://stat.ee/en/provide-data/andmete-esitamisest/enterprise-surveys/classification-economic-activities-estonia-emtak. **Caution:** EMTAK 2025 (in force since 1 Jan 2025) is based on NACE Rev. 2.1, not plain Rev. 2 — mapping NACE codes from the Directive to current EMTAK codes needs a 2.1 crosswalk, not a naive digit-truncation. Activity-field search/statistics: https://ariregister.rik.ee/eng/statistics/fields_of_activity
- **Searchable by EMTAK:** Yes, via the detailed/business-register queries: https://www.rik.ee/en/e-business-register/business-register-queries
- **Bulk download / open data / API:** Yes. JSON/XML (and some CSV) open-data extracts for companies, nonprofits, foundations, government entities, updated daily (some monthly); real-time API/XML web services available under a free contract with RIK, capped at 50,000 responses/day/partner, 20 req/min for document downloads.
  - Open-data intro: https://avaandmed.ariregister.rik.ee/en/open-data-api/introduction-api-services
  - Company registration/API: https://www.rik.ee/en/e-business-register/company-registration-api
- **Cost:** **Free** — both manual web search and open-data bulk files are free; API access is free but requires signing a contract with RIK and is subject to the quotas above.
- **Fields exposed (confirmed via public search):** legal name, registry code (registration number), legal form, status, registered address, activity/EMTAK code(s), management board members (*juhatus* — names of directors/officers), shareholders and beneficial owners, filed annual reports (PDF and structured data), and — **where disclosed in filed annual reports** — turnover, profit/taxes, and employee counts. Employee count and turnover are **not guaranteed for every company/year**; they only appear if reported in the filed financial statements.
  - Example company record showing these fields: https://ariregister.rik.ee/eng/company/10044234/pdf
  - Cost/field summary source: https://enty.io/blog/estonian-e-business-register-what-you-can-do (secondary/blog — treat as illustrative, not authoritative; cross-check against RIK primary pages above)
- **Website/domain, contact email:** Not a standard core field in the register; sometimes present if the company voluntarily lists it, but not systematically searchable. No confirmation found that it is a structured searchable field — flag as **not reliably available** from this register.

## 3. Sectoral regulator registers, per sector

### Annex I

**1. Energy (electricity, district heating/cooling, oil, gas, hydrogen)**
- Regulator: **Konkurentsiamet** (Estonian Competition Authority), which regulates/licenses electricity, gas, and district-heating undertakings; licence/authorisation entries are held in the **Register of Economic Activities (MTR)**.
- Public: Yes, MTR is publicly searchable by activity type (electricity undertaking, gas undertaking, heating undertaking, etc.).
- Bulk download: Not confirmed — no evidence of a bulk-export feature for MTR found in this pull; would need direct verification on MTR's own site.
- Sources: https://aastaraamat.konkurentsiamet.ee/en/node ; consolidated energy legislation: https://www.riigiteataja.ee/en/eli/ee/509042026002/consolide ; https://www.riigiteataja.ee/en/akt/530082022001
- Hydrogen: no separate register identified in this pull — likely folded into the general energy/gas licensing framework; not independently verified.

**2. Transport (air, rail, water, road)**
- Regulator: **Transpordiamet** (Estonian Transport Administration).
  - Air: Air Operator Certificate (AOC) holders listed via Transpordiamet's Aviation Safety Information System / certified-carriers list: https://transpordiamet.ee/en/node/399 and https://transpordiamet.ee/en/search
  - Rail: **No dedicated public Transpordiamet railway-undertaking-licence search register was found.** Fallback is MTR (Register of Economic Activities), which may require authentication: https://www.eesti.ee/eraisik/en/artikkel/licences-and-notices-of-economic-activity/transport/a-notice-of-the-economic-activities-of-a-provider-of-emergency-vehicle-driver-training (tangential source; direct rail-licence register not confirmed — flag as a gap).
  - Water (maritime/ports): Transpordiamet also handles ports/safety requirements, but no standalone public "licensed water-transport operator register" was confirmed in this pull: https://www.transpordiamet.ee/en/roads-waterways-airspace/ports/safety-requirements-terminals-bulk-carriers
  - Road: Not separately confirmed in this pull.
- Public: Partial — air is clearly public (AOC list); rail and water operator-licence registers **not confirmed as existing public searchable lists**; mark as "none found / unconfirmed" pending direct follow-up on transpordiamet.ee.
- Bulk download: Not confirmed for any transport sub-register.

**5. Health**
- Regulator: **Terviseamet** (Health Board), register system **MEDRE** (Estonian Health Care Licences Register) — covers healthcare providers' activity licences and healthcare professional registration.
- Public: Yes. MEDRE provides open data on healthcare institutions holding valid activity licences and their registered professionals.
  - MEDRE open-data description: https://medre.tehik.ee/api-common/public/open-data/data/description
  - Terviseamet professional registration info: https://terviseamet.ee/en/healthcare/registration-of-health-care-professionals
  - Legal basis: https://www.riigiteataja.ee/akt/112032019026
- Bulk download: Yes — MEDRE exposes public open data (per source above); exact field list for the open-data extract was not itemized in this pull and should be checked directly at the MEDRE open-data endpoint.

**6. Drinking water**
- **No dedicated public "water supplier licence register" exists.** Water undertakings (*vee-ettevõtjad*) are designated by local-government council decision (published in *Ametlikud Teadaanded* and local media), not by a Konkurentsiamet licence register.
- Konkurentsiamet's role is limited to regulating/approving water-supply and sewerage tariffs — it is not an operator register.
- Health Board (Terviseamet) supervises drinking-water *quality*, not a licensing register.
- Practical workaround: e-Business Register search filtered to EMTAK 36001 (water collection, treatment, supply) — this returns companies by activity code but is not an official "licensed operator list."
- Sources: https://www.riigiteataja.ee/en/eli/504102023001/consolide ; https://www.ttja.ee/en/private-client/consumer-rights/trade-services/services-general-interest
- **Verdict: none found** (no centralized public licence register; only decentralized municipal designations + EMTAK-code business-register lookup as a proxy).

**7. Waste water**
- Same framework as drinking water above — local-government designation of the water undertaking, not a separate wastewater-specific licence register. **None found** as a standalone public register; same EMTAK-code workaround applies (wastewater activities may sit under a different EMTAK code than 36001; not independently confirmed in this pull).

**8. Digital infrastructure (IXP, DNS, TLD, cloud, data centre, CDN, trust services, electronic communications networks/services)**
- **Electronic communications networks/services:** TTJA (Consumer Protection and Technical Regulatory Authority) via **Tarvik** e-service and the legacy **MTR**. Public, searchable by activity notice.
  - https://www.ttja.ee/en/business-client/communications-media/communication-services
  - https://www.eesti.ee/eraisik/en/artikkel/licences-and-notices-of-economic-activity/information-and-communications/notice-of-economic-activities-for-provision-of-communications-service
- **Trust service providers:** RIA maintains the EU-mandated **Trusted List**, available in both machine-readable and human-readable form — this is **public**.
  - https://www.riigiteataja.ee/en/tolge/pdf/530122025007
- **DNS/.ee TLD registry:** Eesti Interneti Sihtasutus (EIS) administers `.ee`; this is a domain registry, not a NIS2 operator-licence register per se. No specific public API/field confirmation obtained in this pull — would need a direct EIS query.
- **IXP:** RTIX (government-run Estonian internet exchange), managed by RIA; joining is free for companies with a RIPE-registered AS number. No public list of RTIX members confirmed as a formal "register" — informational page only: https://www.ria.ee/en/state-information-system/state-network-services
- **Cloud / CDN / data centre:** These are **NIS2 digital-service-provider categories notified directly to RIA under KüTS**, not TTJA. RIA's compiled list of notified providers is **not public** — same confidentiality issue as §1. RIA updates this list every two years internally.
  - https://www.riigiteataja.ee/en/akt/528012026003
- **Verdict:** electronic-communications and trust-service-provider sub-registers are public; cloud/CDN/data-centre/IXP-member lists are **not public** (confidential RIA notification or informal RTIX membership, no searchable register).

**9. ICT service management B2B (MSP / MSSP)**
- **No sector-specific licence register.** Ordinary company registration in the e-Business Register is sufficient for lawful operation. In-scope MSPs/MSSPs must separately self-notify RIA under KüTS (same confidential register as §1/§8) — not a public list.
- **Verdict: none found** (public licence register); e-Business Register (EMTAK-based) is the only public proxy for identifying candidate companies by activity code.
- Source: https://www.riigiteataja.ee/en/akt/528012026003 ; https://nis-solutions.eu/countries/estonia/ (secondary, use with care)

**10. Public administration**
- No single "register of in-scope public bodies" for NIS2 specifically. The closest official catalogue is **RIHA** (Management System of the State Information System, run by RIA), which lists public-sector information systems and their owning institutions, not a direct NIS2-scope list.
  - Context: https://interoperable-europe.ec.europa.eu/sites/default/files/inline-files/DPA_Factsheets_2022_Estonia_vFinal_0.pdf
  - RIA structure/tasks page: https://www.ria.ee/en/authority-news-and-contact/authority-and-management/tasks-and-structure-authority
- Public: RIHA itself is a public catalogue of systems/institutions, but NIS2 in/out-of-scope status per body is not flagged there. **Verdict: partial — RIHA is public but not NIS2-scope-tagged.**

**11. Space**
- Estonia's first dedicated **Space Act** reportedly enters into force 1 January 2026, assigning authorisation/licensing of space activities and a national space-object register to **TTJA**. No public searchable register was confirmed live in this pull (law appears very recent/forward-dated) — treat as **"register expected, existence/public access not yet confirmed."**
  - Sources: https://idibe.org/noticias-legales/noticias-legislacion-espacial-estonia-adopta-su-primera-ley-de-actividades-espaciales-que-entrara-en-vigor-el-1-de-enero-de-2026/ ; https://tradewithestonia.com/estonia-gets-a-space-law-to-boost-tech-innovation-and-business-environment/ ; https://www.riigikogu.ee/en/press-releases/european-union-affairs-committee-en/the-riigikogu-supports-uniform-regulation-of-space-activities-in-the-european-union/
- **Verdict: none found yet (register not confirmed operative/public at time of this pull).**

### Annex II

**1. Postal and courier**
- Register: **MTR / Tarvik** (TTJA), searchable under "postiteenuse majandustegevusteade." The former standalone postal-provider register was abolished in 2006 and folded into MTR.
- Public: Yes. Known current providers include AS Eesti Post (Omniva) and NOVA POST Estonia OÜ.
- Sources: https://www.eesti.ee/eraisik/en/artikkel/licences-and-notices-of-economic-activity/information-and-communications/notice-of-the-provision-of-a-postal-service ; https://www.ttja.ee/en/private-client/consumer-rights/trade-services/services-general-interest ; historical register abolition: https://www.riigiteataja.ee/en/akt/519012015012

**2. Waste management**
- Register: **KOTKAS** (Environmental Decisions Information System), run by **Keskkonnaamet** (Environmental Board). Since 2020, waste permits are largely consolidated into the general environmental protection permit.
- Public: Yes — searchable by permit number, company/owner, activity, location, status.
- Bulk download: Not confirmed in this pull.
- Sources: https://keskkonnaamet.ee/en/node/222 ; https://keskkonnaamet.ee/en/environmental-use-radiation/environmental-protection-permit ; map/portal: https://keskkonnaportaal.ee/en/topics/waste

**3. Chemicals**
- No single unified public "chemicals handling permit register." Relevant pieces are split:
  - EU-level REACH registration/authorisation data: ECHA public database (not Estonia-specific).
  - Estonian operation authorisation for hazardous-chemical handling: administered by **TTJA**, discoverable via **Tarvik/MTR**.
  - Environmental-side REACH compliance and environmental permits: **Keskkonnaamet**, via **KOTKAS**.
  - Occupational-safety side: Tööinspektsioon (not a licensing register).
- Sources: https://www.riigiteataja.ee/en/compare_original/512062023001 ; https://www.ttja.ee/en/business-client/safety/handling-substances/chemicals ; https://keskkonnaamet.ee/en/search
- **Verdict:** no single register; fragmented across TTJA/MTR and Keskkonnaamet/KOTKAS — treat as "partial, fragmented, none single-point."

**4. Food (wholesale and industrial only)**
- Register: **State Register of Food and Feed Operators** ("Toidukäitlejate register"), run by **PTA** (Agriculture and Food Board / Põllumajandus- ja Toiduamet).
- Public: Yes, searchable, including wholesale-trade filter ("Hulgikaubandus").
- Sources: https://pta.agri.ee/riiklikud-registrid-ja-andmekogud ; https://pta.agri.ee/en/search ; notice requirement: https://www.eesti.ee/eraisik/en/artikkel/licences-and-notices-of-economic-activity/food/notice-of-economic-activities-related-to-food-handling

**5. Manufacturing (medical devices, and NACE C26–C30)**
- Medical devices: **EMDDB** (Medical Devices and Appliances Database), run by **Ravimiamet** (State Agency of Medicines). Public search portal exists; some data also published as open data via Estonia's Teabevärav open-data portal. **Important change:** since 26 May 2026, manufacturer/device registration for EU market placement is handled exclusively via **EUDAMED** (EU-level, not Estonian), with EMDDB retained for Estonia-specific distribution notifications.
  - Sources: https://www.ravimiamet.ee/en/medical-devices/medical-devices/regulation-field-medical-devices-estonia ; https://msa.sm.ee/eng/ ; open data: https://andmed.eesti.ee/information-holders/ravimiamet
- NACE C26–C30 (electronics, machinery, electrical equipment, vehicles, other transport equipment): **No sector-specific licence register found.** These are ordinary manufacturing activity codes; the only public enumeration mechanism is the **e-Business Register filtered by EMTAK code** (§2 above). **Verdict: none found** beyond the general business register.

**6. Digital providers (online marketplaces, search engines, social networking platforms)**
- **No Estonia-specific register found.** These are typically large multinational platforms regulated more at EU level (DSA/DMA designation lists at the European Commission) rather than via a national Estonian register. **Verdict: none found** nationally; consider EU Commission's DSA Very Large Online Platform designation list as an EU-level (non-Estonian) alternative — not verified in this pull, flag for separate research if needed.

**7. Research**
- Register: **ETIS** (Estonian Research Information System), run by the Ministry of Education and Research; also a general "Register of Research and Development Institutions."
- Public: Yes, as an R&D/statistical register.
- Important caveat: NIS2 Annex II's "research organisation" definition is narrow (applied research/experimental development aimed at commercial exploitation) and **excludes higher-education institutions** by default — universities may only be in scope if Estonia separately designated them (reported as a possible Estonian national extension, not independently confirmed with a citation to the KüTS text in this pull).
- Sources: https://www.riigiteataja.ee/en/compare_original/524032014005 ; https://www.stat.ee/en/metadata/21701 ; secondary commentary (treat cautiously): https://www.nis-2-templates.com/estonia/

---

## 4. Field-exposure matrix

| Field | NIS2 register (RIA) §1 | e-Business Register §2 | Energy MTR | Transport (air AOC) | Health MEDRE | Postal MTR/Tarvik | Waste KOTKAS | Food PTA register | Medical devices EMDDB |
|---|---|---|---|---|---|---|---|---|---|
| Legal name | Confidential | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Registration number | Confidential | Yes (registry code) | Likely (unconfirmed) | Unconfirmed | Unconfirmed | Unconfirmed | Yes (permit no.) | Unconfirmed | Unconfirmed |
| Legal form | Confidential | Yes | Unconfirmed | Unconfirmed | Unconfirmed | Unconfirmed | Unconfirmed | Unconfirmed | Unconfirmed |
| Activity/NACE (EMTAK) code | Confidential | Yes | Yes (by licence type) | N/A (certificate type) | N/A (licence type) | N/A (notice type) | N/A (activity type) | N/A (food category) | N/A (device class) |
| Registered address | Confidential | Yes | Unconfirmed | Unconfirmed | Likely (facility address) | Unconfirmed | Yes (site location) | Likely (facility) | Unconfirmed |
| Employee count/size band | Confidential | Sometimes (if filed in annual report) | No | No | No | No | No | No | No |
| Turnover | Confidential | Sometimes (if filed in annual report) | No | No | No | No | No | No | No |
| Website/domain | Not confirmed | Not systematically | No | No | No | No | No | No | No |
| Contact email | Confidential (submitted to RIA, not published) | Not systematically | No | No | No | No | No | No | No |
| Directors/officers names | Confidential | Yes (board members, *juhatus*) | No | No | No | No | No | No | No |

Legend: "Unconfirmed" = this pull did not verify the field one way or the other; "No"/"N/A" = sources indicate the field is not part of that register's design; "Confidential" = the register exists but its contents are not published.

**Bottom line for targeting:** the only register that reliably exposes company-identifying fields *plus* officer names *plus* (sometimes) size/turnover is the **e-Business Register** (§2), filtered by EMTAK code as a sector proxy. Sectoral registers mostly confirm *that* a company is licensed/registered in a given activity, but rarely add name/size/contact fields beyond what's already in the business register — they are best used to narrow the EMTAK-filtered candidate list down to confirmed license-holders, not as a primary data-enrichment source.

---

## 5. NIS2 transposition status

- **Law:** Küberturvalisuse seadus (KüTS), Cybersecurity Act.
  - Original version in force from **1 July 2024** (pre-dates full NIS2 transposition; Estonia missed the EU's 17 October 2024 deadline).
    - https://www.riigiteataja.ee/en/akt/519082024019
  - NIS2-aligned **amendments reported adopted 10 December 2025, entering into force 1 January 2026**.
    - Consolidated text: https://www.riigiteataja.ee/en/eli/528012026003/consolide
    - RIA news on the expanded scope from the new year: https://www.ria.ee/uudised/uuest-aastast-laienes-kuberturvalisuse-seadus
  - **Flag:** these 2025/2026 dates are unusually late relative to the EU-wide October 2024 deadline and sit very close to "today" in this task's system clock (2026-10-13). Given how close/recent these dates are, independently re-verify directly on Riigi Teataja before relying on them for a client deliverable — there is a realistic chance of date drift or an intermediate amendment not captured in this pull.
- **Registration duty:** Yes. In-scope entities must submit required information (entity details, sector/subsector, countries served, IP ranges for digital-service providers) to RIA within **3 months** of becoming subject to the criteria. For entities in scope at the 1 January 2026 commencement, the reported initial deadline is **1 April 2026**.
  - Source: https://www.roedl.ee/en/ee/Documents/NIS2%20directive%20(ENG).pdf ; https://www.riigiteataja.ee/en/eli/528012026003/consolide
- **Competent authority:** RIA, also Estonia's NIS2 single point of contact (`nis_spoc@ria.ee`).
  - https://digital-strategy.ec.europa.eu/en/policies/nis2-directive-estonia
- **Article 20(2) management-body training duty — separately enforceable/fineable?**
  - KüTS requires management bodies of in-scope entities to undergo regular cybersecurity training, and the entity must also organize appropriate training for staff.
  - **Enforcement mechanism confirmed in the Estonian text:** if the training requirement is not met, RIA can issue a formal order (*ettekirjutus*) with a deadline and required evidence of remedy. If the order is not complied with by the deadline, RIA may impose a **coercive payment (*sunniraha*)**, capped at **€70,000 per instance** since the 2026 amendments — this is a coercive/compliance-forcing payment, not a punitive fine for the past breach itself.
  - Separately, **KüTS §7(1)–(3)** sets a **misdemeanor fine (*väärteotrahv*)**: up to **200 fine units** for a natural person, up to **€20,000** for a legal person, for violations of those specific KüTS provisions.
  - The larger NIS2-style sanctions (up to €10m / 2% global turnover for essential entities; up to €7m / 1.4% for important entities) apply to breaches of the broader risk-management/incident-reporting obligations (Articles 21/23-equivalent), not specifically to the training duty in isolation.
  - **Conclusion:** the training duty is enforceable via RIA's order + coercive-payment mechanism (up to €70,000) and potentially via the general misdemeanor fine provision, but it is not shown to carry its own separate large administrative fine distinct from the general KüTS sanction ladder. Treat the "separately fineable" framing as **partially true**: enforceable yes, via a distinct (lower, coercive) mechanism than the headline turnover-based fines.
  - Sources: https://api.riigikogu.ee/api/files/abe64268-80ed-4549-8bf1-9d3216084c0f/download ; https://www.ria.ee/kuberturvalisus/jarelevalve ; https://www.riigiteataja.ee/akt/106082022018 (KüTS §7); https://www.roedl.ee/ee/ee/Documents/NIS2-direktiiv%20(EST).pdf

---

## Key gaps / flags for follow-up

1. **RIA's NIS2 entity list is confidential** — no shortcut exists; outbound targeting must be built bottom-up from EMTAK-filtered business-register pulls, cross-checked against the public sectoral registers listed above.
2. **Rail and water transport licence registers** — existence of a public searchable register not confirmed; needs a direct check on transpordiamet.ee rather than relying on this pull's secondary sources.
3. **Drinking water / wastewater** — no centralized public operator register exists at all; municipal designation + EMTAK code is the only path.
4. **Chemicals** — fragmented across TTJA/MTR, Keskkonnaamet/KOTKAS, and EU-level ECHA; no single Estonian chemicals-operator register.
5. **Space Act / space register** — reported to take effect 1 January 2026; public accessibility of any resulting register not yet confirmed in this pull.
6. **Transposition date (1 Jan 2026 / 1 Apr 2026 deadlines)** — unusually recent/close to "today"; re-verify against Riigi Teataja directly before using in client communications, given the proximity to the current date and Estonia's known prior delay against the October 2024 EU deadline.
7. **Website/domain and contact-email fields** are not reliably exposed by any register checked — these will need to be sourced externally (e.g., company websites, LinkedIn) rather than from Estonian public registers.
