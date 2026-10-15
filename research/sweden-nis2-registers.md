# Sweden — Public Registers for NIS2 In-Scope Entity Enumeration
Research date: 2026-10-13. All findings sourced via Perplexity (sonar-pro) web search; URLs below. Banking (Annex I.3) and Financial Market Infrastructure (Annex I.4) excluded per scope.

---

## 1. NIS2 competent-authority register(s) — MSB and sectoral supervisors

**The Swedish NIS2 entity register is NOT public.**

- Sweden's NIS2 law is **Cybersäkerhetslag (2025:1506)**, in force **15 January 2026**. Entities must notify/register as "väsentlig" (essential) or "viktig" (important) with the competent authority for their sector; MSB coordinates and acts as default supervisor where no sector authority is designated.
  Source: https://www.regeringen.se/contentassets/79334e04a4fa4a109440a6563330061a/uppdrag-till-myndigheten-for-samhallsskydd-och-beredskap-att-forbereda-genomforandet-av-nis-2-direktivet.pdf
- The compiled list of registered entities is for **tillsynsmyndigheter (supervisory authorities) and national coordination**, not published as an open company register. Some data points (e.g., IP ranges, security-relevant info) are explicitly subject to sekretess (confidentiality/secrecy law).
  Source: https://www.regeringen.se/contentassets/968c4517fe2f49f3aa2b2284bf28316b/msb.pdf ; https://ebuildersecurity.se/en/articles/nis2-registration-sweden/
- A summarized version is reported upward to ENISA/EU level, but this does not make the underlying Swedish register public.
  Source: https://ezine.eversheds-sutherland.com/eu-nis2-directive/sweden
- MSB's dedicated NIS2 guidance/scoping portal (part of Sweden's National Cyber Security Centre, NCSC — run jointly by MSB, FRA, Säpo, Must): https://www.ncsc.se/sv/radgivning-och-stod/cybersakerhetslagen-nis2/omfattas-verksamheten-av-cybersakerhetslagen/ — this is guidance for self-assessment, **not a published entity list**.

**Conclusion: do not expect to pull a target list directly from MSB or any sector regulator's "NIS2 register." Use the business and sectoral registers below instead, then cross-reference against Cybersäkerhetslag scope criteria.**

---

## 2. National business registers

### 2a. Bolagsverket (Swedish Companies Registration Office)
URL: https://bolagsverket.se/ | API: https://bolagsverket.se/apierochoppnadata/

| Access mode | Cost | Fields |
|---|---|---|
| **Free "värdefulla datamängder" (high-value datasets) API / bulk download** (since 3 Feb 2025, EU open-data rules) | **Free**, no agreement | Legal name, organisationsnummer, registered (postal) address (`ORGANISATIONSPOSTADRESS`), **SNI codes + text** (`NÄRINGSGREN ORGANISATION`), digitally filed annual reports where available |
| **Paid "API för att hämta företagsinformation"** (transactional lookup) | SEK 5,000 connection fee + monthly transaction/document fees | Real-time status, insolvency flags, documents |
| **Free bulk file** `scb_bulkfil.zip` | Free | Company register data incl. SNI codes |
| **Sök företagsinformation (web search)** https://foretagsinfo.bolagsverket.se/sok-foretagsinformation-web/ | Free for basic lookup; director/officer ("styrelseledamöter", "aktuella uppdrag") detail and downloadable annual reports are **purchasable** per-document | Current status free; directors/officers and full årsredovisning behind paywall unless you own the company (then free via Mina sidor) |

