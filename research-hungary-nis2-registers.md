# Hungary — Public Registers for NIS2 In-Scope Entity Enumeration

Research date: 2026-10-13. Prepared for NexGenio outbound target-list building.
Scope: Annex I sectors 1,2,5,6,7,8,9,10,11 and Annex II sectors 1-7 (Banking/Financial Market Infrastructure excluded per instruction). Every claim below carries its source URL; where a pplx pull returned ambiguous or unverifiable detail, this is flagged explicitly rather than stated as fact.

---

## 0. KEY CORRECTION TO THE PREMISE

**Act XXIII of 2023 is NO LONGER IN FORCE.** It was repealed effective 31 December 2024 and replaced by **Act LXIX of 2024 on the Cybersecurity of Hungary**, in force since 1 January 2025 (one provision, Section 120(1), from 2 January 2025). The SZTFH registration/supervision regime, the mandatory-audit duty, and the governance obligations NexGenio should rely on for current outreach are now grounded in Act LXIX/2024, not Act XXIII/2023, although Act XXIII set the original registration/audit deadlines that are now historical.
Sources: https://njt.jog.gov.hu/jogszabaly/en/2024-69-00-00 ; https://cms.law/en/hun/legal-updates/hungary-introduces-new-comprehensive-laws-for-nis2-transposition ; https://www.rsm.hu/blogs/nis2-new-cybersecurity-act-and-important-changes ; https://njt.jog.gov.hu/jogszabaly/en/2023-23-00-00

---

## 1. SZTFH — Mandatory NIS2 Registration Regime

