# Latvia — NIS2 In-Scope Entity Enumeration: Public Register Landscape

Research date: 2026-10-13. Prepared for NexGenio outbound target-list build. Banking (Annex I.3) and Financial Market Infrastructure (Annex I.4) are out of scope and excluded below.

---

## 1. Competent authority register of NIS2 essential/important entities

**Authority:** National Cyber Security Centre (Nacionālais kiberdrošības centrs, NKDC/NCSC) — not CERT.LV. CERT.LV is the national CSIRT (incident response); entity classification/registration sits with the NCSC under the Ministry of Defence.
- NCSC registration page: https://www.mod.gov.lv/en/register-national-cyber-security-centre
- General cybersecurity portal: https://www.mod.gov.lv/en/cybersecurity
- NCSC public portal: https://www.cyber.gov.lv/
- Self-assessment/registration test tool (Latvian): https://www.cyber.gov.lv/lv/testi/nkdl-tests/nkdl-tests.html

**Public or confidential:** **Confidential.** Entities self-assess and notify the NCSC; there is no published list of registered essential/important entities. One secondary source (PwC legal analysis) explicitly describes the compiled list as restricted-access, held by the NCSC and approved by the Digital Security Supervision Committee. Source: https://legal.pwc.de/content/services/NIS-2/nis-2-latvia.pdf

**Fields exposed:** None — the register itself is not public. Notification content (per PwC summary) includes identifying information, sector/service, IP ranges, countries of service delivery, and contact-person details, but this is submitted *to* the authority, not published *by* it.

Conclusion: **the NCSC register cannot be used for outbound list-building.** All enumeration must come from adjacent public registers (business register + sectoral regulators), cross-referenced against NIS2 Annex I/II sector definitions.

---

## 2. National business register — Uzņēmumu reģistrs (UR) / Register of Enterprises

- **Authority/URL:** Register of Enterprises — https://www.ur.gov.lv/en
- **Public search portal:** https://info.ur.gov.lv/#/data-search
- **Open data portal:** https://www.ur.gov.lv/en/open-data-sets-register-open-data-portal-latvia

**Free public search (info.ur.gov.lv) exposes:**
- Legal name — yes
- Registration number — yes
- Legal form — yes
- Registered (legal) address — yes
- Status/registration date — yes
- Share capital — yes
- **Directors/board members and procuration holders (names, roles, appointment dates) — yes, free, no login** — per https://www.ur.gov.lv/en/online-information-information-website and https://lemreveal.com/how-to/find-directors/latvia
- Beneficial owner — sometimes visible; fuller history/documents may need login
- NACE/activity code — **not shown on the main overview tab**; activity codes live in a separate dataset (see below)
- Employee count — **not exposed**
- Turnover — **not exposed**
- Website/domain, contact email — **not exposed**

**Bulk/open data (data.gov.lv, CC0, daily updates):**
- Main register file "uz": https://data.gov.lv/dati/eng/dataset/uz — fields confirmed from the data dictionary: `regcode`, `name` (+ name-parsing variants), `regtype`/`regtype_text` (legal form), `type`/`type_text` (entity type), `registered`, `terminated`, `closed`, `address`, `index`, `addressid`, `region`, `city`, `atvk`. **No NACE code, no employee count, no turnover in this file.** Source: https://data.gov.lv/dati/lv/dataset/uz/resource/25e80bf3-f107-4ab4-89ef-251b5b9374e9
- **Separate NACE/activity dataset** ("Tiesību subjektu darbības mērķi un veidi" / Area of Activity): https://data.gov.lv/dati/eng/dataset/area-of-activity — two fields only: `regcode`, `nace`. Must be joined to the main "uz" file on `regcode` to attach NACE codes to companies. This is the dataset you need for sector enumeration by NACE.
- API: UR provides web-service API access via Latvia's national API Manager — requires an application/subscription process, not instant/anonymous. Source: https://www.ur.gov.lv/en/registry-api-web-services-service-list