Field exposure summary (Bolagsverket):
- Legal name: **yes, free**
- Organisationsnummer: **yes, free**
- Legal form: **yes, free** (encoded in registration data)
- SNI/NACE code: **yes, free**, searchable via API/bulk file
- Registered address: **yes, free**
- Employee count/size band: **NOT in the free Bolagsverket dataset**
- Turnover: only inside **årsredovisning** (annual report) — purchasable per document, not a bulk free field; net turnover appears as "Nettoomsättning" in the income statement
- Website/domain: not exposed
- Contact email: not exposed
- Directors/officers names: available via web search but **purchasable**, not in the free bulk/API dataset
Source: https://bolagsverket.se/apierochoppnadata/hamtaforetagsinformation/vardefulladatamangder/apiforvardefulladatamangder.5513.html ; https://bolagsverket.se/apierochoppnadata/hamtaforetagsinformation/apiforatthamtaforetagsinformation.3988.html ; https://bolagsverket.se/en/sokforetagsinformation/omsokforetagsinformation.3045.html ; https://bolagsverket.se/apierochoppnadata/hamtaforetagsinformation/vardefulladatamangder.5294.html

### 2b. SCB Företagsregistret (Statistics Sweden Business Register)
URL: https://www.scb.se/vara-tjanster/bestall-data-och-statistik/foretagsregistret/

- **API is free** after registering for an API key via SCB's portal; rate-limited to 5,000 rows/request, 5 requests/sec per key.
- Exposes: SNI 2025 code (5-digit, company and establishment level), organisationsnummer, legal form, address, ownership sector, **employee-size CLASS** (band, not exact headcount), updated monthly.
- Turnover: **not clearly in the free API** — exact-turnover extracts are a separate commissioned/paid delivery.
- **Full bulk extract (>500,000 records): SEK 75,000** — paid, not free.
- Free alternative for bulk SNI+address+org-number data: Bolagsverket's "värdefulla datamängder" API/bulk file (section 2a above) incorporates SCB-sourced data at no cost.
Source: https://www.scb.se/vara-tjanster/bestall-data-och-statistik/foretagsregistret/avgiftsfria-uppgifter-i-foretagsregistret/ ; https://www.scb.se/vara-tjanster/bestall-data-och-statistik/foretagsregistret/foretagsregistrets-tjanster/ ; https://www.scb.se/contentassets/8a8eb5c3d45f461ea93482f8e8d4de4f/variabelbeskrivning-api-sni-2025.pdf

**Practical recommendation:** combine Bolagsverket's free bulk file/API (name, org-number, address, SNI) with SCB's free API (employee size-class) to build the core prospect list at zero cost. Turnover and director names require paid lookups on individual targets.

---

## 3. Sectoral regulator registers, per Annex I/II sector