**Registering authority:** Szabályozott Tevékenységek Felügyeleti Hatósága (SZTFH)
**Registration form:** SZTFH-420, filed electronically at `sztfh.hu/ugyintezes/nyomtatvanyok-es-urlapok/sztfh420/`
**General info page:** https://sztfh.hu/tevekenysegek/kiberbiztonsagi-tanusitasok/kiberbiztonsagi-felugyelet/
**Legal basis (now historical for the deadlines):** Act XXIII of 2023 (https://net.jogtar.hu/jogszabaly?docid=a2300023.stf), now superseded by Act LXIX of 2024 (https://njt.jog.gov.hu/jogszabaly/en/2024-69-00-00) plus implementing decree 7/2024 (VI.24.) SZTFH on the auditor register (https://net.jogtar.hu/jogszabaly?docid=a2400007.stf).

**Register of registered (in-scope) entities: CONFIDENTIAL, not a public open list.**
No provision was found that mandates publishing the full organisational register. The data collected at registration includes company registration number, registered office, founding date, size classification and revenue data — but SZTFH's public-facing pages only publish guidance/FAQ material, not the underlying register itself.
Source (direct finding, Hungarian-language analysis of the statute and SZTFH materials): https://sztfh.hu/tevekenysegek/kiberbiztonsagi-tanusitasok/kiberbiztonsagi-felugyelet/ ; https://sztfh.hu/tevekenysegek/kiberbiztonsagi-tanusitasok/gyakran-ismetelt-kerdesek/ ; https://sztfh.hu/downloads/kiberbiztonsag/tudastar/sztfh_felugyeleti_tevekenyseg.pdf ; https://net.jogtar.hu/jogszabaly?docid=a2300023.stf

**Register of approved cybersecurity AUDITORS: PUBLIC and viewable (not confirmed bulk-downloadable).**
URL: https://sztfh.hu/nyilvantartasok/auditorok/
Fields exposed: auditor organisation name, contact email, phone number, and (per a related PDF) the security classifications each auditor is authorised to assess.
Named organisations appearing in the register per available material: Alverad Technology Focus, Andrews IT Engineering, Certop, Ernst & Young, HUNGUARD, KÜRT, Mikroháló, NETI, VALILAB, VERITAN — verify against the live page for the current list.
Source: https://sztfh.hu/nyilvantartasok/auditorok/ ; https://sztfh.hu/downloads/kiberbiztonsag/tudastar/sztfh_kiberbiztonsagi_audittal_kapcsolatos_tajekoztatas.pdf

**Conclusion for prospecting:** SZTFH cannot be used to pull a list of in-scope entity names. It CAN be used to identify the ~10 licensed cybersecurity audit firms (a useful partner/referral list, not a target list), and the registration *duty* itself (see §5) is useful for messaging/positioning even though the register contents are not visible.

---

## 2. National Business Register

### 2a. e-Cégjegyzék (company register) — https://www.e-cegjegyzek.hu/
Operated under the Ministry of Justice / Céginformációs Szolgálat framework.
- **Free basic search:** by company name (min. 4 characters), full registration number, or first 8 digits of tax number. Extended form adds address fields (postcode, city, street, house number).
- **Fields exposed for free:** company name, registered office (székhely), business premises (telephely), branches (fióktelep), activity/TEÁOR codes, issued share capital, tax number (adószám), company registration number (cégjegyzékszám), bankruptcy/liquidation/final-settlement status, directors/managing directors/authorised representatives and their representation method, supervisory board members where applicable, and generally shareholders/members.
- **NOT exposed:** beneficial owners (UBO) — no public general UBO search exists; turnover and employee headcount are NOT in the company-register record itself (see e-Beszámoló below).
- **TEÁOR/NACE searchable?** Activity codes are shown per company record, but the standard public interface is built for single-company lookup (name/reg.no/tax no.), not for "list all companies with TEÁOR code X" batch filtering.
- **Bulk/API:** No open, unrestricted bulk-download or public API confirmed. The Céginformációs Szolgálat can supply grouped/batch company data, but this requires a separate contractual request — pricing not published, expect data-transfer/per-document charges.
- **Paid tier (OCCSZ — legally authentic extracts):** non-authentic company copy HUF 510; certified company certificate HUF 1,380; certified extract HUF 2,040; certified full copy HUF 3,420.
Sources: https://www.e-cegjegyzek.hu/html/ceginformacio.htm?v=033 ; https://kyckr.com/guides-and-reports/hungary-company-register-search ; https://companydata.com/company-register/hungary/ ; https://occsz.e-cegjegyzek.hu/Utmutatok/ASZF_IM_egyedi.pdf ; https://ceginformaciosszolgalat.kormany.hu/ceginformacio ; https://e-justice.europa.eu/pdf-export/2424_en ; https://www.topograph.co/guides/business-registers-in-hungary ; https://lemreveal.com/how-to/find-directors/hungary

### 2b. e-Beszámoló (filed annual accounts portal)
- Free search by company name/registration number/tax number; filed annual reports can be viewed/downloaded.
- **Turnover and employee count:** usually present INSIDE the filed annual report (PDF or structured file), not as a standalone searchable register field — so this is a per-company manual pull, not a batch export.
- Filing deadline: electronically within 5 months of financial year-end.
Sources: https://monetaiq.com/how-to-access-hungarian-company-financial-data-from-e-beszamolo/ ; https://www.topograph.co/guides/business-registers-in-hungary

### 2c. KSH (Hungarian Central Statistical Office)
- URL: https://www.ksh.hu/ ; API docs: https://data.ksh.hu/en/documentation ; OpenAPI spec: https://data.ksh.hu/openapi.yaml
- Publishes **aggregated** enterprise counts by TEÁOR code (current TEÁOR'25 and historical TEÁOR'08), not row-level company records.
- API is machine-readable, **no authentication required**, free.
- Not usable to pull individual company names/addresses — aggregate statistics only. For row-level data, go back to e-Cégjegyzék or a commercial provider.
- Custom tabulations/data requests may incur a fee depending on complexity (https://www.ksh.hu/data-request).
Sources: https://www.ksh.hu/business-units-and-non-profit-organisations ; https://data.ksh.hu/en/documentation ; https://www.ksh.hu/data-request

---

## 3. Sectoral Regulator Registers (per sector)

### Annex I.1 — Energy (electricity, district heating/cooling, oil, gas, hydrogen)
**Regulator:** MEKH (Magyar Energetikai és Közmű-szabályozási Hivatal)
**Register:** https://www.mekh.hu/engedelyesek (Engedélyesek / Licensees)
**Open data mirror:** National Open Data Portal, MEKH datasets filtered to XLS/XLSX — https://kozadatportal.hu/en/dataset/?groups=ener&organization=mekh&res_format=XLS&res_format=XLSX
**Public:** Yes. **Bulk download:** Yes — XLS/XLSX files via the open-data portal and MEKH's own download repository (https://www.mekh.hu/download), organised by sub-sector (electricity, natural gas, district heating; hydrogen and oil authorisations may sit under separate pages — not separately confirmed in this pull, flag for manual check).
Sources: https://www.mekh.hu/engedelyesek ; https://kozadatportal.hu/en/dataset/?groups=ener&organization=mekh&res_format=XLS&res_format=XLSX ; https://net.jogtar.hu/jogszabaly?docid=a2300001.mek

### Annex I.2 — Transport (air, rail, water, road)
**Regulator:** Közlekedési Hatóság (Transport Authority), document repository at kozlekedesihatosag.kormany.hu
**Public:** Yes, but **fragmented by mode, published as static PDFs, not a consolidated database or API**.
- Road passenger transport: ERRU register PDF — fields: undertaking name, registered address, transport manager, EU Community licence number, certified-copy count. https://kozlekedesihatosag.kormany.hu/documents/66250/66746/ERRU+nyilv%C3%A1ntart%C3%A1s+-+szem%C3%A9lysz%C3%A1ll%C3%ADt%C3%A1s.pdf
- Rail: "Valid licenses issued for railway undertakings" PDF — fields: licensee, service type, licence number. https://kozlekedesihatosag.kormany.hu/documents/66230/70166/Vas%C3%BAti+t%C3%A1rsas%C3%A1gok+sz%C3%A1m%C3%A1ra+kiadott+%C3%A9rv%C3%A9nyes+m%C5%B1k%C3%B6d%C3%A9si+enged%C3%A9lyek.pdf
- Air: handled by the Transport Authority's Air Navigation and Airport Authority Department — no consolidated public operator list identified in this pull (flag: needs direct verification on kozlekedesihatosag.kormany.hu aviation pages).
- Water/inland waterway: covered under the same Transport Authority framework; no single consolidated public register identified — flag for manual check.
- **Bulk download:** No — PDF lists only, not structured/CSV, no API.
Sources: https://kozlekedesihatosag.kormany.hu/documents/66250/66746/... ; https://kozlekedesihatosag.kormany.hu/documents/66230/70166/... ; https://2020-2025.kormany.hu/itm/kozerdeku-adatok

### Annex I.5 — Health
**Regulator/register:** ANTSZ "Egészségügyi szolgáltatók keresője" (EUSZOLG — health-care provider search)
**Public:** Yes, searchable.
**Fields:** provider name, location, service type, 6-digit institutional (OTH) code, 9-digit organisational-unit code; selecting a provider reveals its care locations/org units.
**Bulk download:** No public current bulk file identified — historical full database access was only via the former OTH IT department, not an open download.
Note: OKFŐ's separate public search (https://kereso.okfo.gov.hu/) is for **individual registered health professionals** (physicians, dentists, pharmacists, nurses) — not institutions/hospitals. Do not conflate the two.
Sources: https://e-egeszsegugy.gov.hu/documents/26398/1339647/... (EUSZOLG field description) ; https://kereso.okfo.gov.hu/ ; https://www.antsz.hu/data/cms28920/10_Nyilvantartasok_m1_20100513.pdf

### Annex I.6 — Drinking water & Annex I.7 — Waste water
**Regulator:** MEKH (same authority as energy, under Act CCIX of 2011 on water-utility services)
**Register:** https://www.mekh.hu/vizikozmu-szolgaltatok (page located via sonar; verify it resolves — MEKH has reorganised URLs before, so treat as best-current-guess rather than fully confirmed)
**Public:** Register of licensed water-utility providers (víziközmű-szolgáltatók) exists and is described as public; approx. 40-41 licensed providers nationally after sector consolidation.
**Bulk download:** Not confirmed — may be PDF-based like other MEKH lists rather than a structured export. Flag for manual verification.
Sources: https://leap.unep.org/en/countries/hu/national-legislation/act-no-ccix-2011-water-public-utility-service ; https://www.parlament.hu/irom41/17188/adatok/fejezetek/01_mekh.pdf ; https://www.mekh.hu/vizikozmu-szolgaltatok ; https://ceer.eu/wp-content/uploads/2024/04/C13_NR_Hungary-EN.pdf

### Annex I.8 — Digital infrastructure
This sector splits across several sub-registers — treat separately:

- **Electronic communications networks/services:** NMHH Services Registry — https://english.nmhh.hu/infocoms/services-registry (Hungarian: https://nmhh.hu/hirkozles/nyilvantartasok). **Public: Yes.** Fields: provider name, registered office/branch address, legal/ID data (company form, registration number), service type and description, EU Member States affected, planned/actual launch date, provider website. Filterable by service type, provider, interface type, service area, access mode. **Bulk download:** not explicitly confirmed as a file export — appears to be a searchable online registry (agapub.nmhh.hu backend) rather than a downloadable dataset; flag for manual check of export function.
  Sources: https://english.nmhh.hu/infocoms/services-registry ; https://english.nmhh.hu/article/417/Procedural_information_material_on_the_notification_of_electronic_communications_providers_andor_services

- **Trust services (eIDAS):** NMHH Hungarian Trusted List — https://nmhh.hu/tl/pub/HU_TL.pdf (also https://nmhh.hu/bizalmi-szolgaltatasok and https://esign.nmhh.hu/). **Public: Yes.** Lists qualified/non-qualified trust-service providers and the specific services (e-signature, e-seal, timestamp, certificates, archival) each is authorised for.
  Sources: https://nmhh.hu/tl/pub/HU_TL.pdf ; https://english.nmhh.hu/trust-services

- **.hu TLD / DNS registry:** operated via domain.hu; IANA lists the Council of Hungarian Internet Providers (CHIP) as delegated manager, WHOIS server whois.nic.hu. **Public:** per-domain WHOIS lookup only — not a bulk registrant list.
  Source: https://www.iana.org/domains/root/db/hu.html

- **IXP:** BIX.hu (Budapest Internet Exchange) — public member list at https://www.bix.hu/en/members (Hungarian: https://www.bix.hu/tagok). **Public: Yes.** Fields: member/participant name, contact details, peering category, AS number. Independently, Hurricane Electric's BGP toolkit mirrors ~124 BIX Budapest members with ASN/IPv4/IPv6 peering data (https://bgp.he.net/exchange/BIX%20Budapest) — useful cross-check but third-party, not official.
  Sources: https://www.bix.hu/en/members ; https://bgp.he.net/exchange/BIX%20Budapest

- **Cloud, data centre, CDN:** No dedicated Hungarian public sectoral register identified — **none found**. These providers are only identifiable via NACE/TEÁOR codes in e-Cégjegyzék (likely J63.11 data processing/hosting) plus the (confidential) SZTFH NIS2 registration.

- **Space (Annex I.11, adjacent):** Hungarian Space Office (HSO) does not maintain a current public licensing register. Its "Hungarian Space Directory" is a historical (2016) catalogue of ~50 companies/universities/institutes, not a licence register. Satellite telecom/orbital matters route through NMHH's general spectrum and space-telecommunications pages (https://english.nmhh.hu/space-telecommunications), but no consolidated operator list was found. **Effectively: none found** for a current public operator register.
  Sources: https://sci.esa.int/web/prodex/-/33672-hungarian-space-office ; https://eo4society.esa.int/wp-content/uploads/2021/04/2017Land_D1A3-P_Zboray_Hungary.pdf ; https://english.nmhh.hu/space-telecommunications

### Annex I.9 — ICT service management (B2B) — managed service/security providers
**None found.** No dedicated licensing register exists for MSPs/MSSPs in Hungary. These entities must be identified via e-Cégjegyzék NACE/TEÁOR codes (likely J62.0x) and are otherwise only visible through the (confidential) SZTFH NIS2 registration.

### Annex I.10 — Public administration
**None found / not applicable.** Public-administration bodies in scope are determined by law/administrative designation, not by a licence register. No separate sectoral register exists to enumerate them beyond the general government-body directory (kormany.hu structure) — not itself a NIS2-scope filter.

---

### Annex II.1 — Postal and courier
**Regulator/register:** NMHH postal register — https://nmhh.hu/posta/nyilvantartas (older mirror: https://nmhh.hu/csomageslevel/szolgaltatok-listaja)
**Public: Yes. Bulk download: Yes — Excel export is available.**
Fields: provider/company details, universal/non-universal/courier/express service classification, geographic coverage, applicable terms and conditions.
Sources: https://nmhh.hu/posta/nyilvantartas ; https://english.nmhh.hu/postal/activity

### Annex II.2 — Waste management
**Regulator:** county-level Government Offices (Kormányhivatalok), "Hulladékgazdálkodási hatósági nyilvántartások"
**Example portal:** https://kormanyhivatalok.hu/kormanyhivatalok/heves/megye/hulladekgazdalkodas (replicated per county — no single national consolidated URL identified)
**Registers available:** registered waste transporters (bejelentésköteles hulladékszállítók), registered waste brokers/dealers, waste-collection-point lists, plus a permit lookup tool ("hulladékgazdálkodási engedélyek lekérdezés").
**Public: Yes, per county. Bulk download:** not as a single national file — data is decentralised across county government-office sites; fields where available include operator name, KÜJ/KTJ identifiers, activity type (e.g. collection), and permit/registration details.
Sources: https://kormanyhivatalok.hu/kormanyhivatalok/heves/megye/hulladekgazdalkodas ; https://kormanyhivatalok.hu/medianezet/13383

### Annex II.3 — Chemicals
**None found at a Hungarian public-register level beyond EU ECHA.** REACH substance registrations are visible via ECHA CHEM (EU-wide, not Hungary-specific): https://echa.europa.eu/information-on-chemicals. Hungarian chemical-safety/biocide notifications are handled through the OSZIR-KBIR system under NNK (National Public Health Center structure), which is **not publicly searchable** — authorised-user access only.
Sources: https://nnk.gov.hu/index.php/kemiai-biztonsag/reach.html ; https://echa.europa.eu/information-on-chemicals ; https://nnk.gov.hu/attachments/article/1743/Guide%20to%20the%20registration%20and%20login%20procedure%20in%20OSZIR-KBIR%20as%20a%20non-Hungarian%20applicant.pdf

### Annex II.4 — Food (wholesale and industrial only)
**Regulator:** NÉBIH (Nemzeti Élelmiszerlánc-biztonsági Hivatal)
**Register:** "Élelmiszer üzemlisták" (approved food establishment lists) — https://portal.nebih.gov.hu/-/elelmiszer-uzemlistak
**Broader register (FELÍR):** https://portal.nebih.gov.hu/adatbazisok-elelmiszer (covers registered/notified food-chain operators, which may include wholesalers that are only "notified" rather than "approved")
**English portal:** https://portal.nebih.gov.hu/web/english/food3
**Public: Yes.** Note: the approved-establishment list is not a complete directory of every food wholesaler — pure wholesalers that are only registered/notified (not subject to EU approval) should be cross-checked in FELÍR rather than assumed covered by the approved-establishment list.
Sources: https://portal.nebih.gov.hu/-/elelmiszer-uzemlistak ; https://portal.nebih.gov.hu/adatbazisok-elelmiszer

### Annex II.5 — Manufacturing (medical devices; NACE C26, C27, C28, C29, C30)
**Medical devices:** OGYÉI NOR (National Medical Device Register) — https://nor.ogyei.gov.hu/ — **public, searchable.** OGYÉI's licensed-pharma-manufacturer list (Eudra GMP) is at https://ogyei.gov.hu/lists. Note manufacturers/economic operators are also registered at EU level via EUDAMED; NOR is the Hungarian national complement (custom-made manufacturers, certain distributors/importers).
**General manufacturing NACE C26-C30:** **None found.** No single Hungarian regulator issues a sector-wide "manufacturing operator licence" for these NACE codes; these entities are identifiable only via e-Cégjegyzék NACE/TEÁOR codes and tax authority (NAV) records, with specific facilities possibly subject to separate environmental/workplace-safety/product-certification permits that are not consolidated into one public register.
Sources: https://ogyei.gov.hu/medical_devices ; https://nor.ogyei.gov.hu/ ; https://ogyei.gov.hu/lists ; https://nav.gov.hu/en

### Annex II.6 — Digital providers (online marketplace, search engine, social network)
**None found as a separate Hungarian sectoral register.** These providers are NIS2-regulated via the SZTFH registration regime (same confidential register as §1), often under the EU "main establishment" rule (supervised by the Member State where the main EU establishment sits, not necessarily Hungary). NMHH is NOT the register authority for this Annex II category despite being the general telecoms/media regulator.
Sources: https://nis-solutions.eu/countries/hungary/ ; https://www.pwc.com/hu/en/szolgaltatasok/risk-assurance/cybersecurity-services/nis2.html ; https://digital-strategy.ec.europa.eu/en/library/nis2-commission-implementing-regulation-critical-entities-and-networks

### Annex II.7 — Research
**None found.** No dedicated public register of "research organisations" in the NIS2 sense was identified for Hungary.

---

## 4. Field Availability Matrix

| Field | e-Cégjegyzék | e-Beszámoló | MEKH (energy/water) | NMHH (comms/trust/postal) | SZTFH (entities) | SZTFH (auditors) | ANTSZ (health) | NÉBIH (food) | OGYÉI (med. devices) |
|---|---|---|---|---|---|---|---|---|---|
| Legal name | Yes | Yes | Yes | Yes | No (confidential) | Yes (org name) | Yes | Yes | Yes |
| Company reg. number | Yes | Yes | Partial (varies) | Yes | No | No | No | No | No |
| Tax number | Yes | Yes | No | No | No | No | No | No | No |
| Legal form | Yes (implicit in name/record) | Yes | No | Yes | No | No | No | No | No |
| TEÁOR/NACE / activity code | Yes (per-record) | No | Sector-specific only | Service-type only | No | No | Service-type only | Activity type only | Device category |
| Registered address | Yes | Yes | Not consistently | Yes | No | No | Location/org unit | Yes | Varies |
| Employee count / size band | No (not in register) | Yes (in filed report) | No | No | Collected but not published | No | No | No | No |
| Turnover | No | Yes (in filed report) | No | No | Collected but not published | No | No | No | No |
| Website/domain | No | No | No | Yes | No | No | No | No | No |
| Contact email | No | No | No | No (not in public register fields) | No | Yes | No | No | No |
| Directors/officers | Yes | No | No | No | No | No | No | No | No |

Legend: "Yes" = confirmed exposed in the free/public pull per sourced material above. "No" = confirmed not exposed in that register. Where a cell says "collected but not published," the field is gathered at intake but the register itself is not public (SZTFH entity register).

---

## 5. NIS2 Transposition Status

- **Current operative law:** Act LXIX of 2024 on the Cybersecurity of Hungary, in force since 1 January 2025 (Section 120(1) from 2 January 2025). It repealed Act XXIII of 2023 effective 31 December 2024.
  Source: https://njt.jog.gov.hu/jogszabaly/en/2024-69-00-00 ; https://cms.law/en/hun/legal-updates/hungary-introduces-new-comprehensive-laws-for-nis2-transposition

- **Historical deadlines set under (now-repealed) Act XXIII of 2023:**
  - Registration with SZTFH: existing in-scope entities by **30 June 2024**; later entrants within **30 days** of becoming subject.
  - Security-measures implementation: **18 October 2024**.
  - Cybersecurity-auditor contract: by **18 October 2024**, or within **120 days** of registration (transitional variant).
  - Mandatory independent cybersecurity audit: every **2 years** (Section 23 of Act XXIII); first-audit deadline commonly cited as **31 December 2025**.
  Sources: https://www.deloitte.com/hu/en/services/consulting-risk/services/cyber/it-regulatory-compliance.html ; https://ezine.eversheds-sutherland.com/eu-nis2-directive/hungary ; https://www.pwc.com/hu/en/szolgaltatasok/risk-assurance/cybersecurity-services/nis2.html

- **Current rules under Act LXIX of 2024:**
  - Entities already registered under the predecessor regime generally did NOT have to re-register, but had to submit supplementary data on which EU Member States they serve by **15 February 2025**.
  - A historical transitional registration deadline of **31 January 2025** applied to certain already-operating entities under the new Act's transition.
  - Ongoing/standing rule: newly in-scope entities must register with SZTFH within **30 days** of starting the relevant activity or otherwise becoming subject to the Act.
  - The registration, cybersecurity-management, mandatory-audit, supervisory-fee, and enforcement obligations continue under Act LXIX, subject to later amendments.
  Sources: https://www.rsm.hu/blogs/nis2-new-cybersecurity-act-and-important-changes ; https://cms.law/en/hun/legal-updates/hungary-introduces-new-comprehensive-laws-for-nis2-transposition ; https://njt.jog.gov.hu/jogszabaly/en/2024-69-00-00

- **Article 20(2) management-body training duty — enforceability:**
  Sources disagree on how cleanly this is separately fineable:
  - The training duty itself (management must be able to identify risks and assess cybersecurity practices) is stated in guidance as a governance requirement tied to the broader risk-management obligations, not clearly presented as an independently, stand-alone fineable line item distinct from a general risk-management failure.
  - However, a **personal fine on the responsible head/manager of up to HUF 15 million** exists for infringements under Hungary's NIS2 enforcement framework, and imposing a further fine is reported as **mandatory for a recurring infringement**; once final, payment is due within 8 days, with a further fine possible after 2 months if the infringement continues/recurs.
  - Entity-level maximum fines reach **EUR 10 million or 2% of worldwide turnover** (essential entities) and **EUR 7 million or 1.4%** (important entities), whichever is higher.
  - **Conclusion: a regulator would most plausibly need to connect an absent/incomplete training record to a broader failure of cybersecurity risk-management oversight to trigger enforcement — the sources do not identify training-non-attendance alone, in isolation, as a codified standalone offence with its own fine tariff.** This should be treated as an inference from the available guidance, not a directly quoted statutory mechanism — flagged as such.
  Sources: https://www.nis2-info.eu/regulation/nis2/article/20/governance ; https://legal.pwc.de/content/services/NIS-2/nis-2-hungary.pdf ; https://www.pwc.com/hu/en/szolgaltatasok/risk-assurance/cybersecurity-services/nis2.html ; https://www.glocertinternational.com/resources/guides/nis2-governance-and-management-accountability/ ; https://www.schoenherr.eu/content/the-digital-defence-line-hungary-adopts-comprehensive-cybersecurity-law

---

## 6. Practical Summary for Outbound List-Building

1. **No single Hungarian public register lists NIS2-scoped entities by name.** The SZTFH entity register — the one register that would most directly answer "who is in scope" — is confidential.
2. **The highest-yield legitimate public pulls, by field richness and bulk-ability, are:**
   - MEKH energy licensees (public, XLS/XLSX, open-data portal) — sector 1.
   - NMHH postal register (public, Excel export) — Annex II.1.
   - NMHH electronic-communications services registry (public, filterable online) — sector 8.
   - NÉBIH food establishment lists (public, web lists) — Annex II.4.
   - OGYÉI NOR medical device register (public, searchable) — Annex II.5.
   - SZTFH auditor register (public) — not a target list, but a referral-partner list.
3. **For every other sector, the practical path is: business-register NACE/TEÁOR pull from e-Cégjegyzék (name, address, reg. number, tax number, activity code, directors) cross-referenced against the sectoral licence lists above where they exist**, since turnover/employee-count require a second, per-company pull from e-Beszámoló, and no field in any register directly flags "this company is NIS2 in-scope."
4. **Items flagged as unverified / needing a manual follow-up click-through before relying on them operationally:**
   - MEKH water-utility register exact URL (https://www.mekh.hu/vizikozmu-szolgaltatok) — resolve and confirm live.
   - Air and water-transport consolidated registers under Közlekedési Hatóság — not confirmed to exist as single lists.
   - NMHH services-registry export/bulk function — confirmed searchable online, not confirmed as a file export.
   - Whether e-Cégjegyzék or Céginformációs Szolgálat batch/bulk access has a published fee schedule — not found; treat as "contact for quote."
5. **No field across any public Hungarian register includes employee count, turnover, or contact email together with company identity in one record** — these consistently require secondary lookups (e-Beszámoló for financials; none of the registers reviewed expose a general contact email for the entity itself, only SZTFH's auditor list exposes contact email, and that is for auditors, not targets).