**Cost:** Free. Basic search, open-data CSV/XLSX downloads, and the automated-dissemination service are all free of charge; fees apply only to certified extracts/document copies. Sources: https://www.ur.gov.lv/en/open-data-sets-register-open-data-portal-latvia , https://www.ur.gov.lv/en/services/request-automated-dissemination-data-between-different-information-systems-latvia-and-europe

**Commercial overlay — Lursoft.lv (paywalled, flag for budget):** Lursoft repackages UR data with NACE filtering, turnover bands, employee-count filtering, and board-member history built into advanced search. Pricing: 24-hour access from **EUR 9.90**; monthly packages **EUR 21 (Small Business) / EUR 35 (Professional) / EUR 24 (AML)**; custom bulk list-building priced separately by criteria/volume. Source: https://www.lursoft.lv/en/subscription , https://www.lursoft.lv/en/custom-made-database-creation . **This is the realistic tool for "give me all NACE 62.20 companies with >X turnover" — the free UR open data requires you to build that join yourself.**

**Employee count / turnover gap:** Not in UR free data. Would need Lursoft (paid, pulls from annual-report financial filings) or the Central Statistical Bureau (CSB, data.stat.gov.lv) for aggregate/some firm-level stats — not independently verified in this pass.

---

## 3. Sectoral regulator registers, per Annex I/II sector

### Annex I.1 — Energy

**Electricity, gas, district heating/cooling** — Regulator: **SPRK (Sabiedrisko pakalpojumu regulēšanas komisija / Public Utilities Commission)**
- Electricity register: https://www.sprk.gov.lv/en/electricity
- Natural gas register: https://www.sprk.gov.lv/en/natural-gas
- District heating: https://www.sprk.gov.lv/lv/pakalpojumu-sniedzeji
- Registration/licensing overview: https://www.sprk.gov.lv/en/registrationlicensing
- **Public:** Yes — published lists of licensed/registered merchants (electricity traders, producers, transmission/distribution operators; gas traders; heating companies with licence numbers).
- **Bulk download:** Not confirmed as structured bulk data — appears to be published as web pages/PDF lists rather than CSV/API. Treat as public but manual-extraction only.
- **Fields typically shown:** legal name, licence number, service type/activity, sometimes licence validity dates. No NACE, no employee/turnover/contact data confirmed.

**Oil (pipeline)** — No standalone oil-pipeline register identified. SPRK is the likely competent body for public-utility licensing of pipeline operators, but no dedicated public list was found in this pass. **"None found"** as a distinct published register — flag for a follow-up targeted search if an oil pipeline operator target is live. Source: https://www.sprk.gov.lv/en/registrationlicensing

**Hydrogen** — **None found.** No dedicated Latvian hydrogen-operator register exists yet; SPRK's current registration/licensing categories cover electricity, gas, and heat only, not hydrogen as a separate class. Source: https://leap.unep.org/en/countries/lv/national-legislation/decision-no-13-board-public-utilities-commission-2019-regulations ; Ministry of Economy registers page (no hydrogen register listed): https://www.em.gov.lv/en/registers

### Annex I.2 — Transport

**Air** — Regulator: **Civil Aviation Agency (Civilās aviācijas aģentūra, CAA)**
- Register: https://www.caa.gov.lv/en/registers (Air Operators section)
- **Public:** Yes. **Bulk download:** not confirmed — appears to be a lookup/list page, not a CSV export.
- **Fields:** operator name, certificate/authorisation status. No NACE/turnover/contact confirmed.

**Rail** — Regulator: **State Railway Administration (Valsts dzelzceļa administrācija, VDA)**
- Licensing of carriers: https://www.vda.gov.lv/en/licensing-carriers
- **Public:** Yes — a plain published table of licensed railway undertakings (e.g., AS "Pasažieru vilciens", SIA "LDZ CARGO") with licence number and activity (freight/passenger). Licences also recorded in the EU's ERADIS database.
- **Bulk download:** No — static published table, not a dataset file.
- **Fields:** legal name, licence number, activity type (freight/passenger). No address/NACE/turnover/contact.