### Annex I.1 — Energy (electricity, district heating/cooling, oil, gas, hydrogen)
**Regulator: Energimarknadsinspektionen (Ei).** URL: https://ei.se/om-oss/statistik-och-oppna-data/oppna-data
- Ei publishes an open-data catalogue (DCAT-AP, listed on Sweden's national open-data portal / EU data portal) but **no single combined public API/register was found** that lists all electricity-network-concession holders, gas-concession holders, and district-heating operators together.
- Electricity network concession and gas pipeline concession are both named regulatory instruments administered by Ei (gas concessions decided by Government on Ei's recommendation), confirming these are licensed activities, but a direct public searchable list of concession-holder companies was **not located** in this pass.
- District heating: **no dedicated Ei concession-holder register found** — district heating in Sweden is largely unregulated by licence (no concession requirement equivalent to electricity).
- **Action if needed:** request register extract directly from Ei (registrator@ei.se).
Source: https://ei.se/om-oss/statistik-och-oppna-data/oppna-data ; https://ei.se/ei-in-english/natural-gas/natural-gas-pipelines ; https://verksamt.se/en/industry/find-permits/permit/electric-power-lines-UKR1930

Public: partial (open-data catalogue exists, operator-level concession register not confirmed public/downloadable). Bulk download: not confirmed.

### Annex I.2 — Transport (air, rail, water, road)
**Regulator: Transportstyrelsen (Swedish Transport Agency).** URL: https://www.transportstyrelsen.se/
- **Public, searchable** "Search valid permits" tool: https://sokth.transportstyrelsen.se/Sth/Sth/certifikateTypeId/form/en-us — covers certificates/permits across modes.
- **Railway infrastructure managers / tram / metro operators register** (public, shows company name + organisationsnummer + permit type): https://jvportalen.transportstyrelsen.se/ExternaTjanster.wp/Tillstand/infrastructure
- **Air operators/AOC holders**: https://www.transportstyrelsen.se/en/aviation/air-operators/
- **Swedish Register of Shipping** (vessels; company data partial): referenced via https://www.transportstyrelsen.se/en/search/
- Road transport (professional haulage/bus/taxi permits): covered within the same permit-search tool; no separate bulk file identified.
- **Fields exposed**: company/legal name, organisationsnummer, permit type, permit validity — **no SNI code, no employee count, no turnover, no director names, no contact email** confirmed in these tools.
- Bulk download / API: **not confirmed** — these are search interfaces, not bulk exports.
Source: https://sokth.transportstyrelsen.se/Sth/Sth/certifikateTypeId/form/en-us ; https://jvportalen.transportstyrelsen.se/ExternaTjanster.wp/Tillstand/infrastructure ; https://www.transportstyrelsen.se/en/aviation/air-operators/

### Annex I.5 — Health
**Regulator: IVO (Inspektionen för vård och omsorg).** URL: https://www.ivo.se/
- IVO maintains **Vårdgivarregistret** (healthcare-provider register) but **does not offer an open public name/address search** across the full register.
- To obtain an extract: email **registerfragor@ivo.se** or write to IVO Registerfrågor, Box 45184, 104 30 Stockholm.
- Providers can self-serve their own entry via "Mina sidor" / e-register: https://e-register.ivo.se/
- IVO healthcare-permit page (private dental, certain other services requiring permit — permit holder names not confirmed searchable in bulk): https://www.ivo.se/vard-omsorgsgivare/tillstand/halso-sjukvardstillstand/
- **Public: NO** (register exists but is not openly searchable; extract must be requested). **Bulk download: must be requested, not self-serve.**
Source: https://www.ivo.se/vard-omsorgsgivare/anmal-verksamhet-register/vardgivarregistret/ ; https://e-register.ivo.se/

### Annex I.6 — Drinking water
**Regulator: Livsmedelsverket (Swedish Food Agency), oversight delegated to municipalities/county boards.**
- Livsmedelsverket does **not** publish one national public database of all registered drinking-water facilities/waterworks. Its public page ("Livsmedelsanläggningar") links to narrower lists (e.g. EU-approved establishments, natural-mineral-water facilities) but not a comprehensive waterworks register.
- Individual waterworks data sits with the **municipal/regional control authority** (kommunens miljö- och livsmedelskontroll) — fragmented, not centrally public.
- Aggregate statistic only: 2,555 registered drinking-water production facilities nationally in 2022 (no entity-level list).
- **Public: NO** (fragmented across ~290 municipalities). **Bulk download: none found centrally.**
Source: https://www.livsmedelsverket.se/foretagande-regler-kontroll/sa-kontrolleras-ditt-foretag/livsmedelsanlaggningar/ ; https://www.havochvatten.se/avlopp-och-dricksvatten/dricksvatten-och-vattenskydd.html

### Annex I.7 — Waste water
**No single regulator/register.** Best available combination:
- **Naturvårdsverket "Utsläpp i siffror"** (PRTR / pollutant release register) — public, searchable facility-level data, can show plant name, parent company, **organisationsnummer**, municipality, supervisory authority, for larger (environmentally-permitted) plants. URL: https://utslappisiffror.naturvardsverket.se/
- **Länsstyrelserna** (county administrative boards) hold the actual environmental permits naming the legal operator (verksamhetsutövare) and facility number — authoritative but scattered across 21 counties, not one national portal.
- **Svenskt Vatten member directory** (industry association, not a regulator) lists municipal/regional VA organisations but is not exhaustive. URL: https://www.svensktvatten.se/natverk-och-medlemskap/medlem-och-partner/medlemslista/
- **Public: PARTIAL** (PRTR is public for larger plants only). **Bulk download: PRTR has a search/list interface; full bulk export not confirmed.**
Source: https://utslappisiffror.naturvardsverket.se/en/Search/Plant-page/?pid=2797 ; https://www.svensktvatten.se/om-oss/verksamhet-och-strategi/om-va-branschen/

### Annex I.8 — Digital infrastructure
Split across sub-categories; **Regulator: PTS (Post- och telestyrelsen)** for most, **IIS (Internetstiftelsen)** for domains.

- **Electronic communications networks/services (providers required to notify under the Electronic Communications Act):** PTS public list "Anmälda aktörer" — https://pts.se/tillstand-och-anmalan/internet-och-telefoni/aktorer/anmalda-aktorer/ — **public**, shows current notified operators (and deregistered ones). No confirmed downloadable CSV; appears to be a browsable list only. PTS does offer an API for telephone-number-operator lookup (different dataset): https://catalog.pts.se/dokumentation/operator.html
- **Trust services (qualified):** PTS "Tillitslistan" / Swedish Trusted List — **public and machine-readable (XML)**: https://trustedlist.pts.se/SE-TL.xml ; human-readable page: https://pts.se/internet-och-telefoni/betrodda-tjanster/Kvalificerade-tillhandahallare/ — currently **4 companies** listed as qualified trust-service providers. Fields: provider legal name, qualified service type, status, validity dates (standard eIDAS Trusted List schema — no SNI, no turnover, no employee count).
- **DNS/TLD (.se, .nu registry):** operated by **Internetstiftelsen (IIS)**, not a licensing register of "entities" per se (IIS itself is the single registry operator). IIS publishes the **full registrar directory** (public): https://internetstiftelsen.se/en/domains/how-to-register-a-domain-name/registrars/ — reports 103 registrars with company name, country, website, contact details. This is useful for enumerating **registrars**, not TLD/DNS operators generally (IIS confirmed by PTS as satisfactorily running the .se registry per the Top-Level Domains Act: https://pts.se/nyheter-och-pressmeddelanden/internetstiftelsen-hanterar-registret-for-toppdomanen-.se-pa-ett-tillfredsstallande-satt).
- **IXP:** No dedicated public register found; Sweden's main IXP is Netnod — identify via business register / sector knowledge, not a licensing list.
- **Cloud, data centre, CDN providers:** **No Swedish licensing register.** Confirmed: Sweden does not require a specific operating licence for cloud/data-centre/CDN providers; NIS2 registration under Cybersäkerhetslagen is self-triggered (PTS is supervisory authority for these categories) but not a public list (see Section 1). One adjacent public data point: **data centres with ≥500kW IT power demand must publicly disclose energy-performance info**, supervised by the Swedish Energy Agency (Energimyndigheten) — a potential (unconfirmed URL for the actual database) secondary enumeration source worth following up separately.
Source: https://pts.se/tillstand-och-anmalan/internet-och-telefoni/aktorer/anmalda-aktorer/ ; https://pts.se/internet-och-telefoni/betrodda-tjanster/Kvalificerade-tillhandahallare/ ; https://trustedlist.pts.se/SE-TL.xml ; https://internetstiftelsen.se/en/domains/how-to-register-a-domain-name/registrars/ ; https://pts.se/nyheter-och-pressmeddelanden/internetstiftelsen-hanterar-registret-for-toppdomanen-.se-pa-ett-tillfredsstallande-satt ; https://www.legal500.com/guides/chapter/sweden-tmt/?export-pdf

### Annex I.9 — ICT service management B2B (MSP/MSSP)
**None found.** Sweden has **no licensing or registration register specific to managed service providers or managed security service providers**. They fall under Cybersäkerhetslagen self-registration (not public — see Section 1) and under PTS supervision if they also provide electronic communications services (then they'd appear in PTS "Anmälda aktörer," section 8 above). Otherwise: identify via SNI codes in Bolagsverket/SCB (relevant SNI 2025 codes approximate NACE J62/J63) rather than a sector regulator list.
Source: https://ebuildersecurity.se/en/sectors/high-tech/ ; https://www.legal500.com/guides/chapter/sweden-tmt/?export-pdf

### Annex I.10 — Public administration
No "licence register," but identification lists exist:
- **SCB Myndighetsregistret (General Register of Government Agencies)** — public, searchable: https://myndighetsregistret.scb.se/ and https://www.scb.se/vara-tjanster/oppna-data/myndighetsregistret/ — **449 agencies**, includes name, organisationsnummer, contact details, courts, business/administrative agencies, foreign missions.
- **Statskontoret Myndighetsförteckning** — downloadable **Excel** file, filterable by governing form, FTEs: https://www.statskontoret.se/analys-och-statistik/oppna-data/myndighetsforteckning/
- **Scope confirmation under Cybersäkerhetslagen**: municipalities (kommuner), regions (regioner), and municipal associations (kommunalförbund) are **included regardless of size**; central-government agencies are included where they have cross-border-affecting decision powers, or by specific Government designation; kommunfullmäktige/regionfullmäktige (the elected councils themselves) are excluded. This is a broader scope than the EU NIS2 minimum.
  Source: https://www.ncsc.se/sv/radgivning-och-stod/cybersakerhetslagen-nis2/omfattas-verksamheten-av-cybersakerhetslagen/ ; https://www.regeringen.se/contentassets/1e56bf5cad214fc78eb80d91c11cccb6/nya-regler-om-cybersakerhet-sou-202418.pdf
- For municipalities/regions themselves as entities: **SKR (Sveriges Kommuner och Regioner)** maintains the definitive list of all ~290 municipalities and 21 regions (standard public list, not cited directly in this pass but well known via https://www.regeringen.se/contentassets/968c4517fe2f49f3aa2b2284bf28316b/skr.pdf).
Public: **YES** for both SCB and Statskontoret agency lists. Bulk download: **YES**, both offer downloadable/API data, free.

### Annex I.11 — Space
**Regulator: Rymdstyrelsen (Swedish National Space Agency).**
- **No public register of all space-activity permit holders.** Each space activity (e.g., satellite launch, in-orbit maneuvering) requires a separate authorization application to Rymdstyrelsen, with final decision by the Government; no "blanket" operator licence exists.
- Rymdstyrelsen maintains a **national register of objects launched into outer space** (per Sweden's international obligations) — an **object** register, not an operator/licence register.
- Rymdstyrelsen publishes an **industry directory** (public, not a licence list): https://www.rymdstyrelsen.se/en/swedish-space-industry/list-of-companies/ — names companies like AAC Clyde Space, SES, SSC, ECAPS, Beyond Gravity Sweden; 2025 annual report cites **124 companies** active in the broader space sector (manufacturers, infrastructure users, data companies) — not limited to licensed operators.
- To get actual permit-holder records: request under Swedish public-access-to-information rules from rymdstyrelsen@snsa.se.
Public: **PARTIAL** (industry directory public; permit register not public/must be requested). Bulk download: **no**.
Source: https://www.rymdstyrelsen.se/teknikutveckling/nationellt/tillstand-att-bedriva-rymdverksamhet/ ; https://www.rymdstyrelsen.se/en/swedish-space-industry/list-of-companies/ ; https://www.rymdstyrelsen.se/contentassets/38a70296b16641dda2b3ad8914e637e6/redovisning-av-svensk-rymdverksamhet-2025.pdf

---

### Annex II.1 — Postal and courier
**Regulator: PTS.**
- **Public list of postal operators holding postal permits**: https://pts.se/tillstand-och-anmalan/post/postverksamhet/lista-med-postoperatorer/ (English: https://pts.se/en/application-and-notification/post/list-of-postal-operators/)
- Public: **YES**. Bulk download: not confirmed as a downloadable file — appears to be a browsable list.
Source: https://pts.se/tillstand-och-anmalan/post/postverksamhet/lista-med-postoperatorer/

### Annex II.2 — Waste management
**Regulator: Naturvårdsverket (Swedish EPA).**
- **PRTR / "Utsläppsregistret"** (Pollutant Release and Transfer Register) — public, searchable by facility, municipality, county, activity: https://www.naturvardsverket.se/en/services-and-permits/data-databases-and-applications/the-swedish-pollutant-release-and-transfer-register/ ; search tool: https://utslappisiffror.naturvardsverket.se/sv/Sok/Lista-over-anlaggningar/ — covers ~1,300 environmentally hazardous facilities including hazardous-waste treatment and landfill sites. Facility pages can show operator/organisation name, organisationsnummer, municipality, activity classification.
- **Avfallsregistret** (hazardous-waste transaction register) is **NOT a general public permit-holder register** — restricted to reporting businesses and supervisory authorities via a tillsynsportal: https://www.naturvardsverket.se/verktyg-och-tjanster/e-tjanster/avfallregistrets-tillsynsportal/
- For actual permits: request from the relevant **länsstyrelse**.
Public: **PARTIAL** (PRTR public for larger/permitted facilities; Avfallsregistret restricted). Bulk download: PRTR has search/list interface, full bulk export not confirmed.
Source: https://www.naturvardsverket.se/en/services-and-permits/data-databases-and-applications/the-swedish-pollutant-release-and-transfer-register/ ; https://www.naturvardsverket.se/vagledning-och-stod/avfall-farligt-avfall/avfallsregistret/

### Annex II.3 — Chemicals
**Regulator: Kemikalieinspektionen (Swedish Chemicals Agency, KemI).**
- **Public "Company Register"**: https://www.kemi.se/en/the-swedish-products-register/company-register — lists companies that have submitted an activity report, registered products, or hold a commercial-agent permission. Shows company status/category, **not detailed product data** (product data must be requested from the company).
- Underlying **Products Register** (regulatory database of chemical products manufactured/imported in Sweden) is not generally public in detail: https://www.kemi.se/en/the-swedish-products-register
- **KemI-stat** public statistics tool (aggregate, not company-level): https://www.kemi.se/en/statistics-on-chemicals-in-sweden/the-kemi-stat-search-tool
Public: **YES** for the Company Register (company names + status). Bulk download: not confirmed.
Source: https://www.kemi.se/en/databases ; https://www.kemi.se/en/the-swedish-products-register/company-register

### Annex II.4 — Food (wholesale and industrial only)
Same as Annex I.6 above — **Livsmedelsverket does not publish a comprehensive national public register of food facilities**; oversight and facility-level registers sit with individual municipal control authorities (fragmented, ~290 municipalities). Livsmedelsverket's own public lists are narrower (EU-approved establishments, mineral-water facilities).
Public: **NO** centrally. Bulk download: **none found centrally**.
Source: https://www.livsmedelsverket.se/foretagande-regler-kontroll/sa-kontrolleras-ditt-foretag/livsmedelsanlaggningar/

### Annex II.5 — Manufacturing (medical devices + NACE C26–C30)
- **Medical devices**: No separate Swedish national public register of manufacturers. Mandatory registration is in the **EU EUDAMED** database (Actors module, filter type "Manufacturer," country Sweden) — public interface: EUDAMED Public, linked from Läkemedelsverket: https://www.lakemedelsverket.se/sv/medicinteknik/tillverka/eudamed — EUDAMED registration became mandatory **28 May 2026**. Läkemedelsverket confirmed it holds **no separate public national register** of medical-device actors; extracts must be requested via registrator@lakemedelsverket.se. Exception: custom-made-device manufacturers register directly with Läkemedelsverket rather than EUDAMED.
  Source: https://www.lakemedelsverket.se/sv/medicinteknik/tillverka/registrering-av-aktorer-och-produkter ; https://fragor.lakemedelsverket.se/org/lakemedelsverket/d/register-over-medicintekniska-aktorer/
- **NACE/SNI C26–C30 (electronics, electrical equipment, machinery, motor vehicles, other transport equipment) generally**: **none found** — no sector licensing register; identify via SNI codes in Bolagsverket/SCB business registers (Section 2).
Public: medical devices via EUDAMED **YES** (public interface, limited fields vs. restricted regulatory interface); general manufacturing **NO dedicated register, use business register SNI filter**.

### Annex II.6 — Digital providers (online marketplaces, search engines, social networking platforms)
**None found.** No Swedish licensing/registration register for these categories; they fall under Cybersäkerhetslagen self-registration (not public, Section 1) and/or DSA-related EU obligations (out of scope for this register inventory). Identify via business register + known-brand research, not a regulator list.

### Annex II.7 — Research
**None found.** No dedicated Swedish regulator register of "research organisations" for NIS2 purposes. Public universities/research institutes are identifiable via the SCB Myndighetsregistret (Section Annex I.10, if state-run) or Bolagsverket/SCB SNI codes (private research entities, SNI division M72). No licensing register exists.

---

## 4. Field-availability matrix (what each pull actually exposes)

| Register | Legal name | Org.nr | Legal form | SNI/NACE | Address | Employee size | Turnover | Website/domain | Contact email | Director names |
|---|---|---|---|---|---|---|---|---|---|---|
| Bolagsverket free API/bulk | Yes | Yes | Yes | Yes | Yes | No | No (bulk); only inside purchasable annual report | No | No | No (purchasable individually) |
| SCB Företagsregistret API | Yes | Yes | Yes | Yes | Yes | **Band only** | Not in free tier | No | No | No |
| PTS Anmälda aktörer (telecom) | Yes | Not confirmed | No | No | Not confirmed | No | No | No | No | No |
| PTS Trusted List (XML) | Yes (provider) | No | No | No | No | No | No | Service URL only | No | No |
| PTS postal operator list | Yes | Not confirmed | No | No | Not confirmed | No | No | No | No | No |
| IIS registrar directory | Yes | No | No | No | No | No | No | **Yes** | **Yes** (contact details) | No |
| Transportstyrelsen permit search | Yes | Yes | No | No | No | No | No | No | No | No |
| Naturvårdsverket PRTR | Yes (facility+parent co.) | Sometimes | No | Activity classification (not SNI) | Yes (municipality) | No | No | No | No | No |
| KemI Company Register | Yes | Not confirmed | No | No | No | No | No | No | No | No |
| IVO (by request only) | Yes (on request) | Unconfirmed | Unconfirmed | No | Unconfirmed | No | No | No | No | No |
| SCB Myndighetsregistret | Yes | Yes | N/A (agency) | No | Contact details | No | No | Possibly | Possibly | No |
| EUDAMED Public (medical devices) | Yes | No (EU actor ID instead) | No | No | Country-level | No | No | No | Limited | No |

**Bottom line for outbound targeting:** the only registers that give you bulk, structured, SNI-coded company data for free are **Bolagsverket's "värdefulla datamängder" + SCB's Företagsregistret API**. Every sectoral regulator list above gives you a **name-level confirmation that an entity is in-scope for a specific regulated activity**, but none give you SNI codes, turnover, or contact emails — those must be cross-matched back into Bolagsverket/SCB by organisationsnummer or exact legal name.

---

## 5. NIS2 transposition status

- **Law**: Cybersäkerhetslag (2025:1506). **In force 15 January 2026** — after the original EU transposition deadline of 17 October 2024.
  Source: https://legal.pwc.de/content/services/NIS-2/nis-2-sweden.pdf ; https://www.twobirds.com/en/insights/2025/sweden/navigating-nis-2-in-sweden-what-companies-need-to-know ; https://www.nis-2-directive.com/Transposition/Sweden.html
- **Registration duty**: Yes. Essential/important entities must notify the competent authority. **Registration portal opened 2 February 2026.** No single fixed statutory deadline is given for registration beyond "as soon as possible" / "without undue delay" — but substantive cybersecurity/incident-reporting duties apply from the law's entry into force (15 Jan 2026) **regardless of whether registration is complete**.
  Source: https://ezine.eversheds-sutherland.com/eu-nis2-directive/sweden
- **Article 20(2) management-body training duty**: Sweden has made this a **binding statutory obligation** — persons involved in management must undergo training on applicable security measures. The statute does **not appear to set a fixed recurring interval** (e.g., no explicit "annual" requirement found in the primary sources); some secondary commentary treats annual training as a best-practice recommendation rather than a literal statutory term — **flagged as unverified/interpretive**, not confirmed by a primary legal text in this pass.
  Source (primary-adjacent, law-firm summary): https://www.twobirds.com/en/insights/2025/sweden/navigating-nis-2-in-sweden-what-companies-need-to-know ; https://nis-solutions.eu/countries/sweden/
- **Is it separately fineable?** Yes — failure to comply with security-measure obligations (which the training duty forms part of) can trigger a **sanktionsavgift (sanction fee)**, and management can face **personal consequences including temporary bans from holding senior positions** in the covered operation. Maximum sanction levels reported:
  - Essential entities: up to the higher of **2% of worldwide annual turnover or EUR 10 million**
  - Important entities: up to the higher of **1.4% of worldwide annual turnover or EUR 7 million**
  Source: https://ebuildersecurity.se/en/cybersecurity-101/cybersakerhetslagen/ ; https://www.ri.se/en/cybersecurity/story/nis2-is-here-is-your-organisation-ready
- **Scope note (public administration)**: Sweden's transposition is **broader than the EU minimum** — it expressly includes municipalities (kommuner), regions (regioner), and municipal associations (kommunalförbund) regardless of size, while excluding the elected councils (kommunfullmäktige/regionfullmäktige) themselves. Central-government agencies are included by functional criteria or specific Government designation, not automatically.
  Source: https://www.ncsc.se/sv/radgivning-och-stod/cybersakerhetslagen-nis2/omfattas-verksamheten-av-cybersakerhetslagen/ ; https://www.regeringen.se/contentassets/1e56bf5cad214fc78eb80d91c11cccb6/nya-regler-om-cybersakerhet-sou-202418.pdf

---

## Flags / caveats

1. **The NIS2 entity register itself is confidential** in Sweden — this is the single most important finding for outbound list-building. Do not plan around getting it via FOI/offentlighetsprincipen; secrecy provisions explicitly cover parts of it.
2. **Drinking water and food facility registers are fragmented across ~290 municipalities** with no national public aggregator found — this is a significant data-collection cost if those sectors are prioritized.
3. **Energimarknadsinspektionen's concession-holder register was not confirmed as a direct public download** in this research pass — worth a follow-up direct inquiry to registrator@ei.se if the energy sector becomes a priority.
4. **Director/officer names are consistently paywalled or request-only** across every register checked (Bolagsverket purchasable; IVO on request). Budget for per-target paid lookups if director-level contact mapping is required.
5. **Low-quality/non-primary sources used only for context, flagged**: ebuildersecurity.se, nis-solutions.eu, nis2dir.eu, risidata.com — these are compliance-vendor blogs, not primary legal sources, and were cross-checked against regeringen.se / EUR-Lex / twobirds.com / PwC legal summaries where possible. Treat vendor-blog-only claims (e.g., exact Article 20(2) training interval) as **unverified** until confirmed against the Cybersäkerhetslag text itself or an SFS/riksdagen.se citation (not located in this pass).
6. The Riksdag's own statute database (lagen.nu / riksdagen.se) was not directly queried for the Cybersäkerhetslag (2025:1506) full text — recommend a follow-up pull of the primary statute text for exact wording on the training duty and registration deadline before using in client-facing material.
