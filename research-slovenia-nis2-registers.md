# Slovenia — Public registers for NIS2 in-scope entity enumeration

Research date: 2026-10-13. Prepared for NexGenio outbound target-list build.
Skipping Annex I.3 Banking and Annex I.4 Financial Market Infrastructures per brief.

---

## 1. URSIV register (NIS2 essential/important entities)

**URSIV = Urad Vlade Republike Slovenije za informacijsko varnost**, the competent authority under ZInfV-1 (Slovenia's NIS2 transposition law).

- **Status: NOT PUBLIC / CONFIDENTIAL.** There is no public-facing searchable register or published list of registered essential/important entities.
- Entities self-register by filling out a form and emailing a signed PDF + CSV to `gp.uiv@gov.si`. URSIV maintains the resulting data internally for supervisory purposes; no public URL exposes individual entries or even an aggregate list.
- Official info/instructions page: https://www.gov.si/teme/obveznosti-in-podpora-zavezancem-po-zakonu-o-informacijski-varnosti-zinfv-1/
- Instructions PDF for the registration form: https://www.gov.si/assets/vladne-sluzbe/URSIV/Datoteke/Navodila/Navodila-za-izpolnjevanje-obrazca_v1.3.-januar26.pdf
- Explanatory FAQ (Jan 2026 version): https://www.gov.si/assets/vladne-sluzbe/URSIV/Datoteke/Dokumenti/Pojasnila-k-ZInfV-1_verzija1.4-januar2026.pdf

**Conclusion:** URSIV cannot be used to enumerate targets. To identify likely in-scope entities you must triangulate via sectoral/business registers below and apply the ZInfV-1 size/sector criteria yourself.

---

## 2. National business register — AJPES PRS / ePRS

**Name:** Poslovni register Slovenije (PRS), public web front-end = ePRS.
**Operator:** AJPES (Agencija Republike Slovenije za javnopravne evidence in storitve).

| Access channel | URL | Public? | Cost |
|---|---|---|---|
| ePRS web lookup (single-entity search) | https://www.ajpes.si/prs/ | Yes, free, no login | Free |
| General PRS info page | https://www.ajpes.si/registri/poslovni_register/splosno | — | — |
| Re-use / bulk terms page | https://www.ajpes.si/registri/poslovni_register/ponovna_uporaba | — | Free basic open data; paid for larger/custom extracts |
| Open data (OPSI) basic extract (CSV/XML, ~biweekly) | https://podatki.gov.si/dataset/poslovni-register-slovenije | Yes, public, free | Free |
| EU open data mirror | https://data.europa.eu/data/datasets/poslovni-register-slovenije?locale=en | Yes | Free |
| REST API `restPrsInfo` (programmatic single/filtered lookups, JSON/XML) | Service doc: https://www.ajpes.si/Doc/AJPES/Za_razvijalce/restPrsInfo_Opis_servisa_za_razvijalce.pdf | Public but contractual terms apply | Terms/possible fee per AJPES — not stated as flat free in docs; confirm with AJPES |
| Full database (Access format) / scheduled bulk feeds via SOVD, custom XML/TXT/Excel exports, filtered extracts by SKD etc. | https://www.ajpes.si/registri/poslovni_register/ponovna_uporaba | Available on request | **Paid**, quote-based depending on scope/frequency |

### Fields exposed

- **ePRS free web search:** legal name, matična številka (registration number), tax number (davčna številka), legal form, registered address, status (active/deleted), registry body. Representative/director data may appear for some entity types but is not guaranteed uniform across all entries.
- **`restPrsInfo` API `find`/`get` methods:** matična (10-digit reg. no.), davčna (8-digit tax no.), naziv (name), dejavnost (main SKD/NACE activity), sektor (SKIS sector code), oblika (legal-form code) — confirmed from the service PDF (https://www.ajpes.si/Doc/AJPES/Za_razvijalce/restPrsInfo_Opis_servisa_za_razvijalce.pdf).
- **SKD/NACE code:** present and searchable as a filter criterion, both in the free register (as a displayed field) and as a query parameter in restPrsInfo / in custom AJPES extracts ordered by activity code.
- **Employee count / size band, turnover / balance-sheet totals:** **NOT included** in the basic PRS/ePRS/restPrsInfo output. These are accounting/statistical data held in separate AJPES services (annual-report filings), not the core PRS registry fields. If needed, must be separately ordered/queried from AJPES's financial-statements database.
- **Directors/officers (zastopniki):** can appear in certain AJPES services (representative name, type of representation, scope/limits, validity period, status) but this is not guaranteed to be populated uniformly for every entity in the standard PRS pull — verify per record.
- **Website/domain, contact email:** not part of the PRS/AJPES data model as a rule.

Sources:
- https://www.ajpes.si/prs/
- https://www.ajpes.si/registri/poslovni_register/splosno
- https://www.ajpes.si/registri/poslovni_register/ponovna_uporaba
- https://www.ajpes.si/Doc/AJPES/Za_razvijalce/restPrsInfo_Opis_servisa_za_razvijalce.pdf
- https://podatki.gov.si/dataset/poslovni-register-slovenije/resource/6764dc35-479b-4a47-9df6-c4ae2b5f4310
- https://data.europa.eu/data/datasets/poslovni-register-slovenije?locale=en

---

## 3. Sectoral regulator registers, per Annex sector

### Annex I.1 — Energy (electricity, district heating/cooling, oil, gas, hydrogen)

- **Regulator:** AGEN-RS (Agencija za energijo RS). https://www.agen-rs.si/web/en
- **Register of issued/withdrawn licences** (electricity generation, transmission, distribution, supply/trading; equivalent gas activities): maintained by AGEN-RS. Public — register pages at https://www.agen-rs.si/web/en/esp/electric-energy . Bulk download: not confirmed as a structured open-data export; register appears to be browsable lists rather than a bulk file.
- **Energy permits (energetska dovoljenja)** — separate register held by the **Ministry responsible for energy**, not AGEN-RS. Data public except natural-person holder's personal ID number. Legal basis page: http://www2.gov.si/zak/zak_vel.nsf/4c1d8c547755fffac1256616002dd5e1/c12563a400338836c1256e7f0042a098?OpenDocument
- District heating and "other energy gases" (incl. hydrogen) fall under AGEN-RS's general remit but may route through municipal concession/public-utility arrangements rather than a single licence register — no single consolidated public bulk file identified.
- Gas transmission operator identified by name: Plinovodi d.o.o. (concession-based, not itself a "register").

Source: https://www.agen-rs.si/web/en/about-the-agency ; https://spot.gov.si/en/activities-and-professions/activities/distribution-of-natural-gas

### Annex I.2 — Transport (air, rail, water, road)

No single consolidated operator register; split by mode:

| Mode | Authority | Register | Public? | Bulk? |
|---|---|---|---|---|
| Air | Javna agencija za civilno letalstvo RS (CAA Slovenia) — https://www.caa.si/en/legislation.html | Aircraft register (not a full commercial-air-operator list) | Partially public | Not confirmed |
| Rail | Javna agencija za železniški promet RS (AŽP) | Licence/safety-certificate records | Not confirmed as openly browsable bulk list | None found |
| Road freight | Obrtno-podjetniška zbornica Slovenije (OZS), under Ministry of Infrastructure framework | "Register izdanih licenc za prevoz blaga v cestnem prometu" | Public (via SPOT/OZS) | Not confirmed |
| Road passenger | GZS / OZS, same framework | Licence records | Public (via SPOT) | Not confirmed |
| Water/maritime | Uprava RS za pomorstvo (Slovenian Maritime Administration) | Register of marine vessels (Izola/Piran offices) | Public register exists for vessels, not necessarily a full operator-company list | None found |
| Infrastructure (not operators) | Direkcija RS za infrastrukturo (DRSI) | N/A — infra manager, not operator register | — | — |

Source: https://spot.gov.si/en/activities-and-professions/permits-and-declarations/licence-to-perform-national-road-haulage ; https://spot.gov.si/en/activities-and-professions/permits-and-declarations/licence-to-perform-national-road-passenger-transport ; https://spot.gov.si/en/activities-and-professions/activities/railway-passenger-transport/?l=en_IE

**None found**: a single bulk-downloadable national transport-operator register covering all modes.

### Annex I.5 — Health

- **Hospitals / healthcare providers (izvajalci zdravstvene dejavnosti):** permits/registration handled by **Ministrstvo za zdravje** (Ministry of Health), not JAZMP. Overview page: https://www.gov.si/teme/poslovanje-izvajalcev-zdravstvene-dejavnosti/ — no single public bulk-downloadable list confirmed from this source; treat as "none found" for bulk purposes pending direct Ministry confirmation.
- **Medicines / medical devices:** **JAZMP** (Javna agencija RS za zdravila in medicinske pripomočke). Registers of medical-device manufacturers, distributors, importers published on JAZMP site: https://www.jazmp.si/en/medical-devices/registers/ . Public = yes for these published lists; bulk download format not confirmed (appears to be web-published lists/PDFs rather than open-data files).
- JAZMP transparency catalogue (public-information catalogue): https://www.jazmp.si/informacije-javnega-znacaja/katalog-ijz/

### Annex I.6 — Drinking water

- No single consolidated public register of all drinking-water operators found. Relevant sources:
  - IJSVO (Informacijski sistem javnih služb varstva okolja) — Ministry's information system covering municipal drinking-water/wastewater service providers. Instructions: https://www.gov.si/assets/ministrstva/MOP/Dokumenti/Voda/IJSVO/ijsvo_navodila_javne_sluzbe.docx
  - Operational Programme document (states 89 providers as of 5 Apr 2021, lists delivery forms): https://www.gov.si/assets/ministrstva/MOP/Dokumenti/Voda/Pitna_voda/op_oskrba_pitna_voda_2022_2027.docx
  - LIFE project annex with a partial company list (JKP Brezovica, JKP Dravograd, etc.): https://lifeslovenija.si/wp-content/uploads/2017/11/IzVRS_Analiza_prioritet_RS_v_programu_LIFE_vode_Priloga-1_Seznam-podjetij.pdf
  - Actual legally authoritative operator for a given municipality is set by that municipality's ordinance/concession, not a national database — must be checked municipality by municipality.
- **Public, bulk-downloadable national register: none found.**

### Annex I.7 — Waste water

- Same IJSVO system as drinking water (above) covers wastewater collection/treatment providers; no separate consolidated public bulk register identified beyond municipal ordinances.
- Related but distinct: **Register upravljavcev in izdanih IED okoljevarstvenih dovoljenj** (ARSO/Ministry of Environment IED-permit register) lists municipal wastewater-treatment plants above IED thresholds — see field detail in Annex II.2/II.3 section below. URL: https://www.gov.si/teme/industrijsko-onesnazevanje/register-upravljavcev-in-izdanih-ied-okoljevarstvenih-dovoljenj
- CSV export of that register: https://www.gov.si/teme/industrijsko-onesnazevanje/register-upravljavcev-in-izdanih-ied-okoljevarstvenih-dovoljenj/export/csv/
- **Public = yes** for the IED register (with CSV export = bulk yes), but it only covers IED-threshold installations, not all wastewater operators.

### Annex I.8 — Digital infrastructure (IXP, DNS, TLD, cloud, data centre, CDN, trust services, electronic comms networks/services)

- **Electronic communications networks/services:** **AKOS** "Uradna evidenca operaterjev" (Official register of operators). Public, and also published as open data on OPSI.
  - Register: https://www.akos-rs.si/registri/seznam-registrov/operaterji
  - Open data resource: https://podatki.gov.si/dataset/uradna-evidenca-operaterjev/resource/7bdee7fb-e011-42e8-882e-ca10ecf0bc45
  - Registration process: https://www.akos-rs.si/telekomunikacije/raziscite/registracija-operaterjev
  - Fields: operator/holder name, type of service provided, network ownership status (own vs. leased). No confirmed separate structured bulk API beyond the OPSI listing/description page.
- **DNS/TLD, cloud, data centres, CDN:** registering as an AKOS "operator" is **not automatic** for these — only applies if the entity actually provides a public electronic communications network/service. Hosting/cloud/data-centre activity alone generally does **not** trigger AKOS operator-register inclusion. **No dedicated Slovenian public register identified for cloud/data-centre/CDN/DNS-TLD providers as such.**
- **Trust services (eIDAS qualified trust service providers):** **SI Trusted List**, published per eIDAS Art. 22.
  - Machine-readable XML: https://www.tl.gov.si/SI_TL.xml
  - SI-TRUST authority page: https://www.si-trust.gov.si/en/about-us
  - Public = yes, machine-readable = yes (XML), lists qualified providers/services (e.g., SIGEN-CA, SIGOV-CA, SI-PASS-CA, SI-TSA). Fields are entity/service name, service type, status, validity — not AJPES-style corporate fields.
- **NIS2 competent authority note:** for cloud/data-centre/general digital-infrastructure NIS2 classification, the competent supervisory authority is **URSIV**, not AKOS — AKOS's registers are useful for identification/enumeration but AKOS is not the ZInfV-1 enforcement body for this sub-sector. Source (lower-confidence, vendor site, cross-checked against URSIV's own general-authority role): https://nis-solutions.eu/countries/slovenia/

### Annex I.9 — ICT service management B2B (MSP/MSSP)

- **None found.** No sectoral licensing/registration regime or dedicated public register for managed service providers or managed security service providers in Slovenia. Enumeration must rely on AJPES SKD/NACE code search (relevant codes fall under J62/J63 — computer programming, consultancy, IT and other information service activities) rather than a sectoral regulator list.

### Annex I.10 — Public administration

- No single NIS2-specific public-administration register, but strong proxy candidates:
  - **RPU — Register proračunskih uporabnikov** (Register of budget users), maintained by **UJP** (Uprava RS za javna plačila). Covers all state and municipal budget-financed public bodies.
    - Public search (iRPU): https://storitve.ujp.gov.si/dostop/irpu/
    - Search tool: https://storitve.ujp.gov.si/RPU/SearchRPU.aspx
    - Info page: https://www.gov.si/teme/register-proracunskih-uporabnikov/
    - **Public = yes, free, no login.** Fields confirmed: full/short name, budget-user code, tax number, **matična številka**, status, address/settlement, postal code, telephone/official e-mail, municipality, budget, date added to register. A published file-structure spec confirms bulk fields (maticna, address, postal code, town, official email): https://www.gov.si/assets/organi-v-sestavi/UJP/datoteke/storitve/rpu/Struktura-datoteke-SEZNAM-PU.pdf
    - **This is the strongest public, bulk-capable register for the public-administration sector** — it directly exposes matična številka, official contact e-mail, and address, which AJPES's basic PRS pull does not reliably give for contact purposes.
  - eUprava list of state institutions (ministries, agencies, inspectorates, administrative units): https://e-uprava.gov.si/drzava-in-druzba/javni-sektor/drzavna-uprava.html?lang=si — descriptive list, not a structured bulk dataset.
  - Administrative units list (58 units): https://www.gov.si/en/state-authorities/administrative-units/

### Annex I.11 — Space

- **Space Activities Act (Zakon o vesoljskih dejavnostih)** establishes a national register of launched space objects, administered by the competent ministry (historically Ministry of Economic Development and Technology — confirm current allocation).
  - Legal act: https://www.uradni-list.si/glasilo-uradni-list-rs/vsebina/2022-01-2867
  - Background: https://www.gov.si/novice/2022-03-16-sprejet-je-zakon-o-vesoljskih-dejavnostih/
- Fields reported in the implementing regulation: space-activity licence/registration details, space-object name, launch info, orbital parameters, purpose, operator/owner details, international cooperation, object status.
- **This is a register of launched space objects, not a general public register of "space sector companies."** Public accessibility of the actual register interface (vs. just the legal requirement) was not independently confirmed with a working URL in this research pass — flag as **unverified whether a public searchable interface exists**; the Official Gazette text confirms the legal obligation only.
- Satellite-communications operators may separately appear in the AKOS operator register (Annex I.8, above) if they provide public electronic communications services.

---

### Annex II.1 — Postal and courier

- **Regulator/register:** AKOS, "Poštne storitve" register.
  - Register: https://www.akos-rs.si/registri/seznam-registrov/postne-storitve
  - English: https://www.akos-rs.si/en/registers/registers-list/postal-services
  - Open-data resource: https://podatki.gov.si/dataset/740573b0-e831-4fa4-aada-68f746be953d/resource/16954500-1fce-4e18-ac5e-0507d21d5e94
- **Public = yes.** Lists named operators (Pošta Slovenije, DHL Ekspres Slovenija, DPD, FedEx Express Slovenija, GLS, UPS Adria, Express One Slovenia, Gebrüder Weiss, BOX NOW SI, Packeta Adriatic, Cetis-Zg, Nomago, etc.), decision references, validity dates, service type.
- Bulk download: available as open dataset on podatki.gov.si (above link) — **yes**.

### Annex II.2 — Waste management

- **Regulator:** ARSO / Ministry of Environment, via the **Register varstva okolja** family of registers.
  - Portal: https://www.gov.si/drzavni-organi/ministrstva/ministrstvo-za-okolje-in-prostor/o-ministrstvu/direktorat-za-okolje-naravo-in-podnebje/register-varstva-okolja/
  - Sub-registers include: waste-recovery permit holders, waste-disposal permit holders, landfills, incineration/co-incineration facilities, waste transporters/brokers/traders/collectors.
  - **Public = yes.** Bulk download confirmed for the IED sub-register (CSV, see below); bulk status of the other waste sub-registers (transporters/brokers/collectors) not separately confirmed — treat as web-browsable unless verified otherwise.

### Annex II.3 — Chemicals

- **Register:** Register upravljavcev in izdanih IED okoljevarstvenih dovoljenj (IED environmental-permit holders register) — covers chemicals-relevant IED activities (e.g., surface treatment of metals using electrolytic/chemical processes, pharmaceutical production, wood/wood-product treatment with chemicals) where they cross IED thresholds.
  - Register: https://www.gov.si/teme/industrijsko-onesnazevanje/register-upravljavcev-in-izdanih-ied-okoljevarstvenih-dovoljenj
  - CSV export: https://www.gov.si/teme/industrijsko-onesnazevanje/register-upravljavcev-in-izdanih-ied-okoljevarstvenih-dovoljenj/export/csv/
  - **Public = yes, bulk = yes (CSV).**
  - **Confirmed fields:** operator (upravljavec) name + address, IED-installation name, IED-installation address, IED activity-type code (e.g. "2.5b", "2.6" per IED Annex I categories), permit issue date, issued permits/decisions, consolidated-text (čistopis) document link.
  - **Fields explicitly NOT present:** matična številka is **not shown** as a field in this register.
  - Note: this register only covers chemicals/industrial activities that meet IED thresholds — smaller chemical handlers/distributors fall outside it; **no separate general chemicals-sector register found** for those.

### Annex II.4 — Food (wholesale and industrial only)

- **Regulator:** UVHVVR (Uprava za varno hrano, veterinarstvo in varstvo rastlin).
- Wholesale/storage/distribution of food must register with UVHVVR at least 15 days before starting activity (contact: gp.uvhvvr@gov.si, tel. 01 300 13 00).
  - Process pages: https://spot.gov.si/en/activities-and-professions/permits-and-declarations/registration-of-food-processing-facilities ; https://www.gov.si/zbirke/storitve/registracija-zivilskega-obrata/
- **No public, openly searchable bulk register was found.** UVHVVR appears to maintain this registration internally for supervisory/control purposes only — not published as an open database.
- **Conclusion: none found** (no public register usable for outbound-list enumeration); must rely on AJPES SKD codes (wholesale-of-food codes, G46.3x) as a proxy, then verify directly with targets.

### Annex II.5 — Manufacturing (medical devices; NACE C26–C30)

- **Medical devices:** JAZMP registers of device manufacturers/distributors/importers — see Annex I.5 above. https://www.jazmp.si/en/medical-devices/registers/ — public, bulk format not confirmed as open-data.
- **NACE C26 (computer/electronic/optical), C27 (electrical equipment), C28 (machinery), C29 (motor vehicles), C30 (other transport equipment):** **No dedicated sectoral regulator register found.** These are standard manufacturing NACE codes — enumeration must be done via **AJPES PRS/restPrsInfo SKD-code search** (see Section 2) filtering on the corresponding SKD 2025 codes, not a sectoral authority.

### Annex II.6 — Digital providers (online marketplace, search engine, social network)

- **No dedicated Slovenian public register found** that is specific to NIS2 classification of online marketplaces, search engines, or social networks.
- AKOS is Slovenia's **Digital Services Act (DSA) national coordinator** and publishes related registers for hosting/intermediary/platform providers under DSA (https://www.akos-rs.si/registri/seznam-registrov ; https://www.akos-rs.si/digitalne-storitve/raziscite/za-ponudnike-storitev/default-title), but this is a **DSA register, not a NIS2/ZInfV-1 register**, and its public/bulk status for this specific category was not independently confirmed in this pass.
- For NIS2/ZInfV-1 purposes, **URSIV** is the competent authority, and there is no separate public sectoral list — self-registration only, confidential (per Section 1).
- **Conclusion: none found** as a usable public enumeration source; must rely on general web/market research for named marketplaces, search engines, and social platforms with Slovenian establishment, then cross-check against AJPES for corporate details.
- Caution: some secondary sources (nis-solutions.eu, nis2-info.eu, nis2os.com, isms.online country pages) assert AKOS as a "registry authority" for digital service providers under ZInfV-1 — this claim could **not** be corroborated against an official URSIV or AKOS primary source and should be treated as **unverified/low-confidence** pending direct confirmation.

### Annex II.7 — Research

- **ARRS (now ARIS — Slovenian Research and Innovation Agency)** maintains an institutional register of research organisations, publicly browsable via **SICRIS**.
  - ARIS: https://www.aris-rs.si/
  - SICRIS (public research-information system, org/research-group/researcher search): http://www.sicris.si/
- **Public = yes.** This is an **institutional research register, not a NIS2/ZInfV-1 compliance register** — inclusion in SICRIS does not by itself establish ZInfV-1 in-scope status (size/turnover thresholds and activity criteria still apply, per guidance at https://www.gov.si/teme/obveznosti-in-podpora-zavezancem-po-zakonu-o-informacijski-varnosti-zinfv-1/).
- Bulk download / structured API for SICRIS not confirmed in this research pass — treat as web-searchable unless verified otherwise.

---

## 4. Field-availability summary matrix

| Field | AJPES PRS/ePRS/restPrsInfo | UJP RPU (public admin) | AKOS operator/postal registers | ARSO IED register | JAZMP device registers | URSIV NIS2 register |
|---|---|---|---|---|---|---|
| Legal name | Yes | Yes | Yes | Yes (as "upravljavec") | Yes | Not public |
| Matična številka | Yes | Yes | Not confirmed | **No** | Not confirmed | Not public |
| Tax number (davčna) | Yes | Yes | Not confirmed | Not confirmed | Not confirmed | Not public |
| Legal form | Yes (oblika code) | Not confirmed | No | No | Not confirmed | Not public |
| SKD/NACE activity code | Yes, searchable | No | Service-type field (not SKD) | IED activity-type code (not SKD) | No | Not public |
| Registered address | Yes | Yes | Not confirmed | Yes (installation address) | Not confirmed | Not public |
| Employee count/size band | **No** (separate AJPES service) | No | No | No | No | Not public |
| Turnover | **No** (separate AJPES service) | No | No | No | No | Not public |
| Website/domain | No | No | No | No | No | Not public |
| Contact email | No | **Yes** (official e-mail) | Not confirmed | No | Not confirmed | Not public |
| Directors/officers | Sometimes (not guaranteed) | No | No | No | No | Not public |

**Practical read for outbound list-building:** AJPES (SKD search) is the backbone for identifying candidate entities by sector/activity; UJP's RPU is the best source for public-sector contact emails and matična številka; sector registers (AKOS, ARSO/IED, JAZMP) confirm sector membership and sometimes add installation-level detail but rarely give employee count, turnover, or contact data — those gaps must be filled by direct outreach or AJPES's paid financial-statements service.

---

## 5. NIS2 transposition status — ZInfV-1

- **Law:** Zakon o informacijski varnosti (ZInfV-1).
- **Published:** Official Gazette (Uradni list RS) No. 40/2025.
- **In force since:** **19 June 2025.**
  - Source: https://www.gov.si/novice/2025-06-18-samoregistracija-zavezancev-po-novem-zakonu-o-informacijski-varnosti-zinfv-1/
  - Publication announcement: https://www.gov.si/novice/2025-06-04-zakon-o-informacijski-varnosti-zinfv-1-objavljen-v-uradnem-listu-republike-slovenije/
- **Registration duty and deadline:**
  - Existing entities that already met the criteria when the law entered into force: self-register within **6 months**, i.e. by **19 December 2025**.
  - New entities (those that later start meeting the criteria): self-register within **30 days** of the triggering circumstance.
  - Entities designated by individual administrative decision: **30 days** from service of the decision.
  - Source: https://www.gov.si/teme/obveznosti-in-podpora-zavezancem-po-zakonu-o-informacijski-varnosti-zinfv-1/ ; https://www.gov.si/assets/vladne-sluzbe/URSIV/PR/ZInfV-1_Odgovori-na-vprasanja.pdf
  - **Note:** as of this research date (13 Oct 2026), the 19 Dec 2025 initial-registration deadline has already passed.
- **Fines (general, per secondary legal-summary sources — not independently cross-checked against the Official Gazette article numbers in this pass):**
  - Essential entities: up to **EUR 10 million or 2% of worldwide annual turnover.**
  - Important entities: up to **EUR 7 million or 1.4% of worldwide annual turnover.**
  - Source (secondary, flag as needing primary-source verification): https://legal.pwc.de/content/services/NIS-2/nis-2-slovenia.pdf
- **Article 20(2) management-body training duty — enforceability:**
  - ZInfV-1/URSIV guidance treats the training obligation as part of the broader governance/risk-management compliance duty, documented via training records (attendance, content, learning outcomes, relevance to oversight role).
  - **No separately named, standalone fine for "failure to train management" was identified.** Non-compliance with the training duty would most plausibly be pursued as evidence of a broader governance/risk-management violation under the general ZInfV-1 offence provisions (the same fine bands as above), rather than as its own distinct offence category.
  - This conclusion is based on URSIV's own guidance documents and should be treated as the current best reading rather than a confirmed statutory citation to a specific offence-article subsection — **recommend direct verification against the ZInfV-1 offence articles (kazenske določbe) in Uradni list RS 40/2025** before using this in client-facing material.
  - Sources: https://www.gov.si/teme/obveznosti-in-podpora-zavezancem-po-zakonu-o-informacijski-varnosti-zinfv-1/ ; https://www.gov.si/assets/vladne-sluzbe/URSIV/Datoteke/Dokumenti/Pojasnila-k-ZInfV-1_verzija1.4-januar2026.pdf

---

## Flags / quality caveats

- **Low-confidence secondary sources** used only where no primary source existed, clearly marked in-line above: nis-solutions.eu, nis2-info.eu, nis2os.com, isms.online, legal.pwc.de, comtradeintegration.com, lexlint.io. These are vendor/law-firm marketing pages, not primary legal or registry sources — use for orientation only, verify against gov.si/pisrs.si/Uradni list before client-facing use.
- **No paywalls encountered** among the primary registers above (ePRS, RPU, AKOS registers, IED register, SI Trusted List, JAZMP lists, SICRIS are all free/no-login). The only cost exposure is AJPES's **custom/bulk/SOVD data orders** (quote-based) and the **restPrsInfo API**, whose commercial terms were not fully specified in available documentation — contact AJPES directly for current pricing.
- **Several "none found" sectors** (MSP/MSSP, food wholesale, digital providers, NACE C26-30 manufacturing, cloud/data-centre/DNS-TLD) have no usable sectoral public register — AJPES SKD search plus manual verification is the only path for those.