**Water (maritime)** — Regulator: **Maritime Administration of Latvia (Latvijas Jūras administrācija, LJA)**
- Site: https://www.lja.lv — Latvian Ship Register (Kuģu reģistrs), recognised-organisations list, port authorities section.
- **Public:** Ship Register is publicly reliable/accessible in principle, but no single stable public URL for a shipping-company or port-operator list was confirmed in this pass.
- **Bulk download:** Not confirmed.
- **Fields:** Not confirmed in detail — flag for follow-up if a maritime target is prioritized. Source: https://www.lja.lv ; https://likumi.lv/ta/en/en/id/68491-maritime-administration-and-marine-safety-law

**Road** — Regulator: **Autotransporta direkcija (ATD)** (not CSDD, which handles vehicle/driver registration only)
- Licensed carriers / licences section: https://www.atd.lv/en (licences page at atd.lv/lv/licences)
- **Public:** Yes, covers freight and passenger carriage licences.
- **Bulk download:** Not confirmed — appears to be a lookup page.
- **Fields:** legal name, licence type/category. Not confirmed beyond that.

### Annex I.5 — Health

Regulator: **Health Inspectorate (Veselības inspekcija) — Registry of Healthcare Institutions**
- Register: https://registri.vi.gov.lv/
- Overview: https://www.vi.gov.lv/en/registers
- Open-data organisation page: https://data.gov.lv/dati/eng/organization/veselibas-inspekcija
- **Public:** Yes, free, searchable (Latvian-language interface).
- **Fields exposed:** institution name, branches/structural units, certificates, compliance/registration status. NACE, employee count, turnover, contact email, director names — **not confirmed as present**; would need a direct inspection of the register UI to confirm.
- **Bulk download:** An open-data organisation entry exists on data.gov.lv, suggesting at least some dataset may be downloadable — not independently verified field-by-field in this pass.

### Annex I.6 — Drinking water / Annex I.7 — Waste water

Regulator: **SPRK — Ūdenssaimniecības pakalpojumu sniedzēju reģistrs** (Register of Water Management Service Providers)
- Page: https://www.sprk.gov.lv/lv/udenssaimnieciba-0 / https://www.sprk.gov.lv/en/water-management
- **Scope/threshold:** SPRK registers/regulates providers where at least one service (water or wastewater) exceeds 100,000 m³/year — i.e., larger municipal utilities. Smaller operators may fall outside this specific SPRK register.
- **Public:** Yes — register + approved tariff requirement.
- **Bulk download:** Not confirmed as structured data; appears to be a published list/tariff register rather than CSV.
- **Complementary dataset:** Environmental Service (VVD) permits open data — water abstraction permits CSV: https://registri.vvd.gov.lv/opendata/permits/aqu.csv — fields reported: permit number, status, operator name, registration number, validity, activity type, planned water consumption. This is useful as a supplementary field-rich source (includes **registration number** and **activity type**).

### Annex I.8 — Digital infrastructure

- **IXP:** No dedicated public IXP participant/member register identified for Latvia in this pass. **None found** at the national-registry level; would need to query the individual exchange operator directly.
- **DNS/TLD (.lv registry):** NIC.LV (University of Latvia, Institute of Mathematics and Computer Science)
  - https://www.nic.lv/en/
  - Public IP/AS list (IPv4/IPv6), compiled from RIPE NCC + BGP data: https://www.nic.lv/gix.html (GIX/IP list page)
  - WHOIS: whois.nic.lv
  - **Public:** Yes for domain WHOIS lookups and the published IP/AS list. **Fields:** domain names, IP ranges, RIPE AS object (AS-NIC-LV). Not a register of "companies" per se — useful for domain/IP attribution, not entity enumeration directly.
- **Cloud / data centre / CDN:** No general sectoral operating licence. However, Latvia's National Cybersecurity Law (Section 30) establishes a **"Safe Data Centre Register" (Drošo datu centru reģistrs)** — operators submit an auditor conformity opinion or recognised certificate to the Digital Security Supervision Committee for entry. This register is **new/being stood up via Cabinet regulation** ("Informācijas sistēmu izvietošanas un datu centru drošības prasības") — status as fully operational/public was **not confirmed**; flag as emerging, check cyber.gov.lv / mod.gov.lv for the live register once the Cabinet regulation is finalized. Sources: https://www.vvc.gov.lv/lv/media/20993/download?attachment ; https://www.varam.gov.lv/lv/media/42369/download?attachment ; https://tapportals.mk.gov.lv/annotation/2a85b203-070e-4798-8db7-9f39f7336614
- **Trust services (eIDAS):** Supervisory body — Supervisory Committee of Digital Security, Ministry of Defence.
  - https://www.mod.gov.lv/en/cybersecurity/supervisory-committee-digital-security/trusted-certification-services
  - Latvian Trusted List (machine-readable XML): https://trustlist.gov.lv/tsl/latvian-tsl.xml
  - EU Trusted List Browser: https://webgate.ec.europa.eu/tl-browser/#/
  - **Public:** Yes, and machine-readable (XML) — rare case of a structured, scriptable field source. **Fields:** qualified trust service provider name (e.g., LVRTC), service type (e-signature, e-seal, timestamp), status. No turnover/employee/contact data.
- **Electronic communications networks/services:** Regulator: SPRK
  - https://www.sprk.gov.lv/en/electronic-communications
  - **Public:** Yes — SPRK maintains the register; only registered companies may provide these services.
  - **Bulk download:** Not confirmed as a downloadable dataset; appears to be a published register/list on the SPRK site.
  - **Fields:** legal name, registration status. Not confirmed beyond that.

### Annex I.9 — ICT service management (B2B) — MSP/MSSP

**None found.** No dedicated Latvian licence or sector register for managed service providers or managed security service providers. These entities are identified only via the general business register using NACE codes 62.20 (computer facilities management), 62.09, or 63.11, cross-referenced through the UR "area-of-activity" NACE dataset (see Section 2). Source: https://business.gov.lv/en/news/company-classification-and-data-nace-and-register-information ; https://nace.lursoft.lv/2.1/62.20/computer-consultancy-and-computer-facilities-management-activities/companies (Lursoft NACE-filtered list — paywalled for full results).

### Annex I.10 — Public administration

**None found** as a single authoritative, NIS2-scoped public list. Closest available public sources (none purpose-built for NIS2):
- VARAM (Ministry of Smart Administration and Regional Development) subordinate institutions list: https://www.varam.gov.lv/en/subordinate-institutions
- Lursoft's public-persons/authorities list (derived from the Enterprise Register's public-law entity class): https://www.lursoft.lv/en/public-persons-and-authorities
- Overit directory (built on UR data): https://overit.lv/en/institutions/
- The PwC source explicitly confirms the actual NIS2-scoped list (which public bodies are "in scope") is restricted/held by the NCSC, not separately published for the public-administration sector: https://legal.pwc.de/content/services/NIS-2/nis-2-latvia.pdf

### Annex I.11 — Space

- **Latvian Space Industry Directory** (Ministry of Education and Science): https://latviaspace.gov.lv/en/directory/
  - **Public:** Yes — free directory of Latvia-based space-sector companies/institutes.
  - **Fields:** company/institute name, sector activity description (based on listing structure — exact field schema not independently confirmed beyond name + description).
  - **Bulk download:** Not confirmed.
- Satellite earth-station licensing: Electronic Communications Office (ESAKARI) — application form only, not a public register: https://www.esakari.lv

---

### Annex II.1 — Postal and courier

Regulator: **SPRK**
- Postal operators register (PDF list): https://www.sprk.gov.lv/sites/default/files/editor/PASTA%20KOMERSANTI_1.pdf
- Postal sector page: https://www.sprk.gov.lv/en/post-0
- **Public:** Yes.
- **Fields confirmed:** legal name, registration number, registration date, current postal service types (courier/kurjerpasts, express mail/ekspresspasts).
- **Bulk download:** No — static PDF, not structured data; would need manual extraction/OCR.
- Universal service provider: Latvijas Pasts (designated through 31 Dec 2026). Source: https://www.sam.gov.lv/en/postal-sector-0

### Annex II.2 — Waste management

Regulator: **Valsts vides dienests (VVD) / State Environmental Service**
- Public registers portal: https://registri.vvd.gov.lv/
- Waste-management permit info: https://www.vvd.gov.lv/en/services/waste-management-permit
- **Direct open-data CSV (A/B category permits):** https://registri.vvd.gov.lv/opendata/permits/ab.csv
- **Public:** Yes, free, no access restriction.
- **Fields confirmed in the CSV:** operator name, permit number, location, coordinates, activity type. No registration number/NACE/employee/turnover/contact confirmed in this specific file, but it is a genuine bulk-downloadable dataset — best candidate for scripted enumeration in this sector.

### Annex II.3 — Chemicals

- **EU-level (manufacturers/importers ≥1 tonne/year):** ECHA CHEM / Search for chemicals — https://echa.europa.eu/information-on-chemicals — substance-level, not reliably company-level public list.
- **Latvia-level (≥100 kg/year reporting):** Chemical Substances and Mixtures Database, maintained by LVĢMC (Latvian Environment, Geology and Meteorology Centre) — not VVD as might be assumed. No public company-by-company list confirmed; reporting is via LVĢMC's electronic environmental information system (not a public register). Source: https://videscentrs.lvgmc.lv/lapas/reach-regulation
- **Conclusion: effectively "none found"** as a public, company-level register for chemicals manufacturers/importers in Latvia — ECHA substance search and LVĢMC are not usable for entity enumeration without a direct data request.

### Annex II.4 — Food (wholesale and industrial only)

Regulator: **PVD (Pārtikas un veterinārais dienests) / Food and Veterinary Service**
- Register of enterprises (PVD e-services): https://pakalpojumi.pvd.gov.lv/en/ipvd/objects
- Registers overview: https://www.pvd.gov.lv/en/registers
- **Public:** Yes, free, searchable by company name, registration number, address, establishment activity.
- **Fields confirmed:** establishment name, activity type (includes wholesale/storage/distribution/transport categories), searchable by address and registration number — implying registration number and address are exposed fields. Employee/turnover/contact/NACE not confirmed.
- **Bulk download:** Not confirmed as CSV export — appears to be a searchable web register (registri.pvd.gov.lv/cr).

### Annex II.5 — Manufacturing (medical devices, NACE C26–C30)

**Medical devices specifically** — Regulator: **State Agency of Medicines (Zāļu valsts aģentūra, ZVA)**
- LATMED register (Latvian manufacturers of Class I devices, custom-made devices, authorised representatives): https://www.zva.gov.lv/en/industry/medical-device-manufacturers-authorized-representatives/latmed
- **Public:** Partially — LATMED covers a specific subset (Class I / custom-made / authorised reps); higher-risk-class manufacturers are registered at EU level in EUDAMED, not necessarily separately public at Latvian national level.
- **Fields:** not independently confirmed field-by-field in this pass — flag for follow-up if medical-device targets are prioritized.
- Notified bodies (not manufacturers) are listed in the EU NANDO database, not a Latvian register.

**NACE C26–C30 generally (no medical-device angle)** — **None found** as a sectoral regulator/licence register. Use UR business register + NACE open-data join (Section 2) filtered to C26 (computer/electronic/optical), C27 (electrical equipment), C28 (machinery), C29 (motor vehicles), C30 (other transport equipment).

### Annex II.6 — Digital providers (online marketplaces, search engines, social networking platforms)

**None found** as a Latvia-specific sectoral register. These are generally identified via:
- The business register + NACE codes (e.g., 63.12 web portals, 47.91 retail via internet) — same caveats as Section 2.
- At EU level, the Digital Services Act designates "Digital Services Coordinators" per member state; Latvia's DSC function was not independently confirmed in this research pass — would need a separate targeted query if this sub-sector is a priority (not covered here; flagging the gap rather than guessing).

### Annex II.7 — Research

Regulator: **Ministry of Education and Science / Latvian Council of Science — National Register of Research Institutions**
- Register: https://sciencelatvia.lv/#/pub/scientific_institution/list
- Open-data dataset: https://data.gov.lv/dati/eng/dataset/zinatnisko-instituciju-registrs
- Ministry overview: https://www.izm.gov.lv/en/research-institutions
- **Public:** Yes, free.
- **Fields confirmed:** institution name, registration number, **director names**, legal address, telephone number, **email address**, website. This is the richest field set of any register found in this research — includes director name and contact email directly.
- **Bulk download:** Yes — present on data.gov.lv as a structured dataset.

---

## 4. Field-availability matrix (what each pull actually exposes)

| Register | Legal name | Reg. number | Legal form | Activity/NACE | Address | Employees | Turnover | Website/domain | Contact email | Director/officer names |
|---|---|---|---|---|---|---|---|---|---|---|
| UR free search (info.ur.gov.lv) | Yes | Yes | Yes | No | Yes | No | No | No | No | **Yes** |
| UR open data "uz" CSV | Yes | Yes | Yes | No | Yes | No | No | No | No | Not confirmed in this file |
| UR open data "area-of-activity" CSV | No (join key only) | Yes (join key) | No | **Yes (NACE)** | No | No | No | No | No | No |
| Lursoft (paid) | Yes | Yes | Yes | Yes (filterable) | Yes | Yes (filter) | Yes (filter) | Not confirmed | Not confirmed | Yes (incl. history) |
| NCSC NIS2 entity register | — not public — | | | | | | | | | |
| SPRK (energy/water/postal/telecom) lists | Yes | Partial (postal: yes) | No | Activity/service type only | No | No | No | No | No | No |
| VDA rail licence table | Yes | No | No | Freight/passenger only | No | No | No | No | No | No |
| Health Inspectorate registry | Yes (institution) | Not confirmed | No | No | Not confirmed | No | No | No | No | No |
| VVD waste permits CSV | Yes (operator) | No | No | Yes (activity type) | Location/coords | No | No | No | No | No |
| PVD food register | Yes | Yes (searchable) | No | Activity type | Yes (searchable) | No | No | No | No | No |
| Latvian Trusted List (eIDAS XML) | Yes (TSP) | No | No | Service type | No | No | No | No | No | No |
| Research institutions register | **Yes** | **Yes** | No | Research field (implied) | **Yes** | No | No | **Yes** | **Yes** | **Yes** |
| Latvian Space Industry Directory | Yes | Not confirmed | No | Description only | Not confirmed | No | No | Not confirmed | Not confirmed | Not confirmed |

**Practical reading:** No single Latvian public register gives you name + NACE + employee count + turnover + contact in one pull. The workable pipeline is: (1) UR "uz" CSV for name/regcode/address/legal form → (2) join UR "area-of-activity" CSV on regcode for NACE → (3) cross-reference against sectoral regulator lists (SPRK/VDA/PVD/VVD/ZVA/sciencelatvia) to confirm NIS2-sector relevance → (4) go to paid Lursoft only where you specifically need employee count, turnover, or deeper officer history for prioritization/scoring.

---

## 5. NIS2 transposition status

- **Law:** National Cybersecurity Law (Nacionālās kiberdrošības likums). Adopted by the Saeima **20 June 2024**, published **4 July 2024**, **entered into force 1 September 2024**. Source: https://likumi.lv/ta/en/en/id/353390-national-cybersecurity-law ; https://www.mod.gov.lv/en/cybersecurity
- **In force:** Yes.
- **Registration duty:** Yes — self-assessment/notification model (entities determine their own essential/important status and notify the NCSC), not a government-initiated designation.
  - Existing in-scope entities: register/determine status by **1 April 2025**.
  - Existing in-scope entities: appoint a cybersecurity manager and submit first self-assessment by **1 October 2025**.
  - Newly-qualifying entities: register generally within **one month** of becoming subject to the law; report changes within **two weeks**.
  - Source: https://www.mod.gov.lv/en/cybersecurity ; https://legal.pwc.de/content/services/NIS-2/nis-2-latvia.pdf
- **Minimum cybersecurity requirements regulation:** Cabinet Regulation No. 397, in force **2 July 2025**. Source: https://www.cloudhosting.lv/faq/nis2-checklist-latvia
- **Infringement-procedure caveat:** The European Commission sent Latvia a **reasoned opinion on 7 May 2025** for incomplete notification of full transposition, despite the principal law being in force. Source: https://digital-strategy.ec.europa.eu/en/policies/nis2-directive-latvia
- **Article 20(2) management-body training duty — separately enforceable/fineable?**
  - Mixed/uncertain. The general NIS2 Article 20 framework makes training of the management body a standalone governance obligation (distinct from Article 20(1)'s approval/oversight duty, under which management bodies can be held liable for the entity's infringements, including potential temporary prohibition from managerial functions for essential entities). Source: https://www.nis2-info.eu/regulation/nis2/article/20/governance
  - However, **NIS2 does not itself prescribe a specific standalone fine for Article 20(2) non-training** — personal/monetary consequences depend on how each member state's implementing law and general liability rules treat it.
  - For Latvia specifically, **the exact Latvian penalty provision tied to the training duty was not confirmed in this research pass.** Latvia's Cybersecurity Law is reported to add a parallel requirement that the appointed cybersecurity manager receive specific training, and gives supervisory tools (compliance audits, self-assessment review, orders for external audit) — but whether failure to train the management body is independently fineable under Latvian law (as opposed to being folded into broader Article 21 non-compliance enforcement) is **not verified** from a primary source. Treat as open pending a direct read of the Latvian law's penalty articles (likely Chapter on administrative liability in the National Cybersecurity Law itself) rather than secondary summaries. Source used (secondary, not primary): https://advisera.com/articles/latvia-cybersecurity-law-vs-nis-2/ — flagged as a vendor blog, not a primary legal source; should be corroborated against the actual text of the law at likumi.lv before being used in client-facing material.

---

## Quality flags

- **advisera.com, cloudhosting.lv, resiliently.ai, nis2-info.eu, globalcompliancemap.com, nis2cybersecurity.org, nis-2-templates.com** — these are vendor/SEO-style compliance blogs. Used only for secondary corroboration or where no primary source was found; every date/fact from them above is flagged inline. Prefer likumi.lv (official legal register), mod.gov.lv/cyber.gov.lv (NCSC), data.gov.lv (open data portal), and the named regulator domains (.gov.lv) as primary.
- **Lursoft.lv** — commercial/paywalled. Free tier is limited; meaningful bulk/filtered pulls (NACE + turnover + employee count) require paid subscription (from EUR 9.90/24h; EUR 21–35/month).
- **PVD, VI (Health Inspectorate), CAA, LJA, ATD registers** — public and free, but mostly **web lookup interfaces, not bulk-downloadable datasets**. Only VVD (waste/water permits), UR (company + NACE), and the Research Institutions register were confirmed as genuine structured bulk-downloadable open data in this pass.
- **Safe Data Centre Register (Drošo datu centru reģistrs)** — newly established under the National Cybersecurity Law, implementing Cabinet regulation still in draft/finalization as of this research; status as a live public register was not confirmed — check cyber.gov.lv periodically.
- **Gaps requiring follow-up queries if those sectors become active targets:** oil pipeline operator register, hydrogen operator register, IXP participant register, Annex II.6 digital-provider/DSA coordinator register, chemicals company-level register, maritime shipping-company register field schema, medical-device LATMED field schema, employee-count/turnover public source beyond Lursoft.
